"use client"
import { useEffect, useRef } from "react"

const steps = [
  {
    number: "Step 1",
    title: "Discovery",
    description: "We listen to your idea's and plans. We discuss about various solutions.",
  },
  {
    number: "Step 2",
    title: "Understanding",
    description:
      "We draft a prototype for your ideas and provide a solution for your budget that align with your ethics and moral values.",
  },
  {
    number: "Step 3",
    title: "Execution",
    description: "We execute the idea and plans we made for you and provide the final production grade product.",
  },
]

export default function ProcessSteps() {
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-right")
          }
        })
      },
      { threshold: 0.3 },
    )

    stepsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-black text-white py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="space-y-20 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRefs.current[index] = el)}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-24 text-center lg:text-left opacity-0 translate-x-8 transition-all duration-800 ease-out hover:translate-x-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="lg:min-w-[200px] group">
                <p className="text-xl sm:text-lg lg:text-xl text-gray-400 mb-3 group-hover:text-[#E65723] transition-colors duration-300 cursor-default">
                  ({step.number})
                </p>
                <h3 className="text-5xl sm:text-4xl lg:text-5xl font-semibold group-hover:text-[#E65723] group-hover:scale-105 transition-all duration-300 cursor-pointer">
                  {step.title}
                </h3>
              </div>

              <div className="flex-1 max-w-lg">
                <p className="text-lg sm:text-base lg:text-lg text-gray-300 leading-relaxed hover:text-white transition-colors duration-300 cursor-default">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
