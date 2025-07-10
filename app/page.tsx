import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import OurClients from "@/components/our-clients"
import WhatWeDo from "@/components/what-we-do"
import TagLine from "@/components/tag-line"
import ProcessSteps from "@/components/process-steps"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CircularCursor from "@/components/circular-cursor"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Circular Cursor */}
      <div className="hidden lg:block">
        <CircularCursor />
      </div>

      {/* Background Image */}
      <div
        className="fixed inset-0 opacity-25 pointer-events-none z-0"
        style={{
          backgroundImage: "url(/images/background.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <OurClients />
        <WhatWeDo />
        <TagLine />
        <ProcessSteps />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
