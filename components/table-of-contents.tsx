"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-10% 0px -90% 0px" },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: "lab-introduction", title: "實驗室簡介" },
    { id: "team-members", title: "成員" },
    { id: "research", title: "研究" },
    { id: "major-projects", title: "大型專案" },
    { id: "publications", title: "著作目錄" },
    { id: "teaching", title: "教學" },
    { id: "references", title: "參考連結" },
  ]

  return (
    <nav className="sticky top-4 self-start p-4 hidden md:block w-64 shrink-0">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "text-sm transition-colors pl-2 border-l-2 w-full text-left py-1",
                activeSection === section.id
                  ? "text-[#022029] border-[#022029] font-medium"
                  : "text-[#02202999] hover:text-[#022029cc] border-transparent",
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents

