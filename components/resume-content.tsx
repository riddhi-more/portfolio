"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Briefcase, Calendar, Download, GraduationCap, MapPin, User } from "lucide-react"

export default function ResumeContent() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="print:hidden"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Professional <span className="text-purple-500">Resume</span>
          </h1>
          <Button className="bg-purple-600 hover:bg-purple-700 md:self-end" asChild>
            <a href="/resume?print=true" target="_blank" rel="noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </a>
          </Button>
        </div>
        <p className="text-gray-400 mb-6">
          A comprehensive overview of my professional experience, skills, and qualifications.
        </p>
      </motion.div>

      {/* Header for print version */}
      <div className="hidden print:block mb-6">
        <h1 className="text-3xl font-bold">Riddhi More</h1>
        <div className="flex items-center text-gray-600 mt-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>London, United Kingdom</span>
          <span className="mx-2">•</span>
          <span>riddhimore2021@gmail.com</span>
        </div>
      </div>

      {/* Professional Summary */}
      <section id="summary" className="scroll-mt-24">
        <ResumeSection icon={<User />} title="Professional Summary" delay={0.1}>
          <Card className="border-gray-800 bg-gray-900/30">
            <CardContent className="p-6">
              <p className="text-gray-300">
                Dynamic and results-driven IT professional with 9+ years of diverse experience as Senior Software
                Engineer and Team Management. Specialized in managing mission-critical applications, enhancing system
                reliability, and streamlining support operations. Proven track record in proactively resolving
                production issues, optimizing cloud-based solutions (Azure, AWS), and collaborating cross-functionally
                to ensure cloud-based solutions (Azure, AWS), and collaborating cross-functionally to ensure application
                stability and business continuity. Skilled team leader and communicator with a keen analytical approach
                and hands-on experience in automation, monitoring, and incident resolution.
              </p>
            </CardContent>
          </Card>
        </ResumeSection>
      </section>

      {/* Work Experience */}
      <section id="experience" className="scroll-mt-24">
        <ResumeSection icon={<Briefcase />} title="Work Experience" delay={0.2}>
          <div className="space-y-6">
            <ExperienceItem
              title="Production Support Analyst (SRE)"
              company="Morgan Stanley"
              location="London, United Kingdom"
              period="Jul 2024 - Present"
              description="Leading resolution of ServiceNow incidents and maintaining operational stability through proactive monitoring."
              achievements={[
                "Led the resolution of ServiceNow incidents by identifying root causes and implementing long-term fixes",
                "Developed and integrated monitoring solutions for new client setups, enabling early outage detection",
                "Maintained operational stability through proactive monitoring using Sockeye, ensuring system reliability and rapid incident response",
                "Built real-time monitoring and alerting pipelines using Prometheus, Grafana, and Splunk, reducing MTTR by 40%",
                "Automated routine operational tasks with PowerShell, Python, Bash, and Perl scripting on Linux, improving Team efficiency by 15%",
                "Collaborated with development teams, guided team members to perform root cause analysis and implemented solutions, reducing recurring incidents by 20%",
              ]}
              technologies={[
                "ServiceNow",
                "Sockeye",
                "Prometheus",
                "Grafana",
                "Splunk",
                "PowerShell",
                "Python",
                "Bash",
                "Perl",
                "Linux",
              ]}
            />

            <ExperienceItem
              title="Front Desk Executive"
              company="Aire Ancient bath"
              location="London, United Kingdom"
              period="Sep 2022 - Jun 2024"
              description="Worked part-time while pursuing Masters studies."
              achievements={[
                "Worked part-time as a front desk associate while pursuing Masters studies, developing strong interpersonal, multitasking, and time management skills in a fast-paced environment",
              ]}
              technologies={["Customer Service", "Time Management", "Multitasking"]}
            />

            <ExperienceItem
              title="Senior Consultant"
              company="Capgemini"
              location="Mumbai, India"
              period="Aug 2021 - Sep 2022"
              description="End-to-end Agile Software Development and deployment of secure, high-quality code."
              achievements={[
                "Experienced in end-to-end Agile Software Development, and deployment of secure, high-quality coding using Python, FAST APIs, RESTful APIs, and micro-services architecture",
                "Oversaw end-to-end delivery of multiple projects while serving as both Scrum Master and Team Lead",
                "Enhanced software quality by 25% through comprehensive automated testing scripts for cloud-based applications",
                "Managed CI/CD workflows using Jenkins and GitLab, ensuring seamless deployments across dev, staging, and prod environments",
                "Demonstrated strong ownership in building sustainable backend systems from scratch using C#/.NET and PostgreSQL, with a focus on writing clean, following coding standards, scalable, and s code for long-term product growth",
              ]}
              technologies={[
                "Python",
                "FAST APIs",
                "RESTful APIs",
                "Microservices",
                "Agile",
                "Scrum",
                "Jenkins",
                "GitLab",
                "CI/CD",
                "C#",
                ".NET",
                "PostgreSQL",
              ]}
            />

            <ExperienceItem
              title="Software Development Senior Analyst"
              company="Accenture"
              location="Mumbai, India"
              period="May 2015 - Dec 2020"
              description="Engineered cloud-native application solutions and spearheaded adoption of Azure DevOps."
              achievements={[
                "Engineered cloud-native application solutions, reducing infrastructure costs by 40% and improving application performance by 30%",
                "Spearheaded the adoption of Azure DevOps and ECS to align with future-state architecture, decreasing development time by 20%",
                "Utilized ASP.NET Core .NET Framework, Angular, JavaScript with MVC architecture, HTML, CSS, and distributed systems to develop scalable solutions, enhancing user engagement by 40%",
                "Applied Kanban methodologies to optimize workflows, reducing project lead times by 30%",
              ]}
              technologies={[
                "Cloud-native",
                "Azure DevOps",
                "ECS",
                "ASP.NET Core",
                ".NET Framework",
                "Angular",
                "JavaScript",
                "MVC",
                "HTML",
                "CSS",
                "Kanban",
              ]}
            />

            <ExperienceItem
              title="Software Developer"
              company="Mumbai Educational Trust"
              location="Mumbai, India"
              period="Aug 2013 - May 2015"
              description="Streamlined release pipelines and root cause analysis, achieving a 40% increase in successful deployments."
              achievements={[
                "Streamlined release pipelines and root cause analysis, achieving a 40% increase in successful deployments",
                "Ensured zero-defect delivery of web applications through test automation and rigorous quality assurance processes",
                "Trained Agile teams of 20 employees in Agile Scrum practices while designing Azure based solutions improving SLA adherence by 50%",
                "Worked in Agile teams, closely collaborating with stakeholders to deliver business critical applications with innovation",
              ]}
              technologies={["Release Management", "Test Automation", "QA", "Agile", "Scrum", "Azure"]}
            />
          </div>
        </ResumeSection>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24">
        <ResumeSection icon={<GraduationCap />} title="Education" delay={0.3}>
          <div className="space-y-6">
            <EducationItem
              degree="Masters in Software Engineering, with Cloud Computing"
              institution="City University"
              location="London, United Kingdom"
              period="Jan 2022 - Jan 2023"
              description="GPA: Merit. Focused on scalable systems, distributed computing, DevOps practices, and cloud infrastructure (AWS & Azure)."
              courses={[
                "Cloud Architecture",
                "Microservices",
                "Data Structures & Algorithms",
                "Web Application Security",
                "Software Engineering Principles",
              ]}
              achievements={[
                "Final Year Project: Developed a cloud-native application using serverless architecture to optimize resource allocation in real-time",
                "Active member of the Computing Society – participated in coding challenges, tech meetups, and cloud computing workshops",
                "Balanced academic workload while working part-time as a front desk associate, demonstrating strong time management and communication skills",
              ]}
            />

            <EducationItem
              degree="Masters in Information Technology"
              institution="Mumbai University"
              location="Mumbai, India"
              period="Jan 2016 - Jan 2018"
              description="GPA: First Class"
              courses={["Data Structures", "Algorithms", "Software Engineering"]}
              achievements={[
                "Completed core coursework in Data Structures, Algorithms, and Software Engineering",
                "Participated in national-level coding competitions",
                "Led multiple academic projects focused on full-stack development and system design",
              ]}
            />

            <EducationItem
              degree="Bachelors in Information Technology"
              institution="Mumbai University"
              location="Mumbai, India"
              period="Jan 2011 - Jan 2013"
              description="GPA: First Class"
              courses={["Web Technologies", "Software Engineering", "Database Management"]}
              achievements={[
                "Developed a college event management system using ASP.NET and SQL Server, SSRS enabling real-time event registration and admin control",
                "Participated in tech fests and coding contests to enhance practical skills",
              ]}
            />
          </div>
        </ResumeSection>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24">
        <ResumeSection icon={<BookOpen />} title="Skills" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gray-800 bg-gray-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  <SkillCategory category="Programming" skills={["Python", "C#", "JavaScript", "ASP.NET", "Bash"]} />
                  <SkillCategory category="Cloud Technologies" skills={["Microsoft Azure", "AWS", "GCP"]} />
                  <SkillCategory category="DevOps Tools" skills={["Jenkins", "Docker", "Git", "GitHub"]} />
                  <SkillCategory category="Data Management" skills={["SQL", "PostgreSQL", "NoSQL databases"]} />
                  <SkillCategory
                    category="Frameworks and APIs"
                    skills={[".NET Framework", "FAST APIs", "RESTful APIs"]}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-900/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Soft Skills</h3>
                <div className="space-y-4">
                  <SkillCategory
                    category="Leadership"
                    skills={["Team Management", "Mentoring", "Strategic Planning", "Decision Making"]}
                  />
                  <SkillCategory
                    category="Communication"
                    skills={[
                      "Technical Documentation",
                      "Presentations",
                      "Stakeholder Management",
                      "Cross-team Collaboration",
                    ]}
                  />
                  <SkillCategory
                    category="Project Management"
                    skills={["Agile/Scrum", "Kanban", "JIRA", "Risk Management"]}
                  />
                  <SkillCategory
                    category="Problem Solving"
                    skills={["Critical Thinking", "Troubleshooting", "Root Cause Analysis", "Performance Optimization"]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </ResumeSection>
      </section>

      {/* Certifications */}
      <section id="certifications" className="scroll-mt-24">
        <ResumeSection icon={<Award />} title="Certifications" delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CertificationItem name="AI 900 - Azure AI Fundamentals" issuer="Microsoft" date="2023" />
            <CertificationItem name="Az 900 - Azure Fundamentals" issuer="Microsoft" date="2023" />
            <CertificationItem name="Site Reliability Engineering SRE Foundation" issuer="Cambridge" date="2022" />
            <CertificationItem name="Financial Foundations" issuer="Wiley Edge" date="2022" />
            <CertificationItem name="ICAgile Certified" issuer="ICAgile" date="2021" />
            <CertificationItem name="ITIL Certified" issuer="AXELOS" date="2020" />
          </div>
        </ResumeSection>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24">
        <ResumeSection icon={<Calendar />} title="Key Projects" delay={0.6}>
          <div className="space-y-6">
            <ProjectItem
              title="Prediction of Product Prices and estimated Sale time"
              organization="City University, London"
              period="Jan 2023"
              description="AI-powered prediction system using Artificial Neural Networks and big data technologies."
              achievements={[
                "Developed AI-powered predictions using Artificial Neural Networks (ANN) and big data technologies like Spark Python",
                "Enhanced accuracy through rigorous debugging and industry best practices",
              ]}
              technologies={["Artificial Neural Networks", "Spark", "Python", "Big Data"]}
            />

            <ProjectItem
              title="'City Cloud' AWS Web application"
              organization="City University, London"
              period="Jan 2023"
              description="Microservices-based application deployed on AWS using Kubernetes."
              achievements={[
                "Designed and deployed a micro-services-based application on AWS using Kubernetes",
                "Integrated AWS Route 53, EC2, RDS, and S3 for scalable and secure infrastructure",
                "Automated deployments with CloudFormation and containerization techniques",
              ]}
              technologies={["AWS", "Kubernetes", "Route 53", "EC2", "RDS", "S3", "CloudFormation", "Containerization"]}
            />
          </div>
        </ResumeSection>
      </section>
    </div>
  )
}

// Helper Components
function ResumeSection({
  icon,
  title,
  delay,
  children,
}: {
  icon: React.ReactNode
  title: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <div className="flex items-center mb-6">
        <div className="bg-purple-500/20 p-2 rounded-lg mr-3">
          <div className="text-purple-500">{icon}</div>
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  )
}

function ExperienceItem({
  title,
  company,
  location,
  period,
  description,
  achievements,
  technologies,
}: {
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}) {
  return (
    <Card className="border-gray-800 bg-gray-900/30">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-purple-400">{company}</p>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <div className="flex items-center md:justify-end text-gray-400 mb-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
            <div className="text-gray-400">{period}</div>
          </div>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-800/50">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function EducationItem({
  degree,
  institution,
  location,
  period,
  description,
  courses,
  achievements,
}: {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  courses: string[]
  achievements?: string[]
}) {
  return (
    <Card className="border-gray-800 bg-gray-900/30">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{degree}</h3>
            <p className="text-purple-400">{institution}</p>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <div className="flex items-center md:justify-end text-gray-400 mb-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
            <div className="text-gray-400">{period}</div>
          </div>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-white mb-2">Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-white mb-2">Relevant Coursework:</h4>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <Badge key={index} variant="outline" className="bg-gray-800/50">
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SkillCategory({ category, skills }: { category: string; skills: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-purple-400 mb-2">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="bg-gray-800/50">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function CertificationItem({
  name,
  issuer,
  date,
  credentialId,
}: {
  name: string
  issuer: string
  date: string
  credentialId?: string
}) {
  return (
    <Card className="border-gray-800 bg-gray-900/30">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <p className="text-purple-400 mb-3">{issuer}</p>
        <div className="flex justify-between text-gray-400 text-sm">
          <span>Issued: {date}</span>
          {credentialId && <span>ID: {credentialId}</span>}
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectItem({
  title,
  organization,
  period,
  description,
  achievements,
  technologies,
}: {
  title: string
  organization: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}) {
  return (
    <Card className="border-gray-800 bg-gray-900/30">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-purple-400">{organization}</p>
          </div>
          <div className="mt-2 md:mt-0 text-gray-400">{period}</div>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-800/50">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
