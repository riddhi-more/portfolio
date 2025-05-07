"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Prediction of Product Prices and Sale Time",
      description:
        "Developed AI-powered predictions using Artificial Neural Networks (ANN) and big data technologies like Spark Python.",
      category: "ai",
      technologies: ["Artificial Neural Networks", "Spark", "Python", "Big Data"],
      demoLink: "#",
      githubLink: "https://github.com/riddhi-more/Prediction-of-Product-Prices-and-Sale-Time",
    },
    {
      id: 2,
      title: "'City Cloud' AWS Web Application",
      description: "Designed and deployed a micro-services-based application on AWS using Kubernetes.",
      category: "cloud",
      technologies: ["AWS", "Kubernetes", "Route 53", "EC2", "RDS", "S3", "CloudFormation"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Real-time Monitoring System",
      description:
        "Built real-time monitoring and alerting pipelines using Prometheus, Grafana, and Splunk, reducing MTTR by 40%.",
      category: "devops",
      technologies: ["Prometheus", "Grafana", "Splunk", "Python", "Alerting"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Automated Operational Tasks",
      description: "Automated routine operational tasks with PowerShell, Python, Bash, and Perl scripting on Linux.",
      category: "automation",
      technologies: ["PowerShell", "Python", "Bash", "Perl", "Linux"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "CI/CD Workflow Management",
      description:
        "Managed CI/CD workflows using Jenkins and GitLab, ensuring seamless deployments across environments.",
      category: "devops",
      technologies: ["Jenkins", "GitLab", "CI/CD", "Docker", "Kubernetes"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Cloud-Native Application Solutions",
      description: "Engineered cloud-native application solutions, reducing infrastructure costs by 40%.",
      category: "cloud",
      technologies: ["Azure", "AWS", "Microservices", "Containerization", "Kubernetes"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  // Function to get image based on category
  const getProjectImage = (category: string) => {
    switch (category) {
      case "ai":
        return "bg-gradient-to-br from-purple-600 to-blue-500"
      case "cloud":
        return "bg-gradient-to-br from-blue-500 to-cyan-400"
      case "devops":
        return "bg-gradient-to-br from-green-500 to-emerald-400"
      case "automation":
        return "bg-gradient-to-br from-orange-500 to-amber-400"
      default:
        return "bg-gradient-to-br from-gray-700 to-gray-600"
    }
  }

  // Function to get icon based on category
  const getProjectIcon = (category: string) => {
    switch (category) {
      case "ai":
        return "🧠"
      case "cloud":
        return "☁️"
      case "devops":
        return "🔄"
      case "automation":
        return "⚙️"
      default:
        return "💻"
    }
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 bg-gray-900/50 p-1 rounded-lg">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "all" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("cloud")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "cloud" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Cloud
            </button>
            <button
              onClick={() => setFilter("devops")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "devops" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              DevOps
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "ai" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              AI
            </button>
            <button
              onClick={() => setFilter("automation")}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === "automation" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Automation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors group"
            >
              <div className={`relative h-48 overflow-hidden ${getProjectImage(project.category)}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">{getProjectIcon(project.category)}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm capitalize">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
