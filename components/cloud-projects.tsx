"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Server, Database, Cloud, Code, Lock } from "lucide-react"

export default function CloudProjects() {
  const projects = [
    {
      id: 1,
      title: "'City Cloud' AWS Web Application",
      description:
        "A microservices-based application deployed on AWS using Kubernetes, showcasing cloud-native architecture and DevOps practices.",
      status: "live",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["AWS", "Kubernetes", "Docker", "Microservices", "CI/CD"],
      services: ["EC2", "S3", "RDS", "Route 53", "CloudFormation"],
      githubUrl: "https://github.com/riddhi-more/city-cloud",
      liveUrl: "#",
      architecture: `
        graph TD
          A[Client] --> B[Route 53]
          B --> C[Load Balancer]
          C --> D[ECS Cluster]
          D --> E[Microservice 1]
          D --> F[Microservice 2]
          D --> G[Microservice 3]
          E --> H[(RDS Database)]
          F --> H
          G --> I[S3 Bucket]
          J[CloudWatch] --> D
          K[CI/CD Pipeline] --> D
      `,
    },
    {
      id: 2,
      title: "Real-time Monitoring System",
      description:
        "A comprehensive monitoring and alerting system built using Prometheus, Grafana, and Splunk to provide real-time insights into application performance.",
      status: "in-progress",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Prometheus", "Grafana", "Splunk", "Python", "Docker"],
      services: ["EC2", "Lambda", "CloudWatch", "SNS"],
      githubUrl: "https://github.com/riddhi-more/monitoring-system",
      liveUrl: "#",
      architecture: `
        graph TD
          A[Applications] --> B[Prometheus]
          A --> C[Splunk Forwarders]
          B --> D[Grafana]
          C --> E[Splunk Indexers]
          D --> F[Alerting]
          E --> F
          F --> G[SNS]
          G --> H[On-call Team]
      `,
    },
    {
      id: 3,
      title: "Serverless Data Processing Pipeline",
      description:
        "A serverless architecture for processing large volumes of data using AWS Lambda, S3, and DynamoDB, with automated scaling and minimal operational overhead.",
      status: "planning",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["AWS Lambda", "S3", "DynamoDB", "API Gateway", "CloudFormation"],
      services: ["Lambda", "S3", "DynamoDB", "API Gateway", "CloudFormation"],
      githubUrl: "https://github.com/riddhi-more/serverless-pipeline",
      liveUrl: "#",
      architecture: `
        graph TD
          A[Data Source] --> B[S3 Bucket]
          B --> C[Lambda Trigger]
          C --> D[Processing Lambda]
          D --> E[DynamoDB]
          F[API Gateway] --> G[Query Lambda]
          G --> E
      `,
    },
  ]

  return (
    <section id="cloud-projects" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Cloud <span className="text-purple-500">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my cloud-based projects, featuring architecture diagrams and technology stacks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-900/30 border-gray-800 overflow-hidden hover:border-purple-500 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute top-2 right-2">
                    <Badge
                      className={`${
                        project.status === "live"
                          ? "bg-green-600"
                          : project.status === "in-progress"
                            ? "bg-yellow-600"
                            : "bg-blue-600"
                      }`}
                    >
                      {project.status === "live"
                        ? "Live"
                        : project.status === "in-progress"
                          ? "In Progress"
                          : "Planning"}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-800/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Cloud Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, i) => (
                        <div key={i} className="flex items-center text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {service === "EC2" ? (
                            <Server className="h-3 w-3 mr-1" />
                          ) : service === "S3" ? (
                            <Database className="h-3 w-3 mr-1" />
                          ) : service === "RDS" ? (
                            <Database className="h-3 w-3 mr-1" />
                          ) : service === "Lambda" ? (
                            <Code className="h-3 w-3 mr-1" />
                          ) : service === "CloudFormation" ? (
                            <Cloud className="h-3 w-3 mr-1" />
                          ) : (
                            <Lock className="h-3 w-3 mr-1" />
                          )}
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> GitHub
                      </a>
                    </Button>
                    <Button
                      variant={project.status === "live" ? "default" : "secondary"}
                      size="sm"
                      className={project.status === "live" ? "bg-purple-600 hover:bg-purple-700" : ""}
                      asChild
                      disabled={project.status !== "live"}
                    >
                      <a
                        href={project.status === "live" ? project.liveUrl : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />{" "}
                        {project.status === "live" ? "View Live" : "Coming Soon"}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
