"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import WordRotate from "@/components/ui/word-rotate"

export default function PilotPhase() {
  const [showRotate, setShowRotate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setShowRotate(true), 500)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("pilot-animation")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const results = [
    {
      value: "3%",
      label: "Average CTR",
      description: "Real engagement in Bengaluru",
    },
    {
      value: "1.4K",
      label: "Loop Impressions",
      description: "Daily reach per screen",
    },
    {
      value: "Live",
      label: "Real-time Tracking",
      description: "Every interaction tracked",
    },
  ]

  return (
    <section id="pilot" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation className="text-center mb-12 md:mb-12">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-xs md:text-sm font-medium mb-8">
              <Rocket className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Pilot Phase
            </div>

            <div
              id="pilot-animation"
              className="min-h-[80px] md:min-h-[100px] lg:min-h-[120px] flex items-center justify-center mb-8"
            >
              <div className="text-center px-4">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-4 min-h-[50px] md:min-h-[60px] lg:min-h-[80px] flex items-center justify-center leading-tight">
                  {showRotate ? (
                    <WordRotate
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-tight"
                      words={["Reach Everyone", "Reach Everywhere", "Reach Everytime"]}
                      duration={2000}
                    />
                  ) : (
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-tight">
                      REV
                    </span>
                  )}
                </div>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                  with Real deployment. Real passengers. Real results.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 mb-16">
            <ScrollAnimation delay={0.2}>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/auto-driver.jpg"
                  alt="Live deployment sample"
                  className="w-full h-40 md:h-48 lg:h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-grey-700 font-medium text-sm md:text-base">Pilot Phase Images</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <video
                  src="/images/demo.mp4"
                  className="w-full h-40 md:h-48 lg:h-64 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/video-thumbnail.jpg" // Optional thumbnail
                >
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <p className="text-grey-700 font-medium text-sm md:text-base">Live Deployment Video</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.6}>
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-8 text-center text-gray-900">
              Pilot Phase Results
            </h4>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
            {results.map((result, index) => (
              <ScrollAnimation key={index} delay={0.8 + index * 0.1}>
                <Card className="border-2 border-blue-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {result.value}
                    </div>
                    <h5 className="text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-900">{result.label}</h5>
                    <p className="text-gray-600 text-xs md:text-sm">{result.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
