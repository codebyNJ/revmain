"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const growthLetters = ["G", "r", "o", "w", "t", "h"]
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (descriptionRef.current) observer.observe(descriptionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="px-8 sm:px-12 lg:px-20 min-h-screen lg:min-h-[70vh] flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex flex-col h-screen lg:h-auto flex-1">
        {/* Title - Centered on mobile */}
        <div className="flex-1 flex flex-col justify-center lg:justify-start lg:py-16 text-center lg:text-left">
          <div
            ref={titleRef}
            className="text-white/25 text-3xl sm:text-xl lg:text-2xl leading-tight mb-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            {/* Mobile/Tablet - Normal text */}
            <span className="font-itc text-7xl sm:text-5xl text-white block mb-4 lg:hidden hover:text-[#E65723] transition-colors duration-300">
              Growth
            </span>
            {/* Desktop - Interactive letters */}
            <span className="font-itc text-7xl text-white mb-4 hidden lg:block">
              {growthLetters.map((letter, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-500 ease-out hover:font-black hover:text-[#E65723] cursor-pointer font-normal"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="hover:text-white transition-colors duration-300 cursor-default">as a service</span>
          </div>
        </div>

        {/* Description - Pushed to bottom but with more top margin */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 pb-16 lg:pb-0 lg:mt-12 mb-8">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div
              ref={descriptionRef}
              className="border-t-2 border-gradient-to-r from-white to-transparent pt-8 lg:pt-10 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300"
            >
              <div className="text-2xl sm:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed">
                <span className="hover:text-[#E65723] transition-colors duration-300 cursor-default">
                  We are REV, an
                </span>{" "}
                <span className="font-itc text-[#E65723] text-4xl sm:text-2xl lg:text-3xl hover:scale-105 inline-block transition-transform duration-300 cursor-pointer">
                  engineering
                </span>{" "}
                <span className="hover:text-[#E65723] transition-colors duration-300 cursor-default">
                  team that helps you to solve all your software and marketing chaos.
                </span>
              </div>
              <div className="text-lg sm:text-sm lg:text-base text-white/80 hover:text-white transition-colors duration-300 cursor-default">
                Based on Bengaluru, Since 2025 AI era.
              </div>
            </div>
          </div>

          {/* Hide image on mobile, show on larger screens */}
          <div className="hidden lg:flex flex-shrink-0">
            <Image
              src="/images/talk_to_us.png"
              alt="Talk to us"
              width={128}
              height={128}
              className="w-28 h-28 animate-spin-slow hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
