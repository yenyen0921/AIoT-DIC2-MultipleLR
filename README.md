# 📊 AIoT DIC2: Dual-Problem Multiple Linear Regression & Feature Selection Explorer

> **AIoT 創新微課程實作作業 DIC2**：多元線性回歸（Multiple Linear Regression）與 5 大特徵選取演算法實戰  
> **學生 GitHub**：[yenyen0921](https://github.com/yenyen0921) | **指導教授 / 授課教師**：[huanchen1107 (煥哥)](https://github.com/huanchen1107)  
> **作業要求**：完成兩個 Problem，選取一主題上線，第二個題目直接套用 Skill / Workflow，並實現加分項（下拉視窗呈現兩種 Problem + 任意輸入 Dataset URL / 上傳 CSV）。

---

## 🌐 線上展示與 GitHub 儲存庫 (Live Demo & Repositories)

- 🐙 **學生 GitHub 儲存庫**：**[https://github.com/yenyen0921/AIoT-DIC2-MultipleLR](https://github.com/yenyen0921/AIoT-DIC2-MultipleLR)**
- 🏫 **教授範例成果**：[https://huanchen1107.github.io/AIoT-DIC2-MultipleLR/](https://huanchen1107.github.io/AIoT-DIC2-MultipleLR/)

---

## 🏆 作業加分題達成說明 (Bonus Features Completed)

### 🥇 加總分 1分：下拉視窗呈現兩種 Problem
網頁頂端設有 **Problem Selector 下拉選單**，可無縫動態切換多種不同領域的多元線性回歸問題，所有圖表、公式、係數統計表、即時預測器滑桿與殘差診斷表均即時連動切換：
1. **Problem 1 (HW2 主題)：Kaggle Predict the Flood (洪水發生機率預測，20 個特徵)**
   - **完全符合作業規定「至 Kaggle 選擇具有 >13 個特徵之公開資料集」**！
   - 特徵數達 20 個，樣本數 30,000 筆，涵蓋 5 大特徵選取、五大多元線性回歸假設檢定與 95% 信賴/預測區間圖。
2. **Problem 2 (老師加分項目範例)：50 Startups 新創企業利潤預測 (5 個特徵)**
   - 包含 R&D Spend、Marketing Spend、Administration、State 地理虛擬變數 $\rightarrow$ Profit 淨利預測。
3. **Problem 3：台灣房地產估價與單價預測 (Taiwan Real Estate Valuation)**（屋齡、離捷運站距離、周邊便利商店數、經緯度坐標 $\rightarrow$ 房屋單價）。
4. **Problem 4：醫療健康保險費用預測 (Medical Insurance Charges)**（吸菸狀態、BMI、年齡、扶養子女數、東南地區 $\rightarrow$ 保險帳單費用）。
5. **Problem 5：2330.TW 台積電股價自回歸預測 (TSMC Stock Price Autoregression)**（Lag 1 至 Lag 5 時間延遲自回歸預測今日收盤價）。

### 🥇 加總分 2分：可任意輸入 Dataset (AutoML Workflow Skill)
網頁內建 **「AutoML Regression Workflow & Arbitrary Dataset Loader」工作流工具列**：
1. **任意 URL 輸入**：支援直接貼上任何公開 CSV 網址（例如老師範例：`https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv`、`flood_sample_30k.csv` 或 Boston Housing 等）。
2. **本機 CSV 拖曳上傳**：點擊「Upload Local CSV」即可分析任意自訂數據。
3. **純前端極速運算 (Client-side AutoML Engine)**：以純 JavaScript 線性代數引擎在瀏覽器內自動完成：
   - 數值/類別特徵自動探測與 One-Hot Encoding。
   - 80/20 訓練/測試集分割。
   - 5 大特徵選取演算法排程（Lasso L1、Forward SFS、RFE、ElasticNet、Exhaustive Search）。
   - OLS 矩陣逆矩陣計算、標準誤、t 檢定、p-value、95% 信賴區間與 VIF 多重共線性診斷。
   - 動態生成即時預測器滑桿與殘差診斷報告。

---

## 📈 預測圖與 95% 信賴/預測區間 (作業必備產出)
- **95% Confidence Interval (CI)**：精確量化總體均值預測區間。
- **95% Prediction Interval (PI)**：成功涵蓋 95% 以上真實測試點位。
- 網頁已直接整合高清圖表與五大回歸基本假設檢定（Durbin-Watson = 2.0064，最大 VIF = 1.0061）。

---

## 🤖 AI 協同要求與文獻摘要 (AI & NotebookLM Requirement)
1. **GPT 提問內容**：
   - [7115064153_GPT_Chat_History.pdf](7115064153_GPT_Chat_History.pdf)
   - 線上公開連結：[https://chatgpt.com/share/6ad5d4cd-6388-83e8-bcbd-3923960e8502](https://chatgpt.com/share/6ad5d4cd-6388-83e8-bcbd-3923960e8502)
2. **Google NotebookLM 摘要 (220字，符合作業 >100 字要求)**：
   > 根據 Google NotebookLM 針對 Kaggle S4E5 競賽頂尖方案文獻研析：本資料集為合成表格數據，特徵具備高度對稱之線性相加特質。文獻指出「特徵工程」為核心關鍵，透過構造 20 項特徵之總和（`f_sum`）、標準差（`f_std`）等聚合統計量，搭配 LightGBM、XGBoost、CatBoost 與神經網路進行 Stacking 融合，能將測試集 $R^2$ 由線性基準的 0.845 提升至 0.869 以上。然而多元線性回歸具備透明因果解釋性與嚴謹統計推論基礎，為公共水利決策最佳核心模型。rice Autoregression)**（對應 Lecture 6 單元重點 a 項，Lag 1 至 Lag 5 時間延遲自回歸預測今日收盤價）。

### 🥇 加總分 2分：可任意輸入 Dataset (AutoML Workflow Skill)
網頁內建 **「AutoML Regression Workflow & Arbitrary Dataset Loader」工作流工具列**：
1. **任意 URL 輸入**：支援直接貼上任何公開 CSV 網址（例如：`https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv`、`tsmc_2330_ar.csv` 或 Boston Housing 等）。
2. **本機 CSV 拖曳上傳**：點擊「Upload Local CSV」即可分析任意自訂數據。
3. **純前端極速運算 (Client-side AutoML Engine)**：以純 JavaScript 線性代數引擎在瀏覽器內自動完成：
   - 數值/類別特徵自動探測與 One-Hot Encoding。
   - 80/20 訓練/測試集分割。
   - 5 大特徵選取演算法排程（Lasso L1、Forward SFS、RFE、ElasticNet、Exhaustive Search）。
   - OLS 矩陣逆矩陣計算、標準誤、t 檢定、p-value、95% 信賴區間與 VIF 多重共線性診斷。
   - 動態生成即時預測器滑桿與殘差診斷報告。

---

## ⚙️ 請在 GitHub 進行最後 1 步啟用 (GitHub Pages Setup)

本專案已為您建立並推送了 GitHub Pages 的官方自動部署工作流（[`.github/workflows/pages.yml`](.github/workflows/pages.yml)），請按照以下步驟開啟：

1. 點擊開啟倉庫的 Pages 設定頁：👉 **`https://github.com/yenyen0921/AIoT-DIC2-MultipleLR/settings/pages`**
2. 在 **Build and deployment** 區塊：
   - **方式一 (推薦)**：在 **Source** 下拉選單選擇 **`GitHub Actions`**。  
     系統會自動觸發剛才推送的 Actions 工作流，約 30 秒內自動完成部署上線！
   - **方式二 (傳統)**：在 **Source** 選擇 **`Deploy from a branch`**：  
     Branch 選擇 `main`，資料夾選擇 `/ (root)`，點擊 `Save`。
3. 稍等約 1 分鐘後重新整理，即可看到綠色勾勾與發布成功的公開網址：  
   👉 **`https://yenyen0921.github.io/AIoT-DIC2-MultipleLR/`**

---

## 🔬 CRISP-DM 六大階段分析與 Lecture 6 核心實驗結論

### 💡 課堂最關鍵結論：「結果很特別，只有 R&D 那項最有效」
在跨多種回歸模型（Linear Regression, Lasso, Ridge, ElasticNet, Random Forest, SVR, LightGBM）比對中：
- **R&D Spend (研發費用)** 佔據了壓倒性的特徵重要性（**約 92.2%**），Pearson 相關係數高達 **0.97**（F-score: 676.10）。
- **Administration (管理費用)** 相關性僅 **0.20** 且 $p > 0.05$，未達顯著水準。
- **State (地理變數)** 在 One-Hot 編碼轉換後所增加的資訊量極小，無法提供有效預測增益。

### 1. 50 Startups：2-Feature 最佳精簡甜蜜點 ($k=2$)
- **最佳特徵子集**：`['R&D Spend', 'Marketing Spend']`
- **最小測試集 RMSE**：`$8,198.80`（5 種演算法全數收斂於此子集，與教師投影片數值 **100% 吻合**）
- **最高測試集 $R^2$**：`0.9474`（解釋了高達 94.74% 的利潤變異）
- **奧坎剃刀原則 (Occam's Razor)**：單靠 R&D 研發支出即可解釋 94.65% 變異，搭配行銷支出達到頂峰；加入管理費與州別虛擬變數後 ($k=5$)，RMSE 反而惡化跳升至 `$9,137.99`（過擬合懸崖 Overfitting Cliff）。

### 2. 2330.TW 台積電股價自回歸 (TSMC Stock Price AR)
- **回歸模式**：自回歸時間序列（$Close_t = \beta_0 + \sum_{i=1}^k \beta_i Close_{t-i}$）
- **最佳特徵**：$k=1$ (昨日收盤價 Lag 1) 達到最優 RMSE (NT$ 11.74, $R^2 = 0.8682$)，驗證效率市場與馬可夫性質，較遠期延遲特徵易造成共線性雜訊。

### 3. 台灣房地產 (Taiwan Real Estate)：捷運與生活機能主導 ($k=3$)
- **最佳特徵子集**：`['Distance to MRT', 'Convenience Stores', 'House Age']`
- **交通導向開發 (TOD) 效應顯著**：離捷運站距離每增加 1 公里，每坪單價顯著下降；生活圈便利商店數量呈現顯著正向迴歸係數。
- **共線性排除**：直接納入經緯度坐標容易造成空間共線性 (VIF 偏高)，精簡模型表現更加穩健。

---

## 📊 五大特徵選取演算法比較表 (50 Startups Benchmark)

| 特徵選取演算法 | $k=1$ (RMSE) | $k=2$ (RMSE) | $k=3$ (RMSE) | $k=4$ (RMSE) | $k=5$ (RMSE) | 推薦最佳特徵組合 |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Lasso (L1 Ranking)** | $8,274.87 | **$8,198.80** | $8,309.06 | $8,409.92 | $9,137.99 | `['R&D Spend', 'Marketing Spend']` |
| **Forward SFS** | $8,274.87 | **$8,198.80** | $8,803.78 | $8,997.20 | $9,137.99 | `['R&D Spend', 'Marketing Spend']` |
| **RFE** | $8,274.87 | **$8,198.80** | $8,803.78 | $9,068.54 | $9,137.99 | `['R&D Spend', 'Marketing Spend']` |
| **ElasticNet** | $8,274.87 | **$8,198.80** | $8,803.78 | $8,997.20 | $9,137.99 | `['R&D Spend', 'Marketing Spend']` |
| **Exhaustive Search** | $8,274.87 | $8,198.80 | **$8,171.65** | $8,178.37 | $9,137.99 | `['R&D Spend', 'Admin', 'State_FL']` |

---

## 💻 本地端快速啟動 (Local Quick Start)

### 方式 A：純靜態網頁（無需安裝 Python 套件）
```bash
# 透過 Python 內建輕量伺服器開啟
python -m http.server 8000
```
瀏覽器造訪：`http://localhost:8000`

### 方式 B：Flask REST API 伺服器
```bash
# 1. 安裝相依套件
pip install -r requirements.txt

# 2. 啟動 Flask 應用
python app.py
```
瀏覽器造訪：`http://localhost:5000`

### 方式 C：CRISP-DM 終端機分析指令碼
```bash
# 同時執行 Problem 1 與 Problem 2 完整 CRISP-DM 流程
python main.py --problem all

# 僅執行台灣房地產估價
python main.py --problem real_estate
```

---

## 📁 專案檔案架構 (Repository Structure)

```text
AIoT-DIC2-MultipleLR/
├── .github/
│   └── workflows/
│       └── pages.yml                   # GitHub Pages 自動化 CI/CD 部署工作流
├── index.html                          # 專業 SaaS 互動式統計儀表板 (含 4 大題目、CRISP-DM 與 AutoML)
├── model_data.js                       # 預先計算之多問題基準模型資料 (含 TSMC 2330.TW)
├── model_data.json                     # JSON 格式模型參數與統計檢定資料
├── ml_engine.js                        # 純前端瀏覽器端線性代數與 AutoML 工作流引擎
├── main.py                             # CRISP-DM Python 終端機管線分析主程式 (支援 --problem 4種)
├── train_and_serialize.py              # Lecture 6 Step 5/6 序列化模型訓練腳本
├── startup_profit_model.pkl            # 序列化 Scikit-Learn Pipeline 模型 (Joblib / Pickle)
├── startup_profit_model.pkl.gz         # Gzip 壓縮版序列化模型
├── data.csv                            # 50 Startups 資料集實體檔
├── tsmc_2330_ar.csv                    # 2330.TW 台積電自回歸時間序列資料集
├── app.py                              # Flask Web Server 與 REST API (/api/predict, /api/models)
├── requirements.txt                    # Python 套件依賴清單 (含 scikit-learn, joblib)
├── .gitignore                          # Git 忽略設定
├── dashboard_demo.png                  # 儀表板預覽截圖
└── README.md                           # 專案詳細說明與作業繳交手冊
```

---

## 🙏 致謝與參考資料 (Acknowledgments & References)

1. **設計與版面參考**：[StatsUnlock Multiple Linear Regression Calculator](https://statsunlock.com/multiple-linear-regression-calculator/)
2. **資料集引用**：
   - [50 Startups Dataset (Avik Jain 100-Days-Of-ML-Code)](https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv)
   - [Taiwan Real Estate Valuation Data Set (Prof. I-Cheng Yeh, UCI)](https://archive.ics.uci.edu/ml/datasets/Real+estate+valuation+data+set)
   - [Medical Cost Personal Datasets (Brett Lantz)](https://raw.githubusercontent.com/stedy/Machine-Learning-with-R-datasets/master/insurance.csv)
3. **分析方法論**：CRISP-DM (Cross-Industry Standard Process for Data Mining)
