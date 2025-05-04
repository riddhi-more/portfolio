"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function GeneratePDFPage() {
  const router = useRouter()

  useEffect(() => {
    // Open the resume in a new tab with print mode
    window.open("/resume?print=true", "_blank")

    // Redirect back to the resume page
    setTimeout(() => {
      router.push("/resume")
    }, 1000)
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-2xl font-bold mb-4 text-white">Preparing Resume...</h1>
        <p className="text-gray-400 mb-8">
          Opening your resume in a new tab. You can print or save it as PDF from there.
        </p>
        <p className="text-gray-500">Redirecting you back to the resume page...</p>
      </div>
    </div>
  )
}
