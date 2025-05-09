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
import BackToTop from "@/components/back-to-top"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time - reduced to 1 second for better UX
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    // Force scroll to top on initial load
    window.scrollTo(0, 0)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main id="top" className="min-h-screen bg-background">
      <Navbar />
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <About />
      <Skills />
      <CareerTimeline />
      <Projects />
      <CloudProjects />
      <CICDPipeline />
      <TerminalInterface />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
