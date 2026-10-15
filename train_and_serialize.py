import sys
import os
import pandas as pd
import numpy as np
import pickle
import gzip
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

print("=" * 80)
print("CRISP-DM STEP 4, 5 & 6: MODEL TRAINING, EVALUATION & DEPLOYMENT")
print("=" * 80)

url = 'https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv'
df = pd.read_csv(url)

# Save local data.csv matching teacher's infographic Step 1
df.to_csv('data.csv', index=False)
print("Step 1: Loaded and saved data.csv locally (50 rows, 5 cols)")

X = df[['R&D Spend', 'Administration', 'Marketing Spend', 'State']]
y = df['Profit']

# Train/test split 80/20 matching teacher's infographic
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

num_features = ['R&D Spend', 'Administration', 'Marketing Spend']
cat_features = ['State']

preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), num_features),
        ('cat', OneHotEncoder(drop='first', sparse_output=False), cat_features)
    ]
)

pipeline = Pipeline([
    ('preprocessor', preprocessor),
    ('regressor', LinearRegression())
])

pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)

rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)
print(f"Pipeline Test RMSE: ${rmse:,.2f}")
print(f"Pipeline Test R2 Score: {r2:.4f}")

# Serialize to startup_profit_model.pkl via joblib and pickle
joblib.dump(pipeline, 'startup_profit_model.pkl')
with gzip.open('startup_profit_model.pkl.gz', 'wb') as f:
    pickle.dump(pipeline, f)

print("Step 6: Serialized pipeline to 'startup_profit_model.pkl' & 'startup_profit_model.pkl.gz'!")

# Test loading back
loaded_model = joblib.load('startup_profit_model.pkl')
sample_test = pd.DataFrame([{
    'R&D Spend': 165349.20,
    'Administration': 136897.80,
    'Marketing Spend': 471784.10,
    'State': 'New York'
}])
test_pred = loaded_model.predict(sample_test)[0]
print(f"Inference Test on Sample: Predicted Profit = ${test_pred:,.2f}")
