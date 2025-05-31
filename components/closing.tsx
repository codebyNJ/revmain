import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function Closing() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-6 md:px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-white/20 text-white/90 rounded-full text-xs md:text-sm font-medium mb-8">
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              The Future
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white px-4">
              This Is <span className="text-yellow-400">REV</span>.
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="space-y-3 mb-8 text-white px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Built in India.</p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Built to move.</p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Built to make your brand unforgettable.</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-sm md:text-base lg:text-lg px-6 md:px-8 py-4 md:py-6 rounded-md font-semibold">
              Get Started <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
