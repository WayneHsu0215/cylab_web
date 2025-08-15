import Section from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function References() {
  return (
    <Section id="references" title="參考連結">
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-2">
            {[
              { name: "CYLAB's github", url: "#" },
              { name: "台灣醫學資訊聯測松(MI-TW Connectathon)", url: "#" },
              { name: "MI-TW Gazelle", url: "#" },
              { name: "CYLAB's FHIR Server", url: "#" },
              { name: "Lorex's FHIR Server", url: "#" },
              { name: "FHIR教材", url: "#" },
              { name: "DICOM/IHE/HL7教育訓練", url: "#" },
              { name: "國立臺北護理健康大學", url: "#" },
              { name: "國立臺北護理健康大學-資訊管理系暨研究所", url: "#" },
              { name: "台灣醫療影像資訊標準協會", url: "#" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Section>
  )
}

