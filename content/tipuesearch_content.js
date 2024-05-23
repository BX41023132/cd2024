var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://bx41023132.github.io/cd2024/ \n 網誌:\xa0 https://bx41023132.github.io/cd2024/blog \n 簡報:  https://bx41023132.github.io/cd2024/reveal \n 倉儲:\xa0 https://github.com/BX41023132/cd2024 \n 2b 分組倉儲 classroom invitation : https://classroom.github.com/a/KJjlY-0 \n midbg8倉儲: https://github.com/mdecd2024/2b-midbg8 \n 分組網站: https://mdecd2024.github.io/2b-midbg8/ \n \n 利用 init_replit 指令安裝所需 Python 模組 \n chmod u+x init_replit \n 網站: \n ./init_replit \n blog: \n ./gen_blog \n', 'tags': '', 'url': 'About.html'}, {'title': '課程摘要', 'text': '\n \n', 'tags': '', 'url': '課程摘要.html'}, {'title': 'W1-0222', 'text': '本學期上課內容講解、建立編輯個人倉儲、網站架設。 \n 上課內容講解 \n 課程目標: \n \n \n 讓學員了解如何利用 Web-based 環境( Github 、 Onshape )、近端套件( CoppeliaSim ) 以及 \xa0 Odoo PLM \xa0 系統進行協同產品設計, \xa0 https://national-formosa-university.odoo.com . \n \n \n 讓學員了解如何利用 \xa0 Replit 、 Codespaces \xa0 與 localhost 維護協同網站內容 \n \n \n \n 課程評分: \n 學員每週編寫網誌內容佔 40% \n 每週上課內容摘要與分組報告執行分工及進度整理 \n 相關資料收集與閱讀心得 \n 分組期中報告 ( LaTeX \xa0 -> pdf) 與簡報影片 ( OBS \xa0 -> mp4) 佔 20% \n 每組至多 8 人, 期中報告題目:\xa0 ODOO PLM \xa0 在協同產品設計上的應用 - 以 鋼球平衡台機電控制系統設計 為例 \n ball_beam_balancing_PID_control_coppeliasim.7z \n ball_beam_balancing_PID_control_coppeliasim_1d_and_2d.7z \n 分組期末報告 ( LaTeX \xa0 -> pdf) 與簡報影片 ( OBS \xa0 -> mp4) 佔 40% \n 期末報告題目: \xa0 網際綜合球類競賽機器人協同設計與模擬 \n (競技場景中必須納入數位計時器與類比記分機構 \n 每場競技時間為 10 分鐘 \n 每隊球員機器人依照各組人數平均分為兩隊 \n 每位機器人球員必須同時具備踢球、取球與投球機構 \n 雙方陣營各有足球門與籃球框各一具 \n 球場中由裁判程式於開場時, 在球場正中央落下 10 球 \n 將球踢進對方球門者得 1 分, 將球投入對方籃框者得 5 分) \n \n \n 建立個人倉儲 \n 登入 github.com, 連結到 \xa0 https://github.com/mdecycu/cmsimde_site , 利用此倉儲作為 Template, 新增一個名稱為 cd2024 的倉儲, 並且將其 main 分支設為網頁根目錄. \n https://github.com/mdecycu/cmsimde_site \xa0 與 \xa0 https://github.com/mdecycu/cmsite \xa0 的差別為, 目前的 Template 將 cmsimde 當作目錄, 而非 cmsite 中的子模組. \n \n \n', 'tags': '', 'url': 'W1-0222.html'}, {'title': 'W2-0229', 'text': '分組分工、加入Classroom、建立分組倉儲。 \n 建立分組倉儲 \n 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. \n 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. \n 2b-midbg8倉儲: \n midbg8倉儲: https://github.com/mdecd2024/2b-midbg8 \n 分組網站: https://mdecd2024.github.io/2b-midbg8/ \n \n', 'tags': '', 'url': 'W2-0229.html'}, {'title': 'W3-0307', 'text': '個人倉儲設為分組倉儲之子模組 \n 將組員的個人倉儲設為分組倉儲子模組 \n 以 submodule 的方式納入各分組倉儲與網站, 設定的指令為: \n git submodule add 組員的個人倉儲網址 組員的學號 \n 例如: 假設組員的 cd2024 個人倉儲位於: https://github.com/scrum-1/cd2024, 且該組員的學號為 41123299, 則該組員必須在進入該組的倉儲目錄後, 執行: \n git submodule add https://github.com/scrum-1/cd2024.git 41123299 \n 如此, Github 帳號為 scrum-1 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 這樣設定的好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲. \n 另外一個使用 Github Classroom 派送分組倉儲的好處, 是 mdecycu 自動成為各分組倉儲的管理者之一, 若各組在改版或解決衝突的過程發生問題, mdecycu 可以協助處理. \n 一旦分組倉儲帶有以各組員學號作為子模組之後, git clone 倉儲必須使用: \n git clone --recurse-submodules 加上各組的倉儲 URL \n 以第一組期中分組倉儲的 git clone 為例, 並且使用 putty session 名稱 github.com: \n git clone --recurse-submodules git@github.com:mdecd2024/2b-midbg1.git \n 而且若要在分組倉儲中更新各組員的子模組版本, 則必須更換目錄到該組員的學號目錄中並且使用 git pull origin main, 才能取下該組員其 cd2024 個人倉儲的最新內容. 取下組員資料後, 若要新增提交推送, 則必須再更換目錄回分組倉儲後才能執行. \n \n \n', 'tags': '', 'url': 'W3-0307.html'}, {'title': 'W4-0314', 'text': '翻議論文、git branch \n \n 翻譯工作分配 \n 41023132:P1-44 \n /downloads/41023132-P1-44.pdf \n 41039138:P45-87 \n', 'tags': '', 'url': 'W4-0314.html'}, {'title': 'W5-0321', 'text': '影片整理(字幕)、分組網誌的統整、NX 零組件繪圖 \n 工作分配 \n 41023132影片1-7 \n 41039138影片8-14 \n \n', 'tags': '', 'url': 'W5-0321.html'}, {'title': 'W6-0328', 'text': '說明協同 NX 零組件繪圖、 CoppeliaSim 場景模擬相關檔案格式 \n ODOO PLM 論文中英並列任務 \n 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. \n 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 \xa0 miktex-portable.7z \xa0 (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: \xa0 latex_images_github.7z \xa0 (需要密碼) \n 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf \xa0 or \xa0 local \xa0 download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) \n 英文單字查詢: \xa0 2021_odoo_reading.html \n 教學影片分組整理並自評 \n 請各組自行搜尋前面已經發布的教學影片, 分別 \n \n \n 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 \n \n \n 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 \n \n \n 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 \n \n \n \n', 'tags': '', 'url': 'W6-0328.html'}, {'title': 'W9-0418', 'text': '期中考週、介紹AI \n \n 自評成績:70 \n https://aistudio.google.com/ \n https://claude.ai/ \n \n \n', 'tags': '', 'url': 'W9-0418.html'}, {'title': 'W10-0425', 'text': '鋼球平衡台模擬控制 \n 參考資料:( https://mde.tw/cd2024/blog/2024-cd-midterm.html ) \n python 3.12 必須自行編譯 python-control 模組: \n \n \n git clone https://github.com/python-control/python-control.git \n \n \n cd python-control \n \n \n python -m build \n \n \n pip install . \n \n \n \n \n', 'tags': '', 'url': 'W10-0425.html'}, {'title': 'W11-0502', 'text': '利用NX1872繪製剛求平衡台所需的零組件 \n \n \n 請根據 \xa0 Solvespace_model _2d_for_cd2024_w6.7z \xa0 零組件尺寸, 利用 \xa0 Siemens NX1872.7z \xa0 (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) 執行零組件繪圖, 完成後請將過程影片放入個人與分組網站中. \n 建立協同 Web-based 機電系統模擬設計必須涉及的議題包括： \n \n \n 如何使用 NX 執行零組件繪圖 - \xa0 NX 參考資料 \n \n \n 如何使用1872版安裝及可攜版 - \xa0 NX1872 \n \n \n 如何啓動及連網認證 - \xa0 NX1872 \n \n \n 了解啓動後用戶設定的存檔位置 - \xa0 NX1872 \n \n \n 認識 NX 的目錄模組架構 - \xa0 NX \n \n \n 認識 NXOpen Python 程式延伸架構 - \xa0 NXOpen \n \n \n 了解 Journal 程式設定、建立及執行（internal 及 run_journal.exe 用法） \n \n \n 了解如何針對設計繪圖尺寸單位選擇 - 建立新零件檔案時由 Units 選單選則 mm 或 inches \n \n \n 學習草圖建構、參數選用及長出特徵使用 - \xa0 NX 參考資料 \n \n \n 學習如何完成零件組立 - \xa0 NX 參考資料 \n \n \n 了解零組件轉檔相關知識（如選用零組件座標系統、STL格式及尺寸比例） \n \n \n 了解如何轉入 CoppeliaSim，如何選擇合用的尺寸及比例 \n \n \n 了解如何進行場景組件的座標系統轉換 \n \n \n 了解開放式機構及封閉式機構的場景如何設置 \n \n \n 認識場景存檔的三種格式（binary與XML間的轉換及應用)及應用時機 \n \n \n 瞭解如何運用 Web-based 場景模擬串流 \n \n \n 學習如何建立場景控制程式（internal Lua、Python、Remoteapi Python、IPv4 Websocket&ZMQ vs IPv6 Websocket&ZMQ) \n \n 了解如何協同整理資料、編寫網誌、建立網際簡報及結案報告 \n \n', 'tags': '', 'url': 'W11-0502.html'}, {'title': 'W12-0509', 'text': 'NXOpen 實習項目一 \n 以下影片說明如何設定 Siemens NX Journal 存檔格式, 並且利用 NXOpen 程式分別執行建立 block 與挖孔 (透過錄製 Journal 程式產生)後, 請設法將兩個程式合併為一個程式, 可以直接完成建立一個 block 並在其特定面上挖孔. \n \n 實習任務二: 將分組倉儲設為評分網站子模組 \n 2a 評分倉儲: \xa0 https://github.com/mdecd2024/2astud-2asite \n 2b 評分倉儲: \xa0 https://github.com/mdecd2024/2bstud-2bsite \n 以 2a 第一組分組倉儲 \xa0 https://github.com/mdecd2024/2a-midag1 \xa0 為例, 設為 2astud-2asite 倉儲名稱為 g1 的子模組指令為: \n git submodule add https://github.com/mdecd2024/2a-midag1 g1 \n 其餘各班與各組的子模組則依序命名為 g1, g2, g3 ......, 依此類推. \n 各班評分倉儲的各組子模組設定完成後, 可以設法依照先前各組整合分組 LaTeX 報告與分組網誌的方法, 整合全班各組項下各學員的網誌文章 (.html 格式) 與執行專案報告 (.pdf 格式) \n 請各分組先在各組的分組網誌與分組報告中說明, 該如何將分組整合流程擴大到全班協同? \n \n 實習任務三: 跨網路操控足球機器人進行競技 \n 請各組從 \xa0 https://github.com/mdecd2023/2a3-pj3ag4 \xa0 下載該組當時所完成的倉儲資料, 並參考 網際手足球機器人場景設計 專案報告, 由各組員分別擔任場景競技球員, 利用鍵盤跨網路操控足球機器人進行球賽競技. \n 執行步驟: \n \n 在可攜程式系統安裝所需的 Python 模組: pip install pyzmq cbor keyboard \n 在近端電腦上取下倉儲內容: git clone https://github.com/mdecd2023/2a3-pj3ag4 \n 球場、球員、數位計分器與類比計分器場景, 以及機器人球員控制程式位於: 2a3-pj3ag4\\downloads\\zmq_football 目錄 \n 利用 \xa0 CoppeliaSim 4.5.1 rev1 for IPv6.7z \xa0 開啟 zmq_football 目錄中的 site.ttt \n 利用可攜程式系統中的 SciTE 編輯器開啟 zmq_football 目錄中的 judge.py, 按下 Tools - Go 之後, CoppeliaSim 中的足球場景將開始進行模擬, 足球從球場正中央拋下, 兩隊球員完成列隊, 準備接受遠端 ZMQ RemoteAPI Python 程式操控, 以便進行球賽競技. \n 各球員操控程式可跨 IPv4 與 IPv6 網路對場景中的機器人球員進行控制, 球場即時畫面可由 http://球場所在電腦_IP_位址或符號名稱:23020 擷取, 球場與控制端的防火牆必須允許雙方 ZMQ 網路封包通過 port 23000 與 23020, 其中 23000 用於 Python 程式控制, 而 23020 則用於網際 Visualization Stream 影像串流用. \n 各球員控制端, 分別在各自電腦以可攜程式系統中的 SciTE 編輯器開啟 zmq_football 目錄中的 player.py, 並依據球員編號進行動作操控. \n 鍵盤中的 a 鍵控制球員向左轉, d 鍵控制球員向右轉, w 向前移動, s 向後移動, space 鍵翻身, 按下 shift 鍵將加速並轉向, 按下 q 鍵則終止模擬. \n \n w12 NX evaluation \n \n \n \n', 'tags': '', 'url': 'W12-0509.html'}, {'title': 'W13-0516', 'text': '課程評分: \n 學員每週編寫網誌內容佔 40% \n 每週上課內容摘要與分組報告執行分工及進度整理 \n 相關資料收集與閱讀心得 \n 分組期中報告佔 20% \n 分組期中 pdf 報告與 mp4 簡報影片 \n 每組至多 8 人 \n 期中報告題目: \n ODOO PLM 在協同產品設計上的應用 - 以鋼球平衡台機電控制系統設計為例 \n 分組期末報告佔 40% \n 分組期末 pdf 報告與 mp4 簡報影片 \n \xa0 \n', 'tags': '', 'url': 'W13-0516.html'}, {'title': '實習評分項目', 'text': 'https://mde.tw/cd2024/blog/2024-cd-w13.html \n 各週指定任務 \n cd2024 協同產品設計實習課程專案的內容, 主要延續 \xa0 CAD2023 \xa0 課程重點, 然後再透過分組, 利用 Odoo PLM 相關文獻閱讀與應用作為協同產品開發流程的參考, 實際進行鋼球平衡台與綜合球賽機器人模擬系統的協同設計. \n 各週指定任務如下: \n \n \n 個人 cd2024 與分組倉儲的建立及維護. \n \n \n 各分組註冊一個 \xa0 Odoo \xa0 帳號, 選用免費的 PLM 模組, 取得各分組的產品生命週期管理系統網域, 並將 參考論文 的協同翻譯流程作為工作項目, 在各分組的 PLM 網域系統中留下任務分配與紀錄, 最終產出為一份 參考論文 的中英文翻譯並列 pdf 檔案, 其中包含各組員的心得報告. \n \n \n 指定 在 參考論文 的翻譯與閱讀過程, 將各組員的 cd2024 課程倉儲納為分組倉儲的子模組, 可以將各組員倉儲中的 \xa0 LaTeX \xa0 原始資料, 整合至分組倉儲中, 採 Github Actions 或近端使用 \xa0 MikTeX \xa0 建立分組的 參考論文 閱讀報告 pdf 檔案( 教學 ). \n \n \n 要求 各分組採協同方式, 在各 教學影片 上填上字幕並嵌入個人網站, 分工整理影片逐字稿與教學重點, 最後完成期中自評, 在期中考週將自評成績送至教務處. \n \n \n 要求 下載 Siemens NX 1872 至個人隨身碟或電腦 (含筆電), 後續專案系統的零組件繪圖可採電腦輔助設計室固態硬碟所安裝的 NX1872 或隨身碟中的可攜系統, 必須透過連網取得認證後才能開啟. \n \n \n 提醒 \xa0 CoppeliaSim 不同版本中存檔上的差異, 並強調 cd2024 將沿用 cad2023 課程中所使用的 4.5.1 版. \n \n \n 提示 \xa0 各分組可以利用可攜式 \xa0 Sourcetree \xa0 套件, 在近端充分了解個人倉儲與分組倉儲的各種改版或解決衝突議題. \n \n \n 在 第七週 摘要出 cd2024 各項分組協同模式的要點及執行方法. \n \n \n 在 第八週 說明如何應用 AI 協助先前閱讀論文, 整理資料以及延伸模擬程式的方法, 並提出既存鋼球平衡台控制與模擬的實習步驟. \n \n \n 第十週 起, 要求學員完成三項實習任務. ( 建立倉儲與網站連結 、 PID 控制文獻整理 、 NX 平台零組件繪圖 ) \n \n \n 第十二週 的三項實習任務 ( NXOpen 零組件繪製 、 分組倉儲設為評分倉儲子模組 、 足球機器人場景模擬 ). \n \n \n 課程評分: \n 學員每週編寫網誌內容佔  40% \n 每週上課內容摘要與分組報告執行分工及進度整理 \n 相關資料收集與閱讀心得 \n 分組期中報告佔  20% \n 分組期中 pdf 報告與 mp4 簡報影片 \n 每組至多 8 人 \n 期中報告題目: \n ODOO PLM 在協同產品設計上的應用 - 以鋼球平衡台機電控制系統設計為例 \n 分組期末報告佔  40% \n 分組期末 pdf 報告與 mp4 簡報影片 \n 期末報告題目: 網際綜合球類競賽機器人協同設計與模擬 \n 競技場景中必須納入數位計時器與類比記分機構 \n 每場競技時間為 10 分鐘 \n 每隊球員機器人依照各組人數平均分為兩隊 \n 每位機器人球員必須同時具備踢球、取球與投球機構 \n 雙方陣營各有足球門與籃球框各一具 \n 球場中由裁判程式於開場時, 在球場正中央落下 10 球 \n 將球踢進對方球門者得 1 分, 將球投入對方籃框者得 5 分 \n \n \n \n', 'tags': '', 'url': '實習評分項目.html'}, {'title': '翻譯HW', 'text': '分組名單 \n 41023132 林秉賢:P1-44 \n https://drive.google.com/file/d/1Ir5IDX28NQiox_ukMs8uV-L4gSOYt6Bo/view?usp=drive_link \n \n 41039138 凃家豐:P45-87 \n /downloads/latex2.pdf \n /downloads/41039138翻譯中英並列.pdf \n \n 完整P1-87 \n https://drive.google.com/file/d/1rG2VtwTDtBKGuxzg3nfv0eUlfXpOFsT3/view?usp=drive_link \n \n', 'tags': '', 'url': '翻譯HW.html'}, {'title': 'W5-HW', 'text': '1 \n \n \n /downloads/1建個人課程倉儲與網頁.txt \n 2 \n \n /downloads/2如何從 Replit Account 設定 Connect 連結到 Github.txt \n 3 \n \n \n /downloads/3如何設定 Github 帳號的雙重認證.txt \n 4-1 \n \n 4-2 \n \n /downloads/4說明如何將倉儲 import 至 Replit 改版後推回 github.txt \n 5-1 \n \n 5-2 \n \n /downloads/5第一組組長建立 Team 並設定分組倉儲.txt \n 6 \n \n \xa0 \n /downloads/6從第一組空倉儲建立 cmsimde_site 內容.txt \n 7 \n \n \n /downloads/7利用 codespaces 維護分組網站.txt \n \n \n', 'tags': '', 'url': 'W5-HW.html'}, {'title': '期中自評影片', 'text': '\n \n', 'tags': '', 'url': '期中自評影片.html'}, {'title': 'W10', 'text': '任務一:(NX連結+Solvespace截圖) \n 分工 \n 41039138: \n 鋼球平台 \n https://drive.google.com/file/d/1zIHRIq_ERUROuSvUynqLWAY5SgbMeiN4/view?usp=drive_link \n \n \n 41023132: \n y link \n https://drive.google.com/file/d/1d4Vug0XfPz2ExGvpVWbHs9kx1-u-VPU1/view?usp=drive_link \n \n \n s link\xa0 \n https://drive.google.com/file/d/1Dv6r-_rla3Q3DiMhiXjVshK04RQG8Hyc/view?usp=drive_link \n \n \n base \n https://drive.google.com/file/d/1_5Q4m5je0MN0wPjHaWeIL6yHv9x5JLo6/view?usp=drive_link \n \n \n shaft \n https://drive.google.com/file/d/1_5Q4m5je0MN0wPjHaWeIL6yHv9x5JLo6/view?usp=drive_link \n \n \n \n 任務二:鋼球平衡台 PID 控制與模擬 \n 影片 \n \n \n 截圖 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W12', 'text': '任務一:NXOPEN \n 以下影片說明如何設定 Siemens NX Journal 存檔格式, 並且利用 NXOpen 程式分別執行建立 block 與挖孔 (透過錄製 Journal 程式產生)後, 請設法將兩個程式合併為一個程式, 可以直接完成建立一個 block 並在其特定面上挖孔. \n nxopen create a new part: \n https://drive.google.com/file/d/19daqSlctvkNmS5zVh8h4g70xKEczuPbH/view?usp=drive_link \n journal: \n https://drive.google.com/file/d/1IBx-CXFwV4lKyex9Qmwyxa5XNOy8ObEf/view?usp=drive_link \n new: \n https://drive.google.com/file/d/1-Dxye8L3iQDHPwJhBmbVP7-h0Hw28K7v/view?usp=drive_link \n \n \n \n 任務二:將分組倉儲設為評分網站子模組 \n 2a 評分倉儲: \xa0 https://github.com/mdecd2024/2astud-2asite \n 2b 評分倉儲: \xa0 https://github.com/mdecd2024/2bstud-2bsite \n 以 2a 第一組分組倉儲 \xa0 https://github.com/mdecd2024/2a-midag1 \xa0 為例, 設為 2astud-2asite 倉儲名稱為 g1 的子模組指令為: \n git submodule add https://github.com/mdecd2024/2a-midag1 g1 \n \n 任務三: 跨網路操控足球機器人進行競技 \n 請各組從 \xa0 https://github.com/mdecd2023/2a3-pj3ag4 \xa0 下載該組當時所完成的倉儲資料, 並參考 網際手足球機器人場景設計 專案報告, 由各組員分別擔任場景競技球員, 利用鍵盤跨網路操控足球機器人進行球賽競技. \n \n 執行步驟: \n \n 在可攜程式系統安裝所需的 Python 模組: pip install pyzmq cbor keyboard \n 在近端電腦上取下倉儲內容: git clone https://github.com/mdecd2023/2a3-pj3ag4 \n 球場、球員、數位計分器與類比計分器場景, 以及機器人球員控制程式位於: 2a3-pj3ag4\\downloads\\zmq_football 目錄 \n 利用 \xa0 CoppeliaSim 4.5.1 rev1 for IPv6.7z \xa0 開啟 zmq_football 目錄中的 site.ttt \n 利用可攜程式系統中的 SciTE 編輯器開啟 zmq_football 目錄中的 judge.py, 按下 Tools - Go 之後, CoppeliaSim 中的足球場景將開始進行模擬, 足球從球場正中央拋下, 兩隊球員完成列隊, 準備接受遠端 ZMQ RemoteAPI Python 程式操控, 以便進行球賽競技. \n 各球員操控程式可跨 IPv4 與 IPv6 網路對場景中的機器人球員進行控制, 球場即時畫面可由 http://球場所在電腦_IP_位址或符號名稱:23020 擷取, 球場與控制端的防火牆必須允許雙方 ZMQ 網路封包通過 port 23000 與 23020, 其中 23000 用於 Python 程式控制, 而 23020 則用於網際 Visualization Stream 影像串流用. \n 各球員控制端, 分別在各自電腦以可攜程式系統中的 SciTE 編輯器開啟 zmq_football 目錄中的 player.py, 並依據球員編號進行動作操控. \n 鍵盤中的 a 鍵控制球員向左轉, d 鍵控制球員向右轉, w 向前移動, s 向後移動, space 鍵翻身, 按下 shift 鍵將加速並轉向, 按下 q 鍵則終止模擬. \n \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'Odoo', 'text': 'https://2b-midbg8.odoo.com/odoo/action-371?cids=1 \n \n \n \n \n \n', 'tags': '', 'url': 'Odoo.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};