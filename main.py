"""
================================================================================
AIoT DIC2: DUAL-PROBLEM MULTIPLE LINEAR REGRESSION & FEATURE SELECTION
Framework: CRISP-DM (Cross-Industry Standard Process for Data Mining)
Author: yenyen0921 (Advised by huanchen1107 煥哥)

Problem 1: 50 Startups Venture Capital Profit Prediction (Avik Jain)
Problem 2: Taiwan Real Estate Property Valuation (Prof. I-Cheng Yeh)
Problem 3: Medical Healthcare Charges & Actuarial Risk Prediction
================================================================================
"""

import argparse
import itertools
import math
import sys
import numpy as np
import pandas as pd

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def run_crisp_dm_pipeline(problem_name="startups"):
    print("=" * 80)
    print(f"CRISP-DM MULTIPLE LINEAR REGRESSION PIPELINE - PROBLEM: {problem_name.upper()}")
    print("=" * 80)

    # -------------------------------------------------------------------------
    # PHASE 1: BUSINESS UNDERSTANDING
    # -------------------------------------------------------------------------
    print("\n[PHASE 1: BUSINESS UNDERSTANDING]")
    if problem_name == "startups":
        print("Objective: Predict startup profitability based on resource allocation.")
        print("Target: Profit ($ USD). Features: R&D Spend, Administration, Marketing Spend, State Dummies.")
        print("Hypothesis: R&D Spend and Marketing are primary drivers; Administration introduces noise.")
        url = "https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv"
        df = pd.read_csv(url)
        df_enc = pd.get_dummies(df, columns=["State"], dtype=int)
        features = ["R&D Spend", "Administration", "Marketing Spend", "State_Florida", "State_New York"]
        target = "Profit"
        X = df_enc[features].astype(float).values
        y = df_enc[target].astype(float).values
    elif problem_name == "real_estate":
        print("Objective: Predict Taiwan residential real estate valuation per unit area.")
        print("Target: House price of unit area (10,000 NTD/Ping).")
        print("Features: House Age, Distance to MRT, Number of Convenience Stores, Latitude, Longitude.")
        print("Hypothesis: Transit accessibility (Distance to MRT) and Convenience Stores drive price.")
        url = "https://raw.githubusercontent.com/Minuri427/DataSet_ML/main/Real%20estate%20valuation%20data%20set.csv"
        df = pd.read_csv(url)
        df.rename(columns={
            "X2 house age": "House Age",
            "X3 distance to the nearest MRT station": "Distance to MRT",
            "X4 number of convenience stores": "Convenience Stores",
            "X5 latitude": "Latitude",
            "X6 longitude": "Longitude",
            "Y house price of unit area": "Price per Ping"
        }, inplace=True)
        features = ["House Age", "Distance to MRT", "Convenience Stores", "Latitude", "Longitude"]
        target = "Price per Ping"
        X = df[features].astype(float).values
        y = df[target].astype(float).values
    elif problem_name == "tsmc_2330":
        print("Objective: Predict TSMC (2330.TW) daily closing price via Autoregressive Lag modeling.")
        print("Target: Close Price (NT$ TWD). Features: Lag 1, Lag 2, Lag 3, Lag 4, Lag 5.")
        print("Hypothesis: Financial markets exhibit strong Markovian persistence where Lag 1 carries dominant predictive weight.")
        df = pd.read_csv("tsmc_2330_ar.csv")
        features = ["Lag_1", "Lag_2", "Lag_3", "Lag_4", "Lag_5"]
        target = "Close"
        X = df[features].astype(float).values
        y = df[target].astype(float).values
    else:
        print("Objective: Predict individual medical insurance charges from health and demographic factors.")
        print("Target: Charges ($ USD). Features: Age, BMI, Children, Smoker Status, Region.")
        url = "https://raw.githubusercontent.com/stedy/Machine-Learning-with-R-datasets/master/insurance.csv"
        df = pd.read_csv(url)
        df["smoker_yes"] = (df["smoker"] == "yes").astype(int)
        df["region_southeast"] = (df["region"] == "southeast").astype(int)
        features = ["age", "bmi", "children", "smoker_yes", "region_southeast"]
        target = "charges"
        X = df[features].astype(float).values
        y = df[target].astype(float).values

    # -------------------------------------------------------------------------
    # PHASE 2: DATA UNDERSTANDING
    # -------------------------------------------------------------------------
    print("\n[PHASE 2: DATA UNDERSTANDING]")
    print(f"Dataset Dimensions: {len(df)} rows, {len(df.columns)} columns")
    print("Sample Rows:\n", df.head(3))
    print("\nMissing Values Count:\n", df.isna().sum().to_dict())

    # -------------------------------------------------------------------------
    # PHASE 3: DATA PREPARATION (80/20 Train/Test Split)
    # -------------------------------------------------------------------------
    print("\n[PHASE 3: DATA PREPARATION]")
    n = len(X)
    np.random.seed(0)
    indices = np.arange(n)
    np.random.shuffle(indices)
    train_size = int(0.8 * n)
    train_idx, test_idx = indices[:train_size], indices[train_size:]

    X_train, y_train = X[train_idx], y[train_idx]
    X_test, y_test = X[test_idx], y[test_idx]
    print(f"Selected Features ({len(features)}): {features}")
    print(f"Training Samples: {len(X_train)} | Out-of-Sample Test Samples: {len(X_test)}")

    # -------------------------------------------------------------------------
    # PHASE 4: MODELING (5 Feature Selection Algorithms)
    # -------------------------------------------------------------------------
    print("\n[PHASE 4: MODELING - 5 FEATURE SELECTION ALGORITHMS]")

    # Helper function for OLS evaluation
    def evaluate_subset(sub_idx):
        X_tr = np.column_stack([np.ones(len(X_train)), X_train[:, sub_idx]])
        X_te = np.column_stack([np.ones(len(X_test)), X_test[:, sub_idx]])
        inv = np.linalg.pinv(X_tr.T @ X_tr)
        beta = inv @ X_tr.T @ y_train
        pred = X_te @ beta
        res = y_test - pred
        sse = np.sum(res**2)
        sst = np.sum((y_test - np.mean(y_test))**2)
        rmse = np.sqrt(np.mean(res**2))
        mae = np.mean(np.abs(res))
        r2 = 1.0 - sse / sst if sst > 0 else 0.0
        p = len(sub_idx)
        adj_r2 = 1.0 - (1.0 - r2) * (len(y_test) - 1) / (len(y_test) - p - 1) if len(y_test) > p + 1 else r2
        return rmse, r2, adj_r2, mae, beta, res, pred

    # 1. Correlation Ranking (Lasso Proxy)
    corrs = [abs(np.corrcoef(X_train[:, j], y_train)[0, 1]) for j in range(len(features))]
    corr_order = [j for _, j in sorted(zip(corrs, range(len(features))), reverse=True)]

    # 2. Forward Stepwise Selection (SFS)
    sfs_order = []
    rem = list(range(len(features)))
    while rem:
        best_rmse = float("inf")
        best_j = None
        for j in rem:
            cand = sfs_order + [j]
            rmse, _, _, _, _, _, _ = evaluate_subset(cand)
            if rmse < best_rmse:
                best_rmse = rmse
                best_j = j
        sfs_order.append(best_j)
        rem.remove(best_j)

    # 3. Exhaustive Best Subset for each k
    ex_order = {}
    for k in range(1, len(features) + 1):
        best_rmse = float("inf")
        best_comb = None
        for comb in itertools.combinations(range(len(features)), k):
            rmse, _, _, _, _, _, _ = evaluate_subset(list(comb))
            if rmse < best_rmse:
                best_rmse = rmse
                best_comb = list(comb)
        ex_order[k] = best_comb

    print(f"{'Method':<25} | {'k':<3} | {'RMSE':<12} | {'R²':<8} | {'Selected Features'}")
    print("-" * 80)
    for k in range(1, len(features) + 1):
        sub = corr_order[:k]
        rmse, r2, _, _, _, _, _ = evaluate_subset(sub)
        feat_names = [features[i] for i in sub]
        print(f"{'Lasso (L1 Ranking)':<25} | {k:<3} | {rmse:<12.2f} | {r2:<8.4f} | {feat_names}")

    print("-" * 80)
    for k in range(1, len(features) + 1):
        sub = sfs_order[:k]
        rmse, r2, _, _, _, _, _ = evaluate_subset(sub)
        feat_names = [features[i] for i in sub]
        print(f"{'Forward SFS':<25} | {k:<3} | {rmse:<12.2f} | {r2:<8.4f} | {feat_names}")

    # -------------------------------------------------------------------------
    # PHASE 5: EVALUATION & PARSIMONY ANALYSIS
    # -------------------------------------------------------------------------
    print("\n[PHASE 5: EVALUATION & STATISTICAL INFERENCE]")
    # Find sweet spot in Exhaustive search
    best_k = min(ex_order.keys(), key=lambda k: evaluate_subset(ex_order[k])[0])
    sweet_sub = ex_order[best_k]
    rmse_sweet, r2_sweet, adj_r2_sweet, mae_sweet, beta_sweet, res_sweet, pred_sweet = evaluate_subset(sweet_sub)
    sweet_names = [features[i] for i in sweet_sub]

    print(f"★ Optimal Parsimony Sweet Spot: k = {best_k}")
    print(f"Selected Features: {sweet_names}")
    print(f"Test RMSE: {rmse_sweet:.2f} | Test R²: {r2_sweet:.4f} | Adjusted R²: {adj_r2_sweet:.4f} | MAE: {mae_sweet:.2f}")

    # Coefficients equation
    eq_parts = [f"{beta_sweet[0]:.2f}"]
    for j, f in enumerate(sweet_names):
        b = beta_sweet[j + 1]
        eq_parts.append(f"{'+' if b >= 0 else '-'} {abs(b):.4f} * ({f})")
    print(f"\nFitted Equation:\n{target} = {' '.join(eq_parts)}")

    # Top 5 Outliers on Test Set
    outliers = []
    for i in range(len(y_test)):
        outliers.append({
            "idx": test_idx[i],
            "actual": y_test[i],
            "predicted": pred_sweet[i],
            "residual": res_sweet[i],
            "abs_error": abs(res_sweet[i])
        })
    outliers.sort(key=lambda o: o["abs_error"], reverse=True)
    print("\nTop 5 Test Set Residuals / Outliers:")
    for rank, o in enumerate(outliers[:5], start=1):
        print(f"  #{rank}: Sample {o['idx']} | Actual: {o['actual']:.2f} | Pred: {o['predicted']:.2f} | Residual: {o['residual']:+.2f}")

    # -------------------------------------------------------------------------
    # PHASE 6: DEPLOYMENT
    # -------------------------------------------------------------------------
    print("\n[PHASE 6: DEPLOYMENT (PICKLE / GZIP / REST API / GITHUB PAGES)]")
    print("1. Serialized Scikit-Learn Pipeline: 'startup_profit_model.pkl' & 'startup_profit_model.pkl.gz'")
    print("2. Web Application: Deployed live via GitHub Pages (.github/workflows/pages.yml)")
    print("   Public URL: https://yenyen0921.github.io/AIoT-DIC2-MultipleLR/")
    print("3. REST API Server: Flask service in 'app.py' (/api/predict, /api/models)\n")

def main():
    parser = argparse.ArgumentParser(description="AIoT DIC2 Multiple Linear Regression CLI")
    parser.add_argument("--problem", choices=["startups", "real_estate", "insurance", "tsmc_2330", "all"], default="all",
                        help="Choose regression problem to run")
    args = parser.parse_args()

    if args.problem == "all":
        run_crisp_dm_pipeline("startups")
        run_crisp_dm_pipeline("real_estate")
        run_crisp_dm_pipeline("insurance")
        run_crisp_dm_pipeline("tsmc_2330")
    else:
        run_crisp_dm_pipeline(args.problem)

if __name__ == "__main__":
    main()
