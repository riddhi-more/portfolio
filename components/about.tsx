"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-xl overflow-hidden border-2 border-purple-500">
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-purple-500/20 rounded-full"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-purple-500/20 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Production Support Analyst (SRE) | Senior Software Engineer | Team Lead
            </h3>
            <p className="text-gray-300 mb-6">
              Dynamic and results-driven IT professional with 9+ years of diverse experience as Senior Software Engineer
              and Team Management. Specialized in managing mission-critical applications, enhancing system reliability,
              and streamlining support operations.
            </p>
            <p className="text-gray-300 mb-6">
              Proven track record in proactively resolving production issues, optimizing cloud-based solutions (Azure,
              AWS), and collaborating cross-functionally to ensure application stability and business continuity.
              Skilled team leader and communicator with a keen analytical approach and hands-on experience in
              automation, monitoring, and incident resolution.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-500">Name:</span> Riddhi More
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-500">Email:</span> riddhimore2021@gmail.com
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-500">Location:</span> London, United Kingdom
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold text-purple-500">Role:</span> Production Support Analyst
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href="/resume">
                  <Download className="mr-2 h-4 w-4" /> View Full Resume
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                onClick={() => window.print()}
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
