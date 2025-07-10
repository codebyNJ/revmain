"use client"
import { useEffect, useRef } from "react"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (cardRef.current) observer.observe(cardRef.current)
    if (formRef.current) observer.observe(formRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black text-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:flex-shrink-0 lg:w-80">
            <div
              ref={cardRef}
              className="bg-white text-black rounded-xl p-8 lg:p-8 h-full flex flex-col justify-between min-h-[400px] opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-2xl hover:shadow-[#E65723]/20 hover:scale-105"
            >
              <div>
                <div className="border-l-4 border-[#E65723] pl-4 py-2 mb-8 hover:border-l-8 transition-all duration-300">
                  <p className="text-base sm:text-sm lg:text-sm font-medium tracking-wide uppercase hover:tracking-wider hover:text-[#E65723] transition-all duration-300 cursor-default">
                    Join Your Hands
                  </p>
                </div>

                <h2 className="text-4xl sm:text-3xl lg:text-4xl font-normal leading-tight mb-8">
                  <span className="hover:text-[#E65723] transition-colors duration-300 cursor-default">Ready to</span>{" "}
                  <em className="font-itc not-italic hover:text-[#E65723] hover:scale-105 inline-block transition-all duration-300 cursor-pointer">
                    Upgrade?
                  </em>
                </h2>

                <p className="text-base sm:text-sm lg:text-sm text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300 cursor-default">
                  Explore your brands and ideas true potential with REV Labs. We'll help you write a strong future for
                  you.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form
              ref={formRef}
              className="space-y-6 h-[400px] flex flex-col justify-between opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl px-5 py-4 text-base placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E65723] focus:bg-white/20 transition-all hover:bg-white/15 hover:scale-105"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl px-5 py-4 text-base placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E65723] focus:bg-white/20 transition-all hover:bg-white/15 hover:scale-105"
                />
              </div>

              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl px-5 py-4 text-base placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E65723] focus:bg-white/20 transition-all hover:bg-white/15 hover:scale-105"
              />

              <textarea
                placeholder="Description"
                rows={6}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl px-5 py-4 text-base placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-[#E65723] focus:bg-white/20 transition-all hover:bg-white/15 hover:scale-105"
              />

              <button
                type="submit"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl px-5 py-4 text-base cursor-pointer transition-all hover:bg-[#E65723] hover:border-[#E65723] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E65723] hover:shadow-lg hover:shadow-[#E65723]/30"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
