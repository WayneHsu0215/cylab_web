import Section from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Teaching() {
  return (
    <Section id="teaching" title="教學">
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>研究生與專題生培育方針</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              研究所學生將會學習如何跟臨床專業人員溝通、制定規格、分析問題等，期望畢業生具備「研發與實作醫療資訊系統」、「軟體專案執行與團隊合作」以及「客戶問題分析與溝通」之核心能力。依照業界常用的工具以及軟體開發方式，以「做中學」的方式到軟體開發的主要重要理論與實際應用，包含：專案管理工具(Redmine)、程式碼管理(Source
              Code Control Management，SCM)以及軟體生命周期(Systems Development Life Cycle，SDLC)。
            </p>
            <p>
              透過課程設計，讓學生親自動手參與軟體開發搭配目前業界常用的軟體開發流程，例如:
              傳統軟體開發(Waterfall)、敏捷式開發(Scrum)、系統分析與設計、單元測試與整合測試、軟體估算(Estimate)、程式設計風格(Coding
              style)、以及程式碼審查(Code
              Review)，未來就業時更能貼近業界需求。在應用訓練方面，提供基礎訓練，並選擇合適的題目參加全國性比賽或申請是申請「大專學生參與專題研究計畫」。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>培養醫學資訊系統整合技術能力</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              讓學生能透過實際的案例與專案，從大學基礎課程銜接至專題研究，實際實作「行動化程式設計」、「網站建置」、「資料庫管理」等實作，包含編譯、安裝、使用、研發與整合等，讓學成能完成Web醫學資訊系統的開發與建置，提供實際的應用系統，進行功能擴充以及開發新系統，例如:
              Web-based
              放腫治療計畫資訊系統、數位化病理影像顯示與儲存管理系統、Web-based心臟科報告與心電圖顯示系統、行動化DICOM影像擷取與上傳APP、影像DICOM影像上傳與編碼等諸多應用。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>深化影像資訊學產業技術</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              讓學生透過實習、專題與研究計畫的方式，並讓學生學習常見的醫學資訊標準與系統，畢業前能了解產業界最新的動態以及最新之技術。透過課程設計，讓學生親自動手參與軟體開發，包含編譯、安裝、使用、版本維護、文件製作、研發與整合等。並讓學生練習使用業界常用開放原始碼。
            </p>
            <p>
              未來希望能透過學生的共同開發與維護，成為台灣在醫學影像應用領域的開放原始碼工具供應者，透過開放原始碼專案在國際上建立名聲，同時也讓學生能在大學時就能認識開放原始碼及應用，未來就業時能貼近業界需求。在實作訓練方面，以實際的系統以及國際標準進行軟體之間的互通性實驗(Connectivity)，並根據業界規範與國際標準完成軟體的DICOM符合性宣稱(Conformance
              Statement)以及IHE 整合宣稱(Integration Statement)文件。
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="courses">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="courses">已開設課程</TabsTrigger>
            <TabsTrigger value="projects">專題</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">大學部:</h4>
                <ul className="list-disc pl-6 mb-4">
                  <li>程式語言課程：程式設計、物件導向程式設計</li>
                  <li>資料庫課程：資料庫管理系統</li>
                  <li>軟體工程課程：系統分析與設計</li>
                </ul>

                <h4 className="font-semibold mb-2">研究所:</h4>
                <ul className="list-disc pl-6">
                  <li>知識領域課程：醫療資訊系統基礎</li>
                  <li>知識領域課程：醫療影像儲存與傳輸</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">2022年</h4>
                <ul className="list-disc pl-6 mb-4">
                  <li>[奇異鳥] - 以IHE影像檢查流程架構建置乳房與腹部超音波影像與報告儲存傳輸系統</li>
                  <li>[Keroro] - 守護你的關節 - 類風溼性關節炎診斷之精準決策輔助系統</li>
                  <li>[石虎] - 基於自然語言處理的病理報告全文檢索系統</li>
                  <li>[笨吉娃娃] - 建構癌症基因資料儲存系統</li>
                </ul>

                <h4 className="font-semibold mb-2">2021年</h4>
                <ul className="list-disc pl-6 mb-4">
                  <li>[塞班島] - 運用深度學習自動標記類風溼性關節炎手部X光中之關節</li>
                  <li>[豬豬滾] - 鬥G眼-建構糖尿病綜合基因研究資料庫</li>
                  <li>[貝妮兔] - 開發以微服務架構之AI醫學影像病徵偵測平台</li>
                  <li>[宇智波] - 我班願稱U.B.R.S.為乳房報告系統最強!</li>
                </ul>

                <h4 className="font-semibold mb-2">2020年</h4>
                <ul className="list-disc pl-6 mb-4">
                  <li>[浣熊] - Micala醫療影像與報告查詢系統</li>
                  <li>[綿羊] - 以FHIR架構建置腹部超音波報告系統</li>
                  <li>[企鵝] - 病理影像Map</li>
                  <li>[海豚] - HOLY健康-疫起守護健康</li>
                </ul>

                <h4 className="font-semibold mb-2">2019年</h4>
                <ul className="list-disc pl-6">
                  <li>[大象] - 發展DICOMWeb標準之HTML5醫學影像瀏覽系統</li>
                  <li>[花鹿] - DICOM Auto Annotation System</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  )
}

