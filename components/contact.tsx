"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, MapPin, Send, Linkedin, Briefcase } from "lucide-react"
import ContactMap from "./contact-map"

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
          >
            {/*<h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

            <Card className="bg-gray-900/30 border-gray-800 mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="h-5 w-5 text-purple-500" />
                  <h4 className="text-lg font-medium text-white">Open to Opportunities</h4>
                </div>
                <p className="text-gray-300">
                  I'm currently open to roles in Software Development, Cloud Engineering, or Agile Leadership. Feel free
                  to reach out to discuss how I can contribute to your team's success.
                </p>
              </CardContent>
            </Card>*/}

            <div className="space-y-6 mb-8">
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

              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">London, United Kingdom</p>
                </div>
              </div>
            </div>

            <ContactMap />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
          {/*
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
