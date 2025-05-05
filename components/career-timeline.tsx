"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export default function CareerTimeline() {
  const timelineItems = [
    {
      id: 1,
      type: "work",
      date: "Jul 2024 - Present",
      title: "Production Support Analyst (SRE)",
      company: "Morgan Stanley",
      location: "London, UK",
      description:
        "Leading resolution of ServiceNow incidents and maintaining operational stability through proactive monitoring.",
      skills: ["ServiceNow", "Prometheus", "Grafana", "Splunk", "Python"],
    },
    {
      id: 2,
      type: "education",
      date: "Jan 2022 - Jan 2023",
      title: "Masters in Software Engineering, with Cloud Computing",
      company: "City University",
      location: "London, UK",
      description: "Focused on scalable systems, distributed computing, DevOps practices, and cloud infrastructure.",
      skills: ["Cloud Architecture", "Microservices", "AWS", "Azure"],
    },
    {
      id: 3,
      type: "work",
      date: "Sep 2022 - Jun 2024",
      title: "Front Desk Executive",
      company: "Aire Ancient bath",
      location: "London, UK",
      description:
        "Worked part-time while pursuing Masters studies, developing strong interpersonal and time management skills.",
      skills: ["Customer Service", "Time Management", "Multitasking"],
    },
    {
      id: 4,
      type: "work",
      date: "Aug 2021 - Sep 2022",
      title: "Senior Consultant",
      company: "Capgemini",
      location: "Mumbai, India",
      description: "End-to-end Agile Software Development and deployment of secure, high-quality code.",
      skills: ["Python", "FAST APIs", "RESTful APIs", "Microservices", "Agile"],
    },
    {
      id: 5,
      type: "education",
      date: "Jan 2016 - Jan 2018",
      title: "Masters in Information Technology",
      company: "Mumbai University",
      location: "Mumbai, India",
      description: "Completed core coursework in Data Structures, Algorithms, and Software Engineering.",
      skills: ["Data Structures", "Algorithms", "Software Engineering"],
    },
    {
      id: 6,
      type: "work",
      date: "May 2015 - Dec 2020",
      title: "Software Development Senior Analyst",
      company: "Accenture",
      location: "Mumbai, India",
      description: "Engineered cloud-native application solutions and spearheaded adoption of Azure DevOps.",
      skills: ["Cloud-native", "Azure DevOps", "ASP.NET Core", "Angular"],
    },
    {
      id: 7,
      type: "education",
      date: "Jan 2011 - Jan 2013",
      title: "Bachelors in Information Technology",
      company: "Mumbai University",
      location: "Mumbai, India",
      description: "Completed key coursework in Web Technologies, Software Engineering, and Database Management.",
      skills: ["Web Technologies", "Software Engineering", "Database Management"],
    },
    {
      id: 8,
      type: "work",
      date: "Aug 2013 - May 2015",
      title: "Software Developer",
      company: "Mumbai Educational Trust",
      location: "Mumbai, India",
      description:
        "Streamlined release pipelines and root cause analysis, achieving a 40% increase in successful deployments.",
      skills: ["Release Management", "Test Automation", "QA", "Agile"],
    },
  ]

  // Sort timeline items by date (newest first)
  const sortedItems = [...timelineItems].sort((a, b) => {
    const dateA = new Date(a.date.split(" - ")[0])
    const dateB = new Date(b.date.split(" - ")[0])
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <section id="timeline" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-purple-500">Journey</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A chronological overview of my professional experience and education, showcasing my growth and development
            over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-800"></div>

          <div className="space-y-12">
            {sortedItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0
  const isWork = item.type === "work"

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      <div className="md:w-1/2"></div>

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 border-4 border-purple-500 z-10 flex items-center justify-center">
        {isWork ? (
          <Briefcase className="h-3 w-3 text-purple-500" />
        ) : (
          <GraduationCap className="h-3 w-3 text-purple-500" />
        )}
      </div>

      {/* Content */}
      <div className="md:w-1/2 pl-10 md:pl-0 md:px-6">
        <Card className={`border-gray-800 bg-gray-900/30 overflow-hidden`}>
          <div className={`h-1 w-full ${isWork ? "bg-purple-600" : "bg-blue-600"}`}></div>
          <CardContent className="p-6">
            <div className="mb-2">
              <span className="text-sm text-gray-400">{item.date}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
            <p className="text-purple-400 mb-2">
              {item.company} • {item.location}
            </p>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill: string, i: number) => (
                <Badge key={i} variant="outline" className="bg-gray-800/50">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
