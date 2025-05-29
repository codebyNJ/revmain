"use client"

import { useRef, useEffect } from "react"
import { Zap, MapPin, Smartphone } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SolutionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const networkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".solution-item",
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

    // Network visualization animation
    gsap.fromTo(
      ".network-node",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: networkRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Pulsing animation for network nodes
    gsap.to(".network-pulse", {
      scale: 1.2,
      opacity: 0.7,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    })

    // Connection lines animation
    gsap.fromTo(
      ".connection-line",
      {
        strokeDasharray: "0 100",
      },
      {
        strokeDasharray: "100 0",
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: networkRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="solution" ref={sectionRef} className="py-20 px-4 md:px-6 bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="solution-item inline-flex items-center space-x-2 bg-[#131313] text-white px-6 py-3 rounded-full mb-8">
            <Zap className="w-5 h-5" />
            <span className="font-bold">THE SOLUTION</span>
          </div>
          <h2 className="solution-item text-4xl md:text-6xl font-black mb-8 text-[#131313]">
            UDN — <span className="text-[#ea590d]">Unified Digital Network</span>
          </h2>
          <p className="solution-item text-xl text-[#8B8B8B] max-w-4xl mx-auto">
            REV is creating a connected, verifiable, intelligent media layer across India's streets.
          </p>
        </div>

        {/* Network Visualization */}
        <div
          ref={networkRef}
          className="solution-item mb-16 bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-md"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-[#131313] mb-4">Live Network Visualization</h3>
            <p className="text-[#8B8B8B]">Real-time connected screens across the city</p>
          </div>

          {/* Network Grid */}
          <div className="relative h-64 md:h-80">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" className="text-[#131313]">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              <line
                x1="20%"
                y1="30%"
                x2="40%"
                y2="20%"
                className="connection-line"
                stroke="#131313"
                strokeWidth="2"
                opacity="0.6"
              />
              <line
                x1="40%"
                y1="20%"
                x2="60%"
                y2="40%"
                className="connection-line"
                stroke="#ea590d"
                strokeWidth="2"
                opacity="0.6"
              />
              <line
                x1="60%"
                y1="40%"
                x2="80%"
                y2="25%"
                className="connection-line"
                stroke="#496ca1"
                strokeWidth="2"
                opacity="0.6"
              />
              <line
                x1="20%"
                y1="30%"
                x2="30%"
                y2="70%"
                className="connection-line"
                stroke="#ea590d"
                strokeWidth="2"
                opacity="0.6"
              />
              <line
                x1="30%"
                y1="70%"
                x2="70%"
                y2="75%"
                className="connection-line"
                stroke="#496ca1"
                strokeWidth="2"
                opacity="0.6"
              />
              <line
                x1="70%"
                y1="75%"
                x2="80%"
                y2="25%"
                className="connection-line"
                stroke="#ea590d"
                strokeWidth="2"
                opacity="0.6"
              />
            </svg>

            {/* Network Nodes */}
            <div className="absolute top-[30%] left-[20%] network-node">
              <div className="relative">
                <div className="w-4 h-4 bg-[#ea590d] rounded-full network-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-[#ea590d] rounded-full animate-ping"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-[#131313] font-semibold whitespace-nowrap">
                  MG Road
                </div>
              </div>
            </div>

            <div className="absolute top-[20%] left-[40%] network-node">
              <div className="relative">
                <div className="w-4 h-4 bg-[#496ca1] rounded-full network-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-[#496ca1] rounded-full animate-ping"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-[#131313] font-semibold whitespace-nowrap">
                  Brigade Road
                </div>
              </div>
            </div>

            <div className="absolute top-[40%] left-[60%] network-node">
              <div className="relative">
                <div className="w-4 h-4 bg-[#ea590d] rounded-full network-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-[#ea590d] rounded-full animate-ping"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-[#131313] font-semibold whitespace-nowrap">
                  Koramangala
                </div>
              </div>
            </div>

            <div className="absolute top-[25%] left-[80%] network-node">
              <div className="relative">
                <div className="w-4 h-4 bg-[#496ca1] rounded-full network-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-[#496ca1] rounded-full animate-ping"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-[#131313] font-semibold whitespace-nowrap">
                  Indiranagar
                </div>
              </div>
            </div>

            <div className="absolute top-[70%] left-[30%] network-node">
              <div className="relative">
                <div className="w-4 h-4 bg-[#ea590d] rounded-full network-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-[#ea590d] rounded-full animate-ping"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#131313] font-semibold whitespace-nowrap">
                  Jayanagar
                </div>
              </div>
            </div>

            <div className="absolute top-[75%] left-[70%] network-node">
              <div className="relative">
                <div className="w-4 h-4 bg-[#496ca1] rounded-full network-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-[#496ca1] rounded-full animate-ping"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#131313] font-semibold whitespace-nowrap">
                  HSR Layout
                </div>
              </div>
            </div>

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 network-node">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ea590d] to-[#496ca1] rounded-full network-pulse flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-[#ea590d] to-[#496ca1] rounded-full animate-ping"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#131313] font-semibold whitespace-nowrap">
                  REV Hub
                </div>
              </div>
            </div>
          </div>

          {/* Network Stats */}
          
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="solution-item">
            <div className="bg-[#496ca1] p-8 rounded-3xl h-full shadow-md">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Moving Grid</h3>
              <p className="text-white/90 mb-6">
                A network of smart, local, real-world screens — starting with auto-rickshaws. Every screen is
                GPS-tracked and verified.
              </p>
              
            </div>
          </div>

          <div className="solution-item">
            <div className="bg-[#ea590d] p-8 rounded-3xl h-full shadow-md">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Interactive Screens</h3>
              <p className="text-white/90 mb-6">
                Each screen is equipped with sensors, GPS, and connectivity. No more guessing — every impression is
                measured and verified.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
