# 📊 AIoT DIC2: Dual-Problem Multiple Linear Regression & Feature Selection Explorer

> **AIoT 創新微課程實作作業 DIC2**：多元線性回歸（Multiple Linear Regression）與 5 大特徵選取演算法實戰  
> **學生 GitHub**：[yenyen0921](https://github.com/yenyen0921) | **指導教授 / 授課教師**：[huanchen1107 (煥哥)](https://github.com/huanchen1107)  
> **作業要求**：完成兩個 Problem，選取一主題上線，第二個題目直接套用 Skill / Workflow，並實現加分項（下拉視窗呈現兩種 Problem + 任意輸入 Dataset URL / 上傳 CSV）。

---

## 🌐 線上展示與 GitHub 儲存庫 (Live Demo & Repositories)

- 🚀 **學生公開網址 (GitHub Pages)**：**[https://yenyen0921.github.io/AIoT-DIC2-MultipleLR/](https://yenyen0921.github.io/AIoT-DIC2-MultipleLR/)**
- 🐙 **學生 GitHub 儲存庫**：**[https://github.com/yenyen0921/AIoT-DIC2-MultipleLR](https://github.com/yenyen0921/AIoT-DIC2-MultipleLR)**
- 🏫 **教授範例成果**：[https://huanchen1107.github.io/AIoT-DIC2-MultipleLR/](https://huanchen1107.github.io/AIoT-DIC2-MultipleLR/)

---

## 🏆 作業加分題達成說明 (Bonus Features Completed)

### 🥇 加總分 1分：下拉視窗呈現兩種 Problem
網頁頂端設有 **Problem Selector 下拉選單**，可無縫動態切換三種不同領域的多元線性回歸問題，所有圖表、公式、係數統計表、即時預測器滑桿與殘差診斷表均即時連動切換：
1. **Problem 1：50 Startups 新創企業利潤預測**（R&D Spend、Marketing Spend、Administration、State 地理虛擬變數 $\rightarrow$ Profit）。
2. **Problem 2：台灣房地產估價與單價預測 (Taiwan Real Estate Valuation)**（屋齡、離捷運站距離、周邊便利商店數、經緯度坐標 $\rightarrow$ 房屋單價，出自台灣淡江大學葉怡成教授權威資料集）。
3. **Problem 3：醫療健康保險費用預測 (Medical Insurance Charges)**（吸菸狀態、BMI、年齡、扶養子女數、東南地區 $\rightarrow$ 保險帳單費用）。

### 🥇 加總分 2分：可任意輸入 Dataset (AutoML Workflow Skill)
網頁內建 **「AutoML Regression Workflow & Arbitrary Dataset Loader」工作流工具列**：
1. **任意 URL 輸入**：支援直接貼上任何公開 CSV 網址（例如：`https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv` 或 Boston Housing 等）。
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

## 🔬 CRISP-DM 六大階段分析與核心實驗結論

### 1. 50 Startups：2-Feature 最佳精簡甜蜜點 ($k=2$)
- **最佳特徵子集**：`['R&D Spend', 'Marketing Spend']`
- **最小測試集 RMSE**：`$8,198.80`（5 種演算法全數收斂於此子集）
- **最高測試集 $R^2$**：`0.9474`（解釋了高達 94.74% 的利潤變異）
- **奧坎剃刀原則 (Occam's Razor)**：單靠 R&D 研發支出即可解釋 94.65% 變異，搭配行銷支出達到頂峰；加入管理費與州別虛擬變數後 ($k=5$)，RMSE 反而惡化跳升至 `$9,137.99`（過擬合懸崖 Overfitting Cliff）。

### 2. 台灣房地產 (Taiwan Real Estate)：捷運與生活機能主導 ($k=3$)
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
├── index.html                          # 專業 SaaS 互動式統計儀表板 (含下拉切換與 AutoML)
├── model_data.js                       # 預先計算之多問題基準模型資料 (380KB)
├── model_data.json                     # JSON 格式模型參數與檢定資料
├── ml_engine.js                        # 純前端瀏覽器端線性代數與 AutoML 工作流引擎
├── main.py                             # CRISP-DM Python 終端機管線分析主程式
├── generate_data.py                    # 資料集基準模型生成指令碼
├── app.py                              # Flask Web Server 與 REST API
├── requirements.txt                    # Python 套件依賴清單
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
