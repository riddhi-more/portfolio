"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import TypewriterComponent from "typewriter-effect"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

        {/* Animated dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/50"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi There!{" "}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              className="inline-block"
            >
              👋
            </motion.span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            I&apos;m <span className="text-purple-500">Riddhi More</span>
          </h2>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-12">
            <TypewriterComponent
              options={{
                strings: [
                  "Production Support Analyst (SRE)",
                  "Senior Software Engineer",
                  "Cloud Solutions Specialist",
                  "DevOps Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <motion.a
              href="https://github.com/riddhi-more"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/riddhimor"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:riddhimore2021@gmail.com"
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8" asChild>
              <a href="#projects">
                View Work <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10 text-lg py-6 px-8"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
