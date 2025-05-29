"use client"

import { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import ProblemSection from "./components/ProblemSection"
import SolutionSection from "./components/SolutionSection"
import PilotPhaseSection from "./components/PilotPhaseSection"
import TechSystemSection from "./components/TechSystemSection"
import PricingSection from "./components/PricingSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
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
    }, 1500)

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
        },
        ease: "power2.inOut",
      })
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#131313] overflow-x-hidden">
      <NavBar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ProblemSection />
      <SolutionSection />
      <PilotPhaseSection />
      <TechSystemSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
