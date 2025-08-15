import Section from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function MajorProjects() {
  return (
    <Section id="major-projects" title="大型研究計畫">
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>專題研究計畫(主題研究群計畫)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">執行日期: 2021/11/01 ~ 2022/10/31</p>
              <p className="text-sm text-muted-foreground">角色: 共同主持人</p>
            </div>
            <p className="mb-4">主要目標包含:</p>
            <ol className="list-decimal pl-6 space-y-4 mb-6">
              <li>
                <strong>AI模型共享以及格式互通性之實驗沙箱場域:</strong>{" "}
                建置符合國際標準格式之數位病理影像AI模型共享與格式互通標準驗證平台，提供具備AI模型共享以及格式互通性之實驗沙箱場域，讓AI開發者、醫師需求者、廠商在此平台上能驗證AI模型以及相關的產品。
                使用者可透過此平台上架各種AI模型商品以及服務，提供AI落地於醫療資訊產業生態系之模型市集。
              </li>
              <li>
                <strong>建置開放原始碼之全幅數位病理切片影像瀏覽與標註工具:</strong>{" "}
                建置開放原始碼之數位病理切片瀏覽與標註工具，並支援最新醫學影像AI互通性國際標準，嘗試解決人工智慧結果所面臨AI結果互通的問題。另規劃每年台灣醫學資訊聯測(MI-TW
                Connectathon) ，以及國際數位病理影像與標記黑客松
                針對標準化系統進行實際驗證，與國際接軌，打造醫學影像開源生態系。我們將針對資料治理、共享平台、研究資料庫互通性等進行研發。
              </li>
            </ol>
            <div className="mt-6">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="AI模型共享平台架構圖"
                width={600}
                height={300}
                className="rounded-md w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>專題研究計畫(推動規劃補助計畫)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">執行日期: 2017/11/01 ~ 2021/11/30</p>
              <p className="text-sm text-muted-foreground">角色: 共同主持人</p>
            </div>
            <p className="mb-4">
              隨著精準醫療日益發展，臨床試驗以及研究案例越來越仰賴使用基於影像的標記(image-based
              marker)來確定治療準確性與治療效果。目前大多是採用人工的方式進行標記註解，儲存研究資料的欄位與格式多為專屬規格，實務上很難要求廠商修改專門處理在研究上所需的資料與格式，且會牽涉到許多商業行為以及複雜的技術整合問題，阻礙臨床實務與應用研發。這些珍貴的研究資料，無法跨系統互通，資料彙整困難。因此影像與標記的標準化有助於日後資料加值應用，開發者無需花費漫長的時間處理私訂格式與資料正規化，進而專心發展人工智慧技術。
            </p>
            <p className="mb-4">
              本計畫的目的為建置巨量醫學影像資料庫，作為醫學影像研究最底層的基礎架構與驗證機制，產生標準規格之影像標記及報告資料，以及建立標準系統整合介面，做為巨量醫學影像分析研究與擴充應用。本計畫搭配科技部前瞻計畫「醫療影像之巨量資料建立與應用研究
              (簡稱AI99)」，建立「國家級醫療影像巨量資料庫」以及「跨機構資料共享機制規劃」。
            </p>
            <p className="mb-4">
              此平台以標準化的整合介面 (RESTful
              API)，作為巨量醫學影像資料庫的底層與端點技術的基礎建設，提供三大類雲端服務(SaaS)：(1) 資料庫建置；(2)
              標註服務(authoring tools)以及 (3) 人工智慧應用端點服務。
            </p>
            <p className="mb-4">
              標記可代表腫瘤輪廓、圈選範圍、量測、註記等。標記代表的意義可在結構化報告當中描述，但現行
              DICOM結構化報告(Structured Reporting，簡稱SR)主要規範電腦輔診斷結果報告， DICOM
              標準當中僅乳房影像檢查等少數幾種檢查有標準化的醫師診斷報告規格，但亦缺乏實際應用實例。本主題目的為建置一個影像標記註解工具提供醫師使用，將結果變成結構化報告。此主題會以腫瘤的病灶管理(Lesion
              Management)為目標，發展標註、顯示、影像處理的工具。本研究主題將參考國際醫學影像標記標準以及業界通用格式將影像標記註解模組化，並結合影像
              (image)、標記 (markup)以及註解 (annotation)的語言，結合醫用詞彙標準用語(Lexicon)
              提供可機讀資料(Machine-readable data)，以達到標記註解之異質型系統互通性。
            </p>
            <div className="mt-6">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="巨量醫學影像資料庫架構規劃圖"
                width={600}
                height={300}
                className="rounded-md w-full"
              />
              <p className="text-center text-sm text-muted-foreground mt-2">圖、巨量醫學影像資料庫架構規劃圖</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

