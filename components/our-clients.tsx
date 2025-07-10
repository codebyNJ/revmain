"use client"
import { useEffect, useRef } from "react"

export default function OurClients() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-left")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="px-8 sm:px-12 lg:px-20 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="border-l-4 border-[#E65723] pl-4 py-2 opacity-0 -translate-x-8 transition-all duration-800 ease-out">
          <p className="text-base sm:text-sm lg:text-sm font-medium tracking-wide hover:tracking-wider hover:text-[#E65723] transition-all duration-300 cursor-default">
            OUR CLIENTS
          </p>
        </div>
      </div>
    </section>
  )
}
