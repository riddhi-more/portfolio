"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "C#", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "ASP.NET", level: 80 },
    { name: "Azure", level: 90 },
    { name: "AWS", level: 85 },
    { name: "Docker", level: 80 },
    { name: "PostgreSQL", level: 75 },
  ]

  const tools = ["Jenkins", "Git", "GitHub", "Docker", "Kubernetes", "Prometheus", "Grafana", "Splunk"]

  return (
    <section id="skills" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="bg-purple-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Tools & Software</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-purple-500 transition-colors"
                >
                  <span className="text-gray-300">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
