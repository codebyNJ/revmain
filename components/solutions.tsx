"use client"

import { Network, Scan, BarChart3, MapPin, Zap } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Network className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12" />,
    title: "Connected Grid",
    description: "Every screen talks to every other screen, creating a unified network across the city.",
    details: "Our interconnected system ensures seamless communication between all advertising displays.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Scan className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12" />,
    title: "Real Interactions",
    description: "QR codes that actually get scanned by real people.",
    details: "Unlike traditional advertising, our QR codes generate genuine engagement from passengers.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: <BarChart3 className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12" />,
    title: "Live Analytics",
    description: "Track every impression in real-time with detailed insights.",
    details: "Monitor your campaign performance with live data streams updated every second.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: <MapPin className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12" />,
    title: "Geo-Targeted",
    description: "Right audience, right location, right time.",
    details: "Leverage location intelligence to deliver contextually relevant ads.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

const networkNodes = [
  { id: "hub", name: "REV Hub", x: 50, y: 50, type: "hub" },
  { id: "brigade", name: "Brigade Road", x: 50, y: 20, type: "location" },
  { id: "mg", name: "MG Road", x: 20, y: 30, type: "location" },
  { id: "koramangala", name: "Koramangala", x: 65, y: 35, type: "location" },
  { id: "indiranagar", name: "Indiranagar", x: 85, y: 25, type: "location" },
  { id: "jayanagar", name: "Jayanagar", x: 35, y: 70, type: "location" },
  { id: "hsr", name: "HSR Layout", x: 80, y: 75, type: "location" },
]

const connections = [
  { from: "hub", to: "brigade", color: "#3B82F6" },
  { from: "hub", to: "mg", color: "#F97316" },
  { from: "hub", to: "koramangala", color: "#F97316" },
  { from: "hub", to: "indiranagar", color: "#3B82F6" },
  { from: "hub", to: "jayanagar", color: "#F97316" },
  { from: "hub", to: "hsr", color: "#3B82F6" },
]

const NetworkVisualization = () => {
  const getNodePosition = useCallback((nodeId: string) => {
    const node = networkNodes.find((n) => n.id === nodeId)
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 }
  }, [])

  return (
    <div className="relative w-full h-full bg-white rounded-lg border shadow-sm">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
            <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#f3f4f6" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {connections.map((connection, index) => {
          const fromPos = getNodePosition(connection.from)
          const toPos = getNodePosition(connection.to)
          return (
            <line
              key={index}
              x1={`${fromPos.x}%`}
              y1={`${fromPos.y}%`}
              x2={`${toPos.x}%`}
              y2={`${toPos.y}%`}
              stroke={connection.color}
              strokeWidth="2"
              opacity="0.7"
            />
          )
        })}
      </svg>

      {networkNodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          {node.type === "hub" ? (
            <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 flex items-center justify-center shadow-md">
              <Zap className="text-white w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            </div>
          ) : (
            <div
              className={`w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full shadow-sm ${
                node.id === "mg" || node.id === "koramangala" || node.id === "jayanagar"
                  ? "bg-orange-500"
                  : "bg-blue-500"
              }`}
            />
          )}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
            <div className="bg-gray-800 text-white text-xs md:text-xs lg:text-sm px-1 md:px-1.5 lg:px-2 py-0.5 md:py-1 rounded whitespace-nowrap">
              {node.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Solutions() {
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const solutionsSection = document.getElementById("solutions")
          if (!solutionsSection) return

          const rect = solutionsSection.getBoundingClientRect()
          const sectionHeight = rect.height
          const windowHeight = window.innerHeight
          const scrolled = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)))

          const featureIndex = Math.floor(scrolled * features.length)
          setActiveFeature(Math.min(featureIndex, features.length - 1))

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="solutions" className="min-h-[150vh] md:min-h-[300vh] bg-transparent relative">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 md:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-8">
                <Network className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                The Solution
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900 px-4">
                We&apos;re building{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                  UDN
                </span>
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-3 px-4">
                India&apos;s Unified Digital Network
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 px-4">
                REV creates smart connected screens across transit systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 lg:gap-12 items-center">
              <div className="space-y-8 md:space-y-8 order-2 lg:order-1 px-2 md:px-0">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[280px] md:min-h-[300px] flex flex-col justify-center"
                >
                  <div
                    className={`inline-flex items-center p-2 md:p-3 rounded-full ${features[activeFeature].bgColor} mb-6 w-fit`}
                  >
                    <div className={features[activeFeature].color}>{features[activeFeature].icon}</div>
                  </div>

                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {features[activeFeature].title}
                  </h4>

                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed">
                    {features[activeFeature].description}
                  </p>

                  <p className="text-xs md:text-sm lg:text-base text-gray-500 leading-relaxed">
                    {features[activeFeature].details}
                  </p>

                  <div className="mt-6 flex space-x-2">
                    {features.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          index === activeFeature ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="mt-3 text-xs md:text-sm text-gray-500">
                    {activeFeature + 1} of {features.length}
                  </div>
                </motion.div>
              </div>

              <div className="h-56 md:h-64 lg:h-80 order-1 lg:order-2 px-4 md:px-0">
                <NetworkVisualization />
                <div className="mt-4 text-center">
                  <p className="text-xs md:text-sm text-gray-600">Unified Digital Network across Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
