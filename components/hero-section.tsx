import Image from "next/image"
import ScrollArrow from "./scroll-arrow"
import type React from "react"

interface HeroSectionProps {
  nextSectionRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({ nextSectionRef }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-secondary/70 z-0" />
      <div className="relative z-10 text-secondary-foreground text-center w-full max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Lab Logo"
            width={120}
            height={120}
            className="mx-auto mb-12 rounded-full bg-primary"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">影像資訊學實驗室</h1>
        <p className="text-xl md:text-2xl mb-4">Image Informatics Laboratory</p>
        <p className="text-lg md:text-xl">國立臺北護理健康大學 資訊管理系暨研究所</p>
      </div>
      <ScrollArrow targetRef={nextSectionRef} />
    </section>
  )
}

export default HeroSection

