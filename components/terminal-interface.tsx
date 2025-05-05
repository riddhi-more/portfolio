"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function TerminalInterface() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to Riddhi's Terminal! Type 'help' to see available commands.",
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to bottom when output changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      navigateHistory(-1)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      navigateHistory(1)
    }
  }

  const navigateHistory = (direction: number) => {
    if (commandHistory.length === 0) return

    const newIndex = historyIndex + direction
    if (newIndex >= -1 && newIndex < commandHistory.length) {
      setHistoryIndex(newIndex)
      if (newIndex === -1) {
        setInput("")
      } else {
        setInput(commandHistory[newIndex])
      }
    }
  }

  const handleCommand = () => {
    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    const newOutput = [...output, `$ ${input}`]

    // Add command to history
    setCommandHistory([command, ...commandHistory])
    setHistoryIndex(-1)

    // Process command
    switch (command) {
      case "help":
        newOutput.push(
          "Available commands:",
          "- help: Show this help message",
          "- whoami: Learn about me",
          "- skills: View my technical skills",
          "- projects: See my projects",
          "- experience: View my work experience",
          "- education: View my education",
          "- contact: Get my contact information",
          "- clear: Clear the terminal",
          "- exit: Exit terminal mode",
        )
        break
      case "whoami":
        newOutput.push(
          "Riddhi More",
          "Production Support Analyst (SRE) | Senior Software Engineer | Team Lead",
          "",
          "Dynamic and results-driven IT professional with 9+ years of diverse experience as Senior Software Engineer and Team Management. Specialized in managing mission-critical applications, enhancing system reliability, and streamlining support operations.",
        )
        break
      case "skills":
        newOutput.push(
          "Technical Skills:",
          "- Programming: Python, C#, JavaScript, ASP.NET, Bash",
          "- Cloud Technologies: Microsoft Azure, AWS, GCP",
          "- DevOps Tools: Jenkins, Docker, Git, GitHub",
          "- Data Management: SQL, PostgreSQL, NoSQL databases",
          "- Frameworks and APIs: .NET Framework, FAST APIs, RESTful APIs",
          "",
          "Soft Skills:",
          "- Leadership: Team Management, Mentoring, Strategic Planning",
          "- Communication: Technical Documentation, Stakeholder Management",
          "- Project Management: Agile/Scrum, Kanban, JIRA",
          "- Problem Solving: Critical Thinking, Troubleshooting, Root Cause Analysis",
        )
        break
      case "projects":
        newOutput.push(
          "Key Projects:",
          "",
          "1. Prediction of Product Prices and estimated Sale time",
          "   - Developed AI-powered predictions using Artificial Neural Networks (ANN) and big data technologies",
          "",
          "2. 'City Cloud' AWS Web application",
          "   - Designed and deployed a micro-services-based application on AWS using Kubernetes",
          "   - Integrated AWS Route 53, EC2, RDS, and S3 for scalable and secure infrastructure",
        )
        break
      case "experience":
        newOutput.push(
          "Work Experience:",
          "",
          "Production Support Analyst (SRE) | Morgan Stanley",
          "Jul 2024 - Present | London, UK",
          "- Led the resolution of ServiceNow incidents by identifying root causes",
          "- Built real-time monitoring and alerting pipelines using Prometheus, Grafana, and Splunk",
          "",
          "Senior Consultant | Capgemini",
          "Aug 2021 - Sep 2022 | Mumbai, India",
          "- End-to-end Agile Software Development and deployment of secure, high-quality code",
          "- Managed CI/CD workflows using Jenkins and GitLab",
          "",
          "Software Development Senior Analyst | Accenture",
          "May 2015 - Dec 2020 | Mumbai, India",
          "- Engineered cloud-native application solutions, reducing infrastructure costs by 40%",
          "",
          "Type 'education' to see my educational background.",
        )
        break
      case "education":
        newOutput.push(
          "Education:",
          "",
          "Masters in Software Engineering, with Cloud Computing | City University",
          "Jan 2022 - Jan 2023 | London, UK",
          "- GPA: Merit",
          "- Focused on scalable systems, distributed computing, DevOps practices, and cloud infrastructure",
          "",
          "Masters in Information Technology | Mumbai University",
          "Jan 2016 - Jan 2018 | Mumbai, India",
          "- GPA: First Class",
          "",
          "Bachelors in Information Technology | Mumbai University",
          "Jan 2011 - Jan 2013 | Mumbai, India",
          "- GPA: First Class",
        )
        break
      case "contact":
        newOutput.push(
          "Contact Information:",
          "",
          "Email: riddhimore2021@gmail.com",
          "LinkedIn: linkedin.com/in/riddhimor",
          "GitHub: github.com/riddhi-more",
          "Location: London, United Kingdom",
          "",
          "I'm currently open to roles in Software Development, Cloud Engineering, or Agile Leadership.",
        )
        break
      case "clear":
        setOutput([])
        setInput("")
        return
      case "exit":
        newOutput.push("Exiting terminal mode. Thanks for visiting!")
        break
      default:
        newOutput.push(`Command not found: ${command}. Type 'help' to see available commands.`)
    }

    setOutput(newOutput)
    setInput("")
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <section id="terminal" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Terminal <span className="text-purple-500">Interface</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Interact with my portfolio through a command-line interface. Type 'help' to see available commands.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gray-900 border-gray-700 overflow-hidden" onClick={focusInput}>
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-sm text-gray-400">riddhi@portfolio:~</div>
            </div>
            <div ref={terminalRef} className="p-4 h-[400px] overflow-y-auto font-mono text-sm text-green-400 bg-black">
              {output.map((line, index) => (
                <div key={index} className="mb-1 whitespace-pre-wrap">
                  {line}
                </div>
              ))}
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none border-none text-green-400 caret-green-400"
                  autoFocus
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
