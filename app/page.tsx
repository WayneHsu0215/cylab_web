"use client"

import { useRef } from "react"
import TableOfContents from "@/components/table-of-contents"
import HeroSection from "@/components/hero-section"
import LabIntroduction from "@/components/sections/lab-introduction"
import TeamMembers from "@/components/sections/team-members"
import Research from "@/components/sections/research"
import MajorProjects from "@/components/sections/major-projects"
import Publications from "@/components/sections/publications"
import Teaching from "@/components/sections/teaching"
import References from "@/components/sections/references"
import Footer from "@/components/footer"

export default function Home() {
  const firstSectionRef = useRef<HTMLElement>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection nextSectionRef={firstSectionRef} />
      <div className="bg-primary text-primary-foreground flex-grow">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
          <TableOfContents />
          <main className="flex-1">
            <LabIntroduction ref={firstSectionRef} />
            <TeamMembers />
            <Research />
            <MajorProjects />
            <Publications />
            <Teaching />
            <References />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

