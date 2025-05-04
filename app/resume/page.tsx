"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import "./print.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ResumeSidebar from "@/components/resume-sidebar"
import ResumeContent from "@/components/resume-content"
import PrintableResume from "@/components/printable-resume"

export default function ResumePage() {
  const searchParams = useSearchParams()
  const isPrintMode = searchParams.get("print") === "true"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // If in print mode, trigger print dialog after a short delay
    if (isPrintMode) {
      const timer = setTimeout(() => {
        window.print()
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isPrintMode])

  // Show printable version in print mode
  if (isPrintMode && mounted) {
    return <PrintableResume />
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ResumeSidebar />
          </div>
          <div className="lg:col-span-3">
            <ResumeContent />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
