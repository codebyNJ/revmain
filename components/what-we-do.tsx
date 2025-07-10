"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const services = [
  {
    name: "Software Solutions",
    image: "/images/software-solutions.png",
    description:
      "We build robust, scalable software solutions tailored to your business needs. From web applications to enterprise systems, our engineering team delivers cutting-edge technology that drives growth and efficiency.",
  },
  {
    name: "Marketing Strategy",
    image: "/images/marketing-strategy.png",
    description:
      "Strategic marketing that moves the needle. We craft data-driven campaigns, optimize your digital presence, and create compelling narratives that resonate with your target audience and drive measurable results.",
  },
  {
    name: "Brand Awareness",
    image: "/images/brand-awareness.png",
    description:
      "Transform your brand into a memorable experience. We develop comprehensive branding strategies that capture attention, build trust, and create lasting connections with your customers across all touchpoints.",
  },
]

export default function WhatWeDo() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName)
  }

  const handleServiceHover = (serviceName: string) => {
    if (!selectedService) {
      setHoveredService(serviceName)
    }
  }

  const handleServiceLeave = () => {
    if (!selectedService) {
      setHoveredService(null)
    }
  }

  const currentService = services.find((s) => s.name === selectedService)
  const displayService = currentService || services.find((s) => s.name === hoveredService)

  return (
    <section ref={sectionRef} className="px-8 sm:px-12 lg:px-20 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div
          ref={contentRef}
          className="bg-white text-black rounded-2xl lg:rounded-3xl p-8 sm:p-6 lg:p-10 opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-2xl hover:shadow-[#E65723]/10"
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Content */}
            <div className="flex-1 max-w-2xl">
              <div className="border-l-4 border-[#E65723] pl-4 py-2 mb-8 hover:border-l-8 transition-all duration-300">
                <p className="text-base sm:text-sm lg:text-sm font-medium tracking-wide hover:tracking-wider hover:text-[#E65723] transition-all duration-300 cursor-default">
                  WHAT WE DO
                </p>
              </div>

              <h2 className="text-4xl sm:text-3xl lg:text-4xl font-normal leading-tight mb-8">
                <span className="hover:text-[#E65723] transition-colors duration-300 cursor-default">We bring</span>{" "}
                <em className="font-itc not-italic hover:text-[#E65723] transition-colors duration-300 cursor-pointer">
                  Software, Engineering & Marketing
                </em>{" "}
                <strong className="font-normal hover:text-[#E65723] transition-colors duration-300 cursor-default">
                  Expertise.
                </strong>
              </h2>

              <p className="text-base sm:text-sm lg:text-sm text-gray-700 mb-10 leading-relaxed hover:text-gray-900 transition-colors duration-300 cursor-default">
                Don't waste your money on unnecessary expenses. We look your problem through new lens and provide the
                most affordable and successful solution. Explore your brand/software solution through new lens.
              </p>

              <ul className="space-y-6">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className={`text-2xl sm:text-xl lg:text-2xl cursor-pointer pb-2 relative overflow-hidden transition-all duration-500 hover:translate-x-2 ${
                      selectedService === service.name
                        ? "font-bold text-[#E65723]"
                        : hoveredService === service.name
                          ? "font-bold text-[#E65723]"
                          : "font-normal"
                    }`}
                    onMouseEnter={() => handleServiceHover(service.name)}
                    onMouseLeave={handleServiceLeave}
                    onClick={() => handleServiceClick(service.name)}
                  >
                    {service.name}
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#E65723] transition-all duration-500 ease-out ${
                        selectedService === service.name || hoveredService === service.name ? "w-full" : "w-0"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="flex-1 max-w-lg">
              <div className="rounded-xl h-80 sm:h-72 lg:h-[500px] w-full transition-all duration-500 hover:rounded-2xl hover:scale-105 bg-gray-300 relative overflow-hidden">
                {displayService ? (
                  <>
                    {/* Service-specific Background Image */}
                    <Image
                      src={displayService.image || "/placeholder.svg"}
                      alt={displayService.name}
                      fill
                      className="object-cover transition-all duration-500"
                    />

                    {/* Orange Foggy Overlay */}
                    <div className="absolute inset-0 bg-[#E65723] opacity-30 transition-all duration-500" />

                    {/* Content Overlay at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 lg:p-8">
                      <div className="text-white">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 animate-fade-in font-incomplete tracking-wide">
                          {displayService.name}
                        </h3>
                        <p className="text-sm lg:text-base leading-relaxed opacity-90 animate-fade-in delay-100 font-normal">
                          {displayService.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default Meme Image */}
                    <Image
                      src="/images/default-meme.jpg"
                      alt="REV - Your One-Stop Solution for Growth"
                      fill
                      className="object-cover transition-all duration-500"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
