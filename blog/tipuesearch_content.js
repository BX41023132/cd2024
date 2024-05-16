var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/BX41023132/cd2024 網站: https://bx41023132.github.io/cd2024/ 簡報: https://bx41023132.github.io/cd2024/reveal 網誌: https://bx41023132.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"協同產品設計實習 W13","text":"2024 Spring W13 CLASS CONTENT. w13-0516 Class Content","tags":"w13","url":"./2024-Spring-w13-blog-tutorial.html"},{"title":"協同產品設計實習 W12","text":"2024 Spring W12 CLASS CONTENT. 心得 這週我分配到任務一，有老師的影片輔助我覺得有很大的幫助。 這個任務可以讓我更清楚程式的應用。 w12-0509 Class Content 實習任務一 以W12 blog 影片中說明如何設定 Siemens NX Journal 存檔格式, 並且利用 NXOpen 程式分別執行建立 block 與挖孔 (透過錄製 Journal 程式產生)後, 請設法將兩個程式合併為一個程式, 可以直接完成建立一個 block 並在其特定面上挖孔. https://replit.com/@41023132/cd2024#downloads/journal.py https://replit.com/@41023132/cd2024#downloads/nxopen_create_a_new_part.py 實習任務二: 將分組倉儲設為評分網站子模組 2a 評分倉儲: https://github.com/mdecd2024/2astud-2asite 2b 評分倉儲: https://github.com/mdecd2024/2bstud-2bsite 以 2a 第一組分組倉儲 https://github.com/mdecd2024/2a-midag1 為例, 設為 2astud-2asite 倉儲名稱為 g1 的子模組指令為: git submodule add https://github.com/mdecd2024/2a-midag1 g1 實習任務三: 跨網路操控足球機器人進行競技 請各組從 https://github.com/mdecd2023/2a3-pj3ag4 下載該組當時所完成的倉儲資料, 並參考網際手足球機器人場景設計專案報告, 由各組員分別擔任場景競技球員, 利用鍵盤跨網路操控足球機器人進行球賽競技. 執行步驟: 在可攜程式系統安裝所需的 Python 模組: pip install pyzmq cbor keyboard 在近端電腦上取下倉儲內容: git clone https://github.com/mdecd2023/2a3-pj3ag4 球場、球員、數位計分器與類比計分器場景, 以及機器人球員控制程式位於: 2a3-pj3ag4\\downloads\\zmq_football 目錄 利用 CoppeliaSim 4.5.1 rev1 for IPv6.7z 開啟 zmq_football 目錄中的 site.ttt 利用可攜程式系統中的 SciTE 編輯器開啟 zmq_football 目錄中的 judge.py, 按下 Tools - Go 之後, CoppeliaSim 中的足球場景將開始進行模擬, 足球從球場正中央拋下, 兩隊球員完成列隊, 準備接受遠端 ZMQ RemoteAPI Python 程式操控, 以便進行球賽競技. 各球員操控程式可跨 IPv4 與 IPv6 網路對場景中的機器人球員進行控制, 球場即時畫面可由 http://球場所在電腦_IP_位址或符號名稱:23020 擷取, 球場與控制端的防火牆必須允許雙方 ZMQ 網路封包通過 port 23000 與 23020, 其中 23000 用於 Python 程式控制, 而 23020 則用於網際 Visualization Stream 影像串流用. 各球員控制端, 分別在各自電腦以可攜程式系統中的 SciTE 編輯器開啟 zmq_football 目錄中的 player.py, 並依據球員編號進行動作操控. 鍵盤中的 a 鍵控制球員向左轉, d 鍵控制球員向右轉, w 向前移動, s 向後移動, space 鍵翻身, 按下 shift 鍵將加速並轉向, 按下 q 鍵則終止模擬.","tags":"w12","url":"./2024-Spring-w12-blog-tutorial.html"},{"title":"協同產品設計實習 W11","text":"2024 Spring W11 CLASS CONTENT. 心得 利用ｓｏｌｖｅｓｐａｃｅ查看尺寸， 再用ＮＸ繪製圖形。 我分配到４個要繪製，我覺得畫起來還蠻順手。 w11-0502 Class Content 鋼球平衡台自動控制系統模擬 請根據 Solvespace_model _2d_for_cd2024_w6.7z 零組件尺寸, 利用 Siemens NX1872.7z (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) 執行零組件繪圖, 完成後請將過程影片放入個人與分組網站中. 分工: 41039138 https://replit.com/@41023132/cd2024#downloads/platform.prt 41023132 https://replit.com/@41023132/cd2024#downloads/base.prt https://replit.com/@41023132/cd2024#downloads/s_link.prt https://replit.com/@41023132/cd2024#downloads/shaft.prt https://replit.com/@41023132/cd2024#downloads/y_link.prt 各週指定任務如下 1.個人 cd2024 與分組倉儲的建立及維護. 2.各分組註冊一個 Odoo 帳號, 選用免費的 PLM 模組, 取得各分組的產品生命週期管理系統網域, 並將參考論文的協同翻譯流程作為工作項目, 在各分組的 PLM 網域系統中留下任務分配與紀錄, 最終產出為一份參考論文的中英文翻譯並列 pdf 檔案, 其中包含各組員的心得報告. 3.指定在參考論文的翻譯與閱讀過程, 將各組員的 cd2024 課程倉儲納為分組倉儲的子模組, 可以將各組員倉儲中的 LaTeX 原始資料, 整合至分組倉儲中, 採 Github Actions 或近端使用 MikTeX 建立分組的參考論文閱讀報告 pdf 檔案(教學). 4.要求各分組採協同方式, 在各教學影片上填上字幕並嵌入個人網站, 分工整理影片逐字稿與教學重點, 最後完成期中自評, 在期中考週將自評成績送至教務處. 5.要求下載 Siemens NX 1872 至個人隨身碟或電腦 (含筆電), 後續專案系統的零組件繪圖可採電腦輔助設計室固態硬碟所安裝的 NX1872 或隨身碟中的可攜系統, 必須透過連網取得認證後才能開啟. 6.提醒 CoppeliaSim 不同版本中存檔上的差異, 並強調 cd2024 將沿用 cad2023 課程中所使用的 4.5.1 版. 7.各分組可以利用可攜式 Sourcetree 套件, 在近端充分了解個人倉儲與分組倉儲的各種改版或解決衝突議題. 8.在第七週摘要出 cd2024 各項分組協同模式的要點及執行方法. 9.在第八週說明如何應用 AI 協助先前閱讀論文, 整理資料以及延伸模擬程式的方法, 並提出既存鋼球平衡台控制與模擬的實習步驟. 10.第十週起, 要求學員完成三項實習任務.","tags":"w11","url":"./2024-Spring-w11-blog-tutorial.html"},{"title":"協同產品設計實習 W10","text":"2024 Spring W10 CLASS CONTENT. 心得 期中之後要用期末的東西，這週在介紹鋼球平衡台， ＮＸ在之前有學過，但用隨身碟內的開會變很當， 所以我習慣用學校的用。 w10-0425 Class Content 課程活動 協同資料處理 登入 Github 後, 連線至 classroom 取得對 2bstud-2bsite 的管理權限, 其中 downloads 目錄中將會有 2b.txt, 其中帶有上週取得的學員資料. 若資料有異動, 請各學員直接進入更改, 並且留下清楚的提交訊息. 鋼球平衡台 PID 控制與模擬 文章摘要 cd2024_2D Ball Balancer Control using QUARC 此文章是關於「2D 球平衡器實驗」的指導手冊。實驗的目標是穩定球在平衡板上的位置，並使用比例-積分-微分（PID）控制系統來滿足一組規格要求。實驗涵蓋了以下主題： - 從第一原理建立球的動態模型。 - 獲取系統的傳遞函數表示。 - 設計比例-速度（PV）補償器，以控制伺服負載軸的位置，符合某些時域要求。 - 設計比例-積分-微分（PID）補償器，調節樑上球的位置，滿足特定規格。這與伺服控制一起構成完整的球和樑串級控制系統。 - 探索控制技術，如設定點權重和積分反飽和。 - 使用植物模型模擬球和樑控制，確保滿足規格，並避免任何致動器飽和。 - 在 Quanser 2DBB 裝置上實施控制器並評估其性能。 在先修條件方面，使用者應熟悉以下內容： - 數據收集卡（例如 Q2-USB）、功率放大器（例如 VoltPAQ）和 SRV02 的主要組件（例如致動器、感應器）。 - SRV02 植物與放大器和 DAQ 設備的連線和操作程序。 - 在 Reference [6] 中描述的實驗室，以便熟悉在 SRV02 上使用 QUARC。 - 根據 Reference [8] 的要求為 SRV02 設計 PV 位置控制。 該文件還包含了有關模型方程式、控制響應設計、實驗室程序和結果摘要等詳細內容。 Ball_on_the_plate_balancing_control_system 文章中介紹了一個建構雙自由度球在盤系統實驗平台的設計,用於控制系統的學習和測試不穩定動態物體的平衡技術。該平台配備了電阻式觸控螢幕來獲取球的位置資料,步進電機和位置傳感器來調整平台傾斜角度,以及基於AVR微控制器的雙迴路從屬控制系統,內含PID控制器用於維持球的平衡位置。 該實驗平台的機械設計由木質基座、印刷成型的3D支撐塔、電阻式觸控螢幕、步進電機和位置反饋電位器組成。控制系統採用100Hz頻率操作,讀取球和平台傾斜角的資訊,並使用外環控制球位置、內環控制平台角度的從屬PID控制器設計。 實驗結果顯示,控制系統能夠將鋼球帶回並維持在觸控螢幕的中心點,即使受到外部干擾。該實驗平台可用於測試控制算法,對於船舶、航空器等穩定性控制應用有一定參考價值。未來的工作包括改進反饋信號濾波以提高控制質量,以及探索更複雜的delta機器人控制問題。 Design and Implementation a Ball Balancing System for Control Theory Course 這篇論說明在開發一個球在桿平衡系統,作為控制理論課程的教學工具。該系統使用微控制器和相關的控制算法,透過實時感測反饋來調整桿的角度,使球保持在預設位置平衡。 作者設計了三代原型,並逐步優化了系統的穩定性、輕量化和便攜性。最終採用了木頭材質,包括一根安裝有伺服電機的桿、超聲波感測器、Arduino微控制器板和電路連接板。 該系統採用PID控制算法,根據球的實際位置與預設點的偏差,調節桿的傾角以最小化誤差。還引入了自適應PID控制,根據誤差大小動態調整PID參數,提高控制效率。 另外,作者開發了MATLAB介面程式,能夠實時獲取並繪製球的位置曲線,幫助學生理解反饗環控制原理。 這個簡單的球平衡系統,集成了感測器、執行器、微控制器編程和控制算法等內容,非常適合用於控制理論課程的實踐教學,可以讓學生將理論知識與實際操作相結合,幫助培養實踐能力。該方法也可推廣應用於更複雜的控制系統。 Simulation_and_Experimental_Study_of_Ball_Position 本篇論文針對雙軸平台上的球平衡控制系統,詳細設計並比較了三種控制結構:PD控制器、全狀態迴饋和具有狀態觀測器的全狀態迴饋。所有控制結構均採用相同的參數設計方法,針對預設的建立時間進行極點置換。 首先導出了球在平台上的數學模型和傳遞函數,揭示了開環系統的本質不穩定性。接著設計了永磁直流電機的位置環用於控制平台傾角,並透過標準設計方法確保所需的動態回應。 實驗平台由電阻式觸控屏、永磁直流電機、Kinetis K60數位控制器等組成。三種控制結構的仿真和實驗結果顯示,具有狀態觀測器的結構效果最佳,能夠有效抑制噪聲並實現穩定控制和軌跡追蹤。 此外,文中還提供了相關的數學推導過程,以及詳細的控制系統設計方法。該球平衡平台不僅可用於驗證各種控制理論,還有助於讓學生更直觀地理解控制原理,結合理論知識與實踐操作,成為極具教學價值的系統。 A real time control system for balancing a ball on a platform with FPGA parallel implementation 本篇論文提出一種新的基於PID控制器的解決方案,可以在實時系統中精準控制球體在平台上的位置。首先,建立了球體在平台上的運動數學模型並推導出其傳遞函數。接著,設計了PID控制器用於平衡球體在平台上的位置。該PID控制器的實作採用了FPGA上的並行計算架構,可顯著提高計算效率。最後,通過Matlab仿真驗證了該控制系統調節球體在平台上位置的精度。該PID控制器設計可以應用於需要對多個參數進行高速實時控制的物件系統中。 Construction and theoretical study 這篇論文的摘要涵蓋了控制理論及其應用對動態系統的重要性，特別是在補償對於本身不穩定或半穩定系統施加的干擾和外部行為方面。通過建構一個實物裝置來展示理論，並進一步比較從牛頓力學中得出的實際物理和電腦模擬結果。為了進行比較，設計一個滿足系統要求的滿意控制器是必要的。在裝置和控制方面，引入了一個比例-積分-微分（PID）控制器，用於平衡平台上的球。進一步進行分析以確定在穩定自然不穩定或半穩定系統時的限制，並檢查這些限制與理論期望之間的差異。 整篇論文中應用的控制是線性類型，僅能在線性控制範圍內正常運作。使用標準元件和微控制器，構建了一個裝置來維持平台上的球。通過使用Arduino庫和開源代碼進行編程。因此，出於研究目的，看看該裝置是否能夠在線性控制領域內正常運作。 總之，這篇論文將首先通過計算機輔助程序來涵蓋球在平台上的理論模型。然後將理論結果與從實物構造中獲得的結果進行比較。進一步檢查控制理論和系統實施方面的差異原因。","tags":"w10","url":"./2024-Spring-w10-blog-tutorial.html"},{"title":"協同產品設計實習 W9","text":"2024 Spring W8 CLASS CONTENT. w9-0418 Class Content 心得 這週再用自評，我給自己打的分數是７０， 我覺得重修讓我懂得更努力上課、做作業， 不像以前靠別人，現在所有的東西都需要靠自己。 期中考週 進入自評連結填入個人帳號、組別和自評分數","tags":"w9","url":"./2024-Spring-w9-blog-tutorial.html"},{"title":"協同產品設計實習 W6","text":"2024 Spring W6 CLASS CONTENT. 心得 上週上傳論文翻譯的作業，這週上傳教學影片的整理。 影片的長度有長有短，有些還不懂的影片，透過加字幕， 將我原本不懂的地方，變得更懂。 w6-0328 Class Content ODOO PLM 論文中英並列任務 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: latex_images_github.7z (需要密碼) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 分工: 41023132:1-44 https://replit.com/@41023132/cd2024#downloads/41023132-P1-44.pdf 英文單字查詢: 2021_odoo_reading.html 教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 以放上網站: https://bx41023132.github.io/cd2024/","tags":"w6","url":"./2024-Spring-w6-blog-tutorial.html"},{"title":"協同產品設計實習 W5","text":"2024 Spring W5 CLASS CONTENT. 心得 W5需要整理影片、逐字稿，我分配到1-7的影片。預計下次上課前整理完成。 經過這次的影片加字幕，某些經常跳過的細節也重新再看一次，讓我更了解其中的做法。 w5-0321 Class Content w5 2b 分組任務 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 如何統整組員子模組中的協同設計網誌 當各組員每週的協同設計網誌文章放在個別的 cd2024 倉儲的 markdown 目錄中, 只要修改分組倉儲中的 pelicalconf.py, 使用 Pelican 設定中的 PATH 與 OUTPUT_PATH 變數, 指定網誌統整目錄, 就可以在分組倉儲中納入所有組員在子模組中所編寫的協同網誌. 實際的設定操作 pelicanconf_py.txt, 是利用 pelicanconf.py 中的程式設定段, 將子模組中 markdown 目錄的 .md 動態複製到分組倉儲中的 combined_directory, 並避開分組倉儲與學員子模組倉儲中的 pages 目錄下的 .md 檔案後, 再進行網誌轉檔, 並且所產生的網誌超文件將存入所設定的 blog 目錄. 完成設定後的網誌轉檔指令為: pelican -s local_publishconf.py 表示要利用 local_publishconf.py 的設定進行轉檔, 且先前有關 pelicanconf.py 的設定也將導入執行. 過程中, 各組員必須將個別的網誌 .md 檔案名稱加上前綴字串, 例如: \"學號_\" 加上獨一無二的網誌 Slug 字串名稱, 且 Category 使用該組員的學號作為標示. 之後各組統整轉檔時, 才不至於發生相同網誌文章檔案名稱衝突的錯誤, 且從各分組網誌的 Categories 中即可找到各組員所編寫的所有網誌內容. 利用 NX1872 協同繪製零組件 從電腦輔助設計室中的電腦 C:\\Program Files\\Siemens\\NX1872 取得所需的 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. 電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12, 若在電腦教室則可利用下列批次檔案啟動 NX, 若在各自的電腦或隨身碟帶有各版次的 NX 資料, 只需要透過網路取得授權, 就可直接從 USB 中執行各版次的 NX.","tags":"w5","url":"./2024-Spring-w5-blog-tutorial.html"},{"title":"協同產品設計實習 W4","text":"2024 Spring W4 CLASS CONTENT. 心得 這禮拜要進行的作業是論文翻譯，我分配到1-44頁。 我打算每天分配一點作業量，在下次上課前處理完成。 利用replit進行個人網站的git push，很順利。 w4-0314 Class Content 論文翻譯 工作分配:41023132 P1-44 https://replit.com/@41023132/cd2024#downloads/41023132-P1-44.pdf Odoo 參考文章中英並列 教學影片: 以第六組為例, 利用 Codespaces 維護倉儲內容 教學影片: 如何利用 Github Actions 編譯 LaTeX 得到分組 pdf 報告 教學影片: 如何利用 Gitpod 加上 token 取得分組倉儲權限 Replit 靜態網站檢視 下載 main2.txt 與 static.txt, 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. 說明如何在 Replit 檢視靜態網站教學影片 說明如何下載 replit_main2.7z 並在倉儲中建立兩個檔案教學影片","tags":"w4","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"協同產品設計實習 W3","text":"2024 Spring W3 CLASS CONTENT. 心得 創建分組網站，利用codespace進行git push的動作。 並需要列出分組倉儲及網站。 w3-0307 Class Content 列出期中分組倉儲與網站 2b 分組倉儲 classroom invitation:https://classroom.github.com/a/KJjlY-0 midbg8倉儲:https://github.com/mdecd2024/2b-midbg8 分組網站:https://mdecd2024.github.io/2b-midbg8/","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"協同產品設計實習 W2","text":"2024 Spring W2 CLASS CONTENT. 心得 這禮拜在分組，我們這組只有兩個人，雖然之後作業要負擔的量很大，但我們還是會全力以赴。 成功加入Classroom、分組倉儲。 w2-0229 Class Content 分組分工 2b-midbg8組員: 41023132林秉賢 41039138凃家豐 加入Classroom 2b 分組倉儲 classroom invitation:https://classroom.github.com/a/KJjlY-0 midbg8倉儲:https://github.com/mdecd2024/2b-midbg8 分組網站:https://mdecd2024.github.io/2b-midbg8/ 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案.","tags":"w2","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"協同產品設計實習 W1","text":"2024 Spring W1 CLASS CONTENT. 心得 第一周上課，因為是重修所以我更認真聽課，目前進度跟得上。 這周主要是介紹一些軟體的應用及上課的進度。 w1-0222 Class Content 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};