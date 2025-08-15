import Section from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Research() {
  return (
    <Section id="research" title="研究">
      <p className="mb-6">
        基於開放原始碼(open source)的精神，本實驗室部分研究成果提供PACS/FHIR系統開放原始碼專案，支援國際標準DICOM與HL7
        FHIR。本研究規劃整合DICOM與IHE技術規格與現有的Web技術，作為未來用在醫療雲的底層與端點技術。此外，以非常寬鬆的軟體授權
        (MIT License)提供商業以及學術用途使用。
      </p>

      <h3 className="text-xl font-semibold mb-4">發展策略</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>DICOM</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Web 3D Rendering</li>
              <li>Wohle Slide Image</li>
              <li>DICOM AI Results incl. Structured Report, DICOM Simplified JSON SR Simplified DICOM SR in JSON</li>
              <li>DICOM Waveform</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>FHIR</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>FHIR IPS (International Patient Summary)</li>
              <li>mCODE™ (short for Minimal Common Oncology Data Elements)</li>
              <li>FHIR Genomic</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mb-6">本實驗室研究成果部分開放原始碼專案，重要專案簡介如下:</p>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-xl">藍光(BlueLight)</span>
              <span className="text-sm text-muted-foreground">Web-based DICOM Viewer</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <p className="mb-4">
                  a browser-based medical image viewer,a pure single-page application (SPA), lightweight, and using only
                  JavaScript and HTML5 technologies so as to deploy it on any HTTP server easily (just put it in HTTP
                  server). It supports not only opening local data, but also connecting to medical image archives which
                  support DICOMweb. It provides tools for medical image interpretation and 3D image reconstruction,
                  e.g., Multiplanar Rreformation or Reconstruction (MPR) and Volume Rendering (VR).
                </p>
                <p className="text-sm">
                  <strong>Publication:</strong>
                  <br />
                  Chen, TT., Sun, YC., Chu, WC. et al. BlueLight: An Open Source DICOM Viewer Using Low-Cost Computation
                  Algorithm Implemented with JavaScript Using Advanced Medical Imaging Visualization. J Digit Imaging
                  (2022). https://doi.org/10.1007/s10278-022-00746-0
                </p>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="BlueLight DICOM Viewer"
                  width={300}
                  height={200}
                  className="rounded-md w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-xl">浣熊(Raccoon)</span>
              <span className="text-sm text-muted-foreground">NoSQL醫學影像資料庫</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <p>
                  Raccoon is a noSQL-based medical image archive for managing the DICOM images. It uses the MongoDB to
                  manage the DICOM images and provide RESTful API, supported both FHIR ImagingStudy and DICOMWeb to
                  store, query/retrieve, and manage DICOM images. Raccoon is bulit on the top of the Burni FHIR Server
                  to manage the FHIR resourcs related to medical images.
                </p>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Raccoon NoSQL Medical Image Database"
                  width={300}
                  height={200}
                  className="rounded-md w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-xl">布魯尼(Burni)</span>
              <span className="text-sm text-muted-foreground">NoSQL FHIR Server</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <p>
                  Burni is an implementation of the FHIR server with Node, Express, and MongoDB providing very simple
                  ways to customize the HL7 FHIR® specification, Burni support both Windows and Linux environment to
                  enable developers to rapidly deploy a FHIR service. Burni also supports to import your Implementation
                  Guide to store FHIR Resources and create FHIR RESTful API as well.
                </p>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Burni NoSQL FHIR Server"
                  width={300}
                  height={200}
                  className="rounded-md w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

