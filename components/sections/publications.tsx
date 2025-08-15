import Section from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Publications() {
  return (
    <Section id="publications" title="著作目錄">
      <Card>
        <CardHeader>
          <CardTitle>期刊論文</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground italic">
            Chen, TT., Sun, YC., Chu, WC. et al. BlueLight: An Open Source DICOM Viewer Using Low-Cost Computation
            Algorithm Implemented with JavaScript Using Advanced Medical Imaging Visualization. J Digit Imaging (2022).
            https://doi.org/10.1007/s10278-022-00746-0
          </p>
          {/* 這裡可以添加更多論文 */}
        </CardContent>
      </Card>
    </Section>
  )
}

