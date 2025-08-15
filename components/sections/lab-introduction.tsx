import type React from "react"
import { forwardRef } from "react"
import Section from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import { Beaker, Database, Server, Shield, Code } from "lucide-react"

interface ResearchAreaProps {
  icon: React.ReactNode
  title: string
  className?: string
}

const ResearchArea = ({ icon, title, className }: ResearchAreaProps) => (
  <Card className={`bg-secondary/5 hover:bg-secondary/10 transition-colors ${className}`}>
    <CardContent className="flex items-center p-4 gap-3">
      {icon}
      <span className="text-sm md:text-base">{title}</span>
    </CardContent>
  </Card>
)

const LabIntroduction = forwardRef<HTMLElement>((props, ref) => {
  return (
    <Section id="lab-introduction" title="實驗室簡介" ref={ref}>
      <p className="mb-6 text-lg">
        影像資訊學實驗室主要研究領域為: 醫學影像儲存及傳輸系統(PACS)、電子病歷互通標準 (DICOM、IHE、HL7
        FHIR)、醫學影像資料庫、醫學資訊安全與應用、醫學資訊系統開發與建置。
      </p>
      <p className="mb-8">
        主要針對影像資訊學之核心研究與技術發展「巨量醫學影像研究資料庫平台」，以此為同心圓向外擴張，逐步發展相關醫學影像雲端技術以及進階的應用。
      </p>

      <h3 className="text-xl font-semibold mb-4">主要研究領域</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <ResearchArea icon={<Server className="h-5 w-5 text-secondary" />} title="醫學影像儲存及傳輸系統(PACS)" />
        <ResearchArea
          icon={<Code className="h-5 w-5 text-secondary" />}
          title="電子病歷互通標準 (DICOM、IHE、HL7 FHIR)"
        />
        <ResearchArea icon={<Database className="h-5 w-5 text-secondary" />} title="醫學影像資料庫" />
        <ResearchArea icon={<Beaker className="h-5 w-5 text-secondary" />} title="醫學資訊系統開發與建置" />
        <ResearchArea icon={<Shield className="h-5 w-5 text-secondary" />} title="醫學資訊安全與應用" />
      </div>
    </Section>
  )
})

LabIntroduction.displayName = "LabIntroduction"

export default LabIntroduction

