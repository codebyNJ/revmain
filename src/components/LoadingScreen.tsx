"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const LoadingScreen = () => {
  const loadingRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Logo animation
    tl.from(logoRef.current, {
      scale: 0,
      rotation: -180,
      duration: 1,
      ease: "back.out(1.7)",
    })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      )
      .from(
        progressRef.current,
        {
          scaleX: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3",
      )

    // Progress bar animation
    gsap.to(progressRef.current, {
      scaleX: 1,
      duration: 2,
      ease: "power2.inOut",
      delay: 0.5,
    })

    // Pulsing logo
    gsap.to(logoRef.current, {
      scale: 1.1,
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    })
  }, [])

  return (
    <div ref={loadingRef} className="fixed inset-0 bg-[#fdfbf7] flex items-center justify-center z-50">
      <div className="text-center">
        <div
          ref={logoRef}
          className="w-20 h-20 bg-[#ea590d] rounded-full flex items-center justify-center text-white font-black text-2xl mb-6 mx-auto shadow-xl"
        >
          REV
        </div>
        <div ref={textRef} className="mb-8">
          <h1 className="text-3xl font-black text-[#131313] mb-2">Movement is the New Presence</h1>
          <p className="text-[#8B8B8B] font-semibold">Initializing the future of street advertising...</p>
        </div>
        <div className="w-64 h-2 bg-[#8B8B8B]/20 rounded-full overflow-hidden mx-auto">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-[#ea590d] to-[#496ca1] rounded-full origin-left"
            style={{ transform: "scaleX(0)" }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
