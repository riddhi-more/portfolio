"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import TypewriterComponent from "typewriter-effect"
import { useEffect, useState } from "react"

// Define the ShootingStar component
const ShootingStar = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute h-0.5 w-0.5 bg-white rounded-full"
      initial={{
        top: `${Math.random() * 50}%`,
        left: "0%",
        opacity: 1,
        height: "1px",
        width: "1px",
      }}
      animate={{
        top: [`${Math.random() * 50}%`, `${Math.random() * 100}%`],
        left: ["0%", "100%"],
        opacity: [0, 1, 0],
        height: ["1px", "2px", "1px"],
        width: ["1px", "80px", "1px"],
      }}
      transition={{
        duration: Math.random() * 2 + 1,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 7 + 5,
      }}
    />
  )
}

export default function Hero() {
  const [stars, setStars] = useState<number[]>([])

  useEffect(() => {
    // Create an array of 15 stars with different delays
    setStars(Array.from({ length: 15 }, (_, i) => i))
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black pt-16 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

        {/* Shooting stars */}
        {stars.map((star, index) => (
          <ShootingStar key={index} delay={index * 0.5} />
        ))}

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
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

            <div className="flex justify-center md:justify-start space-x-4 mb-8">
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

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
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

          {/* Animated image of lady working as Cloud Computing Software Engineer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block relative"
          >
            <div className="relative w-full h-[400px]">
              {/* Cloud elements */}
              <motion.div
                className="absolute top-[10%] left-[10%] w-20 h-12 bg-purple-500/20 rounded-full"
                animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-[20%] right-[20%] w-24 h-14 bg-blue-500/20 rounded-full"
                animate={{ y: [0, -15, 0], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute bottom-[30%] left-[15%] w-28 h-16 bg-indigo-500/20 rounded-full"
                animate={{ y: [0, -12, 0], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Server racks */}
              <motion.div className="absolute bottom-[10%] right-[10%] w-40 h-60 bg-gray-800/50 rounded-lg border border-gray-700 flex flex-col justify-between p-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="h-8 bg-gray-900 rounded border border-gray-700 flex items-center px-2"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(168, 85, 247, 0)",
                        "0 0 5px rgba(168, 85, 247, 0.5)",
                        "0 0 0 rgba(168, 85, 247, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                    <div className="flex-1 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-purple-500"
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Person silhouette */}
              <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Head */}
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gray-800 border-2 border-purple-500 relative"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    {/* Face features - simplified for silhouette */}
                    <div className="absolute top-6 left-4 w-12 h-3 bg-purple-500/30 rounded-full" />
                  </motion.div>

                  {/* Body */}
                  <motion.div
                    className="w-40 h-48 bg-gray-800 rounded-2xl mt-2 border-2 border-purple-500 relative overflow-hidden"
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.1 }}
                  >
                    {/* Laptop */}
                    <motion.div
                      className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-900 rounded border border-gray-700"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      {/* Screen */}
                      <div className="w-full h-16 bg-blue-500/20 rounded-t p-1">
                        {/* Code lines */}
                        <motion.div
                          className="w-full h-1 bg-purple-500/50 rounded mb-1"
                          animate={{ width: ["0%", "80%"] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                        <motion.div
                          className="w-full h-1 bg-purple-500/50 rounded mb-1"
                          animate={{ width: ["0%", "60%"] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                        />
                        <motion.div
                          className="w-full h-1 bg-purple-500/50 rounded mb-1"
                          animate={{ width: ["0%", "70%"] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                        />
                      </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute top-5 right-3 w-5 h-5 rounded-full bg-purple-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <motion.div
                      className="absolute top-12 left-3 w-4 h-4 rounded-full bg-blue-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating code elements */}
              <motion.div
                className="absolute top-[15%] left-[30%] text-xs text-purple-500 font-mono"
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                &lt;code&gt;
              </motion.div>
              <motion.div
                className="absolute top-[25%] right-[25%] text-xs text-blue-500 font-mono"
                animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                function()
              </motion.div>
              <motion.div
                className="absolute bottom-[40%] right-[40%] text-xs text-green-500 font-mono"
                animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.7 }}
              >
                AWS
              </motion.div>
              <motion.div
                className="absolute bottom-[20%] left-[35%] text-xs text-yellow-500 font-mono"
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1.2 }}
              >
                Azure
              </motion.div>
            </div>
          </motion.div>
        </div>
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
