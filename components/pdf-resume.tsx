"use client"

import { useRef } from "react"
import { MapPin } from "lucide-react"

export default function PDFResume() {
  const resumeRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={resumeRef} className="pdf-resume bg-white text-black p-8 max-w-4xl mx-auto">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold">Riddhi More</h1>
        <div className="flex flex-wrap gap-2 text-gray-600 mt-2">
          <span>riddhimore2021@gmail.com</span>
          <span>|</span>
          <a href="https://www.linkedin.com/in/riddhimor/" className="text-blue-600">
            linkedin.com/in/riddhimor
          </a>
          <span>|</span>
          <a href="https://github.com/riddhi-more/" className="text-blue-600">
            github.com/riddhi-more
          </a>
          <span>|</span>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>London, United Kingdom</span>
          </div>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b mb-2 pb-1">SUMMARY</h2>
        <p className="text-sm">
          Dynamic and results-driven IT professional with 9+ years of diverse experience as Senior Software Engineer and
          Team Management. Specialized in managing mission-critical applications, enhancing system reliability, and
          streamlining support operations. Proven track record in proactively resolving production issues, optimizing
          cloud-based solutions (Azure, AWS), and collaborating cross-functionally to ensure application stability and
          business continuity. Skilled team leader and communicator with a keen analytical approach and hands-on
          experience in automation, monitoring, and incident resolution.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b mb-2 pb-1">EXPERIENCE</h2>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Production Support Analyst (SRE)</h3>
              <p className="italic">Morgan Stanley</p>
            </div>
            <div className="text-right">
              <p>Jul '24 — Present</p>
              <p>London, United Kingdom</p>
            </div>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>
              Led the resolution of ServiceNow incidents by identifying root causes and implementing long-term fixes.
              Developed and integrated monitoring solutions for new client setups, enabling early outage detection.
            </li>
            <li>
              Maintained operational stability through proactive monitoring using Sockeye, ensuring system reliability
              and rapid incident response.
            </li>
            <li>
              Built real-time monitoring and alerting pipelines using Prometheus, Grafana, and Splunk, reducing MTTR by
              40%.
            </li>
            <li>
              Automate routine operational tasks with PowerShell, Python, Bash, and Perl scripting on Linux, improving
              Team efficiency by 15%.
            </li>
            <li>
              Collaboration with development teams, guide team members to perform root cause analysis and implemented
              solutions, reducing recurring incidents by 20%.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Front Desk Executive</h3>
              <p className="italic">Aire Ancient bath</p>
            </div>
            <div className="text-right">
              <p>Sep '22 — Jun '24</p>
              <p>London, United Kingdom</p>
            </div>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>
              Worked part-time as a front desk associate while pursuing Masters studies, developing strong
              interpersonal, multitasking, and time management skills in a fast-paced environment.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Senior Consultant</h3>
              <p className="italic">Capgemini</p>
            </div>
            <div className="text-right">
              <p>Aug '21 — Sep '22</p>
              <p>Mumbai, India</p>
            </div>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>
              Experienced in end-to-end Agile Software Development, and deployment of secure, high-quality coding using
              Python, FAST APIs, RESTful APIs, and micro-services architecture.
            </li>
            <li>Oversaw end-to-end delivery of multiple projects while serving as both Scrum Master and Team Lead.</li>
            <li>
              Enhanced software quality by 25% through comprehensive automated testing scripts for cloud-based
              applications.
            </li>
            <li>
              Managed CI/CD workflows using Jenkins and GitLab, ensuring seamless deployments across dev, staging, and
              prod environments.
            </li>
            <li>
              Demonstrated strong ownership in building sustainable backend systems from scratch using C#/.NET and
              PostgreSQL, with a focus on writing clean, following coding standards, scalable, and s code for long-term
              product growth.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Software Development Senior Analyst</h3>
              <p className="italic">Accenture</p>
            </div>
            <div className="text-right">
              <p>May '15 — Dec '20</p>
              <p>Mumbai, India</p>
            </div>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>
              Engineered cloud-native application solutions, reducing infrastructure costs by 40% and improving
              application performance by 30%.
            </li>
            <li>
              Spearheaded the adoption of Azure DevOps and ECS to align with future-state architecture, decreasing
              development time by 20%.
            </li>
            <li>
              Utilized ASP.NET Core .NET Framework, Angular, JavaScript with MVC architecture, HTML, CSS, and
              distributed systems to develop scalable solutions, Software Development Life Cycle enhancing user
              engagement by 40%.
            </li>
            <li>Applied Kanban methodologies to optimize workflows, reducing project lead times by 30%.</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Software Developer</h3>
              <p className="italic">Mumbai Educational Trust</p>
            </div>
            <div className="text-right">
              <p>Aug '13 — May '15</p>
              <p>Mumbai, India</p>
            </div>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>
              Streamlined release pipelines and root cause analysis, achieving a 40% increase in successful deployments.
            </li>
            <li>
              Ensured zero-defect delivery of web applications through test automation and rigorous quality assurance
              processes.
            </li>
            <li>
              Trained Agile teams of 20 employees in Agile Scrum practices while designing Azure based solutions
              improving SLA adherence by 50%.
            </li>
            <li>
              Worked in Agile teams, closely collaborating with stakeholders to deliver business critical applications
              with innovation.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b mb-2 pb-1">EDUCATION</h2>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Masters in Software Engineering, with Cloud Computing</h3>
              <p className="italic">City University, London (GPA: Merit)</p>
            </div>
            <div className="text-right">
              <p>Jan '22 — Jan '23</p>
              <p>London, United Kingdom</p>
            </div>
          </div>
          <p className="text-sm mt-1">
            Focused on scalable systems, distributed computing, DevOps practices, and cloud infrastructure (AWS &
            Azure).
          </p>
          <p className="text-sm font-semibold mt-1">Key coursework:</p>
          <p className="text-sm">
            Cloud Architecture, Microservices, Data Structures & Algorithms, Web Application Security, and Software
            Engineering Principles.
          </p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>
              Final Year Project: Developed a cloud-native application using serverless architecture to optimize
              resource allocation in real-time.
            </li>
            <li>
              Active member of the Computing Society – participated in coding challenges, tech meetups, and cloud
              computing workshops.
            </li>
            <li>
              Balanced academic workload while working part-time as a front desk associate, demonstrating strong time
              management and communication skills.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Masters in Information Technology</h3>
              <p className="italic">Mumbai University (GPA: First Class)</p>
            </div>
            <div className="text-right">
              <p>Jan '16 — Jan '18</p>
              <p>Mumbai, India</p>
            </div>
          </div>
          <p className="text-sm mt-1">
            Completed core coursework in Data Structures, Algorithms, and Software Engineering. Participated in
            national-level coding competitions and led multiple academic projects focused on full-stack development and
            system design.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Bachelors in Information Technology</h3>
              <p className="italic">Mumbai University (GPA: First Class)</p>
            </div>
            <div className="text-right">
              <p>Jan '11 — Jan '13</p>
              <p>Mumbai, India</p>
            </div>
          </div>
          <p className="text-sm mt-1">
            Completed key coursework in Web Technologies, Software Engineering, and Database Management. Developed a
            college event management system using ASP.NET and SQL Server, SSRS enabling real-time event registration and
            admin control. Participated in tech fests and coding contests to enhance practical skills.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b mb-2 pb-1">CERTIFICATIONS</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>AI 900 - Azure AI Fundamentals and Az 900-Azure Fundamentals, Microsoft</li>
          <li>Site Reliability Engineering SRE Foundation, Cambridge</li>
          <li>Financial Foundations, Wiley Edge</li>
          <li>ICAgile Certified</li>
          <li>ITIL certified</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold border-b mb-2 pb-1">PROJECTS</h2>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Prediction of Product Prices and estimated Sale time</h3>
              <p className="italic">City University, London</p>
            </div>
            <div className="text-right">
              <p>Jan '23 — Jan '23</p>
            </div>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>
              Developed AI-powered predictions using Artificial Neural Networks (ANN) and big data technologies like
              Spark Python.
            </li>
            <li>Enhanced accuracy through rigorous debugging and industry best practices.</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">'City Cloud' AWS Web application</h3>
              <p className="italic">City University, London</p>
            </div>
            <div className="text-right">
              <p>Jan '23 — Jan '23</p>
            </div>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>Designed and deployed a micro-services-based application on AWS using Kubernetes.</li>
            <li>Integrated AWS Route 53, EC2, RDS, and S3 for scalable and secure infrastructure.</li>
            <li>Automated deployments with CloudFormation and containerization techniques.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold border-b mb-2 pb-1">SKILLS</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold">Programming</p>
            <p>Python, C#, JavaScript, ASP.NET, Bash</p>
          </div>
          <div>
            <p className="font-semibold">Cloud Technologies</p>
            <p>Microsoft Azure, AWS, GCP</p>
          </div>
          <div>
            <p className="font-semibold">DevOps Tools</p>
            <p>Jenkins, Docker, Git, GitHub</p>
          </div>
          <div>
            <p className="font-semibold">Data Management</p>
            <p>SQL, PostgreSQL, NoSQL databases</p>
          </div>
          <div>
            <p className="font-semibold">Frameworks and APIs</p>
            <p>.NET Framework, FAST APIs, RESTful APIs</p>
          </div>
        </div>
      </section>
    </div>
  )
}
