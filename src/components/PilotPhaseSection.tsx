"use client"

import { useRef, useEffect } from "react"
import { Camera, Play, BarChart3, Eye, TrendingUp } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const PilotPhaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".pilot-item",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="pilot" ref={sectionRef} className="py-16 px-4 md:px-6 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="pilot-item inline-flex items-center space-x-2 bg-[#ea590d] text-white px-6 py-3 rounded-full mb-6">
            <Camera className="w-5 h-5" />
            <span className="font-bold">PILOT PHASE</span>
          </div>
          <h2 className="pilot-item text-3xl md:text-5xl font-black mb-6 text-[#131313]">
            A <span className="text-[#ea590d]">Breakthrough</span> Success
          </h2>
          <p className="pilot-item text-lg md:text-xl text-[#131313] max-w-3xl mx-auto mb-4 font-bold">
            7 days. 2.5% CTR. 100% Real Attention.
          </p>
          <p className="pilot-item text-base text-[#8B8B8B] max-w-4xl mx-auto">
            Our Bengaluru pilot shattered all expectations, achieving the first-ever recorded engagement rates in
            physical moving media. Custom hardware, real-time tracking, and seamless display integration — proving that
            the future of street advertising is already here.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 pilot-item">
          <div className="bg-[#ea590d] p-6 rounded-2xl shadow-md text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">2.5%</div>
            <p className="text-sm font-bold text-white mb-1">Average CTR</p>
            <p className="text-xs text-white/80">Higher than Industry Standards</p>
          </div>

          <div className="bg-[#496ca1] p-6 rounded-2xl shadow-md text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2 text-center">100%</div>
            <p className="text-sm font-bold text-white mb-1 text-center">Real Attention</p>
            <p className="text-xs text-white/80 text-center">Verified Engagement</p>
          </div>

          <div className="bg-[#ea590d] p-6 rounded-2xl shadow-md text-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-black text-white mb-2">1.2K</div>
            <p className="text-sm font-bold text-white mb-1">Loop Impressions</p>
            <p className="text-xs text-white/80">Per Day Average</p>
          </div>
        </div>

        {/* Pilot Images and Video */}
        <div className="grid md:grid-cols-2 gap-6 pilot-item">
          <div className="bg-[#496ca1] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-white">Pilot Deployment</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="aspect-square bg-white/20 rounded-xl overflow-hidden">
                <img
                  src="/1.jpg"
                  alt="Pilot deployment 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-white/20 rounded-xl overflow-hidden">
                <img
                  src="/2.jpg"
                  alt="Pilot deployment 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-white/90">
              Custom hardware integration with seamless display technology across Bengaluru's high-traffic routes
            </p>
          </div>

          <div className="bg-[#ea590d] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-white">Live action of REV in streets</h3>
            <div className="aspect-video bg-white/20 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden group cursor-pointer">
            <video
                src="/demo.mp4" // 👈 Relative path from public/
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
              </div>
            </div>
            <p className="text-sm text-white/90">
              Real-time tracking and engagement monitoring during the 7-day pilot phase in Bengaluru
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PilotPhaseSection
