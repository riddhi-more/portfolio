"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Code, GitBranch, GitCommit, GitPullRequest, Server, Workflow } from "lucide-react"

export default function CICDPipeline() {
  const [activeStage, setActiveStage] = useState(0)
  const [animating, setAnimating] = useState(false)

  const stages = [
    {
      id: 0,
      name: "Code",
      icon: <Code className="h-6 w-6" />,
      description: "Developer writes code and commits to feature branch",
      details: [
        "Create a feature branch from main",
        "Write code following best practices",
        "Run local tests to verify changes",
        "Commit code with descriptive message",
      ],
    },
    {
      id: 1,
      name: "Pull Request",
      icon: <GitPullRequest className="h-6 w-6" />,
      description: "Create PR for code review and initial checks",
      details: [
        "Open pull request to main branch",
        "Automated linting and formatting checks run",
        "Code review by team members",
        "Address feedback and make necessary changes",
      ],
    },
    {
      id: 2,
      name: "Build",
      icon: <GitBranch className="h-6 w-6" />,
      description: "Automated build process triggered on PR approval",
      details: [
        "PR is approved and merged to main",
        "CI pipeline triggered automatically",
        "Code is compiled and built",
        "Unit tests are executed",
      ],
    },
    {
      id: 3,
      name: "Test",
      icon: <Workflow className="h-6 w-6" />,
      description: "Comprehensive testing in isolated environment",
      details: [
        "Integration tests run against the build",
        "End-to-end tests verify user flows",
        "Performance tests check for regressions",
        "Security scans identify vulnerabilities",
      ],
    },
    {
      id: 4,
      name: "Deploy",
      icon: <Server className="h-6 w-6" />,
      description: "Automated deployment to production environment",
      details: [
        "Deployment to staging environment",
        "QA verification and approval",
        "Deployment to production with zero downtime",
        "Post-deployment health checks",
      ],
    },
    {
      id: 5,
      name: "Monitor",
      icon: <GitCommit className="h-6 w-6" />,
      description: "Continuous monitoring and feedback loop",
      details: [
        "Application performance monitoring",
        "Error tracking and alerting",
        "User feedback collection",
        "Metrics analysis for future improvements",
      ],
    },
  ]

  const runPipeline = () => {
    setAnimating(true)
    setActiveStage(0)

    // Simulate pipeline progression
    let currentStage = 0
    const interval = setInterval(() => {
      currentStage += 1
      setActiveStage(currentStage)

      if (currentStage >= stages.length) {
        clearInterval(interval)
        setAnimating(false)
      }
    }, 2000)
  }

  return (
    <section id="cicd" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            CI/CD <span className="text-purple-500">Pipeline</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A visual representation of my DevOps workflow, from code commit to production deployment.
          </p>
        </motion.div>

        <div className="mb-8 text-center">
          <Button
            onClick={runPipeline}
            disabled={animating}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
          >
            {animating ? "Pipeline Running..." : "Run Pipeline Demo"}
          </Button>
        </div>

        <div className="relative mb-12">
          {/* Pipeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2"></div>

          {/* Pipeline stages */}
          <div className="flex justify-between relative">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex flex-col items-center relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                    scale: activeStage >= stage.id ? 1 : 0.8,
                    opacity: activeStage >= stage.id ? 1 : 0.5,
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeStage >= stage.id ? "bg-purple-600" : "bg-gray-800"
                  } ${activeStage === stage.id ? "ring-4 ring-purple-400/50" : ""}`}
                >
                  {activeStage > stage.id ? (
                    <Check className="h-6 w-6 text-white" />
                  ) : (
                    <span className="text-white">{stage.icon}</span>
                  )}
                </motion.div>
                <div className="mt-2 text-center">
                  <p className={`font-medium ${activeStage >= stage.id ? "text-white" : "text-gray-500"}`}>
                    {stage.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current stage details */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-900/30 border-gray-800 max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-purple-600 mr-4`}>
                  {stages[activeStage < stages.length ? activeStage : stages.length - 1].icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {stages[activeStage < stages.length ? activeStage : stages.length - 1].name} Stage
                  </h3>
                  <p className="text-gray-400">
                    {stages[activeStage < stages.length ? activeStage : stages.length - 1].description}
                  </p>
                </div>
              </div>

              <div className="ml-14">
                <h4 className="text-white font-medium mb-2">Key Activities:</h4>
                <ul className="space-y-2">
                  {stages[activeStage < stages.length ? activeStage : stages.length - 1].details.map(
                    (detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <ArrowRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.li>
                    ),
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
