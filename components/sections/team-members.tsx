import Section from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, Award, Heart } from "lucide-react"

export default function TeamMembers() {
  return (
    <Section id="team-members" title="成員">
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span className="hidden md:inline">兼職/經歷</span>
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden md:inline">學歷</span>
          </TabsTrigger>
          <TabsTrigger value="honors" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span className="hidden md:inline">榮譽/獲獎</span>
          </TabsTrigger>
          <TabsTrigger value="service" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span className="hidden md:inline">服務</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>兼職</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2017/08-迄今</span>
                  <span>秘書長, 社團法人台灣醫療影像資訊標準協會 (DICOM-Taiwan)</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2019/08/26-迄今</span>
                  <span>委員, 人體生物資料庫倫理委員會, 臺北榮民總醫院</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2021/05/01-迄今</span>
                  <span>特約助理研究員, 醫學研究部, 臺北榮民總醫院</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2018/08/01-迄今</span>
                  <span>標準制定委員, 國際DICOM協會</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>經歷</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2023/02-迄今</span>
                  <span>副教授 - 國立臺北護理健康大學 資訊管理系暨研究所</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2019/02-2023/01</span>
                  <span>助理教授 - 國立臺北護理健康大學 資訊管理系暨研究所</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2013/11-2019/01</span>
                  <span>技術經理 - 美得康科技 (精誠資訊), 台灣</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2012/10-2013/09</span>
                  <span>博士後研究員 - OFFIS, 奧爾登堡, 德國</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2010/03-2011/02</span>
                  <span>訪問學者 - OFFIS, 奧爾登堡, 德國</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>學歷</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2004/09-2011/06</span>
                  <span>博士，國立陽明大學醫學工程研究所</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2002/09-2004/07</span>
                  <span>碩士，國立陽明大學醫學工程研究所</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">1998/09-2002/06</span>
                  <span>學士，天主教輔仁大學電子工程學系</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="honors">
          <Card>
            <CardHeader>
              <CardTitle>榮譽/獲獎紀錄</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2012/10-2013/09</span>
                  <span>國科會「補助赴國外從事博士後研究」獎金</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2010/03-2011/02</span>
                  <span>國科會「補助國內博士班研究生赴德國研究 (三明治計畫)」獎學金</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2011/06</span>
                  <span>斐陶斐榮譽會員</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2008/12</span>
                  <span>最佳口頭報告，2008年台灣國際醫學資訊聯合研討會</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2004/06</span>
                  <span>斐陶斐榮譽會員</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2004/06</span>
                  <span>陽明大學尹詢諾碩士論文比賽第二名</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2003/07</span>
                  <span>大專學生研究創作獎</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2001/03</span>
                  <span>國科會「大專學生研究計畫」獎學金</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2001/11</span>
                  <span>教育部「微電腦系統應用競賽」優等獎</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="service">
          <Card>
            <CardHeader>
              <CardTitle>服務</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2015/06-2017/07</span>
                  <span>理事, 台灣醫療影像資訊標準協會 (DICOM-Taiwan)</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2014/03-2015/06</span>
                  <span>副秘書長, 台灣醫療影像資訊標準協會 (DICOM-Taiwan)</span>
                </li>
                <li className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="text-sm text-muted-foreground whitespace-nowrap">2005/04-2006/03</span>
                  <span>會長, 國立陽明大學醫學工程研究所學生會</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Section>
  )
}

