"use client"
import { useEffect, useRef } from "react"

export default function TagLine() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-typewriter")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (textRef.current) observer.observe(textRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-8 sm:px-12 lg:px-20 py-20 lg:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          ref={textRef}
          className="text-4xl sm:text-3xl lg:text-5xl font-normal leading-tight opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:text-[#E65723] cursor-default"
        >
          <span className="hover:scale-105 inline-block transition-transform duration-300">
            The world has too many brands.
          </span>{" "}
          <span className="hover:scale-105 inline-block transition-transform duration-300 delay-100">
            We'll help you to stand at the top
          </span>
        </h2>
      </div>
    </section>
  )
}
