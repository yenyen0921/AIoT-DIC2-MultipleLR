// Multi-Problem Benchmark Model Data for AIoT DIC2 Multiple Linear Regression Explorer
window.PROBLEMS_DATA = {
  "startups": {
    "id": "startups",
    "title": "50 Startups: Multiple Linear Regression & Feature Selection Explorer",
    "badge": "CRISP-DM",
    "hero_title": "Feature Selection & Parsimony Analysis",
    "hero_desc": "Compare 5 Machine Learning Feature Selection Algorithms (Lasso, Forward SFS, RFE, ElasticNet, Exhaustive Search) against Baseline OLS. Explore the bias-variance tradeoff across feature counts (k=1 to 5), pinpointing the 2-feature optimal sweet spot and the 5-feature overfitting cliff.",
    "target_name": "Profit",
    "target_prefix": "$",
    "target_unit": "USD",
    "sweet_spot_k": 2,
    "sweet_spot_note": "Occam's Razor: 2 features yield the minimum test RMSE ($8,198.80) and peak R\u00b2 (0.9474).",
    "overfitting_k": 5,
    "overfitting_note": "Overfitting Warning: Adding Administration & Location dummies spikes error to $9,137.99!",
    "features_meta": [
      {
        "name": "R&D Spend",
        "min": 0,
        "max": 200000,
        "default": 100000,
        "step": 1000,
        "unit": "$"
      },
      {
        "name": "Marketing Spend",
        "min": 0,
        "max": 400000,
        "default": 150000,
        "step": 1000,
        "unit": "$"
      },
      {
        "name": "Administration",
        "min": 0,
        "max": 200000,
        "default": 120000,
        "step": 1000,
        "unit": "$"
      },
      {
        "name": "State_Florida",
        "min": 0,
        "max": 1,
        "default": 0,
        "step": 1,
        "unit": "Binary"
      },
      {
        "name": "State_New York",
        "min": 0,
        "max": 1,
        "default": 0,
        "step": 1,
        "unit": "Binary"
      }
    ],
    "models": {
      "Lasso": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822598,
          "mae": 6772.453280477901,
          "r2": 0.9464587607787222,
          "adj_r2": 0.9397661058760625,
          "f_stat": 652.3941552354449,
          "f_pvalue": 1.562780498298018e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428005,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.033342046218866224,
              "tstat": 25.542007658667814,
              "pvalue": 1.5627804982980033e-25,
              "ci_lower": 0.7841253560995813,
              "ci_upper": 0.9191202436562933,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756775,
              "residual": 15584.782262432243,
              "abs_error": 15584.782262432243,
              "pct_error": 19.186215207257405
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508355,
              "residual": 11959.80397491646,
              "abs_error": 11959.80397491646,
              "pct_error": 6.26002594127992
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516926,
              "residual": 10914.149804830755,
              "abs_error": 10914.149804830755,
              "pct_error": 7.469206238235087
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.83410578474,
              "residual": 10108.565894215251,
              "abs_error": 10108.565894215251,
              "pct_error": 7.007214707821641
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855635,
              "residual": 5628.285711443648,
              "abs_error": 5628.285711443648,
              "pct_error": 7.234409195412899
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586339,
              "residual": -4816.463865863392,
              "abs_error": 4816.463865863392,
              "pct_error": 4.586745435540665
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.14843539102,
              "residual": -3250.2084353910177,
              "abs_error": 3250.2084353910177,
              "pct_error": 1.955742658216365
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138656,
              "residual": -2997.8727713865665,
              "abs_error": 2997.8727713865665,
              "pct_error": 3.075259840106954
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997862,
              "residual": -1384.8980599786155,
              "abs_error": 1384.8980599786155,
              "pct_error": 1.3408851151364012
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432106,
              "residual": -1079.5020243210602,
              "abs_error": 1079.5020243210602,
              "pct_error": 0.9782329080930022
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.79719078855,
          "mae": 6886.594588246551,
          "r2": 0.947438644726848,
          "adj_r2": 0.9324211146488046,
          "f_stat": 349.0410432956941,
          "f_pvalue": 9.649812292514453e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.33876123651,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245258,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.041834436975,
              "ci_upper": 52366.63568803605,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.04681337574933551,
              "tstat": 16.846003675640826,
              "pvalue": 6.120365803854702e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.098911630903444
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.032576627317020324,
              "stderr": 0.017514140043660795,
              "tstat": 1.8600186612537315,
              "pvalue": 0.07084678339897788,
              "ci_lower": -0.002910391235881493,
              "ci_upper": 0.06806364586992214,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312002,
              "residual": 12893.984246879976,
              "abs_error": 12893.984246879976,
              "pct_error": 15.873610068711832
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650085,
              "residual": 11939.800483499159,
              "abs_error": 11939.800483499159,
              "pct_error": 8.171120412435748
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.25299736077,
              "residual": 10408.13700263924,
              "abs_error": 10408.13700263924,
              "pct_error": 5.44784912642117
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.9238381189,
              "residual": 10385.476161881088,
              "abs_error": 10385.476161881088,
              "pct_error": 7.199167722783464
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894283,
              "residual": -9708.93903894283,
              "abs_error": 9708.93903894283,
              "pct_error": 9.24587686340522
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452132,
              "residual": -4228.671364521317,
              "abs_error": 4228.671364521317,
              "pct_error": 3.831975663859429
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498395,
              "residual": -4155.37979498395,
              "abs_error": 4155.37979498395,
              "pct_error": 2.500409954527356
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630332,
              "residual": 4097.723063696685,
              "abs_error": 4097.723063696685,
              "pct_error": 5.267075435063336
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182876,
              "residual": 997.7339481712406,
              "abs_error": 997.7339481712406,
              "pct_error": 0.9660253260732766
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922274997,
              "residual": 50.10077725003066,
              "abs_error": 50.10077725003066,
              "pct_error": 0.05139407839642978
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "State_New York"
          ],
          "rmse": 8309.059683485373,
          "mae": 7028.435331820682,
          "r2": 0.9460153830070914,
          "adj_r2": 0.9190230745106371,
          "f_stat": 226.87486169664268,
          "f_pvalue": 1.9796143371684127e-23,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46100.29130552136,
              "stderr": 3147.8386571084698,
              "tstat": 14.645061684282128,
              "pvalue": 9.731182635478468e-17,
              "ci_lower": 39716.17860898531,
              "ci_upper": 52484.4040020574,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7858709815060039,
              "stderr": 0.04852130487882812,
              "tstat": 16.196410699764844,
              "pvalue": 4.132453042696588e-18,
              "ci_lower": 0.6874652141615091,
              "ci_upper": 0.8842767488504987,
              "vif": 2.1982396775458333
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03327182941052448,
              "stderr": 0.017929237089580857,
              "tstat": 1.8557303495004591,
              "pvalue": 0.07169341083643929,
              "ci_lower": -0.0030903487730106483,
              "ci_upper": 0.0696340075940596,
              "vif": 2.1443516305471273
            },
            {
              "feature": "State_New York",
              "coef": 864.0018700527289,
              "stderr": 3243.669370520945,
              "tstat": 0.26636557902754654,
              "pvalue": 0.7914774340467426,
              "ci_lower": -5714.464521464833,
              "ci_upper": 7442.46826157029,
              "vif": 1.0475449583683516
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133815.427549375,
              "residual": 12306.522450625023,
              "abs_error": 12306.522450625023,
              "pct_error": 8.42209021343133
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 69026.2497272619,
              "residual": 12202.810272738105,
              "abs_error": 12202.810272738105,
              "pct_error": 15.022715112963397
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180258.24979852544,
              "residual": 10792.140201474569,
              "abs_error": 10792.140201474569,
              "pct_error": 5.648844894519487
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133524.92138466274,
              "residual": 10734.478615337255,
              "abs_error": 10734.478615337255,
              "pct_error": 7.441094733055355
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115382.6350384955,
              "residual": -10374.325038495503,
              "abs_error": 10374.325038495503,
              "pct_error": 9.879527666425163
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73492.76912913764,
              "residual": 4306.060870862362,
              "abs_error": 4306.060870862362,
              "pct_error": 5.534865846777339
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114342.45547447276,
              "residual": -3990.2054744727648,
              "abs_error": 3990.2054744727648,
              "pct_error": 3.6158804867800742
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169961.41927629005,
              "residual": -3773.479276290047,
              "abs_error": 3773.479276290047,
              "pct_error": 2.270609573889686
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 101939.27091344533,
              "residual": 1343.109086554672,
              "abs_error": 1343.109086554672,
              "pct_error": 1.3004242219773325
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97944.78203135652,
              "residual": -461.22203135651944,
              "abs_error": 461.22203135651944,
              "pct_error": 0.4731280139507825
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "State_New York",
            "State_Florida"
          ],
          "rmse": 8409.916714494218,
          "mae": 7109.1619976304455,
          "r2": 0.9446968769427521,
          "adj_r2": 0.9004543784969538,
          "f_stat": 165.64359127218117,
          "f_pvalue": 3.19455930535362e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46329.060178554624,
              "stderr": 3375.8730047980134,
              "tstat": 13.72357908982616,
              "pvalue": 1.1913860971562475e-15,
              "ci_lower": 39475.67362674787,
              "ci_upper": 53182.44673036138,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7851417173101011,
              "stderr": 0.04930495861073655,
              "tstat": 15.924193822142875,
              "pvalue": 1.3176709338117406e-17,
              "ci_lower": 0.6850473299323898,
              "ci_upper": 0.8852361046878123,
              "vif": 2.209480154957114
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03395640234063732,
              "stderr": 0.01846982048278783,
              "tstat": 1.8384803670550864,
              "pvalue": 0.07449011466954827,
              "ci_lower": -0.003539326654830824,
              "ci_upper": 0.07145213133610546,
              "vif": 2.2151163355308667
            },
            {
              "feature": "State_New York",
              "coef": 554.6573328267114,
              "stderr": 3610.267910579482,
              "tstat": 0.15363328887624952,
              "pvalue": 0.8787812965687303,
              "ci_lower": -6774.576175548495,
              "ci_upper": 7883.890841201917,
              "vif": 1.2632147347934317
            },
            {
              "feature": "State_Florida",
              "coef": -826.468158761907,
              "stderr": 3985.4664624970633,
              "tstat": -0.20737049641212882,
              "pvalue": 0.8369223722742638,
              "ci_lower": -8917.395222053043,
              "ci_upper": 7264.458904529229,
              "vif": 1.268751326611038
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133300.28408631711,
              "residual": 12821.665913682897,
              "abs_error": 12821.665913682897,
              "pct_error": 8.774633731402364
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 69057.74881973899,
              "residual": 12171.311180261007,
              "abs_error": 12171.311180261007,
              "pct_error": 14.983937005132164
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179827.9120567306,
              "residual": 11222.47794326942,
              "abs_error": 11222.47794326942,
              "pct_error": 5.874093187283951
            },
            {
              "rank": 4,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115491.2539590504,
              "residual": -10482.943959050404,
              "abs_error": 10482.943959050404,
              "pct_error": 9.982966071018955
            },
            {
              "rank": 5,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133851.24216010986,
              "residual": 10408.157839890133,
              "abs_error": 10408.157839890133,
              "pct_error": 7.214890565114048
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72987.32073139626,
              "residual": 4811.509268603739,
              "abs_error": 4811.509268603739,
              "pct_error": 6.184552220905814
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113898.43876002241,
              "residual": -3546.1887600224145,
              "abs_error": 3546.1887600224145,
              "pct_error": 3.21351740451365
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169510.7551837186,
              "residual": -3322.8151837186015,
              "abs_error": 3322.8151837186015,
              "pct_error": 1.9994321993031514
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 101374.28367855729,
              "residual": 1908.0963214427175,
              "abs_error": 1908.0963214427175,
              "pct_error": 1.8474558016989127
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97880.01360636312,
              "residual": -396.453606363124,
              "abs_error": 396.453606363124,
              "pct_error": 0.40668765724510264
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "State_New York",
            "State_Florida",
            "Administration"
          ],
          "rmse": 9137.99015245345,
          "mae": 7514.293659508691,
          "r2": 0.9347068473331226,
          "adj_r2": 0.8530904064995258,
          "f_stat": 129.704418633733,
          "f_pvalue": 3.907703841869235e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.16761774076,
              "stderr": 8358.538206698837,
              "tstat": 5.091101645457132,
              "pvalue": 1.3086760335156738e-05,
              "ci_lower": 25567.574241254675,
              "ci_upper": 59540.76099422684,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7734671927734057,
              "stderr": 0.05514906906563191,
              "tstat": 14.025027183195357,
              "pvalue": 1.0686978470410699e-15,
              "ci_lower": 0.6613907999707916,
              "ci_upper": 0.8855435855760198,
              "vif": 2.704652545511513
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03661002585396872,
              "stderr": 0.01942746493324499,
              "tstat": 1.8844468889669852,
              "pvalue": 0.06807739024140379,
              "ci_lower": -0.0028713330865809336,
              "ci_upper": 0.07609138479451838,
              "vif": 2.3978922282957296
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525198472,
              "stderr": 3661.56272736266,
              "tstat": 0.19100288718079309,
              "pvalue": 0.8496593413793898,
              "ci_lower": -6741.821695685329,
              "ci_upper": 8140.559800725024,
              "vif": 1.271327610744667
            },
            {
              "feature": "State_Florida",
              "coef": -959.2841600574502,
              "stderr": 4038.1077213797703,
              "tstat": -0.23755784299128974,
              "pvalue": 0.8136497729180503,
              "ci_lower": -9165.706404864972,
              "ci_upper": 7247.138084750071,
              "vif": 1.2743836566980131
            },
            {
              "feature": "Administration",
              "coef": 0.03288459752786155,
              "stderr": 0.06646820999716622,
              "tstat": 0.49474173487240797,
              "pvalue": 0.6239644296785498,
              "ci_lower": -0.10219505728305661,
              "ci_upper": 0.1679642523387797,
              "vif": 1.2341074098600409
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.7384526969,
              "residual": 13674.2115473031,
              "abs_error": 13674.2115473031,
              "pct_error": 9.358081757944717
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.69209520124,
              "residual": 13377.367904798753,
              "abs_error": 13377.367904798753,
              "pct_error": 16.468697169213524
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.4822119068,
              "residual": 12512.907788093202,
              "abs_error": 12512.907788093202,
              "pct_error": 6.549532711287949
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.27760901203,
              "residual": 11677.122390987963,
              "abs_error": 11677.122390987963,
              "pct_error": 8.094531372643976
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.24230002254,
              "residual": -11152.932300022541,
              "abs_error": 11152.932300022541,
              "pct_error": 10.620999709473033
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.09851138233,
              "residual": 5822.7314886176755,
              "abs_error": 5822.7314886176755,
              "pct_error": 7.484343258912346
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43532910736,
              "residual": -3617.185329107364,
              "abs_error": 3617.185329107364,
              "pct_error": 3.2778537176245734
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.06569689498,
              "residual": -1733.1256968949747,
              "abs_error": 1733.1256968949747,
              "pct_error": 1.0428709188494512
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.73374721185,
              "residual": -1308.1737472118548,
              "abs_error": 1308.1737472118548,
              "pct_error": 1.3419429360313213
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.20159795052,
              "residual": 267.1784020494815,
              "abs_error": 267.1784020494815,
              "pct_error": 0.25868730179289195
            }
          ]
        }
      ],
      "Forward SFS": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822598,
          "mae": 6772.453280477901,
          "r2": 0.9464587607787222,
          "adj_r2": 0.9397661058760625,
          "f_stat": 652.3941552354449,
          "f_pvalue": 1.562780498298018e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428005,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.033342046218866224,
              "tstat": 25.542007658667814,
              "pvalue": 1.5627804982980033e-25,
              "ci_lower": 0.7841253560995813,
              "ci_upper": 0.9191202436562933,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756775,
              "residual": 15584.782262432243,
              "abs_error": 15584.782262432243,
              "pct_error": 19.186215207257405
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508355,
              "residual": 11959.80397491646,
              "abs_error": 11959.80397491646,
              "pct_error": 6.26002594127992
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516926,
              "residual": 10914.149804830755,
              "abs_error": 10914.149804830755,
              "pct_error": 7.469206238235087
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.83410578474,
              "residual": 10108.565894215251,
              "abs_error": 10108.565894215251,
              "pct_error": 7.007214707821641
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855635,
              "residual": 5628.285711443648,
              "abs_error": 5628.285711443648,
              "pct_error": 7.234409195412899
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586339,
              "residual": -4816.463865863392,
              "abs_error": 4816.463865863392,
              "pct_error": 4.586745435540665
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.14843539102,
              "residual": -3250.2084353910177,
              "abs_error": 3250.2084353910177,
              "pct_error": 1.955742658216365
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138656,
              "residual": -2997.8727713865665,
              "abs_error": 2997.8727713865665,
              "pct_error": 3.075259840106954
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997862,
              "residual": -1384.8980599786155,
              "abs_error": 1384.8980599786155,
              "pct_error": 1.3408851151364012
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432106,
              "residual": -1079.5020243210602,
              "abs_error": 1079.5020243210602,
              "pct_error": 0.9782329080930022
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.79719078855,
          "mae": 6886.594588246551,
          "r2": 0.947438644726848,
          "adj_r2": 0.9324211146488046,
          "f_stat": 349.0410432956941,
          "f_pvalue": 9.649812292514453e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.33876123651,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245258,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.041834436975,
              "ci_upper": 52366.63568803605,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.04681337574933551,
              "tstat": 16.846003675640826,
              "pvalue": 6.120365803854702e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.098911630903444
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.032576627317020324,
              "stderr": 0.017514140043660795,
              "tstat": 1.8600186612537315,
              "pvalue": 0.07084678339897788,
              "ci_lower": -0.002910391235881493,
              "ci_upper": 0.06806364586992214,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312002,
              "residual": 12893.984246879976,
              "abs_error": 12893.984246879976,
              "pct_error": 15.873610068711832
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650085,
              "residual": 11939.800483499159,
              "abs_error": 11939.800483499159,
              "pct_error": 8.171120412435748
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.25299736077,
              "residual": 10408.13700263924,
              "abs_error": 10408.13700263924,
              "pct_error": 5.44784912642117
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.9238381189,
              "residual": 10385.476161881088,
              "abs_error": 10385.476161881088,
              "pct_error": 7.199167722783464
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894283,
              "residual": -9708.93903894283,
              "abs_error": 9708.93903894283,
              "pct_error": 9.24587686340522
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452132,
              "residual": -4228.671364521317,
              "abs_error": 4228.671364521317,
              "pct_error": 3.831975663859429
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498395,
              "residual": -4155.37979498395,
              "abs_error": 4155.37979498395,
              "pct_error": 2.500409954527356
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630332,
              "residual": 4097.723063696685,
              "abs_error": 4097.723063696685,
              "pct_error": 5.267075435063336
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182876,
              "residual": 997.7339481712406,
              "abs_error": 997.7339481712406,
              "pct_error": 0.9660253260732766
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922274997,
              "residual": 50.10077725003066,
              "abs_error": 50.10077725003066,
              "pct_error": 0.05139407839642978
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend"
          ],
          "rmse": 8803.775790469343,
          "mae": 7320.441614848127,
          "r2": 0.9393955917820571,
          "adj_r2": 0.9090933876730857,
          "f_stat": 227.7949898267996,
          "f_pvalue": 1.8474317896878233e-23,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42989.008165086736,
              "stderr": 7919.772517103607,
              "tstat": 5.4280609793080945,
              "pvalue": 4.041216456576337e-06,
              "ci_lower": 26926.96503401907,
              "ci_upper": 59051.0512961544,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7788410440821669,
              "stderr": 0.05191103443957781,
              "tstat": 15.003381313633888,
              "pvalue": 4.592578715978761e-17,
              "ci_lower": 0.6735605865505696,
              "ci_upper": 0.8841215016137642,
              "vif": 2.5258009462931605
            },
            {
              "feature": "Administration",
              "coef": 0.029391899097552576,
              "stderr": 0.06415469322089738,
              "tstat": 0.4581410590858944,
              "pvalue": 0.6496046941992117,
              "ci_lower": -0.10071984935849057,
              "ci_upper": 0.15950364755359572,
              "vif": 1.2117875999957923
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03471025486942003,
              "stderr": 0.018306482490837005,
              "tstat": 1.8960635876823224,
              "pvalue": 0.06600037194124911,
              "ci_lower": -0.002417012449300149,
              "ci_upper": 0.07183752218814021,
              "vif": 2.244149821335617
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67113.57690570195,
              "residual": 14115.483094298048,
              "abs_error": 14115.483094298048,
              "pct_error": 17.37738082195959
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133567.90370043818,
              "residual": 12554.046299561829,
              "abs_error": 12554.046299561829,
              "pct_error": 8.591485604703351
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132763.0599312563,
              "residual": 11496.34006874368,
              "abs_error": 11496.34006874368,
              "pct_error": 7.969213838920501
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179627.92567223706,
              "residual": 11422.464327762951,
              "abs_error": 11422.464327762951,
              "pct_error": 5.9787704844585505
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115166.64864795278,
              "residual": -10158.338647952784,
              "abs_error": 10158.338647952784,
              "pct_error": 9.673842620600965
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72911.78976735755,
              "residual": 4887.040232642452,
              "abs_error": 4887.040232642452,
              "pct_error": 6.281637182258977
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114756.1155522112,
              "residual": -4403.865552211195,
              "abs_error": 4403.865552211195,
              "pct_error": 3.990734717426418
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169064.01408794578,
              "residual": -2876.0740879457735,
              "abs_error": 2876.0740879457735,
              "pct_error": 1.7306154032270773
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98154.8068677625,
              "residual": -671.2468677625002,
              "abs_error": 671.2468677625002,
              "pct_error": 0.6885744301526331
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103901.89696960006,
              "residual": -619.5169696000521,
              "abs_error": 619.5169696000521,
              "pct_error": 0.5998283246378057
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_New York"
          ],
          "rmse": 8997.19928578228,
          "mae": 7474.740626338264,
          "r2": 0.9367033175986433,
          "adj_r2": 0.886065971677558,
          "f_stat": 166.60800614911014,
          "f_pvalue": 2.9014566723283723e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42410.30908342102,
              "stderr": 8223.431866814515,
              "tstat": 5.157251834792591,
              "pvalue": 9.970354548171363e-06,
              "ci_lower": 25715.854853174358,
              "ci_upper": 59104.76331366769,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7746825805494238,
              "stderr": 0.05416600846008527,
              "tstat": 14.302006047211039,
              "pvalue": 3.4750172972231224e-16,
              "ci_lower": 0.6647197373329295,
              "ci_upper": 0.8846454237659181,
              "vif": 2.6813755945236446
            },
            {
              "feature": "Administration",
              "coef": 0.03183486825211268,
              "stderr": 0.06542107908210051,
              "tstat": 0.4866148449211813,
              "pvalue": 0.6295647022032655,
              "ci_lower": -0.10097698306715225,
              "ci_upper": 0.1646467195713776,
              "vif": 1.2286530866987377
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03573424378559628,
              "stderr": 0.01881559680410231,
              "tstat": 1.8991820539970994,
              "pvalue": 0.06580770448112158,
              "ci_lower": -0.002463448461173634,
              "ci_upper": 0.0739319360323662,
              "vif": 2.311544534234605
            },
            {
              "feature": "State_New York",
              "coef": 1052.2198800537153,
              "stderr": 3301.345841423617,
              "tstat": 0.3187245234507069,
              "pvalue": 0.7518297387033923,
              "ci_lower": -5649.868486516669,
              "ci_upper": 7754.308246624099,
              "vif": 1.0621245394485346
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67853.79185954398,
              "residual": 13375.268140456013,
              "abs_error": 13375.268140456013,
              "pct_error": 16.466112177656633
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133070.2390643094,
              "residual": 13051.710935690615,
              "abs_error": 13051.710935690615,
              "pct_error": 8.932067314794672
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132245.6974551445,
              "residual": 12013.702544855507,
              "abs_error": 12013.702544855507,
              "pct_error": 8.327847297892205
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179075.96157308383,
              "residual": 11974.428426916187,
              "abs_error": 11974.428426916187,
              "pct_error": 6.26768070293716
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116014.33807973177,
              "residual": -11006.028079731768,
              "abs_error": 11006.028079731768,
              "pct_error": 10.481102000148148
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72592.46097729479,
              "residual": 5206.369022705214,
              "abs_error": 5206.369022705214,
              "pct_error": 6.692091671179648
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114480.26282242895,
              "residual": -4128.012822428951,
              "abs_error": 4128.012822428951,
              "pct_error": 3.7407599957671462
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 168492.58649377938,
              "residual": -2304.646493779379,
              "abs_error": 2304.646493779379,
              "pct_error": 1.3867712023985488
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98837.47482952337,
              "residual": -1353.9148295233754,
              "abs_error": 1353.9148295233754,
              "pct_error": 1.3888647783517296
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103615.70496729563,
              "residual": -333.3249672956299,
              "abs_error": 333.3249672956299,
              "pct_error": 0.32273168694953575
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 9137.990152462417,
          "mae": 7514.2936595131805,
          "r2": 0.9347068473329945,
          "adj_r2": 0.8530904064992375,
          "f_stat": 129.70441863373296,
          "f_pvalue": 3.907703841869268e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.16761773236,
              "stderr": 8358.538206708887,
              "tstat": 5.091101645450006,
              "pvalue": 1.3086760335435364e-05,
              "ci_lower": 25567.574241225855,
              "ci_upper": 59540.760994238866,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7734671927722894,
              "stderr": 0.05514906906550926,
              "tstat": 14.025027183206307,
              "pvalue": 1.06869784701677e-15,
              "ci_lower": 0.6613907999699246,
              "ci_upper": 0.8855435855746542,
              "vif": 2.704652545511513
            },
            {
              "feature": "Administration",
              "coef": 0.032884597528036186,
              "stderr": 0.06646820999717502,
              "tstat": 0.49474173487496986,
              "pvalue": 0.6239644296767601,
              "ci_lower": -0.10219505728289985,
              "ci_upper": 0.16796425233897222,
              "vif": 1.2341074098600409
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03661002585429987,
              "stderr": 0.019427464933191935,
              "tstat": 1.884446888989177,
              "pvalue": 0.06807739023831408,
              "ci_lower": -0.0028713330861419584,
              "ci_upper": 0.0760913847947417,
              "vif": 2.3978922282957296
            },
            {
              "feature": "State_Florida",
              "coef": -959.284160057111,
              "stderr": 4038.107721380517,
              "tstat": -0.23755784299116178,
              "pvalue": 0.8136497729181487,
              "ci_lower": -9165.706404866149,
              "ci_upper": 7247.138084751928,
              "vif": 1.2743836566980133
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525192578,
              "stderr": 3661.562727359727,
              "tstat": 0.19100288718078512,
              "pvalue": 0.8496593413793959,
              "ci_lower": -6741.821695679958,
              "ci_upper": 8140.5598007184735,
              "vif": 1.271327610744667
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.73845267028,
              "residual": 13674.21154732973,
              "abs_error": 13674.21154732973,
              "pct_error": 9.35808175796294
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.69209524256,
              "residual": 13377.36790475744,
              "abs_error": 13377.36790475744,
              "pct_error": 16.468697169162663
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.48221188018,
              "residual": 12512.907788119832,
              "abs_error": 12512.907788119832,
              "pct_error": 6.549532711301888
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.27760899,
              "residual": 11677.122391009994,
              "abs_error": 11677.122391009994,
              "pct_error": 8.094531372659247
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.24230007236,
              "residual": -11152.932300072367,
              "abs_error": 11152.932300072367,
              "pct_error": 10.620999709520481
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.09851141239,
              "residual": 5822.731488587611,
              "abs_error": 5822.731488587611,
              "pct_error": 7.484343258873702
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43532913856,
              "residual": -3617.1853291385632,
              "abs_error": 3617.1853291385632,
              "pct_error": 3.2778537176528464
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.0656968655,
              "residual": -1733.1256968654925,
              "abs_error": 1733.1256968654925,
              "pct_error": 1.042870918831711
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.7337471905,
              "residual": -1308.1737471905071,
              "abs_error": 1308.1737471905071,
              "pct_error": 1.3419429360094226
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.20159793974,
              "residual": 267.1784020602645,
              "abs_error": 267.1784020602645,
              "pct_error": 0.25868730180333227
            }
          ]
        }
      ],
      "RFE": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822598,
          "mae": 6772.453280477901,
          "r2": 0.9464587607787222,
          "adj_r2": 0.9397661058760625,
          "f_stat": 652.3941552354449,
          "f_pvalue": 1.562780498298018e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428005,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.033342046218866224,
              "tstat": 25.542007658667814,
              "pvalue": 1.5627804982980033e-25,
              "ci_lower": 0.7841253560995813,
              "ci_upper": 0.9191202436562933,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756775,
              "residual": 15584.782262432243,
              "abs_error": 15584.782262432243,
              "pct_error": 19.186215207257405
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508355,
              "residual": 11959.80397491646,
              "abs_error": 11959.80397491646,
              "pct_error": 6.26002594127992
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516926,
              "residual": 10914.149804830755,
              "abs_error": 10914.149804830755,
              "pct_error": 7.469206238235087
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.83410578474,
              "residual": 10108.565894215251,
              "abs_error": 10108.565894215251,
              "pct_error": 7.007214707821641
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855635,
              "residual": 5628.285711443648,
              "abs_error": 5628.285711443648,
              "pct_error": 7.234409195412899
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586339,
              "residual": -4816.463865863392,
              "abs_error": 4816.463865863392,
              "pct_error": 4.586745435540665
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.14843539102,
              "residual": -3250.2084353910177,
              "abs_error": 3250.2084353910177,
              "pct_error": 1.955742658216365
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138656,
              "residual": -2997.8727713865665,
              "abs_error": 2997.8727713865665,
              "pct_error": 3.075259840106954
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997862,
              "residual": -1384.8980599786155,
              "abs_error": 1384.8980599786155,
              "pct_error": 1.3408851151364012
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432106,
              "residual": -1079.5020243210602,
              "abs_error": 1079.5020243210602,
              "pct_error": 0.9782329080930022
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.79719078855,
          "mae": 6886.594588246551,
          "r2": 0.947438644726848,
          "adj_r2": 0.9324211146488046,
          "f_stat": 349.0410432956941,
          "f_pvalue": 9.649812292514453e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.33876123651,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245258,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.041834436975,
              "ci_upper": 52366.63568803605,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.04681337574933551,
              "tstat": 16.846003675640826,
              "pvalue": 6.120365803854702e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.098911630903444
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.032576627317020324,
              "stderr": 0.017514140043660795,
              "tstat": 1.8600186612537315,
              "pvalue": 0.07084678339897788,
              "ci_lower": -0.002910391235881493,
              "ci_upper": 0.06806364586992214,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312002,
              "residual": 12893.984246879976,
              "abs_error": 12893.984246879976,
              "pct_error": 15.873610068711832
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650085,
              "residual": 11939.800483499159,
              "abs_error": 11939.800483499159,
              "pct_error": 8.171120412435748
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.25299736077,
              "residual": 10408.13700263924,
              "abs_error": 10408.13700263924,
              "pct_error": 5.44784912642117
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.9238381189,
              "residual": 10385.476161881088,
              "abs_error": 10385.476161881088,
              "pct_error": 7.199167722783464
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894283,
              "residual": -9708.93903894283,
              "abs_error": 9708.93903894283,
              "pct_error": 9.24587686340522
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452132,
              "residual": -4228.671364521317,
              "abs_error": 4228.671364521317,
              "pct_error": 3.831975663859429
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498395,
              "residual": -4155.37979498395,
              "abs_error": 4155.37979498395,
              "pct_error": 2.500409954527356
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630332,
              "residual": 4097.723063696685,
              "abs_error": 4097.723063696685,
              "pct_error": 5.267075435063336
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182876,
              "residual": 997.7339481712406,
              "abs_error": 997.7339481712406,
              "pct_error": 0.9660253260732766
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922274997,
              "residual": 50.10077725003066,
              "abs_error": 50.10077725003066,
              "pct_error": 0.05139407839642978
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend"
          ],
          "rmse": 8803.775790469343,
          "mae": 7320.441614848127,
          "r2": 0.9393955917820571,
          "adj_r2": 0.9090933876730857,
          "f_stat": 227.7949898267996,
          "f_pvalue": 1.8474317896878233e-23,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42989.008165086736,
              "stderr": 7919.772517103607,
              "tstat": 5.4280609793080945,
              "pvalue": 4.041216456576337e-06,
              "ci_lower": 26926.96503401907,
              "ci_upper": 59051.0512961544,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7788410440821669,
              "stderr": 0.05191103443957781,
              "tstat": 15.003381313633888,
              "pvalue": 4.592578715978761e-17,
              "ci_lower": 0.6735605865505696,
              "ci_upper": 0.8841215016137642,
              "vif": 2.5258009462931605
            },
            {
              "feature": "Administration",
              "coef": 0.029391899097552576,
              "stderr": 0.06415469322089738,
              "tstat": 0.4581410590858944,
              "pvalue": 0.6496046941992117,
              "ci_lower": -0.10071984935849057,
              "ci_upper": 0.15950364755359572,
              "vif": 1.2117875999957923
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03471025486942003,
              "stderr": 0.018306482490837005,
              "tstat": 1.8960635876823224,
              "pvalue": 0.06600037194124911,
              "ci_lower": -0.002417012449300149,
              "ci_upper": 0.07183752218814021,
              "vif": 2.244149821335617
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67113.57690570195,
              "residual": 14115.483094298048,
              "abs_error": 14115.483094298048,
              "pct_error": 17.37738082195959
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133567.90370043818,
              "residual": 12554.046299561829,
              "abs_error": 12554.046299561829,
              "pct_error": 8.591485604703351
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132763.0599312563,
              "residual": 11496.34006874368,
              "abs_error": 11496.34006874368,
              "pct_error": 7.969213838920501
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179627.92567223706,
              "residual": 11422.464327762951,
              "abs_error": 11422.464327762951,
              "pct_error": 5.9787704844585505
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115166.64864795278,
              "residual": -10158.338647952784,
              "abs_error": 10158.338647952784,
              "pct_error": 9.673842620600965
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72911.78976735755,
              "residual": 4887.040232642452,
              "abs_error": 4887.040232642452,
              "pct_error": 6.281637182258977
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114756.1155522112,
              "residual": -4403.865552211195,
              "abs_error": 4403.865552211195,
              "pct_error": 3.990734717426418
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169064.01408794578,
              "residual": -2876.0740879457735,
              "abs_error": 2876.0740879457735,
              "pct_error": 1.7306154032270773
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98154.8068677625,
              "residual": -671.2468677625002,
              "abs_error": 671.2468677625002,
              "pct_error": 0.6885744301526331
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103901.89696960006,
              "residual": -619.5169696000521,
              "abs_error": 619.5169696000521,
              "pct_error": 0.5998283246378057
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida"
          ],
          "rmse": 9068.541184728829,
          "mae": 7431.473270363806,
          "r2": 0.9356955353612018,
          "adj_r2": 0.8842519636501631,
          "f_stat": 166.71079812740047,
          "f_pvalue": 2.87193703308411e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42922.432340501306,
              "stderr": 8020.39679766689,
              "tstat": 5.351659453181583,
              "pvalue": 5.529625873991323e-06,
              "ci_lower": 26640.16121384409,
              "ci_upper": 59204.70346715852,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7753799290162725,
              "stderr": 0.0534805511079929,
              "tstat": 14.498353381784591,
              "pvalue": 2.3058263602672984e-16,
              "ci_lower": 0.6668086382047385,
              "ci_upper": 0.8839512198278066,
              "vif": 2.6154729650389013
            },
            {
              "feature": "Administration",
              "coef": 0.03187042324768302,
              "stderr": 0.06533744480699476,
              "tstat": 0.4877819042637417,
              "pvalue": 0.6287460582525723,
              "ci_lower": -0.10077164146661624,
              "ci_upper": 0.16451248796198228,
              "vif": 1.2262320516580505
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03632705952879395,
              "stderr": 0.0191024039891739,
              "tstat": 1.9017009350960201,
              "pvalue": 0.06546703362584387,
              "ci_lower": -0.0024528822582689652,
              "ci_upper": 0.07510700131585686,
              "vif": 2.3839482387938506
            },
            {
              "feature": "State_Florida",
              "coef": -1272.1607867793755,
              "stderr": 3639.780492735839,
              "tstat": -0.34951579891103723,
              "pvalue": 0.7287964395044216,
              "ci_lower": -8661.308022173342,
              "ci_upper": 6116.986448614591,
              "vif": 1.0646776983458153
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67439.97515644613,
              "residual": 13789.084843553865,
              "abs_error": 13789.084843553865,
              "pct_error": 16.975556338524495
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132521.05285667744,
              "residual": 13600.897143322567,
              "abs_error": 13600.897143322567,
              "pct_error": 9.307908321318301
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178668.35249222248,
              "residual": 12382.037507777539,
              "abs_error": 12382.037507777539,
              "pct_error": 6.481032311830161
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132979.3402649352,
              "residual": 11280.059735064802,
              "abs_error": 11280.059735064802,
              "pct_error": 7.819289235269801
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115738.44472738585,
              "residual": -10730.134727385856,
              "abs_error": 10730.134727385856,
              "pct_error": 10.218367220066542
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71952.38724982864,
              "residual": 5846.442750171365,
              "abs_error": 5846.442750171365,
              "pct_error": 7.514820917192925
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113956.00325837644,
              "residual": -3603.7532583764405,
              "abs_error": 3603.7532583764405,
              "pct_error": 3.2656817222815486
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 168051.96713777256,
              "residual": -1864.0271377725585,
              "abs_error": 1864.0271377725585,
              "pct_error": 1.1216380308779075
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98397.73803908183,
              "residual": -914.1780390818312,
              "abs_error": 914.1780390818312,
              "pct_error": 0.9377766251887305
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102978.26243886877,
              "residual": 304.11756113123556,
              "abs_error": 304.11756113123556,
              "pct_error": 0.29445251080700846
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 9137.990152462417,
          "mae": 7514.2936595131805,
          "r2": 0.9347068473329945,
          "adj_r2": 0.8530904064992375,
          "f_stat": 129.70441863373296,
          "f_pvalue": 3.907703841869268e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.16761773236,
              "stderr": 8358.538206708887,
              "tstat": 5.091101645450006,
              "pvalue": 1.3086760335435364e-05,
              "ci_lower": 25567.574241225855,
              "ci_upper": 59540.760994238866,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7734671927722894,
              "stderr": 0.05514906906550926,
              "tstat": 14.025027183206307,
              "pvalue": 1.06869784701677e-15,
              "ci_lower": 0.6613907999699246,
              "ci_upper": 0.8855435855746542,
              "vif": 2.704652545511513
            },
            {
              "feature": "Administration",
              "coef": 0.032884597528036186,
              "stderr": 0.06646820999717502,
              "tstat": 0.49474173487496986,
              "pvalue": 0.6239644296767601,
              "ci_lower": -0.10219505728289985,
              "ci_upper": 0.16796425233897222,
              "vif": 1.2341074098600409
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03661002585429987,
              "stderr": 0.019427464933191935,
              "tstat": 1.884446888989177,
              "pvalue": 0.06807739023831408,
              "ci_lower": -0.0028713330861419584,
              "ci_upper": 0.0760913847947417,
              "vif": 2.3978922282957296
            },
            {
              "feature": "State_Florida",
              "coef": -959.284160057111,
              "stderr": 4038.107721380517,
              "tstat": -0.23755784299116178,
              "pvalue": 0.8136497729181487,
              "ci_lower": -9165.706404866149,
              "ci_upper": 7247.138084751928,
              "vif": 1.2743836566980133
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525192578,
              "stderr": 3661.562727359727,
              "tstat": 0.19100288718078512,
              "pvalue": 0.8496593413793959,
              "ci_lower": -6741.821695679958,
              "ci_upper": 8140.5598007184735,
              "vif": 1.271327610744667
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.73845267028,
              "residual": 13674.21154732973,
              "abs_error": 13674.21154732973,
              "pct_error": 9.35808175796294
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.69209524256,
              "residual": 13377.36790475744,
              "abs_error": 13377.36790475744,
              "pct_error": 16.468697169162663
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.48221188018,
              "residual": 12512.907788119832,
              "abs_error": 12512.907788119832,
              "pct_error": 6.549532711301888
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.27760899,
              "residual": 11677.122391009994,
              "abs_error": 11677.122391009994,
              "pct_error": 8.094531372659247
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.24230007236,
              "residual": -11152.932300072367,
              "abs_error": 11152.932300072367,
              "pct_error": 10.620999709520481
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.09851141239,
              "residual": 5822.731488587611,
              "abs_error": 5822.731488587611,
              "pct_error": 7.484343258873702
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43532913856,
              "residual": -3617.1853291385632,
              "abs_error": 3617.1853291385632,
              "pct_error": 3.2778537176528464
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.0656968655,
              "residual": -1733.1256968654925,
              "abs_error": 1733.1256968654925,
              "pct_error": 1.042870918831711
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.7337471905,
              "residual": -1308.1737471905071,
              "abs_error": 1308.1737471905071,
              "pct_error": 1.3419429360094226
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.20159793974,
              "residual": 267.1784020602645,
              "abs_error": 267.1784020602645,
              "pct_error": 0.25868730180333227
            }
          ]
        }
      ],
      "ElasticNet": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822598,
          "mae": 6772.453280477901,
          "r2": 0.9464587607787222,
          "adj_r2": 0.9397661058760625,
          "f_stat": 652.3941552354449,
          "f_pvalue": 1.562780498298018e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428005,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.033342046218866224,
              "tstat": 25.542007658667814,
              "pvalue": 1.5627804982980033e-25,
              "ci_lower": 0.7841253560995813,
              "ci_upper": 0.9191202436562933,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756775,
              "residual": 15584.782262432243,
              "abs_error": 15584.782262432243,
              "pct_error": 19.186215207257405
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508355,
              "residual": 11959.80397491646,
              "abs_error": 11959.80397491646,
              "pct_error": 6.26002594127992
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516926,
              "residual": 10914.149804830755,
              "abs_error": 10914.149804830755,
              "pct_error": 7.469206238235087
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.83410578474,
              "residual": 10108.565894215251,
              "abs_error": 10108.565894215251,
              "pct_error": 7.007214707821641
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855635,
              "residual": 5628.285711443648,
              "abs_error": 5628.285711443648,
              "pct_error": 7.234409195412899
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586339,
              "residual": -4816.463865863392,
              "abs_error": 4816.463865863392,
              "pct_error": 4.586745435540665
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.14843539102,
              "residual": -3250.2084353910177,
              "abs_error": 3250.2084353910177,
              "pct_error": 1.955742658216365
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138656,
              "residual": -2997.8727713865665,
              "abs_error": 2997.8727713865665,
              "pct_error": 3.075259840106954
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997862,
              "residual": -1384.8980599786155,
              "abs_error": 1384.8980599786155,
              "pct_error": 1.3408851151364012
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432106,
              "residual": -1079.5020243210602,
              "abs_error": 1079.5020243210602,
              "pct_error": 0.9782329080930022
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.79719078855,
          "mae": 6886.594588246551,
          "r2": 0.947438644726848,
          "adj_r2": 0.9324211146488046,
          "f_stat": 349.0410432956941,
          "f_pvalue": 9.649812292514453e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.33876123651,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245258,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.041834436975,
              "ci_upper": 52366.63568803605,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.04681337574933551,
              "tstat": 16.846003675640826,
              "pvalue": 6.120365803854702e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.098911630903444
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.032576627317020324,
              "stderr": 0.017514140043660795,
              "tstat": 1.8600186612537315,
              "pvalue": 0.07084678339897788,
              "ci_lower": -0.002910391235881493,
              "ci_upper": 0.06806364586992214,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312002,
              "residual": 12893.984246879976,
              "abs_error": 12893.984246879976,
              "pct_error": 15.873610068711832
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650085,
              "residual": 11939.800483499159,
              "abs_error": 11939.800483499159,
              "pct_error": 8.171120412435748
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.25299736077,
              "residual": 10408.13700263924,
              "abs_error": 10408.13700263924,
              "pct_error": 5.44784912642117
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.9238381189,
              "residual": 10385.476161881088,
              "abs_error": 10385.476161881088,
              "pct_error": 7.199167722783464
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894283,
              "residual": -9708.93903894283,
              "abs_error": 9708.93903894283,
              "pct_error": 9.24587686340522
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452132,
              "residual": -4228.671364521317,
              "abs_error": 4228.671364521317,
              "pct_error": 3.831975663859429
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498395,
              "residual": -4155.37979498395,
              "abs_error": 4155.37979498395,
              "pct_error": 2.500409954527356
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630332,
              "residual": 4097.723063696685,
              "abs_error": 4097.723063696685,
              "pct_error": 5.267075435063336
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182876,
              "residual": 997.7339481712406,
              "abs_error": 997.7339481712406,
              "pct_error": 0.9660253260732766
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922274997,
              "residual": 50.10077725003066,
              "abs_error": 50.10077725003066,
              "pct_error": 0.05139407839642978
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "rmse": 8803.77579046932,
          "mae": 7320.441614848109,
          "r2": 0.9393955917820573,
          "adj_r2": 0.909093387673086,
          "f_stat": 227.7949898267994,
          "f_pvalue": 1.8474317896878538e-23,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42989.00816508674,
              "stderr": 7919.7725171036,
              "tstat": 5.4280609793081,
              "pvalue": 4.041216456576278e-06,
              "ci_lower": 26926.965034019093,
              "ci_upper": 59051.051296154394,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7788410440821674,
              "stderr": 0.05191103443957787,
              "tstat": 15.003381313633879,
              "pvalue": 4.592578715978826e-17,
              "ci_lower": 0.6735605865505699,
              "ci_upper": 0.8841215016137648,
              "vif": 2.5258009462931605
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.034710254869420254,
              "stderr": 0.018306482490837016,
              "tstat": 1.8960635876823335,
              "pvalue": 0.06600037194124761,
              "ci_lower": -0.0024170124492999476,
              "ci_upper": 0.07183752218814046,
              "vif": 2.244149821335617
            },
            {
              "feature": "Administration",
              "coef": 0.0293918990975518,
              "stderr": 0.0641546932208974,
              "tstat": 0.4581410590858822,
              "pvalue": 0.6496046941992204,
              "ci_lower": -0.10071984935849138,
              "ci_upper": 0.15950364755359497,
              "vif": 1.2117875999957923
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67113.57690570195,
              "residual": 14115.483094298048,
              "abs_error": 14115.483094298048,
              "pct_error": 17.37738082195959
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133567.9037004382,
              "residual": 12554.0462995618,
              "abs_error": 12554.0462995618,
              "pct_error": 8.59148560470333
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132763.05993125634,
              "residual": 11496.340068743651,
              "abs_error": 11496.340068743651,
              "pct_error": 7.9692138389204805
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179627.92567223718,
              "residual": 11422.464327762835,
              "abs_error": 11422.464327762835,
              "pct_error": 5.97877048445849
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115166.6486479528,
              "residual": -10158.338647952798,
              "abs_error": 10158.338647952798,
              "pct_error": 9.673842620600977
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72911.78976735754,
              "residual": 4887.040232642466,
              "abs_error": 4887.040232642466,
              "pct_error": 6.281637182258996
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114756.1155522112,
              "residual": -4403.865552211195,
              "abs_error": 4403.865552211195,
              "pct_error": 3.990734717426418
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169064.01408794586,
              "residual": -2876.074087945861,
              "abs_error": 2876.074087945861,
              "pct_error": 1.7306154032271301
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98154.80686776244,
              "residual": -671.246867762442,
              "abs_error": 671.246867762442,
              "pct_error": 0.6885744301525734
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103901.8969696,
              "residual": -619.5169695999939,
              "abs_error": 619.5169695999939,
              "pct_error": 0.5998283246377493
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_New York"
          ],
          "rmse": 8997.199285782257,
          "mae": 7474.740626338245,
          "r2": 0.9367033175986437,
          "adj_r2": 0.8860659716775586,
          "f_stat": 166.60800614911003,
          "f_pvalue": 2.901456672328411e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42410.3090834211,
              "stderr": 8223.43186681452,
              "tstat": 5.157251834792597,
              "pvalue": 9.970354548171222e-06,
              "ci_lower": 25715.854853174427,
              "ci_upper": 59104.763313667776,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.774682580549424,
              "stderr": 0.054166008460085305,
              "tstat": 14.302006047211032,
              "pvalue": 3.47501729722318e-16,
              "ci_lower": 0.6647197373329297,
              "ci_upper": 0.8846454237659183,
              "vif": 2.6813755945236446
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.035734243785596365,
              "stderr": 0.01881559680410232,
              "tstat": 1.8991820539971027,
              "pvalue": 0.0658077044811212,
              "ci_lower": -0.0024634484611735716,
              "ci_upper": 0.07393193603236631,
              "vif": 2.311544534234605
            },
            {
              "feature": "Administration",
              "coef": 0.0318348682521119,
              "stderr": 0.06542107908210056,
              "tstat": 0.48661484492116913,
              "pvalue": 0.6295647022032742,
              "ci_lower": -0.10097698306715311,
              "ci_upper": 0.16464671957137691,
              "vif": 1.2286530866987377
            },
            {
              "feature": "State_New York",
              "coef": 1052.2198800537299,
              "stderr": 3301.3458414236175,
              "tstat": 0.3187245234507113,
              "pvalue": 0.7518297387033891,
              "ci_lower": -5649.868486516655,
              "ci_upper": 7754.308246624115,
              "vif": 1.0621245394485346
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67853.79185954404,
              "residual": 13375.268140455955,
              "abs_error": 13375.268140455955,
              "pct_error": 16.466112177656562
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133070.23906430943,
              "residual": 13051.710935690586,
              "abs_error": 13051.710935690586,
              "pct_error": 8.932067314794653
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132245.69745514455,
              "residual": 12013.702544855449,
              "abs_error": 12013.702544855449,
              "pct_error": 8.327847297892164
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179075.96157308389,
              "residual": 11974.428426916129,
              "abs_error": 11974.428426916129,
              "pct_error": 6.26768070293713
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116014.33807973181,
              "residual": -11006.028079731812,
              "abs_error": 11006.028079731812,
              "pct_error": 10.48110200014819
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72592.46097729482,
              "residual": 5206.369022705185,
              "abs_error": 5206.369022705185,
              "pct_error": 6.69209167117961
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114480.26282242895,
              "residual": -4128.012822428951,
              "abs_error": 4128.012822428951,
              "pct_error": 3.7407599957671462
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 168492.58649377944,
              "residual": -2304.646493779437,
              "abs_error": 2304.646493779437,
              "pct_error": 1.3867712023985839
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98837.47482952337,
              "residual": -1353.9148295233754,
              "abs_error": 1353.9148295233754,
              "pct_error": 1.3888647783517296
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103615.70496729558,
              "residual": -333.3249672955717,
              "abs_error": 333.3249672955717,
              "pct_error": 0.32273168694947935
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_New York",
            "State_Florida"
          ],
          "rmse": 9137.990152462398,
          "mae": 7514.293659513173,
          "r2": 0.9347068473329947,
          "adj_r2": 0.8530904064992381,
          "f_stat": 129.70441863373298,
          "f_pvalue": 3.9077038418692605e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.16761773238,
              "stderr": 8358.53820670888,
              "tstat": 5.0911016454500135,
              "pvalue": 1.3086760335435102e-05,
              "ci_lower": 25567.57424122589,
              "ci_upper": 59540.76099423887,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7734671927722891,
              "stderr": 0.05514906906550923,
              "tstat": 14.025027183206308,
              "pvalue": 1.0686978470167635e-15,
              "ci_lower": 0.6613907999699243,
              "ci_upper": 0.885543585574654,
              "vif": 2.704652545511513
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03661002585430009,
              "stderr": 0.01942746493319193,
              "tstat": 1.884446888989189,
              "pvalue": 0.06807739023831241,
              "ci_lower": -0.0028713330861417224,
              "ci_upper": 0.07609138479474191,
              "vif": 2.3978922282957296
            },
            {
              "feature": "Administration",
              "coef": 0.032884597528035964,
              "stderr": 0.06646820999717495,
              "tstat": 0.49474173487496703,
              "pvalue": 0.623964429676762,
              "ci_lower": -0.10219505728289993,
              "ci_upper": 0.16796425233897186,
              "vif": 1.2341074098600409
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525192687,
              "stderr": 3661.562727359725,
              "tstat": 0.1910028871807882,
              "pvalue": 0.8496593413793937,
              "ci_lower": -6741.821695679943,
              "ci_upper": 8140.559800718481,
              "vif": 1.271327610744667
            },
            {
              "feature": "State_Florida",
              "coef": -959.2841600571246,
              "stderr": 4038.107721380517,
              "tstat": -0.23755784299116517,
              "pvalue": 0.8136497729181461,
              "ci_lower": -9165.706404866163,
              "ci_upper": 7247.138084751914,
              "vif": 1.2743836566980131
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.7384526703,
              "residual": 13674.211547329702,
              "abs_error": 13674.211547329702,
              "pct_error": 9.358081757962921
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.6920952426,
              "residual": 13377.367904757397,
              "abs_error": 13377.367904757397,
              "pct_error": 16.46869716916261
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.48221188027,
              "residual": 12512.907788119745,
              "abs_error": 12512.907788119745,
              "pct_error": 6.549532711301842
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.27760899003,
              "residual": 11677.122391009965,
              "abs_error": 11677.122391009965,
              "pct_error": 8.094531372659228
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.24230007242,
              "residual": -11152.932300072425,
              "abs_error": 11152.932300072425,
              "pct_error": 10.620999709520538
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.0985114124,
              "residual": 5822.731488587597,
              "abs_error": 5822.731488587597,
              "pct_error": 7.4843432588736825
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43532913859,
              "residual": -3617.1853291385924,
              "abs_error": 3617.1853291385924,
              "pct_error": 3.2778537176528726
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.06569686552,
              "residual": -1733.1256968655216,
              "abs_error": 1733.1256968655216,
              "pct_error": 1.0428709188317284
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.7337471905,
              "residual": -1308.1737471905071,
              "abs_error": 1308.1737471905071,
              "pct_error": 1.3419429360094226
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.20159793973,
              "residual": 267.17840206027904,
              "abs_error": 267.17840206027904,
              "pct_error": 0.25868730180334637
            }
          ]
        }
      ],
      "Exhaustive": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822598,
          "mae": 6772.453280477901,
          "r2": 0.9464587607787222,
          "adj_r2": 0.9397661058760625,
          "f_stat": 652.3941552354449,
          "f_pvalue": 1.562780498298018e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428005,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.033342046218866224,
              "tstat": 25.542007658667814,
              "pvalue": 1.5627804982980033e-25,
              "ci_lower": 0.7841253560995813,
              "ci_upper": 0.9191202436562933,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756775,
              "residual": 15584.782262432243,
              "abs_error": 15584.782262432243,
              "pct_error": 19.186215207257405
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508355,
              "residual": 11959.80397491646,
              "abs_error": 11959.80397491646,
              "pct_error": 6.26002594127992
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516926,
              "residual": 10914.149804830755,
              "abs_error": 10914.149804830755,
              "pct_error": 7.469206238235087
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.83410578474,
              "residual": 10108.565894215251,
              "abs_error": 10108.565894215251,
              "pct_error": 7.007214707821641
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855635,
              "residual": 5628.285711443648,
              "abs_error": 5628.285711443648,
              "pct_error": 7.234409195412899
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586339,
              "residual": -4816.463865863392,
              "abs_error": 4816.463865863392,
              "pct_error": 4.586745435540665
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.14843539102,
              "residual": -3250.2084353910177,
              "abs_error": 3250.2084353910177,
              "pct_error": 1.955742658216365
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138656,
              "residual": -2997.8727713865665,
              "abs_error": 2997.8727713865665,
              "pct_error": 3.075259840106954
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997862,
              "residual": -1384.8980599786155,
              "abs_error": 1384.8980599786155,
              "pct_error": 1.3408851151364012
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432106,
              "residual": -1079.5020243210602,
              "abs_error": 1079.5020243210602,
              "pct_error": 0.9782329080930022
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.79719078855,
          "mae": 6886.594588246551,
          "r2": 0.947438644726848,
          "adj_r2": 0.9324211146488046,
          "f_stat": 349.0410432956941,
          "f_pvalue": 9.649812292514453e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.33876123651,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245258,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.041834436975,
              "ci_upper": 52366.63568803605,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.04681337574933551,
              "tstat": 16.846003675640826,
              "pvalue": 6.120365803854702e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.098911630903444
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.032576627317020324,
              "stderr": 0.017514140043660795,
              "tstat": 1.8600186612537315,
              "pvalue": 0.07084678339897788,
              "ci_lower": -0.002910391235881493,
              "ci_upper": 0.06806364586992214,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312002,
              "residual": 12893.984246879976,
              "abs_error": 12893.984246879976,
              "pct_error": 15.873610068711832
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650085,
              "residual": 11939.800483499159,
              "abs_error": 11939.800483499159,
              "pct_error": 8.171120412435748
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.25299736077,
              "residual": 10408.13700263924,
              "abs_error": 10408.13700263924,
              "pct_error": 5.44784912642117
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.9238381189,
              "residual": 10385.476161881088,
              "abs_error": 10385.476161881088,
              "pct_error": 7.199167722783464
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894283,
              "residual": -9708.93903894283,
              "abs_error": 9708.93903894283,
              "pct_error": 9.24587686340522
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452132,
              "residual": -4228.671364521317,
              "abs_error": 4228.671364521317,
              "pct_error": 3.831975663859429
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498395,
              "residual": -4155.37979498395,
              "abs_error": 4155.37979498395,
              "pct_error": 2.500409954527356
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630332,
              "residual": 4097.723063696685,
              "abs_error": 4097.723063696685,
              "pct_error": 5.267075435063336
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182876,
              "residual": 997.7339481712406,
              "abs_error": 997.7339481712406,
              "pct_error": 0.9660253260732766
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922274997,
              "residual": 50.10077725003066,
              "abs_error": 50.10077725003066,
              "pct_error": 0.05139407839642978
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Administration",
            "State_Florida"
          ],
          "rmse": 8171.645989252906,
          "mae": 6730.785003988378,
          "r2": 0.9477861934983318,
          "adj_r2": 0.9216792902474977,
          "f_stat": 206.0965552981667,
          "f_pvalue": 1.0160938908645198e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48524.91882908621,
              "stderr": 7726.0638401926335,
              "tstat": 6.280677953584751,
              "pvalue": 2.9348748277097483e-07,
              "ci_lower": 32855.735103599545,
              "ci_upper": 64194.10255457287,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8519395749717557,
              "stderr": 0.036462342632611354,
              "tstat": 23.364916060269646,
              "pvalue": 2.397756569053529e-23,
              "ci_lower": 0.7779905166168628,
              "ci_upper": 0.9258886333266485,
              "vif": 1.133385343031554
            },
            {
              "feature": "Administration",
              "coef": -0.0018828428106345552,
              "stderr": 0.06512547204443578,
              "tstat": -0.028911004427727944,
              "pvalue": 0.9770952519916741,
              "ci_lower": -0.13396342197497477,
              "ci_upper": 0.13019773635370566,
              "vif": 1.1357431042585073
            },
            {
              "feature": "State_Florida",
              "coef": 404.0171892528506,
              "stderr": 3657.528521478563,
              "tstat": 0.11046180142691706,
              "pvalue": 0.9126566675844326,
              "ci_lower": -7013.794463572719,
              "ci_upper": 7821.82884207842,
              "vif": 1.0022433489292677
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65635.13754966235,
              "residual": 15593.922450337646,
              "abs_error": 15593.922450337646,
              "pct_error": 19.197467569288193
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179461.3896591183,
              "residual": 11589.000340881728,
              "abs_error": 11589.000340881728,
              "pct_error": 6.065939117361513
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135544.49075268957,
              "residual": 10577.459247310442,
              "abs_error": 10577.459247310442,
              "pct_error": 7.238788729078993
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134118.51835293754,
              "residual": 10140.881647062459,
              "abs_error": 10140.881647062459,
              "pct_error": 7.02961584968637
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72532.52136358242,
              "residual": 5266.308636417583,
              "abs_error": 5266.308636417583,
              "pct_error": 6.769136035101791
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109715.48807661705,
              "residual": -4707.178076617056,
              "abs_error": 4707.178076617056,
              "pct_error": 4.482671968168097
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169823.72652121016,
              "residual": -3635.7865212101606,
              "abs_error": 3635.7865212101606,
              "pct_error": 2.1877559353646
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100321.90670935586,
              "residual": -2838.3467093558575,
              "abs_error": 2838.3467093558575,
              "pct_error": 2.9116157733220427
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104856.94701383717,
              "residual": -1574.5670138371643,
              "abs_error": 1574.5670138371643,
              "pct_error": 1.5245262685050096
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111736.64939685368,
              "residual": -1384.3993968536815,
              "abs_error": 1384.3993968536815,
              "pct_error": 1.2545275668177873
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 8178.369214676941,
          "mae": 6751.890336358124,
          "r2": 0.9477002402881427,
          "adj_r2": 0.9058604325186569,
          "f_stat": 150.28826894740226,
          "f_pvalue": 1.595225277281831e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48444.527070989556,
              "stderr": 8029.630615580648,
              "tstat": 6.033219881495929,
              "pvalue": 6.981305051177266e-07,
              "ci_lower": 32143.5102973776,
              "ci_upper": 64745.54384460151,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516135792517826,
              "stderr": 0.0376572840670068,
              "tstat": 22.614843325833967,
              "pvalue": 1.7976256516593804e-22,
              "ci_lower": 0.7751652283109768,
              "ci_upper": 0.9280619301925884,
              "vif": 1.1753792401120298
            },
            {
              "feature": "Administration",
              "coef": -0.0016967977561576641,
              "stderr": 0.06617210717721557,
              "tstat": -0.025642190169544832,
              "pvalue": 0.9796883807898519,
              "ci_lower": -0.13603331716565442,
              "ci_upper": 0.1326397216533391,
              "vif": 1.1400393441883754
            },
            {
              "feature": "State_Florida",
              "coef": 484.7329661977419,
              "stderr": 4106.688327934864,
              "tstat": 0.1180350022913719,
              "pvalue": 0.9067147364414876,
              "ci_lower": -7852.28756719597,
              "ci_upper": 8821.753499591454,
              "vif": 1.2284933165040064
            },
            {
              "feature": "State_New York",
              "coef": 173.1954284640815,
              "stderr": 3781.6175138288772,
              "tstat": 0.045799298271368964,
              "pvalue": 0.9637305421972027,
              "ci_lower": -7503.896267970273,
              "ci_upper": 7850.287124898436,
              "vif": 1.2639347101595262
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65733.61574650246,
              "residual": 15495.444253497539,
              "abs_error": 15495.444253497539,
              "pct_error": 19.076232389612212
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179430.51003180016,
              "residual": 11619.87996819985,
              "abs_error": 11619.87996819985,
              "pct_error": 6.082102197331212
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135532.1670308683,
              "residual": 10589.782969131717,
              "abs_error": 10589.782969131717,
              "pct_error": 7.2472225898516385
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134022.38515579753,
              "residual": 10237.014844202466,
              "abs_error": 10237.014844202466,
              "pct_error": 7.096254971393521
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72539.51242971254,
              "residual": 5259.317570287458,
              "abs_error": 5259.317570287458,
              "pct_error": 6.760149953781385
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109808.57354517737,
              "residual": -4800.263545177368,
              "abs_error": 4800.263545177368,
              "pct_error": 4.571317779685597
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169794.72714227,
              "residual": -3606.787142270012,
              "abs_error": 3606.787142270012,
              "pct_error": 2.1703061860385366
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100423.18961853377,
              "residual": -2939.6296185337706,
              "abs_error": 2939.6296185337706,
              "pct_error": 3.0155131988755546
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104869.71882302786,
              "residual": -1587.3388230278506,
              "abs_error": 1587.3388230278506,
              "pct_error": 1.5368921814426144
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111735.69462925321,
              "residual": -1383.4446292532084,
              "abs_error": 1383.4446292532084,
              "pct_error": 1.253662366878073
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 9137.990152462417,
          "mae": 7514.2936595131805,
          "r2": 0.9347068473329945,
          "adj_r2": 0.8530904064992375,
          "f_stat": 129.70441863373296,
          "f_pvalue": 3.907703841869268e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.16761773236,
              "stderr": 8358.538206708887,
              "tstat": 5.091101645450006,
              "pvalue": 1.3086760335435364e-05,
              "ci_lower": 25567.574241225855,
              "ci_upper": 59540.760994238866,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7734671927722894,
              "stderr": 0.05514906906550926,
              "tstat": 14.025027183206307,
              "pvalue": 1.06869784701677e-15,
              "ci_lower": 0.6613907999699246,
              "ci_upper": 0.8855435855746542,
              "vif": 2.704652545511513
            },
            {
              "feature": "Administration",
              "coef": 0.032884597528036186,
              "stderr": 0.06646820999717502,
              "tstat": 0.49474173487496986,
              "pvalue": 0.6239644296767601,
              "ci_lower": -0.10219505728289985,
              "ci_upper": 0.16796425233897222,
              "vif": 1.2341074098600409
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03661002585429987,
              "stderr": 0.019427464933191935,
              "tstat": 1.884446888989177,
              "pvalue": 0.06807739023831408,
              "ci_lower": -0.0028713330861419584,
              "ci_upper": 0.0760913847947417,
              "vif": 2.3978922282957296
            },
            {
              "feature": "State_Florida",
              "coef": -959.284160057111,
              "stderr": 4038.107721380517,
              "tstat": -0.23755784299116178,
              "pvalue": 0.8136497729181487,
              "ci_lower": -9165.706404866149,
              "ci_upper": 7247.138084751928,
              "vif": 1.2743836566980133
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525192578,
              "stderr": 3661.562727359727,
              "tstat": 0.19100288718078512,
              "pvalue": 0.8496593413793959,
              "ci_lower": -6741.821695679958,
              "ci_upper": 8140.5598007184735,
              "vif": 1.271327610744667
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.73845267028,
              "residual": 13674.21154732973,
              "abs_error": 13674.21154732973,
              "pct_error": 9.35808175796294
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.69209524256,
              "residual": 13377.36790475744,
              "abs_error": 13377.36790475744,
              "pct_error": 16.468697169162663
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.48221188018,
              "residual": 12512.907788119832,
              "abs_error": 12512.907788119832,
              "pct_error": 6.549532711301888
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.27760899,
              "residual": 11677.122391009994,
              "abs_error": 11677.122391009994,
              "pct_error": 8.094531372659247
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.24230007236,
              "residual": -11152.932300072367,
              "abs_error": 11152.932300072367,
              "pct_error": 10.620999709520481
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.09851141239,
              "residual": 5822.731488587611,
              "abs_error": 5822.731488587611,
              "pct_error": 7.484343258873702
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43532913856,
              "residual": -3617.1853291385632,
              "abs_error": 3617.1853291385632,
              "pct_error": 3.2778537176528464
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.0656968655,
              "residual": -1733.1256968654925,
              "abs_error": 1733.1256968654925,
              "pct_error": 1.042870918831711
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.7337471905,
              "residual": -1308.1737471905071,
              "abs_error": 1308.1737471905071,
              "pct_error": 1.3419429360094226
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.20159793974,
              "residual": 267.1784020602645,
              "abs_error": 267.1784020602645,
              "pct_error": 0.25868730180333227
            }
          ]
        }
      ]
    }
  },
  "real_estate": {
    "id": "real_estate",
    "title": "Taiwan Real Estate: Property Valuation & Multiple Regression Explorer",
    "badge": "CRISP-DM",
    "hero_title": "Taiwan Real Estate Valuation & Amenity Parsimony",
    "hero_desc": "Analyze Taiwan housing price per unit area (10,000 NTD/Ping) across Taipei/New Taipei districts. Compare 5 Feature Selection Algorithms against OLS to uncover how Distance to MRT, Convenience Stores, and House Age govern housing market values.",
    "target_name": "Price per Ping",
    "target_prefix": "NT$",
    "target_unit": "10,000 NTD/Ping",
    "sweet_spot_k": 3,
    "sweet_spot_note": "Occam's Razor: 3 features (Distance to MRT, Convenience Stores, House Age) minimize prediction error without geographical collinearity.",
    "overfitting_k": 5,
    "overfitting_note": "Collinearity Alert: Adding Latitude & Longitude coordinates creates spatial collinearity and increases variance.",
    "features_meta": [
      {
        "name": "Distance to MRT",
        "min": 20,
        "max": 6500,
        "default": 500,
        "step": 10,
        "unit": "m"
      },
      {
        "name": "Convenience Stores",
        "min": 0,
        "max": 10,
        "default": 5,
        "step": 1,
        "unit": "stores"
      },
      {
        "name": "House Age",
        "min": 0,
        "max": 50,
        "default": 15,
        "step": 1,
        "unit": "years"
      },
      {
        "name": "Latitude",
        "min": 24.93,
        "max": 25.02,
        "default": 24.97,
        "step": 0.001,
        "unit": "\u00b0N"
      },
      {
        "name": "Longitude",
        "min": 121.47,
        "max": 121.57,
        "default": 121.53,
        "step": 0.001,
        "unit": "\u00b0E"
      }
    ],
    "models": {
      "Lasso": [
        {
          "k": 1,
          "features": [
            "Distance to MRT"
          ],
          "rmse": 9.46895348816795,
          "mae": 7.180975428206026,
          "r2": 0.4410613557135661,
          "adj_r2": 0.4341608786236101,
          "f_stat": 269.2950256825916,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 45.44118418139559,
              "stderr": 0.7470609524983143,
              "tstat": 60.82660863137286,
              "pvalue": 1e-15,
              "ci_lower": 43.9769447144989,
              "ci_upper": 46.905423648292285,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.00699994521722145,
              "stderr": 0.0004265603415573798,
              "tstat": -16.410211018831518,
              "pvalue": 1e-15,
              "ci_lower": -0.007836003486673914,
              "ci_upper": -0.006163886947768985,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 43.390215632629186,
              "residual": 27.609784367370814,
              "abs_error": 27.609784367370814,
              "pct_error": 38.887020235733544,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 43.390215632629186,
              "residual": 26.309784367370817,
              "abs_error": 26.309784367370817,
              "pct_error": 37.747179867103036,
              "rank": 2
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 37.32506969950731,
              "residual": -23.52506969950731,
              "abs_error": 23.52506969950731,
              "pct_error": 170.47151956164717,
              "rank": 3
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 40.956045582863815,
              "residual": 20.543954417136185,
              "abs_error": 20.543954417136185,
              "pct_error": 33.40480393030274,
              "rank": 4
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.67148295755506,
              "residual": -18.171482957555057,
              "abs_error": 18.171482957555057,
              "pct_error": 74.16931819410227,
              "rank": 5
            },
            {
              "index": 99,
              "actual": 62.2,
              "predicted": 44.8079967168299,
              "residual": 17.392003283170105,
              "abs_error": 17.392003283170105,
              "pct_error": 27.961420069405314,
              "rank": 6
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.41592643141204,
              "residual": 16.184073568587962,
              "abs_error": 16.184073568587962,
              "pct_error": 27.15448585333551,
              "rank": 7
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 44.56625262876082,
              "residual": 16.13374737123918,
              "abs_error": 16.13374737123918,
              "pct_error": 26.57948496085532,
              "rank": 8
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 40.05540253145167,
              "residual": -15.05540253145167,
              "abs_error": 15.05540253145167,
              "pct_error": 60.22161012580668,
              "rank": 9
            },
            {
              "index": 273,
              "actual": 29.3,
              "predicted": 44.25029120152944,
              "residual": -14.950291201529442,
              "abs_error": 14.950291201529442,
              "pct_error": 51.02488464685816,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "Distance to MRT",
            "Convenience Stores"
          ],
          "rmse": 9.15642569076311,
          "mae": 6.917253683732183,
          "r2": 0.4773485963547548,
          "adj_r2": 0.4642823112636236,
          "f_stat": 160.8008630397959,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 38.62878446798941,
              "stderr": 1.4500470256737368,
              "tstat": 26.639677047743525,
              "pvalue": 1e-15,
              "ci_lower": 35.786692297668885,
              "ci_upper": 41.47087663830994,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.005350174932343965,
              "stderr": 0.000510637303932114,
              "tstat": -10.477446303169494,
              "pvalue": 1e-15,
              "ci_lower": -0.006351024048050909,
              "ci_upper": -0.004349325816637021,
              "vif": 1.55595095693928
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2279556443311488,
              "stderr": 0.22719147450588698,
              "tstat": 5.404937165894093,
              "pvalue": 6.48311158704363e-08,
              "ci_lower": 0.7826603542996103,
              "ci_upper": 1.6732509343626871,
              "vif": 1.5559509569392802
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 44.42892884918437,
              "residual": 26.571071150815627,
              "abs_error": 26.571071150815627,
              "pct_error": 37.42404387438821,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 44.42892884918437,
              "residual": 25.27107115081563,
              "abs_error": 25.27107115081563,
              "pct_error": 36.25691700260492,
              "rank": 2
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 38.88458512999023,
              "residual": 22.615414870009772,
              "abs_error": 22.615414870009772,
              "pct_error": 36.77303230895898,
              "rank": 3
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 32.42550274198347,
              "residual": -18.62550274198347,
              "abs_error": 18.62550274198347,
              "pct_error": 134.96741117379327,
              "rank": 4
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.65163382834244,
              "residual": -18.15163382834244,
              "abs_error": 18.15163382834244,
              "pct_error": 74.08830134017322,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 43.108031194767236,
              "residual": -18.108031194767236,
              "abs_error": 18.108031194767236,
              "pct_error": 72.43212477906894,
              "rank": 6
            },
            {
              "index": 88,
              "actual": 48.0,
              "predicted": 31.10413793789289,
              "residual": 16.89586206210711,
              "abs_error": 16.89586206210711,
              "pct_error": 35.199712629389815,
              "rank": 7
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 38.469654453182265,
              "residual": 16.830345546817732,
              "abs_error": 16.830345546817732,
              "pct_error": 30.43462124198505,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.22062439737973,
              "residual": 16.37937560262027,
              "abs_error": 16.37937560262027,
              "pct_error": 27.482173829899786,
              "rank": 9
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 45.327793548972714,
              "residual": 15.372206451027289,
              "abs_error": 15.372206451027289,
              "pct_error": 25.324887069237707,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "Distance to MRT",
            "Convenience Stores",
            "Latitude"
          ],
          "rmse": 8.893941478788319,
          "mae": 6.796716978976001,
          "r2": 0.5068844411682454,
          "adj_r2": 0.48815853387083696,
          "f_stat": 117.58483474145692,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -5142.944351080023,
              "stderr": 1286.3853945718997,
              "tstat": -3.9979809882648425,
              "pvalue": 6.388508096250928e-05,
              "ci_lower": -7664.259724440946,
              "ci_upper": -2621.6289777190996,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.004373947526157102,
              "stderr": 0.0005549073814904473,
              "tstat": -7.882301933719004,
              "pvalue": 3.2140423505028133e-15,
              "ci_lower": -0.005461565993878379,
              "ci_upper": -0.003286329058435825,
              "vif": 1.922721842231245
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.0755075278086415,
              "stderr": 0.22529706729808904,
              "tstat": 4.773730704561922,
              "pvalue": 1.8084416569309022e-06,
              "ci_lower": 0.633925275904387,
              "ci_upper": 1.517089779712896,
              "vif": 1.6011342648634264
            },
            {
              "feature": "Latitude",
              "coef": 207.50295010134826,
              "stderr": 51.51497340596514,
              "tstat": 4.028012369648639,
              "pvalue": 5.625038485885093e-05,
              "ci_lower": 106.5336022256566,
              "ci_upper": 308.47229797703994,
              "vif": 1.5658535210250724
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 45.11962306376972,
              "residual": 25.880376936230277,
              "abs_error": 25.880376936230277,
              "pct_error": 36.45123512145109,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 45.11962306376972,
              "residual": 24.58037693623028,
              "abs_error": 24.58037693623028,
              "pct_error": 35.26596404050255,
              "rank": 2
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 39.99651794178226,
              "residual": 21.50348205821774,
              "abs_error": 21.50348205821774,
              "pct_error": 34.965011476776816,
              "rank": 3
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 45.22564833805518,
              "residual": -20.22564833805518,
              "abs_error": 20.22564833805518,
              "pct_error": 80.90259335222072,
              "rank": 4
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 43.634193550133205,
              "residual": 17.0658064498668,
              "abs_error": 17.0658064498668,
              "pct_error": 28.11500238857792,
              "rank": 5
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 39.54524659791605,
              "residual": 15.75475340208395,
              "abs_error": 15.75475340208395,
              "pct_error": 28.48960832203246,
              "rank": 6
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 29.09986181358272,
              "residual": -15.29986181358272,
              "abs_error": 15.29986181358272,
              "pct_error": 110.86856386654145,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 39.299701096114404,
              "residual": -14.799701096114404,
              "abs_error": 14.799701096114404,
              "pct_error": 60.40694324944654,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.01261958619034,
              "residual": 14.587380413809662,
              "abs_error": 14.587380413809662,
              "pct_error": 24.47547049296923,
              "rank": 9
            },
            {
              "index": 185,
              "actual": 21.5,
              "predicted": 35.891865922516445,
              "residual": -14.391865922516445,
              "abs_error": 14.391865922516445,
              "pct_error": 66.93891126751835,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "Distance to MRT",
            "Convenience Stores",
            "Latitude",
            "Longitude"
          ],
          "rmse": 8.90728280303666,
          "mae": 6.802577057732846,
          "r2": 0.5054039392240199,
          "adj_r2": 0.48004003867140554,
          "f_stat": 87.96122215077462,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -3088.732067668105,
              "stderr": 7314.018991516905,
              "tstat": -0.422302987078724,
              "pvalue": 0.6728038781394511,
              "ci_lower": -17424.20929104124,
              "ci_upper": 11246.745155705028,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.004553253285243449,
              "stderr": 0.0008388785685674592,
              "tstat": -5.427785922602569,
              "pvalue": 5.705741747171895e-08,
              "ci_lower": -0.006197455279635669,
              "ci_upper": -0.0029090512908512287,
              "vif": 4.381893819740087
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.071627720414289,
              "stderr": 0.22602368167511727,
              "tstat": 4.741218762884453,
              "pvalue": 2.124363961407957e-06,
              "ci_lower": 0.6286213043310591,
              "ci_upper": 1.5146341364975189,
              "vif": 1.6069520282129575
            },
            {
              "feature": "Latitude",
              "coef": 205.4913948054994,
              "stderr": 52.06667549448632,
              "tstat": 3.946697054380978,
              "pvalue": 7.923671108894227e-05,
              "ci_lower": 103.44071083630621,
              "ci_upper": 307.5420787746926,
              "vif": 1.5950860884630123
            },
            {
              "feature": "Longitude",
              "coef": -16.487440362076484,
              "stderr": 57.786210128738276,
              "tstat": -0.2853179041391562,
              "pvalue": 0.7754005971716459,
              "ci_lower": -129.74841221440352,
              "ci_upper": 96.77353149025053,
              "vif": 3.0492279926088606
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 45.05357564600081,
              "residual": 25.94642435399919,
              "abs_error": 25.94642435399919,
              "pct_error": 36.54425965351999,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 45.05357564600081,
              "residual": 24.646424353999194,
              "abs_error": 24.646424353999194,
              "pct_error": 35.3607236068855,
              "rank": 2
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 40.00590052540997,
              "residual": 21.49409947459003,
              "abs_error": 21.49409947459003,
              "pct_error": 34.94975524323582,
              "rank": 3
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 45.23261491701351,
              "residual": -20.232614917013507,
              "abs_error": 20.232614917013507,
              "pct_error": 80.93045966805403,
              "rank": 4
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 43.68887670009099,
              "residual": 17.011123299909016,
              "abs_error": 17.011123299909016,
              "pct_error": 28.02491482686823,
              "rank": 5
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 39.55351551763715,
              "residual": 15.746484482362845,
              "abs_error": 15.746484482362845,
              "pct_error": 28.474655483477118,
              "rank": 6
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 29.19515349417361,
              "residual": -15.39515349417361,
              "abs_error": 15.39515349417361,
              "pct_error": 111.5590832911131,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 39.435199239899475,
              "residual": -14.935199239899475,
              "abs_error": 14.935199239899475,
              "pct_error": 60.959996897548876,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 44.960013711458714,
              "residual": 14.639986288541287,
              "abs_error": 14.639986288541287,
              "pct_error": 24.563735383458535,
              "rank": 9
            },
            {
              "index": 185,
              "actual": 21.5,
              "predicted": 36.0894978169099,
              "residual": -14.589497816909898,
              "abs_error": 14.589497816909898,
              "pct_error": 67.85812938097628,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "Distance to MRT",
            "Convenience Stores",
            "Latitude",
            "Longitude",
            "House Age"
          ],
          "rmse": 8.390052658418602,
          "mae": 6.383829247749368,
          "r2": 0.5611768366370214,
          "adj_r2": 0.5326818260290358,
          "f_stat": 85.53021593404007,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2664.444917779375,
              "stderr": 6941.29846923724,
              "tstat": -0.3838539618470207,
              "pvalue": 0.7010866902703027,
              "ci_lower": -16269.389917484365,
              "ci_upper": 10940.500081925617,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.004220668958697298,
              "stderr": 0.0007979698168101754,
              "tstat": -5.289258904013571,
              "pvalue": 1.2281294764554543e-07,
              "ci_lower": -0.0057846897996452415,
              "ci_upper": -0.0026566481177493543,
              "vif": 4.402577314234621
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2120671021964107,
              "stderr": 0.2157372824917178,
              "tstat": 5.618255167569111,
              "pvalue": 1.928954837311002e-08,
              "ci_lower": 0.7892220285126438,
              "ci_upper": 1.6349121758801775,
              "vif": 1.6255817066039908
            },
            {
              "feature": "Latitude",
              "coef": 229.32590029672917,
              "stderr": 49.56665095039229,
              "tstat": 4.626616805848857,
              "pvalue": 3.7168728326097892e-06,
              "ci_lower": 132.1752644339603,
              "ci_upper": 326.47653615949804,
              "vif": 1.6051234589492345
            },
            {
              "feature": "Longitude",
              "coef": -24.843409909340203,
              "stderr": 54.85591817973717,
              "tstat": -0.4528847703895863,
              "pvalue": 0.6506317179833465,
              "ci_lower": -132.36100954162507,
              "ci_upper": 82.67418972294465,
              "vif": 3.0511419506294577
            },
            {
              "feature": "House Age",
              "coef": -0.27318242128596326,
              "stderr": 0.044924878997161,
              "tstat": -6.080871610210165,
              "pvalue": 1.195309787881982e-09,
              "ci_lower": -0.3612351841203988,
              "ci_upper": -0.1851296584515277,
              "vif": 1.0248051843292774
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 34.84128553808544,
              "residual": 26.658714461914563,
              "abs_error": 26.658714461914563,
              "pct_error": 43.34750319010498,
              "rank": 1
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 37.05990302003056,
              "residual": 23.640096979969442,
              "abs_error": 23.640096979969442,
              "pct_error": 38.945794036193476,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 49.98293002331957,
              "residual": 21.017069976680432,
              "abs_error": 21.017069976680432,
              "pct_error": 29.60150700940906,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 49.98293002331957,
              "residual": 19.717069976680435,
              "abs_error": 19.717069976680435,
              "pct_error": 28.288479163099616,
              "rank": 4
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 35.99221412359657,
              "residual": 19.30778587640343,
              "abs_error": 19.30778587640343,
              "pct_error": 34.91462183798089,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 42.59038301642295,
              "residual": -17.590383016422948,
              "abs_error": 17.590383016422948,
              "pct_error": 70.36153206569179,
              "rank": 6
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 39.17418281810342,
              "residual": -17.47418281810342,
              "abs_error": 17.47418281810342,
              "pct_error": 80.52618810185908,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 39.07260248471084,
              "residual": -14.572602484710842,
              "abs_error": 14.572602484710842,
              "pct_error": 59.48001014167691,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.33147087812358,
              "residual": 14.26852912187642,
              "abs_error": 14.26852912187642,
              "pct_error": 23.940485103819494,
              "rank": 9
            },
            {
              "index": 9,
              "actual": 22.1,
              "predicted": 33.58247239386765,
              "residual": -11.482472393867646,
              "abs_error": 11.482472393867646,
              "pct_error": 51.95688866003459,
              "rank": 10
            }
          ]
        }
      ],
      "Forward SFS": [
        {
          "k": 1,
          "features": [
            "Distance to MRT"
          ],
          "rmse": 9.46895348816795,
          "mae": 7.180975428206026,
          "r2": 0.4410613557135661,
          "adj_r2": 0.4341608786236101,
          "f_stat": 269.2950256825916,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 45.44118418139559,
              "stderr": 0.7470609524983143,
              "tstat": 60.82660863137286,
              "pvalue": 1e-15,
              "ci_lower": 43.9769447144989,
              "ci_upper": 46.905423648292285,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.00699994521722145,
              "stderr": 0.0004265603415573798,
              "tstat": -16.410211018831518,
              "pvalue": 1e-15,
              "ci_lower": -0.007836003486673914,
              "ci_upper": -0.006163886947768985,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 43.390215632629186,
              "residual": 27.609784367370814,
              "abs_error": 27.609784367370814,
              "pct_error": 38.887020235733544,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 43.390215632629186,
              "residual": 26.309784367370817,
              "abs_error": 26.309784367370817,
              "pct_error": 37.747179867103036,
              "rank": 2
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 37.32506969950731,
              "residual": -23.52506969950731,
              "abs_error": 23.52506969950731,
              "pct_error": 170.47151956164717,
              "rank": 3
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 40.956045582863815,
              "residual": 20.543954417136185,
              "abs_error": 20.543954417136185,
              "pct_error": 33.40480393030274,
              "rank": 4
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.67148295755506,
              "residual": -18.171482957555057,
              "abs_error": 18.171482957555057,
              "pct_error": 74.16931819410227,
              "rank": 5
            },
            {
              "index": 99,
              "actual": 62.2,
              "predicted": 44.8079967168299,
              "residual": 17.392003283170105,
              "abs_error": 17.392003283170105,
              "pct_error": 27.961420069405314,
              "rank": 6
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.41592643141204,
              "residual": 16.184073568587962,
              "abs_error": 16.184073568587962,
              "pct_error": 27.15448585333551,
              "rank": 7
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 44.56625262876082,
              "residual": 16.13374737123918,
              "abs_error": 16.13374737123918,
              "pct_error": 26.57948496085532,
              "rank": 8
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 40.05540253145167,
              "residual": -15.05540253145167,
              "abs_error": 15.05540253145167,
              "pct_error": 60.22161012580668,
              "rank": 9
            },
            {
              "index": 273,
              "actual": 29.3,
              "predicted": 44.25029120152944,
              "residual": -14.950291201529442,
              "abs_error": 14.950291201529442,
              "pct_error": 51.02488464685816,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "Distance to MRT",
            "House Age"
          ],
          "rmse": 8.932466289174902,
          "mae": 6.670863062785488,
          "r2": 0.5026032510235422,
          "adj_r2": 0.4901683322991308,
          "f_stat": 152.87789839743354,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 49.22537527134423,
              "stderr": 1.1069883164091707,
              "tstat": 44.4678363282285,
              "pvalue": 1e-15,
              "ci_lower": 47.05567817118225,
              "ci_upper": 51.3950723715062,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.006927212636593777,
              "stderr": 0.0004147660241975671,
              "tstat": -16.701494897022016,
              "pvalue": 1e-15,
              "ci_lower": -0.007740154044021008,
              "ci_upper": -0.006114271229166546,
              "vif": 1.0015022955331414
            },
            {
              "feature": "House Age",
              "coef": -0.21913019259499014,
              "stderr": 0.04839807746654258,
              "tstat": -4.5276631648534815,
              "pvalue": 5.963954721039988e-06,
              "ci_lower": -0.3139904244294136,
              "ci_upper": -0.12426996076056669,
              "vif": 1.0015022955331412
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 36.92006536690435,
              "residual": 24.579934633095647,
              "abs_error": 24.579934633095647,
              "pct_error": 39.96737338714739,
              "rank": 1
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 47.19571720869005,
              "residual": 23.80428279130995,
              "abs_error": 23.80428279130995,
              "pct_error": 33.52715886099993,
              "rank": 2
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 47.19571720869005,
              "residual": 22.504282791309954,
              "abs_error": 22.504282791309954,
              "pct_error": 32.287349772324184,
              "rank": 3
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 39.30945769706811,
              "residual": 21.39054230293189,
              "abs_error": 21.39054230293189,
              "pct_error": 35.239773151452866,
              "rank": 4
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 34.24716376573384,
              "residual": -20.447163765733837,
              "abs_error": 20.447163765733837,
              "pct_error": 148.16785337488287,
              "rank": 5
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.649674119111445,
              "residual": -18.149674119111445,
              "abs_error": 18.149674119111445,
              "pct_error": 74.08030252698549,
              "rank": 6
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 37.65378327880933,
              "residual": 17.64621672119067,
              "abs_error": 17.64621672119067,
              "pct_error": 31.90997598768656,
              "rank": 7
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.583599663627425,
              "residual": 16.016400336372577,
              "abs_error": 16.016400336372577,
              "pct_error": 26.873154926799625,
              "rank": 8
            },
            {
              "index": 273,
              "actual": 29.3,
              "predicted": 45.15433766316056,
              "residual": -15.85433766316056,
              "abs_error": 15.85433766316056,
              "pct_error": 54.11036745105993,
              "rank": 9
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 37.368297041588114,
              "residual": -15.668297041588115,
              "abs_error": 15.668297041588115,
              "pct_error": 72.2041338322033,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "Distance to MRT",
            "House Age",
            "Latitude"
          ],
          "rmse": 8.64408258929506,
          "mae": 6.3853217192662335,
          "r2": 0.5342016069168831,
          "adj_r2": 0.5165130603441065,
          "f_stat": 120.6945921968197,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -6843.919481473842,
              "stderr": 1266.2379983245085,
              "tstat": -5.404923474520387,
              "pvalue": 6.483606815649691e-08,
              "ci_lower": -9325.745958189878,
              "ci_upper": -4362.093004757806,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.005347591495190374,
              "stderr": 0.0004923577025206372,
              "tstat": -10.861191909486232,
              "pvalue": 1e-15,
              "ci_lower": -0.006312612592130822,
              "ci_upper": -0.004382570398249925,
              "vif": 1.534463901638932
            },
            {
              "feature": "House Age",
              "coef": -0.245075611860958,
              "stderr": 0.04665849853565093,
              "tstat": -5.252539613414694,
              "pvalue": 1.5001618582528002e-07,
              "ci_lower": -0.3365262689908338,
              "ci_upper": -0.15362495473108218,
              "vif": 1.0120622385895297
            },
            {
              "feature": "Latitude",
              "coef": 276.01799448537435,
              "stderr": 50.70317790595424,
              "tstat": 5.443800682421538,
              "pvalue": 5.2155577558816065e-08,
              "ci_lower": 176.63976578970403,
              "ci_upper": 375.39622318104466,
              "vif": 1.5377104209256416
            }
          ],
          "outliers": [
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 36.559997515982104,
              "residual": 24.1400024840179,
              "abs_error": 24.1400024840179,
              "pct_error": 39.769361588167875,
              "rank": 1
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 37.57919670730371,
              "residual": 23.92080329269629,
              "abs_error": 23.92080329269629,
              "pct_error": 38.89561511007527,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 48.736582161537626,
              "residual": 22.263417838462374,
              "abs_error": 22.263417838462374,
              "pct_error": 31.3569265330456,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 48.736582161537626,
              "residual": 20.963417838462377,
              "abs_error": 20.963417838462377,
              "pct_error": 30.076639653461086,
              "rank": 4
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 39.32007861810871,
              "residual": -17.62007861810871,
              "abs_error": 17.62007861810871,
              "pct_error": 81.1985189774595,
              "rank": 5
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 38.43685521970201,
              "residual": 16.863144780297986,
              "abs_error": 16.863144780297986,
              "pct_error": 30.49393269493307,
              "rank": 6
            },
            {
              "index": 273,
              "actual": 29.3,
              "predicted": 45.12908965020506,
              "residual": -15.82908965020506,
              "abs_error": 15.82908965020506,
              "pct_error": 54.02419675837904,
              "rank": 7
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 40.416938146017856,
              "residual": -15.416938146017856,
              "abs_error": 15.416938146017856,
              "pct_error": 61.66775258407142,
              "rank": 8
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 28.649890492997656,
              "residual": -14.849890492997655,
              "abs_error": 14.849890492997655,
              "pct_error": 107.60790212317141,
              "rank": 9
            },
            {
              "index": 99,
              "actual": 62.2,
              "predicted": 47.39279276902198,
              "residual": 14.807207230978022,
              "abs_error": 14.807207230978022,
              "pct_error": 23.805799406717078,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "Distance to MRT",
            "House Age",
            "Latitude",
            "Convenience Stores"
          ],
          "rmse": 8.372583082898304,
          "mae": 6.379699622065403,
          "r2": 0.5630023492202558,
          "adj_r2": 0.540592213282833,
          "f_stat": 107.12271097970262,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -5758.582340239404,
              "stderr": 1225.2039608455036,
              "tstat": -4.700100982586974,
              "pvalue": 2.6003287302322447e-06,
              "ci_lower": -8159.982103496592,
              "ci_upper": -3357.182576982217,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.003951282437082676,
              "stderr": 0.0005312769777845166,
              "tstat": -7.437330436489002,
              "pvalue": 1.0274033087003278e-13,
              "ci_lower": -0.004992585313540328,
              "ci_upper": -0.002909979560625024,
              "vif": 1.956228649204282
            },
            {
              "feature": "House Age",
              "coef": -0.27267286966653315,
              "stderr": 0.044855997818312954,
              "tstat": -6.078849717511165,
              "pvalue": 1.210477391566854e-09,
              "ci_lower": -0.3605906253904265,
              "ci_upper": -0.18475511394263977,
              "vif": 1.024162332232922
            },
            {
              "feature": "Latitude",
              "coef": 232.30993091382302,
              "stderr": 49.06696982962215,
              "tstat": 4.734548143496228,
              "pvalue": 2.1954365606462394e-06,
              "ci_lower": 136.1386700477636,
              "ci_upper": 328.48119177988247,
              "vif": 1.5767606924530968
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2176480729992318,
              "stderr": 0.2151222554964297,
              "tstat": 5.66026081396976,
              "pvalue": 1.511431113079935e-08,
              "ci_lower": 0.7960084522262296,
              "ci_upper": 1.639287693772234,
              "vif": 1.62027723236274
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 34.8367866351883,
              "residual": 26.663213364811703,
              "abs_error": 26.663213364811703,
              "pct_error": 43.354818479368625,
              "rank": 1
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 36.989927691394925,
              "residual": 23.710072308605078,
              "abs_error": 23.710072308605078,
              "pct_error": 39.061074643500945,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 50.07319194150766,
              "residual": 20.92680805849234,
              "abs_error": 20.92680805849234,
              "pct_error": 29.47437754717231,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 50.07319194150766,
              "residual": 19.626808058492344,
              "abs_error": 19.626808058492344,
              "pct_error": 28.158978563116705,
              "rank": 4
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 35.98640178766626,
              "residual": 19.313598212333737,
              "abs_error": 19.313598212333737,
              "pct_error": 34.92513239120025,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 42.584814321175934,
              "residual": -17.584814321175934,
              "abs_error": 17.584814321175934,
              "pct_error": 70.33925728470373,
              "rank": 6
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 38.872252246213144,
              "residual": -17.172252246213144,
              "abs_error": 17.172252246213144,
              "pct_error": 79.13480297794075,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 38.86924764776311,
              "residual": -14.36924764776311,
              "abs_error": 14.36924764776311,
              "pct_error": 58.6499903990331,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.409989875329735,
              "residual": 14.190010124670266,
              "abs_error": 14.190010124670266,
              "pct_error": 23.808741819916555,
              "rank": 9
            },
            {
              "index": 9,
              "actual": 22.1,
              "predicted": 33.29797300040817,
              "residual": -11.197973000408169,
              "abs_error": 11.197973000408169,
              "pct_error": 50.66956108781977,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "Distance to MRT",
            "House Age",
            "Latitude",
            "Convenience Stores",
            "Longitude"
          ],
          "rmse": 8.390051884515064,
          "mae": 6.383828789932004,
          "r2": 0.5611769175916465,
          "adj_r2": 0.5326819122404547,
          "f_stat": 85.53021901376383,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2664.582165845004,
              "stderr": 6941.419802062725,
              "tstat": -0.3838670245895792,
              "pvalue": 0.7010770079816264,
              "ci_lower": -16269.764977887944,
              "ci_upper": 10940.600646197936,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.004220656558955257,
              "stderr": 0.0007979784940575554,
              "tstat": -5.289185849475833,
              "pvalue": 1.228620049351377e-07,
              "ci_lower": -0.005784694407308066,
              "ci_upper": -0.0026566187106024483,
              "vif": 4.402577314234198
            },
            {
              "feature": "House Age",
              "coef": -0.2731824123658094,
              "stderr": 0.04492487905021179,
              "tstat": -6.080871404472297,
              "pvalue": 1.1953113217964344e-09,
              "ci_lower": -0.36123517530422455,
              "ci_upper": -0.18512964942739432,
              "vif": 1.0248051843298005
            },
            {
              "feature": "Latitude",
              "coef": 229.32620023934433,
              "stderr": 49.566741219172876,
              "tstat": 4.6266144313445166,
              "pvalue": 3.716915426971107e-06,
              "ci_lower": 132.17538744976548,
              "ci_upper": 326.4770130289232,
              "vif": 1.6051234552478988
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2120672241996961,
              "stderr": 0.21573728491976324,
              "tstat": 5.618255669855523,
              "pvalue": 1.9289492309175403e-08,
              "ci_lower": 0.7892221457569601,
              "ci_upper": 1.6349123026424321,
              "vif": 1.6255817065967755
            },
            {
              "feature": "Longitude",
              "coef": -24.842342361611067,
              "stderr": 54.856841060224966,
              "tstat": -0.45285769069964726,
              "pvalue": 0.6506512186074382,
              "ci_lower": -132.361750839652,
              "ci_upper": 82.67706611642987,
              "vif": 3.051141950718454
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 34.84128406796435,
              "residual": 26.658715932035648,
              "abs_error": 26.658715932035648,
              "pct_error": 43.34750558054577,
              "rank": 1
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 37.059896361311985,
              "residual": 23.640103638688018,
              "abs_error": 23.640103638688018,
              "pct_error": 38.945805006075815,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 49.98293276184813,
              "residual": 21.017067238151867,
              "abs_error": 21.017067238151867,
              "pct_error": 29.601503152326575,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 49.98293276184813,
              "residual": 19.71706723815187,
              "abs_error": 19.71706723815187,
              "pct_error": 28.288475234077286,
              "rank": 4
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 35.99221264346761,
              "residual": 19.307787356532387,
              "abs_error": 19.307787356532387,
              "pct_error": 34.914624514525116,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 42.59038244973908,
              "residual": -17.59038244973908,
              "abs_error": 17.59038244973908,
              "pct_error": 70.36152979895633,
              "rank": 6
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 39.17416912682347,
              "residual": -17.474169126823472,
              "abs_error": 17.474169126823472,
              "pct_error": 80.5261250084031,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 39.07258902703916,
              "residual": -14.572589027039157,
              "abs_error": 14.572589027039157,
              "pct_error": 59.479955212404725,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.33147379961292,
              "residual": 14.268526200387079,
              "abs_error": 14.268526200387079,
              "pct_error": 23.940480201991743,
              "rank": 9
            },
            {
              "index": 9,
              "actual": 22.1,
              "predicted": 33.58245863799539,
              "residual": -11.482458637995386,
              "abs_error": 11.482458637995386,
              "pct_error": 51.95682641626871,
              "rank": 10
            }
          ]
        }
      ],
      "RFE": [
        {
          "k": 1,
          "features": [
            "Distance to MRT"
          ],
          "rmse": 9.46895348816795,
          "mae": 7.180975428206026,
          "r2": 0.4410613557135661,
          "adj_r2": 0.4341608786236101,
          "f_stat": 269.2950256825916,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 45.44118418139559,
              "stderr": 0.7470609524983143,
              "tstat": 60.82660863137286,
              "pvalue": 1e-15,
              "ci_lower": 43.9769447144989,
              "ci_upper": 46.905423648292285,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.00699994521722145,
              "stderr": 0.0004265603415573798,
              "tstat": -16.410211018831518,
              "pvalue": 1e-15,
              "ci_lower": -0.007836003486673914,
              "ci_upper": -0.006163886947768985,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 43.390215632629186,
              "residual": 27.609784367370814,
              "abs_error": 27.609784367370814,
              "pct_error": 38.887020235733544,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 43.390215632629186,
              "residual": 26.309784367370817,
              "abs_error": 26.309784367370817,
              "pct_error": 37.747179867103036,
              "rank": 2
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 37.32506969950731,
              "residual": -23.52506969950731,
              "abs_error": 23.52506969950731,
              "pct_error": 170.47151956164717,
              "rank": 3
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 40.956045582863815,
              "residual": 20.543954417136185,
              "abs_error": 20.543954417136185,
              "pct_error": 33.40480393030274,
              "rank": 4
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.67148295755506,
              "residual": -18.171482957555057,
              "abs_error": 18.171482957555057,
              "pct_error": 74.16931819410227,
              "rank": 5
            },
            {
              "index": 99,
              "actual": 62.2,
              "predicted": 44.8079967168299,
              "residual": 17.392003283170105,
              "abs_error": 17.392003283170105,
              "pct_error": 27.961420069405314,
              "rank": 6
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.41592643141204,
              "residual": 16.184073568587962,
              "abs_error": 16.184073568587962,
              "pct_error": 27.15448585333551,
              "rank": 7
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 44.56625262876082,
              "residual": 16.13374737123918,
              "abs_error": 16.13374737123918,
              "pct_error": 26.57948496085532,
              "rank": 8
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 40.05540253145167,
              "residual": -15.05540253145167,
              "abs_error": 15.05540253145167,
              "pct_error": 60.22161012580668,
              "rank": 9
            },
            {
              "index": 273,
              "actual": 29.3,
              "predicted": 44.25029120152944,
              "residual": -14.950291201529442,
              "abs_error": 14.950291201529442,
              "pct_error": 51.02488464685816,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "Distance to MRT",
            "Convenience Stores"
          ],
          "rmse": 9.15642569076311,
          "mae": 6.917253683732183,
          "r2": 0.4773485963547548,
          "adj_r2": 0.4642823112636236,
          "f_stat": 160.8008630397959,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 38.62878446798941,
              "stderr": 1.4500470256737368,
              "tstat": 26.639677047743525,
              "pvalue": 1e-15,
              "ci_lower": 35.786692297668885,
              "ci_upper": 41.47087663830994,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.005350174932343965,
              "stderr": 0.000510637303932114,
              "tstat": -10.477446303169494,
              "pvalue": 1e-15,
              "ci_lower": -0.006351024048050909,
              "ci_upper": -0.004349325816637021,
              "vif": 1.55595095693928
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2279556443311488,
              "stderr": 0.22719147450588698,
              "tstat": 5.404937165894093,
              "pvalue": 6.48311158704363e-08,
              "ci_lower": 0.7826603542996103,
              "ci_upper": 1.6732509343626871,
              "vif": 1.5559509569392802
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 44.42892884918437,
              "residual": 26.571071150815627,
              "abs_error": 26.571071150815627,
              "pct_error": 37.42404387438821,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 44.42892884918437,
              "residual": 25.27107115081563,
              "abs_error": 25.27107115081563,
              "pct_error": 36.25691700260492,
              "rank": 2
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 38.88458512999023,
              "residual": 22.615414870009772,
              "abs_error": 22.615414870009772,
              "pct_error": 36.77303230895898,
              "rank": 3
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 32.42550274198347,
              "residual": -18.62550274198347,
              "abs_error": 18.62550274198347,
              "pct_error": 134.96741117379327,
              "rank": 4
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.65163382834244,
              "residual": -18.15163382834244,
              "abs_error": 18.15163382834244,
              "pct_error": 74.08830134017322,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 43.108031194767236,
              "residual": -18.108031194767236,
              "abs_error": 18.108031194767236,
              "pct_error": 72.43212477906894,
              "rank": 6
            },
            {
              "index": 88,
              "actual": 48.0,
              "predicted": 31.10413793789289,
              "residual": 16.89586206210711,
              "abs_error": 16.89586206210711,
              "pct_error": 35.199712629389815,
              "rank": 7
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 38.469654453182265,
              "residual": 16.830345546817732,
              "abs_error": 16.830345546817732,
              "pct_error": 30.43462124198505,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.22062439737973,
              "residual": 16.37937560262027,
              "abs_error": 16.37937560262027,
              "pct_error": 27.482173829899786,
              "rank": 9
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 45.327793548972714,
              "residual": 15.372206451027289,
              "abs_error": 15.372206451027289,
              "pct_error": 25.324887069237707,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "Distance to MRT",
            "Convenience Stores",
            "House Age"
          ],
          "rmse": 8.693055722779677,
          "mae": 6.619697823865625,
          "r2": 0.5289086851210225,
          "adj_r2": 0.5110191415180234,
          "f_stat": 127.03828398383307,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42.20054277386553,
              "stderr": 1.5318471222519034,
              "tstat": 27.54879528175651,
              "pvalue": 1e-15,
              "ci_lower": 39.1981224142518,
              "ci_upper": 45.20296313347926,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.005064037255020901,
              "stderr": 0.000491817594570552,
              "tstat": -10.296576029254798,
              "pvalue": 1e-15,
              "ci_lower": -0.0060279997403791825,
              "ci_upper": -0.004100074769662619,
              "vif": 1.5733867303159699
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.3779331292664656,
              "stderr": 0.21928799803648857,
              "tstat": 6.28366869871822,
              "pvalue": 3.3067501253410316e-10,
              "ci_lower": 0.948128653114948,
              "ci_upper": 1.8077376054179832,
              "vif": 1.5801492242406823
            },
            {
              "feature": "House Age",
              "coef": -0.25500955303772127,
              "stderr": 0.046141141043239554,
              "tstat": -5.526728365879552,
              "pvalue": 3.26257501062937e-08,
              "ci_lower": -0.3454461894824708,
              "ci_upper": -0.16457291659297174,
              "vif": 1.0170777351973521
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 33.93477253446217,
              "residual": 27.56522746553783,
              "abs_error": 27.56522746553783,
              "pct_error": 44.821508074045255,
              "rank": 1
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 48.98438977462516,
              "residual": 22.015610225374843,
              "abs_error": 22.015610225374843,
              "pct_error": 31.00790172588006,
              "rank": 2
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 39.30328691565666,
              "residual": 21.39671308434334,
              "abs_error": 21.39671308434334,
              "pct_error": 35.24993918343219,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 48.98438977462516,
              "residual": 20.715610225374846,
              "abs_error": 20.715610225374846,
              "pct_error": 29.721105057926607,
              "rank": 4
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 35.021088558382715,
              "residual": 20.278911441617282,
              "abs_error": 20.278911441617282,
              "pct_error": 36.67072593420847,
              "rank": 5
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.62382982036851,
              "residual": -18.123829820368513,
              "abs_error": 18.123829820368513,
              "pct_error": 73.97481559334086,
              "rank": 6
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.39189827377021,
              "residual": 16.208101726229792,
              "abs_error": 16.208101726229792,
              "pct_error": 27.194801554076832,
              "rank": 7
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 37.21127426769638,
              "residual": -15.511274267696383,
              "abs_error": 15.511274267696383,
              "pct_error": 71.480526579246,
              "rank": 8
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 40.401504427074485,
              "residual": -15.401504427074485,
              "abs_error": 15.401504427074485,
              "pct_error": 61.60601770829794,
              "rank": 9
            },
            {
              "index": 88,
              "actual": 48.0,
              "predicted": 32.808743835250766,
              "residual": 15.191256164749234,
              "abs_error": 15.191256164749234,
              "pct_error": 31.64845034322757,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "Distance to MRT",
            "Convenience Stores",
            "House Age",
            "Latitude"
          ],
          "rmse": 8.372583081625995,
          "mae": 6.37969961935537,
          "r2": 0.5630023493530694,
          "adj_r2": 0.5405922134224574,
          "f_stat": 107.12271110791724,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -5758.582406572882,
              "stderr": 1225.2039689125443,
              "tstat": -4.70010100578113,
              "pvalue": 2.600328434887038e-06,
              "ci_lower": -8159.982185641469,
              "ci_upper": -3357.1826275042954,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.00395128242434158,
              "stderr": 0.0005312769785617834,
              "tstat": -7.437330401626045,
              "pvalue": 1.0274035797488374e-13,
              "ci_lower": -0.004992585302322675,
              "ci_upper": -0.0029099795463604842,
              "vif": 1.9562286492042802
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2176480711772524,
              "stderr": 0.21512225552364497,
              "tstat": 5.660260804784169,
              "pvalue": 1.5114311939828003e-08,
              "ci_lower": 0.7960084503509082,
              "ci_upper": 1.6392876920035966,
              "vif": 1.62027723236274
            },
            {
              "feature": "House Age",
              "coef": -0.2726728698672833,
              "stderr": 0.04485599781937628,
              "tstat": -6.0788497218425,
              "pvalue": 1.2104773588744315e-09,
              "ci_lower": -0.36059062559326077,
              "ci_upper": -0.1847551141413058,
              "vif": 1.0241623322329882
            },
            {
              "feature": "Latitude",
              "coef": 232.30993357044815,
              "stderr": 49.06697015266611,
              "tstat": 4.7345481664680555,
              "pvalue": 2.1954363120041096e-06,
              "ci_lower": 136.13867207122257,
              "ci_upper": 328.48119506967373,
              "vif": 1.576760692453116
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 34.83678664808758,
              "residual": 26.663213351912418,
              "abs_error": 26.663213351912418,
              "pct_error": 43.35481845839417,
              "rank": 1
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 36.989927667556,
              "residual": 23.710072332444,
              "abs_error": 23.710072332444,
              "pct_error": 39.0610746827743,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 50.07319195652508,
              "residual": 20.92680804347492,
              "abs_error": 20.92680804347492,
              "pct_error": 29.474377526021016,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 50.07319195652508,
              "residual": 19.626808043474924,
              "abs_error": 19.626808043474924,
              "pct_error": 28.158978541570907,
              "rank": 4
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 35.986401801284046,
              "residual": 19.31359819871595,
              "abs_error": 19.31359819871595,
              "pct_error": 34.92513236657496,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 42.584814348766486,
              "residual": -17.584814348766486,
              "abs_error": 17.584814348766486,
              "pct_error": 70.33925739506594,
              "rank": 6
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 38.872252267769,
              "residual": -17.172252267769,
              "abs_error": 17.172252267769,
              "pct_error": 79.1348030772765,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 38.86924760740658,
              "residual": -14.369247607406578,
              "abs_error": 14.369247607406578,
              "pct_error": 58.64999023431257,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.40998990098433,
              "residual": 14.190010099015673,
              "abs_error": 14.190010099015673,
              "pct_error": 23.808741776871933,
              "rank": 9
            },
            {
              "index": 9,
              "actual": 22.1,
              "predicted": 33.29797300937389,
              "residual": -11.19797300937389,
              "abs_error": 11.19797300937389,
              "pct_error": 50.669561128388644,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "Distance to MRT",
            "Convenience Stores",
            "House Age",
            "Latitude",
            "Longitude"
          ],
          "rmse": 8.390053288473748,
          "mae": 6.383829577812,
          "r2": 0.561176770729735,
          "adj_r2": 0.5326817558420556,
          "f_stat": 85.5302135890115,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2664.34041863261,
              "stderr": 6941.411600575966,
              "tstat": -0.3838326513315441,
              "pvalue": 0.7011024860285807,
              "ci_lower": -16269.507155761503,
              "ci_upper": 10940.826318496283,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.004220678399780761,
              "stderr": 0.0007979775571060219,
              "tstat": -5.28921943003967,
              "pvalue": 1.228394526957939e-07,
              "ci_lower": -0.005784714411708564,
              "ci_upper": -0.002656642387852958,
              "vif": 4.402577314234632
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2120670093078332,
              "stderr": 0.21573728833161054,
              "tstat": 5.618254584922569,
              "pvalue": 1.9289613406836607e-08,
              "ci_lower": 0.7892219241778765,
              "ci_upper": 1.63491209443779,
              "vif": 1.6255817065967755
            },
            {
              "feature": "House Age",
              "coef": -0.27318242807719983,
              "stderr": 0.04492487918436469,
              "tstat": -6.080871736039663,
              "pvalue": 1.1953088497392217e-09,
              "ci_lower": -0.36123519127855463,
              "ci_upper": -0.18512966487584503,
              "vif": 1.0248051843292774
            },
            {
              "feature": "Latitude",
              "coef": 229.3256719186837,
              "stderr": 49.56668429390186,
              "tstat": 4.6266090860327616,
              "pvalue": 3.717011314016848e-06,
              "ci_lower": 132.17497070263607,
              "ci_upper": 326.4763731347313,
              "vif": 1.6051234613133223
            },
            {
              "feature": "Longitude",
              "coef": -24.844222731448546,
              "stderr": 54.856812255696816,
              "tstat": -0.45289220627048926,
              "pvalue": 0.6506263632992528,
              "ci_lower": -132.3635747526143,
              "ci_upper": 82.6751292897172,
              "vif": 3.0511419506892667
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 34.84128614503925,
              "residual": 26.65871385496075,
              "abs_error": 26.65871385496075,
              "pct_error": 43.34750220318821,
              "rank": 1
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 37.05990757760128,
              "residual": 23.640092422398723,
              "abs_error": 23.640092422398723,
              "pct_error": 38.945786527839736,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 49.98292742583453,
              "residual": 21.017072574165468,
              "abs_error": 21.017072574165468,
              "pct_error": 29.60151066783869,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 49.98292742583453,
              "residual": 19.71707257416547,
              "abs_error": 19.71707257416547,
              "pct_error": 28.288482889763944,
              "rank": 4
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 35.99221473816715,
              "residual": 19.307785261832848,
              "abs_error": 19.307785261832848,
              "pct_error": 34.91462072664168,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 42.590382935486105,
              "residual": -17.590382935486105,
              "abs_error": 17.590382935486105,
              "pct_error": 70.36153174194442,
              "rank": 6
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 39.17419273012729,
              "residual": -17.47419273012729,
              "abs_error": 17.47419273012729,
              "pct_error": 80.52623377938843,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 39.072612218970335,
              "residual": -14.572612218970335,
              "abs_error": 14.572612218970335,
              "pct_error": 59.48004987334831,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.331468141318965,
              "residual": 14.268531858681037,
              "abs_error": 14.268531858681037,
              "pct_error": 23.94048969577355,
              "rank": 9
            },
            {
              "index": 9,
              "actual": 22.1,
              "predicted": 33.582482355093816,
              "residual": -11.482482355093815,
              "abs_error": 11.482482355093815,
              "pct_error": 51.95693373345617,
              "rank": 10
            }
          ]
        }
      ],
      "ElasticNet": [
        {
          "k": 1,
          "features": [
            "Distance to MRT"
          ],
          "rmse": 9.46895348816795,
          "mae": 7.180975428206026,
          "r2": 0.4410613557135661,
          "adj_r2": 0.4341608786236101,
          "f_stat": 269.2950256825916,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 45.44118418139559,
              "stderr": 0.7470609524983143,
              "tstat": 60.82660863137286,
              "pvalue": 1e-15,
              "ci_lower": 43.9769447144989,
              "ci_upper": 46.905423648292285,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.00699994521722145,
              "stderr": 0.0004265603415573798,
              "tstat": -16.410211018831518,
              "pvalue": 1e-15,
              "ci_lower": -0.007836003486673914,
              "ci_upper": -0.006163886947768985,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 43.390215632629186,
              "residual": 27.609784367370814,
              "abs_error": 27.609784367370814,
              "pct_error": 38.887020235733544,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 43.390215632629186,
              "residual": 26.309784367370817,
              "abs_error": 26.309784367370817,
              "pct_error": 37.747179867103036,
              "rank": 2
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 37.32506969950731,
              "residual": -23.52506969950731,
              "abs_error": 23.52506969950731,
              "pct_error": 170.47151956164717,
              "rank": 3
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 40.956045582863815,
              "residual": 20.543954417136185,
              "abs_error": 20.543954417136185,
              "pct_error": 33.40480393030274,
              "rank": 4
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.67148295755506,
              "residual": -18.171482957555057,
              "abs_error": 18.171482957555057,
              "pct_error": 74.16931819410227,
              "rank": 5
            },
            {
              "index": 99,
              "actual": 62.2,
              "predicted": 44.8079967168299,
              "residual": 17.392003283170105,
              "abs_error": 17.392003283170105,
              "pct_error": 27.961420069405314,
              "rank": 6
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.41592643141204,
              "residual": 16.184073568587962,
              "abs_error": 16.184073568587962,
              "pct_error": 27.15448585333551,
              "rank": 7
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 44.56625262876082,
              "residual": 16.13374737123918,
              "abs_error": 16.13374737123918,
              "pct_error": 26.57948496085532,
              "rank": 8
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 40.05540253145167,
              "residual": -15.05540253145167,
              "abs_error": 15.05540253145167,
              "pct_error": 60.22161012580668,
              "rank": 9
            },
            {
              "index": 273,
              "actual": 29.3,
              "predicted": 44.25029120152944,
              "residual": -14.950291201529442,
              "abs_error": 14.950291201529442,
              "pct_error": 51.02488464685816,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "Distance to MRT",
            "Convenience Stores"
          ],
          "rmse": 9.15642569076311,
          "mae": 6.917253683732183,
          "r2": 0.4773485963547548,
          "adj_r2": 0.4642823112636236,
          "f_stat": 160.8008630397959,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 38.62878446798941,
              "stderr": 1.4500470256737368,
              "tstat": 26.639677047743525,
              "pvalue": 1e-15,
              "ci_lower": 35.786692297668885,
              "ci_upper": 41.47087663830994,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.005350174932343965,
              "stderr": 0.000510637303932114,
              "tstat": -10.477446303169494,
              "pvalue": 1e-15,
              "ci_lower": -0.006351024048050909,
              "ci_upper": -0.004349325816637021,
              "vif": 1.55595095693928
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2279556443311488,
              "stderr": 0.22719147450588698,
              "tstat": 5.404937165894093,
              "pvalue": 6.48311158704363e-08,
              "ci_lower": 0.7826603542996103,
              "ci_upper": 1.6732509343626871,
              "vif": 1.5559509569392802
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 44.42892884918437,
              "residual": 26.571071150815627,
              "abs_error": 26.571071150815627,
              "pct_error": 37.42404387438821,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 44.42892884918437,
              "residual": 25.27107115081563,
              "abs_error": 25.27107115081563,
              "pct_error": 36.25691700260492,
              "rank": 2
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 38.88458512999023,
              "residual": 22.615414870009772,
              "abs_error": 22.615414870009772,
              "pct_error": 36.77303230895898,
              "rank": 3
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 32.42550274198347,
              "residual": -18.62550274198347,
              "abs_error": 18.62550274198347,
              "pct_error": 134.96741117379327,
              "rank": 4
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.65163382834244,
              "residual": -18.15163382834244,
              "abs_error": 18.15163382834244,
              "pct_error": 74.08830134017322,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 43.108031194767236,
              "residual": -18.108031194767236,
              "abs_error": 18.108031194767236,
              "pct_error": 72.43212477906894,
              "rank": 6
            },
            {
              "index": 88,
              "actual": 48.0,
              "predicted": 31.10413793789289,
              "residual": 16.89586206210711,
              "abs_error": 16.89586206210711,
              "pct_error": 35.199712629389815,
              "rank": 7
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 38.469654453182265,
              "residual": 16.830345546817732,
              "abs_error": 16.830345546817732,
              "pct_error": 30.43462124198505,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.22062439737973,
              "residual": 16.37937560262027,
              "abs_error": 16.37937560262027,
              "pct_error": 27.482173829899786,
              "rank": 9
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 45.327793548972714,
              "residual": 15.372206451027289,
              "abs_error": 15.372206451027289,
              "pct_error": 25.324887069237707,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "Distance to MRT",
            "Convenience Stores",
            "Latitude"
          ],
          "rmse": 8.893941478788319,
          "mae": 6.796716978976001,
          "r2": 0.5068844411682454,
          "adj_r2": 0.48815853387083696,
          "f_stat": 117.58483474145692,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -5142.944351080023,
              "stderr": 1286.3853945718997,
              "tstat": -3.9979809882648425,
              "pvalue": 6.388508096250928e-05,
              "ci_lower": -7664.259724440946,
              "ci_upper": -2621.6289777190996,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.004373947526157102,
              "stderr": 0.0005549073814904473,
              "tstat": -7.882301933719004,
              "pvalue": 3.2140423505028133e-15,
              "ci_lower": -0.005461565993878379,
              "ci_upper": -0.003286329058435825,
              "vif": 1.922721842231245
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.0755075278086415,
              "stderr": 0.22529706729808904,
              "tstat": 4.773730704561922,
              "pvalue": 1.8084416569309022e-06,
              "ci_lower": 0.633925275904387,
              "ci_upper": 1.517089779712896,
              "vif": 1.6011342648634264
            },
            {
              "feature": "Latitude",
              "coef": 207.50295010134826,
              "stderr": 51.51497340596514,
              "tstat": 4.028012369648639,
              "pvalue": 5.625038485885093e-05,
              "ci_lower": 106.5336022256566,
              "ci_upper": 308.47229797703994,
              "vif": 1.5658535210250724
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 45.11962306376972,
              "residual": 25.880376936230277,
              "abs_error": 25.880376936230277,
              "pct_error": 36.45123512145109,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 45.11962306376972,
              "residual": 24.58037693623028,
              "abs_error": 24.58037693623028,
              "pct_error": 35.26596404050255,
              "rank": 2
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 39.99651794178226,
              "residual": 21.50348205821774,
              "abs_error": 21.50348205821774,
              "pct_error": 34.965011476776816,
              "rank": 3
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 45.22564833805518,
              "residual": -20.22564833805518,
              "abs_error": 20.22564833805518,
              "pct_error": 80.90259335222072,
              "rank": 4
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 43.634193550133205,
              "residual": 17.0658064498668,
              "abs_error": 17.0658064498668,
              "pct_error": 28.11500238857792,
              "rank": 5
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 39.54524659791605,
              "residual": 15.75475340208395,
              "abs_error": 15.75475340208395,
              "pct_error": 28.48960832203246,
              "rank": 6
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 29.09986181358272,
              "residual": -15.29986181358272,
              "abs_error": 15.29986181358272,
              "pct_error": 110.86856386654145,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 39.299701096114404,
              "residual": -14.799701096114404,
              "abs_error": 14.799701096114404,
              "pct_error": 60.40694324944654,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.01261958619034,
              "residual": 14.587380413809662,
              "abs_error": 14.587380413809662,
              "pct_error": 24.47547049296923,
              "rank": 9
            },
            {
              "index": 185,
              "actual": 21.5,
              "predicted": 35.891865922516445,
              "residual": -14.391865922516445,
              "abs_error": 14.391865922516445,
              "pct_error": 66.93891126751835,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "Distance to MRT",
            "Convenience Stores",
            "Latitude",
            "Longitude"
          ],
          "rmse": 8.90728280303666,
          "mae": 6.802577057732846,
          "r2": 0.5054039392240199,
          "adj_r2": 0.48004003867140554,
          "f_stat": 87.96122215077462,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -3088.732067668105,
              "stderr": 7314.018991516905,
              "tstat": -0.422302987078724,
              "pvalue": 0.6728038781394511,
              "ci_lower": -17424.20929104124,
              "ci_upper": 11246.745155705028,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.004553253285243449,
              "stderr": 0.0008388785685674592,
              "tstat": -5.427785922602569,
              "pvalue": 5.705741747171895e-08,
              "ci_lower": -0.006197455279635669,
              "ci_upper": -0.0029090512908512287,
              "vif": 4.381893819740087
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.071627720414289,
              "stderr": 0.22602368167511727,
              "tstat": 4.741218762884453,
              "pvalue": 2.124363961407957e-06,
              "ci_lower": 0.6286213043310591,
              "ci_upper": 1.5146341364975189,
              "vif": 1.6069520282129575
            },
            {
              "feature": "Latitude",
              "coef": 205.4913948054994,
              "stderr": 52.06667549448632,
              "tstat": 3.946697054380978,
              "pvalue": 7.923671108894227e-05,
              "ci_lower": 103.44071083630621,
              "ci_upper": 307.5420787746926,
              "vif": 1.5950860884630123
            },
            {
              "feature": "Longitude",
              "coef": -16.487440362076484,
              "stderr": 57.786210128738276,
              "tstat": -0.2853179041391562,
              "pvalue": 0.7754005971716459,
              "ci_lower": -129.74841221440352,
              "ci_upper": 96.77353149025053,
              "vif": 3.0492279926088606
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 45.05357564600081,
              "residual": 25.94642435399919,
              "abs_error": 25.94642435399919,
              "pct_error": 36.54425965351999,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 45.05357564600081,
              "residual": 24.646424353999194,
              "abs_error": 24.646424353999194,
              "pct_error": 35.3607236068855,
              "rank": 2
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 40.00590052540997,
              "residual": 21.49409947459003,
              "abs_error": 21.49409947459003,
              "pct_error": 34.94975524323582,
              "rank": 3
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 45.23261491701351,
              "residual": -20.232614917013507,
              "abs_error": 20.232614917013507,
              "pct_error": 80.93045966805403,
              "rank": 4
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 43.68887670009099,
              "residual": 17.011123299909016,
              "abs_error": 17.011123299909016,
              "pct_error": 28.02491482686823,
              "rank": 5
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 39.55351551763715,
              "residual": 15.746484482362845,
              "abs_error": 15.746484482362845,
              "pct_error": 28.474655483477118,
              "rank": 6
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 29.19515349417361,
              "residual": -15.39515349417361,
              "abs_error": 15.39515349417361,
              "pct_error": 111.5590832911131,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 39.435199239899475,
              "residual": -14.935199239899475,
              "abs_error": 14.935199239899475,
              "pct_error": 60.959996897548876,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 44.960013711458714,
              "residual": 14.639986288541287,
              "abs_error": 14.639986288541287,
              "pct_error": 24.563735383458535,
              "rank": 9
            },
            {
              "index": 185,
              "actual": 21.5,
              "predicted": 36.0894978169099,
              "residual": -14.589497816909898,
              "abs_error": 14.589497816909898,
              "pct_error": 67.85812938097628,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "Distance to MRT",
            "Convenience Stores",
            "Latitude",
            "Longitude",
            "House Age"
          ],
          "rmse": 8.390052658418602,
          "mae": 6.383829247749368,
          "r2": 0.5611768366370214,
          "adj_r2": 0.5326818260290358,
          "f_stat": 85.53021593404007,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2664.444917779375,
              "stderr": 6941.29846923724,
              "tstat": -0.3838539618470207,
              "pvalue": 0.7010866902703027,
              "ci_lower": -16269.389917484365,
              "ci_upper": 10940.500081925617,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.004220668958697298,
              "stderr": 0.0007979698168101754,
              "tstat": -5.289258904013571,
              "pvalue": 1.2281294764554543e-07,
              "ci_lower": -0.0057846897996452415,
              "ci_upper": -0.0026566481177493543,
              "vif": 4.402577314234621
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2120671021964107,
              "stderr": 0.2157372824917178,
              "tstat": 5.618255167569111,
              "pvalue": 1.928954837311002e-08,
              "ci_lower": 0.7892220285126438,
              "ci_upper": 1.6349121758801775,
              "vif": 1.6255817066039908
            },
            {
              "feature": "Latitude",
              "coef": 229.32590029672917,
              "stderr": 49.56665095039229,
              "tstat": 4.626616805848857,
              "pvalue": 3.7168728326097892e-06,
              "ci_lower": 132.1752644339603,
              "ci_upper": 326.47653615949804,
              "vif": 1.6051234589492345
            },
            {
              "feature": "Longitude",
              "coef": -24.843409909340203,
              "stderr": 54.85591817973717,
              "tstat": -0.4528847703895863,
              "pvalue": 0.6506317179833465,
              "ci_lower": -132.36100954162507,
              "ci_upper": 82.67418972294465,
              "vif": 3.0511419506294577
            },
            {
              "feature": "House Age",
              "coef": -0.27318242128596326,
              "stderr": 0.044924878997161,
              "tstat": -6.080871610210165,
              "pvalue": 1.195309787881982e-09,
              "ci_lower": -0.3612351841203988,
              "ci_upper": -0.1851296584515277,
              "vif": 1.0248051843292774
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 34.84128553808544,
              "residual": 26.658714461914563,
              "abs_error": 26.658714461914563,
              "pct_error": 43.34750319010498,
              "rank": 1
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 37.05990302003056,
              "residual": 23.640096979969442,
              "abs_error": 23.640096979969442,
              "pct_error": 38.945794036193476,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 49.98293002331957,
              "residual": 21.017069976680432,
              "abs_error": 21.017069976680432,
              "pct_error": 29.60150700940906,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 49.98293002331957,
              "residual": 19.717069976680435,
              "abs_error": 19.717069976680435,
              "pct_error": 28.288479163099616,
              "rank": 4
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 35.99221412359657,
              "residual": 19.30778587640343,
              "abs_error": 19.30778587640343,
              "pct_error": 34.91462183798089,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 42.59038301642295,
              "residual": -17.590383016422948,
              "abs_error": 17.590383016422948,
              "pct_error": 70.36153206569179,
              "rank": 6
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 39.17418281810342,
              "residual": -17.47418281810342,
              "abs_error": 17.47418281810342,
              "pct_error": 80.52618810185908,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 39.07260248471084,
              "residual": -14.572602484710842,
              "abs_error": 14.572602484710842,
              "pct_error": 59.48001014167691,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.33147087812358,
              "residual": 14.26852912187642,
              "abs_error": 14.26852912187642,
              "pct_error": 23.940485103819494,
              "rank": 9
            },
            {
              "index": 9,
              "actual": 22.1,
              "predicted": 33.58247239386765,
              "residual": -11.482472393867646,
              "abs_error": 11.482472393867646,
              "pct_error": 51.95688866003459,
              "rank": 10
            }
          ]
        }
      ],
      "Exhaustive": [
        {
          "k": 1,
          "features": [
            "Distance to MRT"
          ],
          "rmse": 9.46895348816795,
          "mae": 7.180975428206026,
          "r2": 0.4410613557135661,
          "adj_r2": 0.4341608786236101,
          "f_stat": 269.2950256825916,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 45.44118418139559,
              "stderr": 0.7470609524983143,
              "tstat": 60.82660863137286,
              "pvalue": 1e-15,
              "ci_lower": 43.9769447144989,
              "ci_upper": 46.905423648292285,
              "vif": null
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.00699994521722145,
              "stderr": 0.0004265603415573798,
              "tstat": -16.410211018831518,
              "pvalue": 1e-15,
              "ci_lower": -0.007836003486673914,
              "ci_upper": -0.006163886947768985,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 43.390215632629186,
              "residual": 27.609784367370814,
              "abs_error": 27.609784367370814,
              "pct_error": 38.887020235733544,
              "rank": 1
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 43.390215632629186,
              "residual": 26.309784367370817,
              "abs_error": 26.309784367370817,
              "pct_error": 37.747179867103036,
              "rank": 2
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 37.32506969950731,
              "residual": -23.52506969950731,
              "abs_error": 23.52506969950731,
              "pct_error": 170.47151956164717,
              "rank": 3
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 40.956045582863815,
              "residual": 20.543954417136185,
              "abs_error": 20.543954417136185,
              "pct_error": 33.40480393030274,
              "rank": 4
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.67148295755506,
              "residual": -18.171482957555057,
              "abs_error": 18.171482957555057,
              "pct_error": 74.16931819410227,
              "rank": 5
            },
            {
              "index": 99,
              "actual": 62.2,
              "predicted": 44.8079967168299,
              "residual": 17.392003283170105,
              "abs_error": 17.392003283170105,
              "pct_error": 27.961420069405314,
              "rank": 6
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.41592643141204,
              "residual": 16.184073568587962,
              "abs_error": 16.184073568587962,
              "pct_error": 27.15448585333551,
              "rank": 7
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 44.56625262876082,
              "residual": 16.13374737123918,
              "abs_error": 16.13374737123918,
              "pct_error": 26.57948496085532,
              "rank": 8
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 40.05540253145167,
              "residual": -15.05540253145167,
              "abs_error": 15.05540253145167,
              "pct_error": 60.22161012580668,
              "rank": 9
            },
            {
              "index": 273,
              "actual": 29.3,
              "predicted": 44.25029120152944,
              "residual": -14.950291201529442,
              "abs_error": 14.950291201529442,
              "pct_error": 51.02488464685816,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "House Age",
            "Distance to MRT"
          ],
          "rmse": 8.932466289176272,
          "mae": 6.67086306278617,
          "r2": 0.5026032510233898,
          "adj_r2": 0.4901683322989745,
          "f_stat": 152.87789839727844,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 49.22537527132918,
              "stderr": 1.1069883164091745,
              "tstat": 44.46783632821475,
              "pvalue": 1e-15,
              "ci_lower": 47.055678171167195,
              "ci_upper": 51.39507237149116,
              "vif": null
            },
            {
              "feature": "House Age",
              "coef": -0.21913019259449007,
              "stderr": 0.04839807746654264,
              "tstat": -4.527663164843143,
              "pvalue": 5.963954721331678e-06,
              "ci_lower": -0.3139904244289137,
              "ci_upper": -0.1242699607600665,
              "vif": 1.0015022955331412
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.006927212636591284,
              "stderr": 0.0004147660241975909,
              "tstat": -16.70149489701505,
              "pvalue": 1e-15,
              "ci_lower": -0.007740154044018562,
              "ci_upper": -0.0061142712291640065,
              "vif": 1.0015022955331414
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 36.92006536690886,
              "residual": 24.579934633091142,
              "abs_error": 24.579934633091142,
              "pct_error": 39.96737338714007,
              "rank": 1
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 47.19571720867573,
              "residual": 23.80428279132427,
              "abs_error": 23.80428279132427,
              "pct_error": 33.5271588610201,
              "rank": 2
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 47.19571720867573,
              "residual": 22.504282791324272,
              "abs_error": 22.504282791324272,
              "pct_error": 32.28734977234472,
              "rank": 3
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 39.30945769707403,
              "residual": 21.390542302925972,
              "abs_error": 21.390542302925972,
              "pct_error": 35.23977315144312,
              "rank": 4
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 34.24716376573753,
              "residual": -20.447163765737532,
              "abs_error": 20.447163765737532,
              "pct_error": 148.16785337490964,
              "rank": 5
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 42.64967411910614,
              "residual": -18.149674119106137,
              "abs_error": 18.149674119106137,
              "pct_error": 74.08030252696382,
              "rank": 6
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 37.65378327881112,
              "residual": 17.64621672118888,
              "abs_error": 17.64621672118888,
              "pct_error": 31.909975987683325,
              "rank": 7
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 43.5835996636214,
              "residual": 16.016400336378602,
              "abs_error": 16.016400336378602,
              "pct_error": 26.873154926809733,
              "rank": 8
            },
            {
              "index": 273,
              "actual": 29.3,
              "predicted": 45.15433766315254,
              "residual": -15.854337663152538,
              "abs_error": 15.854337663152538,
              "pct_error": 54.110367451032545,
              "rank": 9
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 37.368297041579346,
              "residual": -15.668297041579347,
              "abs_error": 15.668297041579347,
              "pct_error": 72.20413383216288,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "House Age",
            "Distance to MRT",
            "Latitude"
          ],
          "rmse": 8.644082569279973,
          "mae": 6.385321873680945,
          "r2": 0.5342016090739647,
          "adj_r2": 0.5165130625831027,
          "f_stat": 120.69456703685906,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -6843.910687929272,
              "stderr": 1266.2371914631742,
              "tstat": -5.404919973974965,
              "pvalue": 6.483733439231147e-08,
              "ci_lower": -9325.735583197093,
              "ci_upper": -4362.085792661451,
              "vif": null
            },
            {
              "feature": "House Age",
              "coef": -0.24507557896657947,
              "stderr": 0.04665849822596076,
              "tstat": -5.252538943274852,
              "pvalue": 1.5001673182648286e-07,
              "ci_lower": -0.33652623548946253,
              "ci_upper": -0.1536249224436964,
              "vif": 1.0120622385895297
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.005347593511238259,
              "stderr": 0.0004923575934920537,
              "tstat": -10.861198409291042,
              "pvalue": 1e-15,
              "ci_lower": -0.006312614394482684,
              "ci_upper": -0.0043825726279938335,
              "vif": 1.534463901638932
            },
            {
              "feature": "Latitude",
              "coef": 276.0176423709552,
              "stderr": 50.703145597299795,
              "tstat": 5.443797206650125,
              "pvalue": 5.215659578509872e-08,
              "ci_lower": 176.63947700024758,
              "ci_upper": 375.3958077416628,
              "vif": 1.5377104209255512
            }
          ],
          "outliers": [
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 36.5600010179478,
              "residual": 24.139998982052205,
              "abs_error": 24.139998982052205,
              "pct_error": 39.76935581886689,
              "rank": 1
            },
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 37.57919586156913,
              "residual": 23.920804138430867,
              "abs_error": 23.920804138430867,
              "pct_error": 38.89561648525344,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 48.73658019863251,
              "residual": 22.26341980136749,
              "abs_error": 22.26341980136749,
              "pct_error": 31.35692929770069,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 48.73658019863251,
              "residual": 20.963419801367493,
              "abs_error": 20.963419801367493,
              "pct_error": 30.076642469680763,
              "rank": 4
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 39.320076128834444,
              "residual": -17.620076128834445,
              "abs_error": 17.620076128834445,
              "pct_error": 81.19850750614953,
              "rank": 5
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 38.43685421696955,
              "residual": 16.863145783030447,
              "abs_error": 16.863145783030447,
              "pct_error": 30.493934508192496,
              "rank": 6
            },
            {
              "index": 273,
              "actual": 29.3,
              "predicted": 45.12908968260217,
              "residual": -15.82908968260217,
              "abs_error": 15.82908968260217,
              "pct_error": 54.02419686894938,
              "rank": 7
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 40.41693430547548,
              "residual": -15.416934305475479,
              "abs_error": 15.416934305475479,
              "pct_error": 61.667737221901916,
              "rank": 8
            },
            {
              "index": 251,
              "actual": 13.8,
              "predicted": 28.649897628891267,
              "residual": -14.849897628891267,
              "abs_error": 14.849897628891267,
              "pct_error": 107.6079538325454,
              "rank": 9
            },
            {
              "index": 99,
              "actual": 62.2,
              "predicted": 47.392792520049625,
              "residual": 14.807207479950378,
              "abs_error": 14.807207479950378,
              "pct_error": 23.805799806994177,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "House Age",
            "Distance to MRT",
            "Convenience Stores",
            "Latitude"
          ],
          "rmse": 8.372583083276755,
          "mae": 6.379699624859348,
          "r2": 0.5630023491807503,
          "adj_r2": 0.5405922132413017,
          "f_stat": 107.1227108537527,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -5758.582274990573,
              "stderr": 1225.2039515329793,
              "tstat": -4.700100965055993,
              "pvalue": 2.600328953464853e-06,
              "ci_lower": -8159.982019995212,
              "ci_upper": -3357.1825299859333,
              "vif": null
            },
            {
              "feature": "House Age",
              "coef": -0.27267286946896346,
              "stderr": 0.04485599781485313,
              "tstat": -6.078849713575505,
              "pvalue": 1.2104774212727702e-09,
              "ci_lower": -0.3605906251860756,
              "ci_upper": -0.18475511375185133,
              "vif": 1.0241623322329882
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.003951282449620061,
              "stderr": 0.0005312769770217841,
              "tstat": -7.437330470765056,
              "pvalue": 1.0274030422148635e-13,
              "ci_lower": -0.004992585324582758,
              "ci_upper": -0.0029099795746573643,
              "vif": 1.9562286492042735
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2176480747909997,
              "stderr": 0.21512225545805058,
              "tstat": 5.660260823308652,
              "pvalue": 1.5114310308268597e-08,
              "ci_lower": 0.7960084540932205,
              "ci_upper": 1.639287695488779,
              "vif": 1.6202772323629329
            },
            {
              "feature": "Latitude",
              "coef": 232.3099283010684,
              "stderr": 49.066969456667664,
              "tstat": 4.73454812623444,
              "pvalue": 2.195436747484158e-06,
              "ci_lower": 136.13866816599977,
              "ci_upper": 328.481188436137,
              "vif": 1.576760692453069
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 34.836786633261,
              "residual": 26.663213366739,
              "abs_error": 26.663213366739,
              "pct_error": 43.35481848250244,
              "rank": 1
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 36.9899277256045,
              "residual": 23.7100722743955,
              "abs_error": 23.7100722743955,
              "pct_error": 39.0610745871425,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 50.07319193749481,
              "residual": 20.926808062505188,
              "abs_error": 20.926808062505188,
              "pct_error": 29.474377552824212,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 50.07319193749481,
              "residual": 19.62680806250519,
              "abs_error": 19.62680806250519,
              "pct_error": 28.158978568874016,
              "rank": 4
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 35.986401785032285,
              "residual": 19.313598214967712,
              "abs_error": 19.313598214967712,
              "pct_error": 34.92513239596332,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 42.58481430479878,
              "residual": -17.584814304798783,
              "abs_error": 17.584814304798783,
              "pct_error": 70.33925721919513,
              "rank": 6
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 38.87225223576479,
              "residual": -17.17225223576479,
              "abs_error": 17.17225223576479,
              "pct_error": 79.13480292979168,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 38.86924769821235,
              "residual": -14.369247698212348,
              "abs_error": 14.369247698212348,
              "pct_error": 58.64999060494836,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.40998986085742,
              "residual": 14.19001013914258,
              "abs_error": 14.19001013914258,
              "pct_error": 23.80874184419896,
              "rank": 9
            },
            {
              "index": 9,
              "actual": 22.1,
              "predicted": 33.29797300233986,
              "residual": -11.197973002339857,
              "abs_error": 11.197973002339857,
              "pct_error": 50.669561096560436,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "House Age",
            "Distance to MRT",
            "Convenience Stores",
            "Latitude",
            "Longitude"
          ],
          "rmse": 8.390053484354729,
          "mae": 6.383829595363631,
          "r2": 0.5611767502394895,
          "adj_r2": 0.5326817340212746,
          "f_stat": 85.53021318804683,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2664.3223458493876,
              "stderr": 6941.398478076259,
              "tstat": -0.3838307733325488,
              "pvalue": 0.7011038780432519,
              "ci_lower": -16269.463362878854,
              "ci_upper": 10940.81867118008,
              "vif": null
            },
            {
              "feature": "House Age",
              "coef": -0.2731824292580436,
              "stderr": 0.044924879180967596,
              "tstat": -6.080871762784333,
              "pvalue": 1.1953086503399785e-09,
              "ci_lower": -0.36123519245274005,
              "ci_upper": -0.1851296660633471,
              "vif": 1.0248051843292774
            },
            {
              "feature": "Distance to MRT",
              "coef": -0.004220680032557907,
              "stderr": 0.0007979766111949749,
              "tstat": -5.289227745957883,
              "pvalue": 1.2283386845962387e-07,
              "ci_lower": -0.005784714190500058,
              "ci_upper": -0.002656645874615756,
              "vif": 4.402577314234316
            },
            {
              "feature": "Convenience Stores",
              "coef": 1.2120669931881785,
              "stderr": 0.21573728812949242,
              "tstat": 5.618254515467243,
              "pvalue": 1.9289621159301587e-08,
              "ci_lower": 0.7892219084543733,
              "ci_upper": 1.6349120779219835,
              "vif": 1.6255817066067513
            },
            {
              "feature": "Latitude",
              "coef": 229.32563249458013,
              "stderr": 49.56667357797656,
              "tstat": 4.6266092908940735,
              "pvalue": 3.717007639061949e-06,
              "ci_lower": 132.17495228174607,
              "ci_upper": 326.4763127074142,
              "vif": 1.6051234613864651
            },
            {
              "feature": "Longitude",
              "coef": -24.84436333035916,
              "stderr": 54.85671308469995,
              "tstat": -0.45289558803858565,
              "pvalue": 0.650623928045688,
              "ci_lower": -132.36352097637103,
              "ci_upper": 82.67479431565273,
              "vif": 3.051141950582288
            }
          ],
          "outliers": [
            {
              "index": 47,
              "actual": 61.5,
              "predicted": 34.84128515861312,
              "residual": 26.65871484138688,
              "abs_error": 26.65871484138688,
              "pct_error": 43.347503807133144,
              "rank": 1
            },
            {
              "index": 128,
              "actual": 60.7,
              "predicted": 37.05990727348171,
              "residual": 23.64009272651829,
              "abs_error": 23.64009272651829,
              "pct_error": 38.945787028860444,
              "rank": 2
            },
            {
              "index": 105,
              "actual": 71.0,
              "predicted": 49.98292588521872,
              "residual": 21.01707411478128,
              "abs_error": 21.01707411478128,
              "pct_error": 29.60151283772011,
              "rank": 3
            },
            {
              "index": 379,
              "actual": 69.7,
              "predicted": 49.98292588521872,
              "residual": 19.717074114781283,
              "abs_error": 19.717074114781283,
              "pct_error": 28.288485100116617,
              "rank": 4
            },
            {
              "index": 285,
              "actual": 55.3,
              "predicted": 35.99221375307525,
              "residual": 19.30778624692475,
              "abs_error": 19.30778624692475,
              "pct_error": 34.91462250800136,
              "rank": 5
            },
            {
              "index": 31,
              "actual": 25.0,
              "predicted": 42.590381830514616,
              "residual": -17.590381830514616,
              "abs_error": 17.590381830514616,
              "pct_error": 70.36152732205846,
              "rank": 6
            },
            {
              "index": 244,
              "actual": 21.7,
              "predicted": 39.17419335345039,
              "residual": -17.474193353450392,
              "abs_error": 17.474193353450392,
              "pct_error": 80.52623665184512,
              "rank": 7
            },
            {
              "index": 292,
              "actual": 24.5,
              "predicted": 39.07261280977673,
              "residual": -14.572612809776729,
              "abs_error": 14.572612809776729,
              "pct_error": 59.48005228480297,
              "rank": 8
            },
            {
              "index": 119,
              "actual": 59.6,
              "predicted": 45.33146657692032,
              "residual": 14.268533423079681,
              "abs_error": 14.268533423079681,
              "pct_error": 23.94049232060349,
              "rank": 9
            },
            {
              "index": 9,
              "actual": 22.1,
              "predicted": 33.58248298653052,
              "residual": -11.48248298653052,
              "abs_error": 11.48248298653052,
              "pct_error": 51.95693659063584,
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  "insurance": {
    "id": "insurance",
    "title": "Medical Healthcare Cost: Multiple Linear Regression & Risk Explorer",
    "badge": "CRISP-DM",
    "hero_title": "Health Insurance Charges & Actuarial Risk Selection",
    "hero_desc": "Evaluate patient demographic and risk attributes (Smoker status, BMI, Age, Children, Region) predicting medical insurance bills. Benchmark 5 Feature Selection Algorithms to identify core actuarial drivers.",
    "target_name": "Charges",
    "target_prefix": "$",
    "target_unit": "USD",
    "sweet_spot_k": 3,
    "sweet_spot_note": "Occam's Razor: 3 features (Smoker Status, BMI, Age) account for over 75% of insurance billing variance.",
    "overfitting_k": 5,
    "overfitting_note": "Parsimony Tradeoff: Regional dummies contribute marginal predictive lift while adding model parameters.",
    "features_meta": [
      {
        "name": "smoker_yes",
        "min": 0,
        "max": 1,
        "default": 0,
        "step": 1,
        "unit": "Smoker"
      },
      {
        "name": "bmi",
        "min": 15,
        "max": 50,
        "default": 28,
        "step": 0.1,
        "unit": "BMI"
      },
      {
        "name": "age",
        "min": 18,
        "max": 65,
        "default": 35,
        "step": 1,
        "unit": "years"
      },
      {
        "name": "children",
        "min": 0,
        "max": 5,
        "default": 1,
        "step": 1,
        "unit": "count"
      },
      {
        "name": "region_southeast",
        "min": 0,
        "max": 1,
        "default": 0,
        "step": 1,
        "unit": "Region"
      }
    ],
    "models": {
      "Lasso": [
        {
          "k": 1,
          "features": [
            "smoker_yes"
          ],
          "rmse": 8049.74620082037,
          "mae": 5981.674573990284,
          "r2": 0.5869286195374397,
          "adj_r2": 0.5853757196108886,
          "f_stat": 1803.27247410325,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 8319.988759275375,
              "stderr": 249.99694620946048,
              "tstat": 33.28036156211466,
              "pvalue": 1e-15,
              "ci_lower": 7829.994744704833,
              "ci_upper": 8809.982773845917,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 23794.00056321287,
              "stderr": 560.3208597563731,
              "tstat": 42.46495583540915,
              "pvalue": 1e-15,
              "ci_lower": 22695.77167809038,
              "ci_upper": 24892.22944833536,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 32113.989322488247,
              "residual": 31656.438687511756,
              "abs_error": 31656.438687511756,
              "pct_error": 49.64125171395687,
              "rank": 1
            },
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32113.989322488247,
              "residual": 30478.883767511754,
              "abs_error": 30478.883767511754,
              "pct_error": 48.693856445425155,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 8319.988759275375,
              "residual": 28590.61927072463,
              "abs_error": 28590.61927072463,
              "pct_error": 77.45908506163568,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 8319.988759275375,
              "residual": 25151.983130724628,
              "abs_error": 25151.983130724628,
              "pct_error": 75.14341614943507,
              "rank": 4
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 8319.988759275375,
              "residual": 21964.654180724625,
              "abs_error": 21964.654180724625,
              "pct_error": 72.52736716837323,
              "rank": 5
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 8319.988759275375,
              "residual": 21940.006800724623,
              "abs_error": 21940.006800724623,
              "pct_error": 72.50499015183803,
              "rank": 6
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 8319.988759275375,
              "residual": 20866.49360072463,
              "abs_error": 20866.49360072463,
              "pct_error": 71.49369130321132,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8319.988759275375,
              "residual": 20156.746230724624,
              "abs_error": 20156.746230724624,
              "pct_error": 70.7832068451771,
              "rank": 8
            },
            {
              "index": 770,
              "actual": 27941.28758,
              "predicted": 8319.988759275375,
              "residual": 19621.298820724624,
              "abs_error": 19621.298820724624,
              "pct_error": 70.22331653309092,
              "rank": 9
            },
            {
              "index": 1033,
              "actual": 13747.87235,
              "predicted": 32113.989322488247,
              "residual": -18366.11697248825,
              "abs_error": 18366.11697248825,
              "pct_error": 133.59243164989272,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "smoker_yes",
            "age"
          ],
          "rmse": 7144.199967032693,
          "mae": 4605.740802410677,
          "r2": 0.6746371718009084,
          "adj_r2": 0.6721816032861982,
          "f_stat": 1469.3223133076528,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2511.65913244144,
              "stderr": 567.6272467997517,
              "tstat": -4.424838917796888,
              "pvalue": 9.651427181097773e-06,
              "ci_lower": -3624.2085361689533,
              "ci_upper": -1399.1097287139266,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24131.44367493735,
              "stderr": 474.67614547483004,
              "tstat": 50.83770040897691,
              "pvalue": 1e-15,
              "ci_lower": 23201.078429806683,
              "ci_upper": 25061.808920068015,
              "vif": 1.0011963137714164
            },
            {
              "feature": "age",
              "coef": 275.75445572886053,
              "stderr": 13.408565214453454,
              "tstat": 20.565545330056448,
              "pvalue": 1e-15,
              "ci_lower": 249.47366790853175,
              "ci_upper": 302.0352435491893,
              "vif": 1.0011963137714164
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 34028.735050294636,
              "residual": 28564.138039705365,
              "abs_error": 28564.138039705365,
              "pct_error": 45.63480893205531,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 36510.52515185438,
              "residual": 27259.902858145622,
              "abs_error": 27259.902858145622,
              "pct_error": 42.74693413359391,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 13757.853755561331,
              "residual": 23152.754274438674,
              "abs_error": 23152.754274438674,
              "pct_error": 62.726558867902426,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 11827.572565459308,
              "residual": 21644.399324540693,
              "abs_error": 21644.399324540693,
              "pct_error": 64.66424922819417,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 2727.67552640691,
              "residual": 20355.27980359309,
              "abs_error": 20355.27980359309,
              "pct_error": 88.18316161249136,
              "rank": 5
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8518.519096712982,
              "residual": 19958.21589328702,
              "abs_error": 19958.21589328702,
              "pct_error": 70.08604006145937,
              "rank": 6
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 11276.063654001586,
              "residual": 19008.579285998414,
              "abs_error": 19008.579285998414,
              "pct_error": 62.76639722534703,
              "rank": 7
            },
            {
              "index": 637,
              "actual": 24915.04626,
              "predicted": 7139.746818068679,
              "residual": 17775.299441931318,
              "abs_error": 17775.299441931318,
              "pct_error": 71.3436341094368,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12103.327021188168,
              "residual": 17083.155338811834,
              "abs_error": 17083.155338811834,
              "pct_error": 58.53105258831825,
              "rank": 9
            },
            {
              "index": 99,
              "actual": 15820.699,
              "predicted": 32098.45386019261,
              "residual": -16277.75486019261,
              "abs_error": 16277.75486019261,
              "pct_error": 102.88897387019757,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "smoker_yes",
            "age",
            "bmi"
          ],
          "rmse": 6692.937982054249,
          "mae": 4602.7281711709065,
          "r2": 0.714441999700602,
          "adj_r2": 0.7111970224244724,
          "f_stat": 1099.5824857018072,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11082.96216481512,
              "stderr": 1027.5136430908528,
              "tstat": -10.786194654775171,
              "pvalue": 1e-15,
              "ci_lower": -13096.888905273192,
              "ci_upper": -9069.03542435705,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24063.051442518085,
              "stderr": 454.78367731684426,
              "tstat": 52.91098305129703,
              "pvalue": 1e-15,
              "ci_lower": 23171.67543497707,
              "ci_upper": 24954.4274500591,
              "vif": 1.001430627235178
            },
            {
              "feature": "age",
              "coef": 262.68710638994213,
              "stderr": 12.91372706492403,
              "tstat": 20.341695706381067,
              "pvalue": 1e-15,
              "ci_lower": 237.37620134269105,
              "ci_upper": 287.9980114371932,
              "vif": 1.011916168112868
            },
            {
              "feature": "bmi",
              "coef": 295.91579873832154,
              "stderr": 30.099163687737185,
              "tstat": 9.83136281819291,
              "pvalue": 1e-15,
              "ci_lower": 236.92143791035664,
              "ci_upper": 354.91015956628644,
              "vif": 1.010844599236135
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33785.012714945806,
              "residual": 28807.860375054195,
              "abs_error": 28807.860375054195,
              "pct_error": 46.02418606609163,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 41194.56104094366,
              "residual": 22575.86696905634,
              "abs_error": 22575.86696905634,
              "pct_error": 35.40178053300217,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 14713.446908285056,
              "residual": 22197.161121714948,
              "abs_error": 22197.161121714948,
              "pct_error": 60.13761979665483,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 9557.297389679512,
              "residual": 20727.34555032049,
              "abs_error": 20727.34555032049,
              "pct_error": 68.44176961698227,
              "rank": 4
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 13681.007715117386,
              "residual": 19790.964174882614,
              "abs_error": 19790.964174882614,
              "pct_error": 59.1269741738619,
              "rank": 5
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3702.9057948322234,
              "residual": 19380.04953516778,
              "abs_error": 19380.04953516778,
              "pct_error": 83.95826815979797,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 13139.976483503711,
              "residual": 17120.01907649629,
              "abs_error": 17120.01907649629,
              "pct_error": 56.576409743849574,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11681.354474523843,
              "residual": 16795.380515476158,
              "abs_error": 16795.380515476158,
              "pct_error": 58.979305462420776,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12397.534773099598,
              "residual": 16788.9475869004,
              "abs_error": 16788.9475869004,
              "pct_error": 57.52302514505692,
              "rank": 9
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9808.024194100559,
              "residual": 16332.336105899441,
              "abs_error": 16332.336105899441,
              "pct_error": 62.479384057684314,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "smoker_yes",
            "age",
            "bmi",
            "children"
          ],
          "rmse": 6682.861533576086,
          "mae": 4563.591797024217,
          "r2": 0.7153011872397669,
          "adj_r2": 0.7109711672738317,
          "f_stat": 835.5007226449668,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11546.013966059609,
              "stderr": 1031.7957921653856,
              "tstat": -11.19021230143659,
              "pvalue": 1e-15,
              "ci_lower": -13568.333718703765,
              "ci_upper": -9523.694213415452,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24061.248460479717,
              "stderr": 452.5984538873806,
              "tstat": 53.16246278310717,
              "pvalue": 1e-15,
              "ci_lower": 23174.155490860452,
              "ci_upper": 24948.341430098983,
              "vif": 1.0014320311179863
            },
            {
              "feature": "age",
              "coef": 261.29173271730923,
              "stderr": 12.858358021819477,
              "tstat": 20.320769749443954,
              "pvalue": 1e-15,
              "ci_lower": 236.08935099454305,
              "ci_upper": 286.4941144400754,
              "vif": 1.0129699707993498
            },
            {
              "feature": "bmi",
              "coef": 294.90143377882924,
              "stderr": 29.956034196077084,
              "tstat": 9.844475134744247,
              "pvalue": 1e-15,
              "ci_lower": 236.18760675451816,
              "ci_upper": 353.61526080314036,
              "vif": 1.0109469994675213
            },
            {
              "feature": "children",
              "coef": 502.1297995502951,
              "stderr": 149.2424432796712,
              "tstat": 3.3645241160340333,
              "pvalue": 0.0007667578307935385,
              "ci_lower": 209.61461072213956,
              "ci_upper": 794.6449883784506,
              "vif": 1.0012225385885063
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33226.56999622428,
              "residual": 29366.30309377572,
              "abs_error": 29366.30309377572,
              "pct_error": 46.916368659976655,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40606.2650366091,
              "residual": 23164.162973390907,
              "abs_error": 23164.162973390907,
              "pct_error": 36.32430218244493,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15137.027758865483,
              "residual": 21773.58027113452,
              "abs_error": 21773.58027113452,
              "pct_error": 58.990034120915894,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10003.007136706447,
              "residual": 20281.635803293553,
              "abs_error": 20281.635803293553,
              "pct_error": 66.9700344279296,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3179.7664136485146,
              "residual": 19903.188916351486,
              "abs_error": 19903.188916351486,
              "pct_error": 86.22461306106719,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14111.592036891629,
              "residual": 19360.379853108374,
              "abs_error": 19360.379853108374,
              "pct_error": 57.84057155859536,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12564.196495884567,
              "residual": 17695.799064115432,
              "abs_error": 17695.799064115432,
              "pct_error": 58.47918592396327,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11622.602529302165,
              "residual": 16854.132460697838,
              "abs_error": 16854.132460697838,
              "pct_error": 59.18562105738737,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9751.239592045113,
              "residual": 16389.120707954888,
              "abs_error": 16389.120707954888,
              "pct_error": 62.69661366509507,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12832.023778114555,
              "residual": 16354.458581885447,
              "abs_error": 16354.458581885447,
              "pct_error": 56.03435994842321,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "smoker_yes",
            "age",
            "bmi",
            "children",
            "region_southeast"
          ],
          "rmse": 6675.656052524937,
          "mae": 4567.964003451651,
          "r2": 0.7159147824734622,
          "adj_r2": 0.7104933088565435,
          "f_stat": 669.1764007977549,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11721.370634472412,
              "stderr": 1040.2119232002667,
              "tstat": -11.268252529168286,
              "pvalue": 1e-15,
              "ci_lower": -13760.186003944935,
              "ci_upper": -9682.55526499989,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24087.57386673239,
              "stderr": 452.90208831180445,
              "tstat": 53.18494767051965,
              "pvalue": 1e-15,
              "ci_lower": 23199.885773641254,
              "ci_upper": 24975.261959823525,
              "vif": 1.0034312597573565
            },
            {
              "feature": "age",
              "coef": 260.71627438268496,
              "stderr": 12.861753668806344,
              "tstat": 20.270663013473897,
              "pvalue": 1e-15,
              "ci_lower": 235.50723719182452,
              "ci_upper": 285.9253115735454,
              "vif": 1.014167180609306
            },
            {
              "feature": "bmi",
              "coef": 306.3957467839648,
              "stderr": 31.22001313350574,
              "tstat": 9.814081290540416,
              "pvalue": 1e-15,
              "ci_lower": 245.20452104229355,
              "ci_upper": 367.58697252563604,
              "vif": 1.0987769716907205
            },
            {
              "feature": "children",
              "coef": 495.61680463009304,
              "stderr": 149.277526115076,
              "tstat": 3.32010328365188,
              "pvalue": 0.0008998415047952462,
              "ci_lower": 203.03285344454406,
              "ci_upper": 788.200755815642,
              "vif": 1.002347724666897
            },
            {
              "feature": "region_southeast",
              "coef": -545.9412442741956,
              "stderr": 419.2398583491954,
              "tstat": -1.3022169371583638,
              "pvalue": 0.19284223685957474,
              "ci_lower": -1367.6513666386186,
              "ci_upper": 275.7688780902274,
              "vif": 1.0902761733119999
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32854.66920756778,
              "residual": 29738.203882432223,
              "abs_error": 29738.203882432223,
              "pct_error": 47.51052702066056,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40425.16315967854,
              "residual": 23345.264850321466,
              "abs_error": 23345.264850321466,
              "pct_error": 36.60829255632507,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15314.69515144816,
              "residual": 21595.91287855184,
              "abs_error": 21595.91287855184,
              "pct_error": 58.508689049498265,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10077.404811097287,
              "residual": 20207.238128902714,
              "abs_error": 20207.238128902714,
              "pct_error": 66.72437303929037,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3373.9377973478367,
              "residual": 19709.017532652164,
              "abs_error": 19709.017532652164,
              "pct_error": 85.38342361663342,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14324.609640755669,
              "residual": 19147.362249244332,
              "abs_error": 19147.362249244332,
              "pct_error": 57.204165658865016,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12682.992207776158,
              "residual": 17577.00335222384,
              "abs_error": 17577.00335222384,
              "pct_error": 58.08660254880699,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11893.808977256902,
              "residual": 16582.926012743097,
              "abs_error": 16582.926012743097,
              "pct_error": 58.23324204325539,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9852.668352754692,
              "residual": 16287.691947245308,
              "abs_error": 16287.691947245308,
              "pct_error": 62.308597740503636,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12984.408138192139,
              "residual": 16202.074221807863,
              "abs_error": 16202.074221807863,
              "pct_error": 55.51225400157425,
              "rank": 10
            }
          ]
        }
      ],
      "Forward SFS": [
        {
          "k": 1,
          "features": [
            "smoker_yes"
          ],
          "rmse": 8049.74620082037,
          "mae": 5981.674573990284,
          "r2": 0.5869286195374397,
          "adj_r2": 0.5853757196108886,
          "f_stat": 1803.27247410325,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 8319.988759275375,
              "stderr": 249.99694620946048,
              "tstat": 33.28036156211466,
              "pvalue": 1e-15,
              "ci_lower": 7829.994744704833,
              "ci_upper": 8809.982773845917,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 23794.00056321287,
              "stderr": 560.3208597563731,
              "tstat": 42.46495583540915,
              "pvalue": 1e-15,
              "ci_lower": 22695.77167809038,
              "ci_upper": 24892.22944833536,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 32113.989322488247,
              "residual": 31656.438687511756,
              "abs_error": 31656.438687511756,
              "pct_error": 49.64125171395687,
              "rank": 1
            },
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32113.989322488247,
              "residual": 30478.883767511754,
              "abs_error": 30478.883767511754,
              "pct_error": 48.693856445425155,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 8319.988759275375,
              "residual": 28590.61927072463,
              "abs_error": 28590.61927072463,
              "pct_error": 77.45908506163568,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 8319.988759275375,
              "residual": 25151.983130724628,
              "abs_error": 25151.983130724628,
              "pct_error": 75.14341614943507,
              "rank": 4
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 8319.988759275375,
              "residual": 21964.654180724625,
              "abs_error": 21964.654180724625,
              "pct_error": 72.52736716837323,
              "rank": 5
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 8319.988759275375,
              "residual": 21940.006800724623,
              "abs_error": 21940.006800724623,
              "pct_error": 72.50499015183803,
              "rank": 6
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 8319.988759275375,
              "residual": 20866.49360072463,
              "abs_error": 20866.49360072463,
              "pct_error": 71.49369130321132,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8319.988759275375,
              "residual": 20156.746230724624,
              "abs_error": 20156.746230724624,
              "pct_error": 70.7832068451771,
              "rank": 8
            },
            {
              "index": 770,
              "actual": 27941.28758,
              "predicted": 8319.988759275375,
              "residual": 19621.298820724624,
              "abs_error": 19621.298820724624,
              "pct_error": 70.22331653309092,
              "rank": 9
            },
            {
              "index": 1033,
              "actual": 13747.87235,
              "predicted": 32113.989322488247,
              "residual": -18366.11697248825,
              "abs_error": 18366.11697248825,
              "pct_error": 133.59243164989272,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "smoker_yes",
            "age"
          ],
          "rmse": 7144.199967032693,
          "mae": 4605.740802410677,
          "r2": 0.6746371718009084,
          "adj_r2": 0.6721816032861982,
          "f_stat": 1469.3223133076528,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2511.65913244144,
              "stderr": 567.6272467997517,
              "tstat": -4.424838917796888,
              "pvalue": 9.651427181097773e-06,
              "ci_lower": -3624.2085361689533,
              "ci_upper": -1399.1097287139266,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24131.44367493735,
              "stderr": 474.67614547483004,
              "tstat": 50.83770040897691,
              "pvalue": 1e-15,
              "ci_lower": 23201.078429806683,
              "ci_upper": 25061.808920068015,
              "vif": 1.0011963137714164
            },
            {
              "feature": "age",
              "coef": 275.75445572886053,
              "stderr": 13.408565214453454,
              "tstat": 20.565545330056448,
              "pvalue": 1e-15,
              "ci_lower": 249.47366790853175,
              "ci_upper": 302.0352435491893,
              "vif": 1.0011963137714164
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 34028.735050294636,
              "residual": 28564.138039705365,
              "abs_error": 28564.138039705365,
              "pct_error": 45.63480893205531,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 36510.52515185438,
              "residual": 27259.902858145622,
              "abs_error": 27259.902858145622,
              "pct_error": 42.74693413359391,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 13757.853755561331,
              "residual": 23152.754274438674,
              "abs_error": 23152.754274438674,
              "pct_error": 62.726558867902426,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 11827.572565459308,
              "residual": 21644.399324540693,
              "abs_error": 21644.399324540693,
              "pct_error": 64.66424922819417,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 2727.67552640691,
              "residual": 20355.27980359309,
              "abs_error": 20355.27980359309,
              "pct_error": 88.18316161249136,
              "rank": 5
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8518.519096712982,
              "residual": 19958.21589328702,
              "abs_error": 19958.21589328702,
              "pct_error": 70.08604006145937,
              "rank": 6
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 11276.063654001586,
              "residual": 19008.579285998414,
              "abs_error": 19008.579285998414,
              "pct_error": 62.76639722534703,
              "rank": 7
            },
            {
              "index": 637,
              "actual": 24915.04626,
              "predicted": 7139.746818068679,
              "residual": 17775.299441931318,
              "abs_error": 17775.299441931318,
              "pct_error": 71.3436341094368,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12103.327021188168,
              "residual": 17083.155338811834,
              "abs_error": 17083.155338811834,
              "pct_error": 58.53105258831825,
              "rank": 9
            },
            {
              "index": 99,
              "actual": 15820.699,
              "predicted": 32098.45386019261,
              "residual": -16277.75486019261,
              "abs_error": 16277.75486019261,
              "pct_error": 102.88897387019757,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "smoker_yes",
            "age",
            "bmi"
          ],
          "rmse": 6692.937982054249,
          "mae": 4602.7281711709065,
          "r2": 0.714441999700602,
          "adj_r2": 0.7111970224244724,
          "f_stat": 1099.5824857018072,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11082.96216481512,
              "stderr": 1027.5136430908528,
              "tstat": -10.786194654775171,
              "pvalue": 1e-15,
              "ci_lower": -13096.888905273192,
              "ci_upper": -9069.03542435705,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24063.051442518085,
              "stderr": 454.78367731684426,
              "tstat": 52.91098305129703,
              "pvalue": 1e-15,
              "ci_lower": 23171.67543497707,
              "ci_upper": 24954.4274500591,
              "vif": 1.001430627235178
            },
            {
              "feature": "age",
              "coef": 262.68710638994213,
              "stderr": 12.91372706492403,
              "tstat": 20.341695706381067,
              "pvalue": 1e-15,
              "ci_lower": 237.37620134269105,
              "ci_upper": 287.9980114371932,
              "vif": 1.011916168112868
            },
            {
              "feature": "bmi",
              "coef": 295.91579873832154,
              "stderr": 30.099163687737185,
              "tstat": 9.83136281819291,
              "pvalue": 1e-15,
              "ci_lower": 236.92143791035664,
              "ci_upper": 354.91015956628644,
              "vif": 1.010844599236135
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33785.012714945806,
              "residual": 28807.860375054195,
              "abs_error": 28807.860375054195,
              "pct_error": 46.02418606609163,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 41194.56104094366,
              "residual": 22575.86696905634,
              "abs_error": 22575.86696905634,
              "pct_error": 35.40178053300217,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 14713.446908285056,
              "residual": 22197.161121714948,
              "abs_error": 22197.161121714948,
              "pct_error": 60.13761979665483,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 9557.297389679512,
              "residual": 20727.34555032049,
              "abs_error": 20727.34555032049,
              "pct_error": 68.44176961698227,
              "rank": 4
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 13681.007715117386,
              "residual": 19790.964174882614,
              "abs_error": 19790.964174882614,
              "pct_error": 59.1269741738619,
              "rank": 5
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3702.9057948322234,
              "residual": 19380.04953516778,
              "abs_error": 19380.04953516778,
              "pct_error": 83.95826815979797,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 13139.976483503711,
              "residual": 17120.01907649629,
              "abs_error": 17120.01907649629,
              "pct_error": 56.576409743849574,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11681.354474523843,
              "residual": 16795.380515476158,
              "abs_error": 16795.380515476158,
              "pct_error": 58.979305462420776,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12397.534773099598,
              "residual": 16788.9475869004,
              "abs_error": 16788.9475869004,
              "pct_error": 57.52302514505692,
              "rank": 9
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9808.024194100559,
              "residual": 16332.336105899441,
              "abs_error": 16332.336105899441,
              "pct_error": 62.479384057684314,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "smoker_yes",
            "age",
            "bmi",
            "children"
          ],
          "rmse": 6682.861533576086,
          "mae": 4563.591797024217,
          "r2": 0.7153011872397669,
          "adj_r2": 0.7109711672738317,
          "f_stat": 835.5007226449668,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11546.013966059609,
              "stderr": 1031.7957921653856,
              "tstat": -11.19021230143659,
              "pvalue": 1e-15,
              "ci_lower": -13568.333718703765,
              "ci_upper": -9523.694213415452,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24061.248460479717,
              "stderr": 452.5984538873806,
              "tstat": 53.16246278310717,
              "pvalue": 1e-15,
              "ci_lower": 23174.155490860452,
              "ci_upper": 24948.341430098983,
              "vif": 1.0014320311179863
            },
            {
              "feature": "age",
              "coef": 261.29173271730923,
              "stderr": 12.858358021819477,
              "tstat": 20.320769749443954,
              "pvalue": 1e-15,
              "ci_lower": 236.08935099454305,
              "ci_upper": 286.4941144400754,
              "vif": 1.0129699707993498
            },
            {
              "feature": "bmi",
              "coef": 294.90143377882924,
              "stderr": 29.956034196077084,
              "tstat": 9.844475134744247,
              "pvalue": 1e-15,
              "ci_lower": 236.18760675451816,
              "ci_upper": 353.61526080314036,
              "vif": 1.0109469994675213
            },
            {
              "feature": "children",
              "coef": 502.1297995502951,
              "stderr": 149.2424432796712,
              "tstat": 3.3645241160340333,
              "pvalue": 0.0007667578307935385,
              "ci_lower": 209.61461072213956,
              "ci_upper": 794.6449883784506,
              "vif": 1.0012225385885063
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33226.56999622428,
              "residual": 29366.30309377572,
              "abs_error": 29366.30309377572,
              "pct_error": 46.916368659976655,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40606.2650366091,
              "residual": 23164.162973390907,
              "abs_error": 23164.162973390907,
              "pct_error": 36.32430218244493,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15137.027758865483,
              "residual": 21773.58027113452,
              "abs_error": 21773.58027113452,
              "pct_error": 58.990034120915894,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10003.007136706447,
              "residual": 20281.635803293553,
              "abs_error": 20281.635803293553,
              "pct_error": 66.9700344279296,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3179.7664136485146,
              "residual": 19903.188916351486,
              "abs_error": 19903.188916351486,
              "pct_error": 86.22461306106719,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14111.592036891629,
              "residual": 19360.379853108374,
              "abs_error": 19360.379853108374,
              "pct_error": 57.84057155859536,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12564.196495884567,
              "residual": 17695.799064115432,
              "abs_error": 17695.799064115432,
              "pct_error": 58.47918592396327,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11622.602529302165,
              "residual": 16854.132460697838,
              "abs_error": 16854.132460697838,
              "pct_error": 59.18562105738737,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9751.239592045113,
              "residual": 16389.120707954888,
              "abs_error": 16389.120707954888,
              "pct_error": 62.69661366509507,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12832.023778114555,
              "residual": 16354.458581885447,
              "abs_error": 16354.458581885447,
              "pct_error": 56.03435994842321,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "smoker_yes",
            "age",
            "bmi",
            "children",
            "region_southeast"
          ],
          "rmse": 6675.656052524937,
          "mae": 4567.964003451651,
          "r2": 0.7159147824734622,
          "adj_r2": 0.7104933088565435,
          "f_stat": 669.1764007977549,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11721.370634472412,
              "stderr": 1040.2119232002667,
              "tstat": -11.268252529168286,
              "pvalue": 1e-15,
              "ci_lower": -13760.186003944935,
              "ci_upper": -9682.55526499989,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24087.57386673239,
              "stderr": 452.90208831180445,
              "tstat": 53.18494767051965,
              "pvalue": 1e-15,
              "ci_lower": 23199.885773641254,
              "ci_upper": 24975.261959823525,
              "vif": 1.0034312597573565
            },
            {
              "feature": "age",
              "coef": 260.71627438268496,
              "stderr": 12.861753668806344,
              "tstat": 20.270663013473897,
              "pvalue": 1e-15,
              "ci_lower": 235.50723719182452,
              "ci_upper": 285.9253115735454,
              "vif": 1.014167180609306
            },
            {
              "feature": "bmi",
              "coef": 306.3957467839648,
              "stderr": 31.22001313350574,
              "tstat": 9.814081290540416,
              "pvalue": 1e-15,
              "ci_lower": 245.20452104229355,
              "ci_upper": 367.58697252563604,
              "vif": 1.0987769716907205
            },
            {
              "feature": "children",
              "coef": 495.61680463009304,
              "stderr": 149.277526115076,
              "tstat": 3.32010328365188,
              "pvalue": 0.0008998415047952462,
              "ci_lower": 203.03285344454406,
              "ci_upper": 788.200755815642,
              "vif": 1.002347724666897
            },
            {
              "feature": "region_southeast",
              "coef": -545.9412442741956,
              "stderr": 419.2398583491954,
              "tstat": -1.3022169371583638,
              "pvalue": 0.19284223685957474,
              "ci_lower": -1367.6513666386186,
              "ci_upper": 275.7688780902274,
              "vif": 1.0902761733119999
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32854.66920756778,
              "residual": 29738.203882432223,
              "abs_error": 29738.203882432223,
              "pct_error": 47.51052702066056,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40425.16315967854,
              "residual": 23345.264850321466,
              "abs_error": 23345.264850321466,
              "pct_error": 36.60829255632507,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15314.69515144816,
              "residual": 21595.91287855184,
              "abs_error": 21595.91287855184,
              "pct_error": 58.508689049498265,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10077.404811097287,
              "residual": 20207.238128902714,
              "abs_error": 20207.238128902714,
              "pct_error": 66.72437303929037,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3373.9377973478367,
              "residual": 19709.017532652164,
              "abs_error": 19709.017532652164,
              "pct_error": 85.38342361663342,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14324.609640755669,
              "residual": 19147.362249244332,
              "abs_error": 19147.362249244332,
              "pct_error": 57.204165658865016,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12682.992207776158,
              "residual": 17577.00335222384,
              "abs_error": 17577.00335222384,
              "pct_error": 58.08660254880699,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11893.808977256902,
              "residual": 16582.926012743097,
              "abs_error": 16582.926012743097,
              "pct_error": 58.23324204325539,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9852.668352754692,
              "residual": 16287.691947245308,
              "abs_error": 16287.691947245308,
              "pct_error": 62.308597740503636,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12984.408138192139,
              "residual": 16202.074221807863,
              "abs_error": 16202.074221807863,
              "pct_error": 55.51225400157425,
              "rank": 10
            }
          ]
        }
      ],
      "RFE": [
        {
          "k": 1,
          "features": [
            "smoker_yes"
          ],
          "rmse": 8049.74620082037,
          "mae": 5981.674573990284,
          "r2": 0.5869286195374397,
          "adj_r2": 0.5853757196108886,
          "f_stat": 1803.27247410325,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 8319.988759275375,
              "stderr": 249.99694620946048,
              "tstat": 33.28036156211466,
              "pvalue": 1e-15,
              "ci_lower": 7829.994744704833,
              "ci_upper": 8809.982773845917,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 23794.00056321287,
              "stderr": 560.3208597563731,
              "tstat": 42.46495583540915,
              "pvalue": 1e-15,
              "ci_lower": 22695.77167809038,
              "ci_upper": 24892.22944833536,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 32113.989322488247,
              "residual": 31656.438687511756,
              "abs_error": 31656.438687511756,
              "pct_error": 49.64125171395687,
              "rank": 1
            },
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32113.989322488247,
              "residual": 30478.883767511754,
              "abs_error": 30478.883767511754,
              "pct_error": 48.693856445425155,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 8319.988759275375,
              "residual": 28590.61927072463,
              "abs_error": 28590.61927072463,
              "pct_error": 77.45908506163568,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 8319.988759275375,
              "residual": 25151.983130724628,
              "abs_error": 25151.983130724628,
              "pct_error": 75.14341614943507,
              "rank": 4
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 8319.988759275375,
              "residual": 21964.654180724625,
              "abs_error": 21964.654180724625,
              "pct_error": 72.52736716837323,
              "rank": 5
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 8319.988759275375,
              "residual": 21940.006800724623,
              "abs_error": 21940.006800724623,
              "pct_error": 72.50499015183803,
              "rank": 6
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 8319.988759275375,
              "residual": 20866.49360072463,
              "abs_error": 20866.49360072463,
              "pct_error": 71.49369130321132,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8319.988759275375,
              "residual": 20156.746230724624,
              "abs_error": 20156.746230724624,
              "pct_error": 70.7832068451771,
              "rank": 8
            },
            {
              "index": 770,
              "actual": 27941.28758,
              "predicted": 8319.988759275375,
              "residual": 19621.298820724624,
              "abs_error": 19621.298820724624,
              "pct_error": 70.22331653309092,
              "rank": 9
            },
            {
              "index": 1033,
              "actual": 13747.87235,
              "predicted": 32113.989322488247,
              "residual": -18366.11697248825,
              "abs_error": 18366.11697248825,
              "pct_error": 133.59243164989272,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "smoker_yes",
            "age"
          ],
          "rmse": 7144.199967032693,
          "mae": 4605.740802410677,
          "r2": 0.6746371718009084,
          "adj_r2": 0.6721816032861982,
          "f_stat": 1469.3223133076528,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2511.65913244144,
              "stderr": 567.6272467997517,
              "tstat": -4.424838917796888,
              "pvalue": 9.651427181097773e-06,
              "ci_lower": -3624.2085361689533,
              "ci_upper": -1399.1097287139266,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24131.44367493735,
              "stderr": 474.67614547483004,
              "tstat": 50.83770040897691,
              "pvalue": 1e-15,
              "ci_lower": 23201.078429806683,
              "ci_upper": 25061.808920068015,
              "vif": 1.0011963137714164
            },
            {
              "feature": "age",
              "coef": 275.75445572886053,
              "stderr": 13.408565214453454,
              "tstat": 20.565545330056448,
              "pvalue": 1e-15,
              "ci_lower": 249.47366790853175,
              "ci_upper": 302.0352435491893,
              "vif": 1.0011963137714164
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 34028.735050294636,
              "residual": 28564.138039705365,
              "abs_error": 28564.138039705365,
              "pct_error": 45.63480893205531,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 36510.52515185438,
              "residual": 27259.902858145622,
              "abs_error": 27259.902858145622,
              "pct_error": 42.74693413359391,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 13757.853755561331,
              "residual": 23152.754274438674,
              "abs_error": 23152.754274438674,
              "pct_error": 62.726558867902426,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 11827.572565459308,
              "residual": 21644.399324540693,
              "abs_error": 21644.399324540693,
              "pct_error": 64.66424922819417,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 2727.67552640691,
              "residual": 20355.27980359309,
              "abs_error": 20355.27980359309,
              "pct_error": 88.18316161249136,
              "rank": 5
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8518.519096712982,
              "residual": 19958.21589328702,
              "abs_error": 19958.21589328702,
              "pct_error": 70.08604006145937,
              "rank": 6
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 11276.063654001586,
              "residual": 19008.579285998414,
              "abs_error": 19008.579285998414,
              "pct_error": 62.76639722534703,
              "rank": 7
            },
            {
              "index": 637,
              "actual": 24915.04626,
              "predicted": 7139.746818068679,
              "residual": 17775.299441931318,
              "abs_error": 17775.299441931318,
              "pct_error": 71.3436341094368,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12103.327021188168,
              "residual": 17083.155338811834,
              "abs_error": 17083.155338811834,
              "pct_error": 58.53105258831825,
              "rank": 9
            },
            {
              "index": 99,
              "actual": 15820.699,
              "predicted": 32098.45386019261,
              "residual": -16277.75486019261,
              "abs_error": 16277.75486019261,
              "pct_error": 102.88897387019757,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "smoker_yes",
            "age",
            "bmi"
          ],
          "rmse": 6692.937982054249,
          "mae": 4602.7281711709065,
          "r2": 0.714441999700602,
          "adj_r2": 0.7111970224244724,
          "f_stat": 1099.5824857018072,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11082.96216481512,
              "stderr": 1027.5136430908528,
              "tstat": -10.786194654775171,
              "pvalue": 1e-15,
              "ci_lower": -13096.888905273192,
              "ci_upper": -9069.03542435705,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24063.051442518085,
              "stderr": 454.78367731684426,
              "tstat": 52.91098305129703,
              "pvalue": 1e-15,
              "ci_lower": 23171.67543497707,
              "ci_upper": 24954.4274500591,
              "vif": 1.001430627235178
            },
            {
              "feature": "age",
              "coef": 262.68710638994213,
              "stderr": 12.91372706492403,
              "tstat": 20.341695706381067,
              "pvalue": 1e-15,
              "ci_lower": 237.37620134269105,
              "ci_upper": 287.9980114371932,
              "vif": 1.011916168112868
            },
            {
              "feature": "bmi",
              "coef": 295.91579873832154,
              "stderr": 30.099163687737185,
              "tstat": 9.83136281819291,
              "pvalue": 1e-15,
              "ci_lower": 236.92143791035664,
              "ci_upper": 354.91015956628644,
              "vif": 1.010844599236135
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33785.012714945806,
              "residual": 28807.860375054195,
              "abs_error": 28807.860375054195,
              "pct_error": 46.02418606609163,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 41194.56104094366,
              "residual": 22575.86696905634,
              "abs_error": 22575.86696905634,
              "pct_error": 35.40178053300217,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 14713.446908285056,
              "residual": 22197.161121714948,
              "abs_error": 22197.161121714948,
              "pct_error": 60.13761979665483,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 9557.297389679512,
              "residual": 20727.34555032049,
              "abs_error": 20727.34555032049,
              "pct_error": 68.44176961698227,
              "rank": 4
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 13681.007715117386,
              "residual": 19790.964174882614,
              "abs_error": 19790.964174882614,
              "pct_error": 59.1269741738619,
              "rank": 5
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3702.9057948322234,
              "residual": 19380.04953516778,
              "abs_error": 19380.04953516778,
              "pct_error": 83.95826815979797,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 13139.976483503711,
              "residual": 17120.01907649629,
              "abs_error": 17120.01907649629,
              "pct_error": 56.576409743849574,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11681.354474523843,
              "residual": 16795.380515476158,
              "abs_error": 16795.380515476158,
              "pct_error": 58.979305462420776,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12397.534773099598,
              "residual": 16788.9475869004,
              "abs_error": 16788.9475869004,
              "pct_error": 57.52302514505692,
              "rank": 9
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9808.024194100559,
              "residual": 16332.336105899441,
              "abs_error": 16332.336105899441,
              "pct_error": 62.479384057684314,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "smoker_yes",
            "age",
            "bmi",
            "children"
          ],
          "rmse": 6682.861533576086,
          "mae": 4563.591797024217,
          "r2": 0.7153011872397669,
          "adj_r2": 0.7109711672738317,
          "f_stat": 835.5007226449668,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11546.013966059609,
              "stderr": 1031.7957921653856,
              "tstat": -11.19021230143659,
              "pvalue": 1e-15,
              "ci_lower": -13568.333718703765,
              "ci_upper": -9523.694213415452,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24061.248460479717,
              "stderr": 452.5984538873806,
              "tstat": 53.16246278310717,
              "pvalue": 1e-15,
              "ci_lower": 23174.155490860452,
              "ci_upper": 24948.341430098983,
              "vif": 1.0014320311179863
            },
            {
              "feature": "age",
              "coef": 261.29173271730923,
              "stderr": 12.858358021819477,
              "tstat": 20.320769749443954,
              "pvalue": 1e-15,
              "ci_lower": 236.08935099454305,
              "ci_upper": 286.4941144400754,
              "vif": 1.0129699707993498
            },
            {
              "feature": "bmi",
              "coef": 294.90143377882924,
              "stderr": 29.956034196077084,
              "tstat": 9.844475134744247,
              "pvalue": 1e-15,
              "ci_lower": 236.18760675451816,
              "ci_upper": 353.61526080314036,
              "vif": 1.0109469994675213
            },
            {
              "feature": "children",
              "coef": 502.1297995502951,
              "stderr": 149.2424432796712,
              "tstat": 3.3645241160340333,
              "pvalue": 0.0007667578307935385,
              "ci_lower": 209.61461072213956,
              "ci_upper": 794.6449883784506,
              "vif": 1.0012225385885063
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33226.56999622428,
              "residual": 29366.30309377572,
              "abs_error": 29366.30309377572,
              "pct_error": 46.916368659976655,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40606.2650366091,
              "residual": 23164.162973390907,
              "abs_error": 23164.162973390907,
              "pct_error": 36.32430218244493,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15137.027758865483,
              "residual": 21773.58027113452,
              "abs_error": 21773.58027113452,
              "pct_error": 58.990034120915894,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10003.007136706447,
              "residual": 20281.635803293553,
              "abs_error": 20281.635803293553,
              "pct_error": 66.9700344279296,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3179.7664136485146,
              "residual": 19903.188916351486,
              "abs_error": 19903.188916351486,
              "pct_error": 86.22461306106719,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14111.592036891629,
              "residual": 19360.379853108374,
              "abs_error": 19360.379853108374,
              "pct_error": 57.84057155859536,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12564.196495884567,
              "residual": 17695.799064115432,
              "abs_error": 17695.799064115432,
              "pct_error": 58.47918592396327,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11622.602529302165,
              "residual": 16854.132460697838,
              "abs_error": 16854.132460697838,
              "pct_error": 59.18562105738737,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9751.239592045113,
              "residual": 16389.120707954888,
              "abs_error": 16389.120707954888,
              "pct_error": 62.69661366509507,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12832.023778114555,
              "residual": 16354.458581885447,
              "abs_error": 16354.458581885447,
              "pct_error": 56.03435994842321,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "smoker_yes",
            "age",
            "bmi",
            "children",
            "region_southeast"
          ],
          "rmse": 6675.656052524937,
          "mae": 4567.964003451651,
          "r2": 0.7159147824734622,
          "adj_r2": 0.7104933088565435,
          "f_stat": 669.1764007977549,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11721.370634472412,
              "stderr": 1040.2119232002667,
              "tstat": -11.268252529168286,
              "pvalue": 1e-15,
              "ci_lower": -13760.186003944935,
              "ci_upper": -9682.55526499989,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24087.57386673239,
              "stderr": 452.90208831180445,
              "tstat": 53.18494767051965,
              "pvalue": 1e-15,
              "ci_lower": 23199.885773641254,
              "ci_upper": 24975.261959823525,
              "vif": 1.0034312597573565
            },
            {
              "feature": "age",
              "coef": 260.71627438268496,
              "stderr": 12.861753668806344,
              "tstat": 20.270663013473897,
              "pvalue": 1e-15,
              "ci_lower": 235.50723719182452,
              "ci_upper": 285.9253115735454,
              "vif": 1.014167180609306
            },
            {
              "feature": "bmi",
              "coef": 306.3957467839648,
              "stderr": 31.22001313350574,
              "tstat": 9.814081290540416,
              "pvalue": 1e-15,
              "ci_lower": 245.20452104229355,
              "ci_upper": 367.58697252563604,
              "vif": 1.0987769716907205
            },
            {
              "feature": "children",
              "coef": 495.61680463009304,
              "stderr": 149.277526115076,
              "tstat": 3.32010328365188,
              "pvalue": 0.0008998415047952462,
              "ci_lower": 203.03285344454406,
              "ci_upper": 788.200755815642,
              "vif": 1.002347724666897
            },
            {
              "feature": "region_southeast",
              "coef": -545.9412442741956,
              "stderr": 419.2398583491954,
              "tstat": -1.3022169371583638,
              "pvalue": 0.19284223685957474,
              "ci_lower": -1367.6513666386186,
              "ci_upper": 275.7688780902274,
              "vif": 1.0902761733119999
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32854.66920756778,
              "residual": 29738.203882432223,
              "abs_error": 29738.203882432223,
              "pct_error": 47.51052702066056,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40425.16315967854,
              "residual": 23345.264850321466,
              "abs_error": 23345.264850321466,
              "pct_error": 36.60829255632507,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15314.69515144816,
              "residual": 21595.91287855184,
              "abs_error": 21595.91287855184,
              "pct_error": 58.508689049498265,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10077.404811097287,
              "residual": 20207.238128902714,
              "abs_error": 20207.238128902714,
              "pct_error": 66.72437303929037,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3373.9377973478367,
              "residual": 19709.017532652164,
              "abs_error": 19709.017532652164,
              "pct_error": 85.38342361663342,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14324.609640755669,
              "residual": 19147.362249244332,
              "abs_error": 19147.362249244332,
              "pct_error": 57.204165658865016,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12682.992207776158,
              "residual": 17577.00335222384,
              "abs_error": 17577.00335222384,
              "pct_error": 58.08660254880699,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11893.808977256902,
              "residual": 16582.926012743097,
              "abs_error": 16582.926012743097,
              "pct_error": 58.23324204325539,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9852.668352754692,
              "residual": 16287.691947245308,
              "abs_error": 16287.691947245308,
              "pct_error": 62.308597740503636,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12984.408138192139,
              "residual": 16202.074221807863,
              "abs_error": 16202.074221807863,
              "pct_error": 55.51225400157425,
              "rank": 10
            }
          ]
        }
      ],
      "ElasticNet": [
        {
          "k": 1,
          "features": [
            "smoker_yes"
          ],
          "rmse": 8049.74620082037,
          "mae": 5981.674573990284,
          "r2": 0.5869286195374397,
          "adj_r2": 0.5853757196108886,
          "f_stat": 1803.27247410325,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 8319.988759275375,
              "stderr": 249.99694620946048,
              "tstat": 33.28036156211466,
              "pvalue": 1e-15,
              "ci_lower": 7829.994744704833,
              "ci_upper": 8809.982773845917,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 23794.00056321287,
              "stderr": 560.3208597563731,
              "tstat": 42.46495583540915,
              "pvalue": 1e-15,
              "ci_lower": 22695.77167809038,
              "ci_upper": 24892.22944833536,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 32113.989322488247,
              "residual": 31656.438687511756,
              "abs_error": 31656.438687511756,
              "pct_error": 49.64125171395687,
              "rank": 1
            },
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32113.989322488247,
              "residual": 30478.883767511754,
              "abs_error": 30478.883767511754,
              "pct_error": 48.693856445425155,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 8319.988759275375,
              "residual": 28590.61927072463,
              "abs_error": 28590.61927072463,
              "pct_error": 77.45908506163568,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 8319.988759275375,
              "residual": 25151.983130724628,
              "abs_error": 25151.983130724628,
              "pct_error": 75.14341614943507,
              "rank": 4
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 8319.988759275375,
              "residual": 21964.654180724625,
              "abs_error": 21964.654180724625,
              "pct_error": 72.52736716837323,
              "rank": 5
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 8319.988759275375,
              "residual": 21940.006800724623,
              "abs_error": 21940.006800724623,
              "pct_error": 72.50499015183803,
              "rank": 6
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 8319.988759275375,
              "residual": 20866.49360072463,
              "abs_error": 20866.49360072463,
              "pct_error": 71.49369130321132,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8319.988759275375,
              "residual": 20156.746230724624,
              "abs_error": 20156.746230724624,
              "pct_error": 70.7832068451771,
              "rank": 8
            },
            {
              "index": 770,
              "actual": 27941.28758,
              "predicted": 8319.988759275375,
              "residual": 19621.298820724624,
              "abs_error": 19621.298820724624,
              "pct_error": 70.22331653309092,
              "rank": 9
            },
            {
              "index": 1033,
              "actual": 13747.87235,
              "predicted": 32113.989322488247,
              "residual": -18366.11697248825,
              "abs_error": 18366.11697248825,
              "pct_error": 133.59243164989272,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "smoker_yes",
            "age"
          ],
          "rmse": 7144.199967032693,
          "mae": 4605.740802410677,
          "r2": 0.6746371718009084,
          "adj_r2": 0.6721816032861982,
          "f_stat": 1469.3223133076528,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2511.65913244144,
              "stderr": 567.6272467997517,
              "tstat": -4.424838917796888,
              "pvalue": 9.651427181097773e-06,
              "ci_lower": -3624.2085361689533,
              "ci_upper": -1399.1097287139266,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24131.44367493735,
              "stderr": 474.67614547483004,
              "tstat": 50.83770040897691,
              "pvalue": 1e-15,
              "ci_lower": 23201.078429806683,
              "ci_upper": 25061.808920068015,
              "vif": 1.0011963137714164
            },
            {
              "feature": "age",
              "coef": 275.75445572886053,
              "stderr": 13.408565214453454,
              "tstat": 20.565545330056448,
              "pvalue": 1e-15,
              "ci_lower": 249.47366790853175,
              "ci_upper": 302.0352435491893,
              "vif": 1.0011963137714164
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 34028.735050294636,
              "residual": 28564.138039705365,
              "abs_error": 28564.138039705365,
              "pct_error": 45.63480893205531,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 36510.52515185438,
              "residual": 27259.902858145622,
              "abs_error": 27259.902858145622,
              "pct_error": 42.74693413359391,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 13757.853755561331,
              "residual": 23152.754274438674,
              "abs_error": 23152.754274438674,
              "pct_error": 62.726558867902426,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 11827.572565459308,
              "residual": 21644.399324540693,
              "abs_error": 21644.399324540693,
              "pct_error": 64.66424922819417,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 2727.67552640691,
              "residual": 20355.27980359309,
              "abs_error": 20355.27980359309,
              "pct_error": 88.18316161249136,
              "rank": 5
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8518.519096712982,
              "residual": 19958.21589328702,
              "abs_error": 19958.21589328702,
              "pct_error": 70.08604006145937,
              "rank": 6
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 11276.063654001586,
              "residual": 19008.579285998414,
              "abs_error": 19008.579285998414,
              "pct_error": 62.76639722534703,
              "rank": 7
            },
            {
              "index": 637,
              "actual": 24915.04626,
              "predicted": 7139.746818068679,
              "residual": 17775.299441931318,
              "abs_error": 17775.299441931318,
              "pct_error": 71.3436341094368,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12103.327021188168,
              "residual": 17083.155338811834,
              "abs_error": 17083.155338811834,
              "pct_error": 58.53105258831825,
              "rank": 9
            },
            {
              "index": 99,
              "actual": 15820.699,
              "predicted": 32098.45386019261,
              "residual": -16277.75486019261,
              "abs_error": 16277.75486019261,
              "pct_error": 102.88897387019757,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "smoker_yes",
            "age",
            "bmi"
          ],
          "rmse": 6692.937982054249,
          "mae": 4602.7281711709065,
          "r2": 0.714441999700602,
          "adj_r2": 0.7111970224244724,
          "f_stat": 1099.5824857018072,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11082.96216481512,
              "stderr": 1027.5136430908528,
              "tstat": -10.786194654775171,
              "pvalue": 1e-15,
              "ci_lower": -13096.888905273192,
              "ci_upper": -9069.03542435705,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24063.051442518085,
              "stderr": 454.78367731684426,
              "tstat": 52.91098305129703,
              "pvalue": 1e-15,
              "ci_lower": 23171.67543497707,
              "ci_upper": 24954.4274500591,
              "vif": 1.001430627235178
            },
            {
              "feature": "age",
              "coef": 262.68710638994213,
              "stderr": 12.91372706492403,
              "tstat": 20.341695706381067,
              "pvalue": 1e-15,
              "ci_lower": 237.37620134269105,
              "ci_upper": 287.9980114371932,
              "vif": 1.011916168112868
            },
            {
              "feature": "bmi",
              "coef": 295.91579873832154,
              "stderr": 30.099163687737185,
              "tstat": 9.83136281819291,
              "pvalue": 1e-15,
              "ci_lower": 236.92143791035664,
              "ci_upper": 354.91015956628644,
              "vif": 1.010844599236135
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33785.012714945806,
              "residual": 28807.860375054195,
              "abs_error": 28807.860375054195,
              "pct_error": 46.02418606609163,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 41194.56104094366,
              "residual": 22575.86696905634,
              "abs_error": 22575.86696905634,
              "pct_error": 35.40178053300217,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 14713.446908285056,
              "residual": 22197.161121714948,
              "abs_error": 22197.161121714948,
              "pct_error": 60.13761979665483,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 9557.297389679512,
              "residual": 20727.34555032049,
              "abs_error": 20727.34555032049,
              "pct_error": 68.44176961698227,
              "rank": 4
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 13681.007715117386,
              "residual": 19790.964174882614,
              "abs_error": 19790.964174882614,
              "pct_error": 59.1269741738619,
              "rank": 5
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3702.9057948322234,
              "residual": 19380.04953516778,
              "abs_error": 19380.04953516778,
              "pct_error": 83.95826815979797,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 13139.976483503711,
              "residual": 17120.01907649629,
              "abs_error": 17120.01907649629,
              "pct_error": 56.576409743849574,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11681.354474523843,
              "residual": 16795.380515476158,
              "abs_error": 16795.380515476158,
              "pct_error": 58.979305462420776,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12397.534773099598,
              "residual": 16788.9475869004,
              "abs_error": 16788.9475869004,
              "pct_error": 57.52302514505692,
              "rank": 9
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9808.024194100559,
              "residual": 16332.336105899441,
              "abs_error": 16332.336105899441,
              "pct_error": 62.479384057684314,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "smoker_yes",
            "age",
            "bmi",
            "children"
          ],
          "rmse": 6682.861533576086,
          "mae": 4563.591797024217,
          "r2": 0.7153011872397669,
          "adj_r2": 0.7109711672738317,
          "f_stat": 835.5007226449668,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11546.013966059609,
              "stderr": 1031.7957921653856,
              "tstat": -11.19021230143659,
              "pvalue": 1e-15,
              "ci_lower": -13568.333718703765,
              "ci_upper": -9523.694213415452,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24061.248460479717,
              "stderr": 452.5984538873806,
              "tstat": 53.16246278310717,
              "pvalue": 1e-15,
              "ci_lower": 23174.155490860452,
              "ci_upper": 24948.341430098983,
              "vif": 1.0014320311179863
            },
            {
              "feature": "age",
              "coef": 261.29173271730923,
              "stderr": 12.858358021819477,
              "tstat": 20.320769749443954,
              "pvalue": 1e-15,
              "ci_lower": 236.08935099454305,
              "ci_upper": 286.4941144400754,
              "vif": 1.0129699707993498
            },
            {
              "feature": "bmi",
              "coef": 294.90143377882924,
              "stderr": 29.956034196077084,
              "tstat": 9.844475134744247,
              "pvalue": 1e-15,
              "ci_lower": 236.18760675451816,
              "ci_upper": 353.61526080314036,
              "vif": 1.0109469994675213
            },
            {
              "feature": "children",
              "coef": 502.1297995502951,
              "stderr": 149.2424432796712,
              "tstat": 3.3645241160340333,
              "pvalue": 0.0007667578307935385,
              "ci_lower": 209.61461072213956,
              "ci_upper": 794.6449883784506,
              "vif": 1.0012225385885063
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33226.56999622428,
              "residual": 29366.30309377572,
              "abs_error": 29366.30309377572,
              "pct_error": 46.916368659976655,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40606.2650366091,
              "residual": 23164.162973390907,
              "abs_error": 23164.162973390907,
              "pct_error": 36.32430218244493,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15137.027758865483,
              "residual": 21773.58027113452,
              "abs_error": 21773.58027113452,
              "pct_error": 58.990034120915894,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10003.007136706447,
              "residual": 20281.635803293553,
              "abs_error": 20281.635803293553,
              "pct_error": 66.9700344279296,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3179.7664136485146,
              "residual": 19903.188916351486,
              "abs_error": 19903.188916351486,
              "pct_error": 86.22461306106719,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14111.592036891629,
              "residual": 19360.379853108374,
              "abs_error": 19360.379853108374,
              "pct_error": 57.84057155859536,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12564.196495884567,
              "residual": 17695.799064115432,
              "abs_error": 17695.799064115432,
              "pct_error": 58.47918592396327,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11622.602529302165,
              "residual": 16854.132460697838,
              "abs_error": 16854.132460697838,
              "pct_error": 59.18562105738737,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9751.239592045113,
              "residual": 16389.120707954888,
              "abs_error": 16389.120707954888,
              "pct_error": 62.69661366509507,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12832.023778114555,
              "residual": 16354.458581885447,
              "abs_error": 16354.458581885447,
              "pct_error": 56.03435994842321,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "smoker_yes",
            "age",
            "bmi",
            "children",
            "region_southeast"
          ],
          "rmse": 6675.656052524937,
          "mae": 4567.964003451651,
          "r2": 0.7159147824734622,
          "adj_r2": 0.7104933088565435,
          "f_stat": 669.1764007977549,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11721.370634472412,
              "stderr": 1040.2119232002667,
              "tstat": -11.268252529168286,
              "pvalue": 1e-15,
              "ci_lower": -13760.186003944935,
              "ci_upper": -9682.55526499989,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 24087.57386673239,
              "stderr": 452.90208831180445,
              "tstat": 53.18494767051965,
              "pvalue": 1e-15,
              "ci_lower": 23199.885773641254,
              "ci_upper": 24975.261959823525,
              "vif": 1.0034312597573565
            },
            {
              "feature": "age",
              "coef": 260.71627438268496,
              "stderr": 12.861753668806344,
              "tstat": 20.270663013473897,
              "pvalue": 1e-15,
              "ci_lower": 235.50723719182452,
              "ci_upper": 285.9253115735454,
              "vif": 1.014167180609306
            },
            {
              "feature": "bmi",
              "coef": 306.3957467839648,
              "stderr": 31.22001313350574,
              "tstat": 9.814081290540416,
              "pvalue": 1e-15,
              "ci_lower": 245.20452104229355,
              "ci_upper": 367.58697252563604,
              "vif": 1.0987769716907205
            },
            {
              "feature": "children",
              "coef": 495.61680463009304,
              "stderr": 149.277526115076,
              "tstat": 3.32010328365188,
              "pvalue": 0.0008998415047952462,
              "ci_lower": 203.03285344454406,
              "ci_upper": 788.200755815642,
              "vif": 1.002347724666897
            },
            {
              "feature": "region_southeast",
              "coef": -545.9412442741956,
              "stderr": 419.2398583491954,
              "tstat": -1.3022169371583638,
              "pvalue": 0.19284223685957474,
              "ci_lower": -1367.6513666386186,
              "ci_upper": 275.7688780902274,
              "vif": 1.0902761733119999
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32854.66920756778,
              "residual": 29738.203882432223,
              "abs_error": 29738.203882432223,
              "pct_error": 47.51052702066056,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40425.16315967854,
              "residual": 23345.264850321466,
              "abs_error": 23345.264850321466,
              "pct_error": 36.60829255632507,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15314.69515144816,
              "residual": 21595.91287855184,
              "abs_error": 21595.91287855184,
              "pct_error": 58.508689049498265,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10077.404811097287,
              "residual": 20207.238128902714,
              "abs_error": 20207.238128902714,
              "pct_error": 66.72437303929037,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3373.9377973478367,
              "residual": 19709.017532652164,
              "abs_error": 19709.017532652164,
              "pct_error": 85.38342361663342,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14324.609640755669,
              "residual": 19147.362249244332,
              "abs_error": 19147.362249244332,
              "pct_error": 57.204165658865016,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12682.992207776158,
              "residual": 17577.00335222384,
              "abs_error": 17577.00335222384,
              "pct_error": 58.08660254880699,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11893.808977256902,
              "residual": 16582.926012743097,
              "abs_error": 16582.926012743097,
              "pct_error": 58.23324204325539,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9852.668352754692,
              "residual": 16287.691947245308,
              "abs_error": 16287.691947245308,
              "pct_error": 62.308597740503636,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12984.408138192139,
              "residual": 16202.074221807863,
              "abs_error": 16202.074221807863,
              "pct_error": 55.51225400157425,
              "rank": 10
            }
          ]
        }
      ],
      "Exhaustive": [
        {
          "k": 1,
          "features": [
            "smoker_yes"
          ],
          "rmse": 8049.74620082037,
          "mae": 5981.674573990284,
          "r2": 0.5869286195374397,
          "adj_r2": 0.5853757196108886,
          "f_stat": 1803.27247410325,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 8319.988759275375,
              "stderr": 249.99694620946048,
              "tstat": 33.28036156211466,
              "pvalue": 1e-15,
              "ci_lower": 7829.994744704833,
              "ci_upper": 8809.982773845917,
              "vif": null
            },
            {
              "feature": "smoker_yes",
              "coef": 23794.00056321287,
              "stderr": 560.3208597563731,
              "tstat": 42.46495583540915,
              "pvalue": 1e-15,
              "ci_lower": 22695.77167809038,
              "ci_upper": 24892.22944833536,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 32113.989322488247,
              "residual": 31656.438687511756,
              "abs_error": 31656.438687511756,
              "pct_error": 49.64125171395687,
              "rank": 1
            },
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32113.989322488247,
              "residual": 30478.883767511754,
              "abs_error": 30478.883767511754,
              "pct_error": 48.693856445425155,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 8319.988759275375,
              "residual": 28590.61927072463,
              "abs_error": 28590.61927072463,
              "pct_error": 77.45908506163568,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 8319.988759275375,
              "residual": 25151.983130724628,
              "abs_error": 25151.983130724628,
              "pct_error": 75.14341614943507,
              "rank": 4
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 8319.988759275375,
              "residual": 21964.654180724625,
              "abs_error": 21964.654180724625,
              "pct_error": 72.52736716837323,
              "rank": 5
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 8319.988759275375,
              "residual": 21940.006800724623,
              "abs_error": 21940.006800724623,
              "pct_error": 72.50499015183803,
              "rank": 6
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 8319.988759275375,
              "residual": 20866.49360072463,
              "abs_error": 20866.49360072463,
              "pct_error": 71.49369130321132,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8319.988759275375,
              "residual": 20156.746230724624,
              "abs_error": 20156.746230724624,
              "pct_error": 70.7832068451771,
              "rank": 8
            },
            {
              "index": 770,
              "actual": 27941.28758,
              "predicted": 8319.988759275375,
              "residual": 19621.298820724624,
              "abs_error": 19621.298820724624,
              "pct_error": 70.22331653309092,
              "rank": 9
            },
            {
              "index": 1033,
              "actual": 13747.87235,
              "predicted": 32113.989322488247,
              "residual": -18366.11697248825,
              "abs_error": 18366.11697248825,
              "pct_error": 133.59243164989272,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "age",
            "smoker_yes"
          ],
          "rmse": 7144.199967032715,
          "mae": 4605.74080241034,
          "r2": 0.6746371718009063,
          "adj_r2": 0.6721816032861962,
          "f_stat": 1469.322313307701,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -2511.6591324424103,
              "stderr": 567.6272467997524,
              "tstat": -4.424838917798591,
              "pvalue": 9.651427181021628e-06,
              "ci_lower": -3624.2085361699246,
              "ci_upper": -1399.1097287148957,
              "vif": null
            },
            {
              "feature": "age",
              "coef": 275.7544557288692,
              "stderr": 13.408565214453503,
              "tstat": 20.565545330057013,
              "pvalue": 1e-15,
              "ci_lower": 249.4736679085403,
              "ci_upper": 302.035243549198,
              "vif": 1.0011963137714164
            },
            {
              "feature": "smoker_yes",
              "coef": 24131.44367493769,
              "stderr": 474.6761454748302,
              "tstat": 50.83770040897761,
              "pvalue": 1e-15,
              "ci_lower": 23201.078429807025,
              "ci_upper": 25061.808920068357,
              "vif": 1.0011963137714164
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 34028.735050294395,
              "residual": 28564.138039705605,
              "abs_error": 28564.138039705605,
              "pct_error": 45.63480893205569,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 36510.52515185422,
              "residual": 27259.902858145782,
              "abs_error": 27259.902858145782,
              "pct_error": 42.74693413359416,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 13757.853755560871,
              "residual": 23152.754274439132,
              "abs_error": 23152.754274439132,
              "pct_error": 62.72655886790367,
              "rank": 3
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 11827.572565458788,
              "residual": 21644.399324541213,
              "abs_error": 21644.399324541213,
              "pct_error": 64.66424922819571,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 2727.6755264061044,
              "residual": 20355.279803593898,
              "abs_error": 20355.279803593898,
              "pct_error": 88.18316161249487,
              "rank": 5
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 8518.519096712358,
              "residual": 19958.21589328764,
              "abs_error": 19958.21589328764,
              "pct_error": 70.08604006146155,
              "rank": 6
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 11276.06365400105,
              "residual": 19008.579285998952,
              "abs_error": 19008.579285998952,
              "pct_error": 62.766397225348804,
              "rank": 7
            },
            {
              "index": 637,
              "actual": 24915.04626,
              "predicted": 7139.746818068012,
              "residual": 17775.299441931988,
              "abs_error": 17775.299441931988,
              "pct_error": 71.34363410943949,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12103.327021187657,
              "residual": 17083.155338812343,
              "abs_error": 17083.155338812343,
              "pct_error": 58.53105258832001,
              "rank": 9
            },
            {
              "index": 99,
              "actual": 15820.699,
              "predicted": 32098.453860192312,
              "residual": -16277.754860192312,
              "abs_error": 16277.754860192312,
              "pct_error": 102.88897387019568,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "age",
            "bmi",
            "smoker_yes"
          ],
          "rmse": 6692.937982054356,
          "mae": 4602.728171170688,
          "r2": 0.7144419997005927,
          "adj_r2": 0.7111970224244631,
          "f_stat": 1099.582485701732,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11082.962164806919,
              "stderr": 1027.5136430907999,
              "tstat": -10.786194654767746,
              "pvalue": 1e-15,
              "ci_lower": -13096.888905264886,
              "ci_upper": -9069.035424348951,
              "vif": null
            },
            {
              "feature": "age",
              "coef": 262.6871063899016,
              "stderr": 12.913727064923373,
              "tstat": 20.341695706378964,
              "pvalue": 1e-15,
              "ci_lower": 237.3762013426518,
              "ci_upper": 287.99801143715143,
              "vif": 1.0119161681128679
            },
            {
              "feature": "bmi",
              "coef": 295.9157987381277,
              "stderr": 30.09916368773742,
              "tstat": 9.831362818186394,
              "pvalue": 1e-15,
              "ci_lower": 236.92143791016235,
              "ci_upper": 354.91015956609306,
              "vif": 1.0108445992361352
            },
            {
              "feature": "smoker_yes",
              "coef": 24063.051442518346,
              "stderr": 454.7836773168493,
              "tstat": 52.910983051297016,
              "pvalue": 1e-15,
              "ci_lower": 23171.675434977322,
              "ci_upper": 24954.42745005937,
              "vif": 1.001430627235178
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33785.01271494656,
              "residual": 28807.86037505344,
              "abs_error": 28807.86037505344,
              "pct_error": 46.024186066090415,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 41194.56104094075,
              "residual": 22575.86696905925,
              "abs_error": 22575.86696905925,
              "pct_error": 35.40178053300673,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 14713.446908284119,
              "residual": 22197.161121715886,
              "abs_error": 22197.161121715886,
              "pct_error": 60.13761979665737,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 9557.29738968077,
              "residual": 20727.34555031923,
              "abs_error": 20727.34555031923,
              "pct_error": 68.44176961697812,
              "rank": 4
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 13681.007715116206,
              "residual": 19790.964174883797,
              "abs_error": 19790.964174883797,
              "pct_error": 59.126974173865435,
              "rank": 5
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3702.9057948332393,
              "residual": 19380.049535166763,
              "abs_error": 19380.049535166763,
              "pct_error": 83.95826815979358,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 13139.976483503939,
              "residual": 17120.01907649606,
              "abs_error": 17120.01907649606,
              "pct_error": 56.57640974384882,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11681.354474522395,
              "residual": 16795.380515477606,
              "abs_error": 16795.380515477606,
              "pct_error": 58.979305462425856,
              "rank": 8
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12397.53477309939,
              "residual": 16788.947586900613,
              "abs_error": 16788.947586900613,
              "pct_error": 57.52302514505764,
              "rank": 9
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9808.024194101521,
              "residual": 16332.33610589848,
              "abs_error": 16332.33610589848,
              "pct_error": 62.47938405768064,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "age",
            "bmi",
            "children",
            "smoker_yes"
          ],
          "rmse": 6682.861533576122,
          "mae": 4563.591797024182,
          "r2": 0.7153011872397637,
          "adj_r2": 0.7109711672738286,
          "f_stat": 835.5007226449586,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11546.013966056027,
              "stderr": 1031.7957921654352,
              "tstat": -11.190212301432581,
              "pvalue": 1e-15,
              "ci_lower": -13568.33371870028,
              "ci_upper": -9523.694213411774,
              "vif": null
            },
            {
              "feature": "age",
              "coef": 261.29173271729405,
              "stderr": 12.85835802181896,
              "tstat": 20.320769749443592,
              "pvalue": 1e-15,
              "ci_lower": 236.0893509945289,
              "ci_upper": 286.4941144400592,
              "vif": 1.0129699707993498
            },
            {
              "feature": "bmi",
              "coef": 294.90143377875097,
              "stderr": 29.95603419608008,
              "tstat": 9.84447513474065,
              "pvalue": 1e-15,
              "ci_lower": 236.187606754434,
              "ci_upper": 353.61526080306794,
              "vif": 1.010946999467521
            },
            {
              "feature": "children",
              "coef": 502.12979955023445,
              "stderr": 149.24244327967102,
              "tstat": 3.364524116033631,
              "pvalue": 0.0007667578307946572,
              "ci_lower": 209.61461072207925,
              "ci_upper": 794.6449883783896,
              "vif": 1.0012225385885063
            },
            {
              "feature": "smoker_yes",
              "coef": 24061.24846048008,
              "stderr": 452.59845388738233,
              "tstat": 53.16246278310777,
              "pvalue": 1e-15,
              "ci_lower": 23174.155490860812,
              "ci_upper": 24948.34143009935,
              "vif": 1.0014320311179863
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 33226.56999622517,
              "residual": 29366.303093774834,
              "abs_error": 29366.303093774834,
              "pct_error": 46.91636865997524,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40606.265036608514,
              "residual": 23164.16297339149,
              "abs_error": 23164.16297339149,
              "pct_error": 36.32430218244585,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15137.027758865324,
              "residual": 21773.580271134677,
              "abs_error": 21773.580271134677,
              "pct_error": 58.99003412091631,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10003.007136707163,
              "residual": 20281.63580329284,
              "abs_error": 20281.63580329284,
              "pct_error": 66.97003442792725,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3179.7664136492167,
              "residual": 19903.188916350784,
              "abs_error": 19903.188916350784,
              "pct_error": 86.22461306106415,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14111.592036891363,
              "residual": 19360.379853108636,
              "abs_error": 19360.379853108636,
              "pct_error": 57.840571558596146,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12564.196495885,
              "residual": 17695.799064115,
              "abs_error": 17695.799064115,
              "pct_error": 58.47918592396184,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11622.602529301834,
              "residual": 16854.132460698165,
              "abs_error": 16854.132460698165,
              "pct_error": 59.185621057388516,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9751.239592045767,
              "residual": 16389.120707954233,
              "abs_error": 16389.120707954233,
              "pct_error": 62.69661366509257,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12832.023778114683,
              "residual": 16354.45858188532,
              "abs_error": 16354.45858188532,
              "pct_error": 56.034359948422775,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "age",
            "bmi",
            "children",
            "smoker_yes",
            "region_southeast"
          ],
          "rmse": 6675.656052525025,
          "mae": 4567.964003451407,
          "r2": 0.7159147824734546,
          "adj_r2": 0.7104933088565358,
          "f_stat": 669.1764007976743,
          "f_pvalue": 1e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -11721.37063446541,
              "stderr": 1040.2119232001562,
              "tstat": -11.268252529162751,
              "pvalue": 1e-15,
              "ci_lower": -13760.186003937715,
              "ci_upper": -9682.555264993103,
              "vif": null
            },
            {
              "feature": "age",
              "coef": 260.71627438265176,
              "stderr": 12.861753668806692,
              "tstat": 20.270663013470767,
              "pvalue": 1e-15,
              "ci_lower": 235.50723719179064,
              "ci_upper": 285.9253115735129,
              "vif": 1.014167180609306
            },
            {
              "feature": "bmi",
              "coef": 306.3957467837858,
              "stderr": 31.220013133501546,
              "tstat": 9.814081290536002,
              "pvalue": 1e-15,
              "ci_lower": 245.20452104212276,
              "ci_upper": 367.5869725254488,
              "vif": 1.0987769716907205
            },
            {
              "feature": "children",
              "coef": 495.616804629963,
              "stderr": 149.277526115076,
              "tstat": 3.3201032836510085,
              "pvalue": 0.000899841504798054,
              "ci_lower": 203.032853444414,
              "ci_upper": 788.2007558155119,
              "vif": 1.002347724666897
            },
            {
              "feature": "smoker_yes",
              "coef": 24087.57386673175,
              "stderr": 452.9020883118006,
              "tstat": 53.18494767051869,
              "pvalue": 1e-15,
              "ci_lower": 23199.88577364062,
              "ci_upper": 24975.261959822878,
              "vif": 1.0034312597573565
            },
            {
              "feature": "region_southeast",
              "coef": -545.9412442737467,
              "stderr": 419.2398583491928,
              "tstat": -1.3022169371573014,
              "pvalue": 0.19284223685993784,
              "ci_lower": -1367.6513666381647,
              "ci_upper": 275.76887809067114,
              "vif": 1.0902761733119999
            }
          ],
          "outliers": [
            {
              "index": 1300,
              "actual": 62592.87309,
              "predicted": 32854.669207567655,
              "residual": 29738.203882432346,
              "abs_error": 29738.203882432346,
              "pct_error": 47.51052702066076,
              "rank": 1
            },
            {
              "index": 543,
              "actual": 63770.42801,
              "predicted": 40425.16315967507,
              "residual": 23345.264850324937,
              "abs_error": 23345.264850324937,
              "pct_error": 36.608292556330504,
              "rank": 2
            },
            {
              "index": 1206,
              "actual": 36910.60803,
              "predicted": 15314.695151446715,
              "residual": 21595.91287855329,
              "abs_error": 21595.91287855329,
              "pct_error": 58.508689049502195,
              "rank": 3
            },
            {
              "index": 387,
              "actual": 30284.64294,
              "predicted": 10077.40481109783,
              "residual": 20207.238128902172,
              "abs_error": 20207.238128902172,
              "pct_error": 66.72437303928858,
              "rank": 4
            },
            {
              "index": 430,
              "actual": 23082.95533,
              "predicted": 3373.937797348284,
              "residual": 19709.017532651716,
              "abs_error": 19709.017532651716,
              "pct_error": 85.38342361663148,
              "rank": 5
            },
            {
              "index": 599,
              "actual": 33471.97189,
              "predicted": 14324.60964075397,
              "residual": 19147.36224924603,
              "abs_error": 19147.36224924603,
              "pct_error": 57.20416565887009,
              "rank": 6
            },
            {
              "index": 115,
              "actual": 30259.99556,
              "predicted": 12682.992207776051,
              "residual": 17577.003352223946,
              "abs_error": 17577.003352223946,
              "pct_error": 58.086602548807335,
              "rank": 7
            },
            {
              "index": 806,
              "actual": 28476.73499,
              "predicted": 11893.808977255032,
              "residual": 16582.926012744967,
              "abs_error": 16582.926012744967,
              "pct_error": 58.233242043261946,
              "rank": 8
            },
            {
              "index": 876,
              "actual": 26140.3603,
              "predicted": 9852.668352755085,
              "residual": 16287.691947244915,
              "abs_error": 16287.691947244915,
              "pct_error": 62.30859774050212,
              "rank": 9
            },
            {
              "index": 696,
              "actual": 29186.48236,
              "predicted": 12984.40813819134,
              "residual": 16202.074221808662,
              "abs_error": 16202.074221808662,
              "pct_error": 55.51225400157699,
              "rank": 10
            }
          ]
        }
      ]
    }
  }
};
// Backward compatibility with baseline
window.MODEL_DATA = window.PROBLEMS_DATA["startups"].models;
