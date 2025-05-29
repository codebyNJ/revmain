"use client"

import { useRef, useEffect } from "react"
import { Target, AlertTriangle, TrendingDown } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Different trigger points for mobile vs desktop
    const isMobile = window.innerWidth < 768
    const triggerStart = isMobile ? "top 95%" : "top 80%"

    gsap.fromTo(
      ".problem-item",
      {
        y: isMobile ? 30 : 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: isMobile ? 0.6 : 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: triggerStart,
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="problem" ref={sectionRef} className="pt-0 pb-20 px-4 md:px-6 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="problem-item inline-flex items-center space-x-2 bg-[#ea590d] text-white px-6 py-3 rounded-full mb-8">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-bold">THE PROBLEM</span>
          </div>
          <h2 className="problem-item text-4xl md:text-6xl font-black mb-8 text-[#131313]">
            Why Indian Physical Advertising Is <span className="text-[#ea590d]">Broken</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="problem-item text-center p-8 bg-[#ea590d] rounded-3xl shadow-md">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">No Logic</h3>
            <p className="text-white/90">
              From flyover banners to wall posters — India's physical ad ecosystem has no central logic or strategy.
            </p>
          </div>

          <div className="problem-item text-center p-8 bg-[#496ca1] rounded-3xl shadow-md">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingDown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">No Metrics</h3>
            <p className="text-white/90">
              Brands spend lakhs without knowing if anyone actually saw their ads. Zero accountability.
            </p>
          </div>

          <div className="problem-item text-center p-8 bg-[#ea590d] rounded-3xl shadow-md">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">No Grid</h3>
            <p className="text-white/90">
              Disconnected, overpriced, and utterly chaotic. It's 2025 and your city's attention runs on 1997 logic.
            </p>
          </div>
        </div>

        <div className="problem-item bg-white p-12 rounded-3xl text-center shadow-md">
          <h3 className="text-3xl md:text-5xl font-black text-[#131313] mb-6">
            The street is <span className="text-[#ea590d]">waking up</span>
          </h3>
          <p className="text-xl text-[#8B8B8B] max-w-3xl mx-auto">
            India's physical advertising needs a complete overhaul. A system that's connected, verifiable, and
            intelligent.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
