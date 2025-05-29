"use client"

import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import HeroSection from "./HeroSection"
import ProblemSection from "./ProblemSection"
import SolutionSection from "./SolutionSection"
import TechSystemSection from "./TechSystemSection"
import PricingSection from "./PricingSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import LoadingScreen from "./LoadingScreen"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Ultra smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = window.innerWidth >= 1024 ? 120 : 80 // Different heights for desktop/mobile nav
      const elementPosition = element.offsetTop - navHeight

      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: elementPosition,
          autoKill: false,
          ease: "power2.inOut",
        },
        ease: "power2.inOut",
      })
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#1a1a2e] overflow-x-hidden">
      <NavBar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ProblemSection />
      <SolutionSection />
      <TechSystemSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
