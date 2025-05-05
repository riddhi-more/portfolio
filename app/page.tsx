"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import CareerTimeline from "@/components/career-timeline"
import TerminalInterface from "@/components/terminal-interface"
import CICDPipeline from "@/components/cicd-pipeline"
import CloudProjects from "@/components/cloud-projects"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CareerTimeline />
      <Projects />
      <CloudProjects />
      <CICDPipeline />
      <TerminalInterface />
      <Contact />
      <Footer />
    </main>
  )
}
