"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Github, Mail, MapPin, Linkedin, ExternalLink } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log(formData)
    alert("Message sent successfully!")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact <span className="text-purple-500">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Left Column - Email, LinkedIn, GitHub */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a
                      href="mailto:riddhimore2021@gmail.com"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      riddhimore2021@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                    <Linkedin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/riddhimor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      linkedin.com/in/riddhimor
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                    <Github className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">GitHub</h4>
                    <a
                      href="https://github.com/riddhi-more"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      github.com/riddhi-more
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Location */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">London, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                    <ExternalLink className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Google Maps</h4>
                    <a
                      href="https://maps.google.com/?q=London,UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="overflow-hidden rounded-lg border border-gray-700 h-[300px] md:h-[400px] w-full relative bg-gray-900">
              {/* Map background effect */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Simplified map elements */}
                  <circle cx="50%" cy="50%" r="5" fill="#a855f7" />
                  <path
                    d="M 30% 40% L 40% 30% L 50% 40% L 60% 35% L 70% 45%"
                    stroke="#a855f7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 20% 60% L 30% 70% L 40% 65% L 50% 75% L 60% 60%"
                    stroke="#a855f7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path d="M 40% 50% L 50% 50% L 60% 50%" stroke="#a855f7" strokeWidth="3" fill="none" />
                </svg>
              </div>

              {/* London marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="animate-ping absolute h-8 w-8 rounded-full bg-purple-500 opacity-30"></div>
                  <div className="relative bg-purple-600 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Location label */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 px-4 py-2 rounded-full">
                <p className="text-white font-medium text-sm">London, United Kingdom</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Right side content (empty or for future use) */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
