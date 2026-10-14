import json
import os
from flask import Flask, jsonify, render_template, request, send_from_directory

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DATA_PATH = os.path.join(BASE_DIR, "model_data.json")

app = Flask(__name__, static_folder=".", template_folder=".")

try:
    with open(MODEL_DATA_PATH, "r", encoding="utf-8") as f:
        PROBLEMS_DATA = json.load(f)
except Exception as e:
    print(f"Warning: Could not load model_data.json: {e}")
    PROBLEMS_DATA = {}

@app.route("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")

@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory(BASE_DIR, filename)

@app.route("/api/problems", methods=["GET"])
def get_problems():
    """Returns list of available problems and metadata."""
    summary = []
    for pid, prob in PROBLEMS_DATA.items():
        summary.append({
            "id": pid,
            "title": prob.get("title"),
            "target": prob.get("target_name"),
            "sweet_spot_k": prob.get("sweet_spot_k")
        })
    return jsonify(summary)

@app.route("/api/models", methods=["GET"])
def get_models():
    """Returns models data for a specific problem (default: startups)."""
    pid = request.args.get("problem", "startups")
    if pid in PROBLEMS_DATA:
        return jsonify(PROBLEMS_DATA[pid]["models"])
    return jsonify({"error": f"Problem '{pid}' not found"}), 404

@app.route("/api/predict", methods=["POST"])
def predict():
    """Live inference prediction endpoint."""
    body = request.get_json(silent=True) or {}
    pid = body.get("problem", "startups")
    algo = body.get("algo", "Lasso")
    k = int(body.get("k", 2))

    if pid not in PROBLEMS_DATA:
        return jsonify({"error": f"Problem '{pid}' not found"}), 404

    models = PROBLEMS_DATA[pid]["models"]
    if algo not in models or k < 1 or k > len(models[algo]):
        return jsonify({"error": "Invalid algorithm or k"}), 400

    model_entry = models[algo][k - 1]
    coefficients = model_entry["coefficients"]

    pred = 0.0
    contributions = {}
    for c in coefficients:
        feat = c["feature"]
        coef = c["coef"]
        if "Intercept" in feat:
            pred += coef
            contributions["Intercept"] = coef
        else:
            val = float(body.get(feat, 0))
            contrib = coef * val
            pred += contrib
            contributions[feat] = contrib

    return jsonify({
        "problem": pid,
        "algo": algo,
        "k": k,
        "predicted_value": pred,
        "contributions": contributions,
        "features": model_entry["features"],
        "rmse": model_entry["rmse"],
        "r2": model_entry["r2"]
    })

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
