"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Create a simpler map alternative that doesn't rely on Google Maps API
    if (mapRef.current) {
      setMapLoaded(true)
    }
  }, [])

  return (
    <Card className="overflow-hidden rounded-lg border border-gray-700 h-[300px] md:h-[400px] w-full relative bg-gray-900">
      {/* Fallback map UI */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-purple-500/20 p-4 rounded-full mb-4">
          <MapPin className="h-8 w-8 text-purple-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">London, United Kingdom</h3>
        <p className="text-gray-400 max-w-md">
          Currently based in London, UK. 
          {/*Open to remote opportunities and roles in the Greater London area.*/}
        </p>

        <a
          href="https://maps.google.com/?q=London,UK"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-purple-400 hover:text-purple-300 transition-colors underline"
        >
          View on Google Maps
        </a>
      </div>

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
          <path d="M 30% 40% L 40% 30% L 50% 40% L 60% 35% L 70% 45%" stroke="#a855f7" strokeWidth="2" fill="none" />
          <path d="M 20% 60% L 30% 70% L 40% 65% L 50% 75% L 60% 60%" stroke="#a855f7" strokeWidth="2" fill="none" />
          <path d="M 40% 50% L 50% 50% L 60% 50%" stroke="#a855f7" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </Card>
  )
}
