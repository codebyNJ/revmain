"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ArrowRight, Rocket } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")

  const words = ["everyone", "everywhere", "everytime"]

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let currentIndex = 0
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setDisplayedText(currentWord.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentWordIndex])

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fdfbf7] px-4 pt-8 sm:pt-16 pb-4 sm:pb-16">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* iPad Mockup */}
        <div className="relative mx-auto mb-12" style={{ width: "800px", maxWidth: "95vw" }}>
          <div className="bg-[#8B8B8B] rounded-2xl sm:rounded-3xl p-2 sm:p-4 shadow-xl relative" style={{ aspectRatio: window.innerWidth >= 640 ? "5/3" : "4/3" }}>
            <div className="bg-[#131313] rounded-xl sm:rounded-2xl p-3 sm:p-6 relative h-full">
              {/* Camera */}
              <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B8B8B] rounded-full z-30"></div>
              
              {/* Screen Content */}
              <div className="bg-white rounded-xl p-3 sm:p-8 h-full relative">
                <div className="bg-[#ea590d] text-white px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold mb-3 sm:mb-6 rounded-full inline-block">
                  🚀 Live • 2.5% CTR
                </div>

                <h1 className="text-lg sm:text-3xl font-black mb-3 sm:mb-6 overflow-hidden">
                  <span className="text-[#131313]">REACH </span>
                  <span className="text-[#ea590d] inline-block" style={{ minWidth: "120px", textAlign: "left" }}>
                    {displayedText}
                    <span className="animate-pulse text-[#131313]">|</span>
                  </span>
                </h1>

                <div className="bg-[#ea590d] text-white rounded-xl p-2 sm:p-4 mb-3 sm:mb-6 shadow-lg">
                  <div className="text-lg sm:text-2xl font-black mb-1">60₹</div>
                  <div className="text-xs sm:text-sm font-bold mb-1">Per Minute</div>
                  <div className="text-xs opacity-90">Interactive • Cheapest</div>
                </div>

                <p className="text-xs sm:text-sm mb-3 sm:mb-6 font-semibold text-[#8B8B8B]">
                  Movement is the new presence
                </p>

                <button
                  className="bg-[#ea590d] text-white hover:bg-[#d14d0a] px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold rounded-full flex items-center mx-auto transition-colors"
                  onClick={() => scrollToSection("contact")}
                >
                  <Rocket className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                  Start Journey
                  <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </button>

                {/* Live indicator - Now properly inside the screen */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 z-10">
                  <div className="w-1.5 h-1.5 bg-[#ea590d] rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold">AD</span>
                </div>
              </div>
            </div>
            
            {/* Home button - Fixed positioning */}
            <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-[#8B8B8B] rounded-full border border-[#6B6B6B]"></div>
          </div>
        </div>

        {/* Context Text */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-[#131313] mb-4">
            This is how your ad looks on our <span className="text-[#ea590d]">interactive street screens</span>
          </h2>
          <p className="text-xl text-[#8B8B8B] mb-8">
            Real ads, real rides, real results — at the cheapest rates in the market
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mx-auto" style={{ width: "600px", maxWidth: "90vw" }}>
            <div className="text-center p-4 bg-[#ea590d] rounded-2xl">
              <div className="text-3xl font-black text-white mb-2">60₹</div>
              <p className="text-sm font-semibold text-white">Per Minute</p>
            </div>
            <div className="text-center p-4 bg-[#496ca1] rounded-2xl">
              <div className="text-3xl font-black text-white mb-2">2.5%</div>
              <p className="text-sm font-semibold text-white">Click Rate</p>
            </div>
            <div className="text-center p-4 bg-[#ea590d] rounded-2xl">
              <div className="text-3xl font-black text-white mb-2">100%</div>
              <p className="text-sm font-semibold text-white">Real Attention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection