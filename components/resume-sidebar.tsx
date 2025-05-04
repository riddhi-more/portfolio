"use client"

import { ArrowLeft, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function ResumeSidebar() {
  const [activeSection, setActiveSection] = useState("summary")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionId = section.getAttribute("id") || ""

        if (sectionTop < 100) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isMounted) return null

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const navItems = [
    { id: "summary", label: "Professional Summary" },
    { id: "experience", label: "Work Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
  ]

  return (
    <div className="sticky top-24 print:hidden">
      <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Resume</h2>
        <div className="space-y-2 mb-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeSection === item.id
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" /> Print Resume
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <a href="/#home">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
