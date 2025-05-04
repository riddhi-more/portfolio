"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <div className="flex space-x-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            delay: 0,
            ease: "easeInOut",
          }}
          className="w-4 h-4 rounded-full bg-purple-500"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="w-4 h-4 rounded-full bg-purple-500"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            delay: 0.4,
            ease: "easeInOut",
          }}
          className="w-4 h-4 rounded-full bg-purple-500"
        />
      </div>
      <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-purple-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
