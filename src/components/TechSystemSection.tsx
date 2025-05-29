"use client"

import { useRef, useEffect } from "react"
import { Cpu, BarChart3, Shield } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const TechSystemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".tech-item",
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
    <section id="tech" ref={sectionRef} className="py-20 px-4 md:px-6 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="tech-item inline-flex items-center space-x-2 bg-[#ea590d] text-white px-6 py-3 rounded-full mb-8">
            <Cpu className="w-5 h-5" />
            <span className="font-bold">TECH & SYSTEM</span>
          </div>
          <h2 className="tech-item text-4xl md:text-6xl font-black mb-8 text-[#131313]">
            Not Just Screens. A <span className="text-[#ea590d]">System</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="tech-item bg-[#496ca1] p-8 rounded-3xl shadow-md">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">GPS Tracking</h3>
            <p className="text-white/90">
              Every screen is GPS-enabled with real-time location tracking and route verification.
            </p>
          </div>

          <div className="tech-item bg-[#ea590d] p-8 rounded-3xl shadow-md">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Real-time Analytics</h3>
            <p className="text-white/90">
              Live performance metrics, engagement tracking, and transparent reporting dashboard.
            </p>
          </div>

          <div className="tech-item bg-[#496ca1] p-8 rounded-3xl shadow-md">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Verification System</h3>
            <p className="text-white/90">Blockchain-verified impressions ensure 100% authentic engagement data.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSystemSection
