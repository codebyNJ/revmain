"use client"

import { motion } from "framer-motion"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import CultureExperience from "@/components/culture-experience"
import Solutions from "@/components/solutions"
import PilotPhase from "@/components/pilot-phase"
import Pricing from "@/components/pricing"
import Closing from "@/components/closing"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <Hero />
      <CultureExperience />
      <Solutions />
      <PilotPhase />
      <Pricing />
      <Closing />
      <Footer />
    </motion.main>
  )
}
