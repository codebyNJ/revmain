import { TrendingUp, Users, BarChart3, MapPin, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 md:px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation className="text-center mb-12 md:mb-12">
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-medium mb-8">
              <DollarSign className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Pricing
            </div>

            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
              <span className="text-green-600">₹999</span>
              <span className="text-gray-800">/month.</span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 px-4">
              That&apos;s <span className="text-blue-600 font-bold">0.031 paise per second</span>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-3 px-4 leading-relaxed">
              Revolutionary pricing for verified attention from{" "}
              <span className="font-semibold text-gray-800">real people, not bots.</span>
            </p>
            <p className="text-xs md:text-sm lg:text-base text-gray-500 px-4">
              Traditional screens cost ₹3,000+ with zero tracking.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 mb-12">
            <ScrollAnimation delay={0.2}>
              <Card className="border-2 border-green-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-green-600 mr-2" />
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">REV Smart Pricing</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-600">Monthly Cost</span>
                      <span className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">₹999</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-600">Per Second</span>
                      <span className="text-sm md:text-base lg:text-lg font-semibold text-blue-600">0.031p</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Users className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs md:text-sm font-medium text-gray-900">Real People</div>
                      <div className="text-xs text-green-600">Verified</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <BarChart3 className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-xs md:text-sm font-medium text-gray-900">Live Analytics</div>
                      <div className="text-xs text-green-600">Real-time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <Card className="border-2 border-blue-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full mr-2"></div>
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">Live Dashboard Preview</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-xs md:text-sm text-gray-700">Active Screen Time</span>
                      </div>
                      <span className="font-bold text-blue-600 text-sm md:text-base">18.5 hrs</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-2" />
                        <span className="text-xs md:text-sm text-gray-700">Real Interactions</span>
                      </div>
                      <span className="font-bold text-green-600 text-sm md:text-base">247 taps</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-purple-600 mr-2" />
                        <span className="text-xs md:text-sm text-gray-700">Routes Covered</span>
                      </div>
                      <span className="font-bold text-purple-600 text-sm md:text-base">15 routes</span>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs md:text-sm text-gray-600">Cost Efficiency</div>
                      <div className="text-sm md:text-base lg:text-lg font-bold text-gray-900">
                        ₹3.24 <span className="text-xs md:text-sm font-normal">per interaction</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.6}>
            <Card className="border-2 border-gray-200 bg-gray-50 mb-8">
              <CardContent className="p-6">
                <h4 className="text-sm md:text-base lg:text-lg font-bold text-gray-700 mb-4">Traditional Screens</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm md:text-base text-gray-600">Monthly Cost</span>
                      <span className="text-base md:text-lg lg:text-xl font-bold text-gray-700">₹3,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-600">Tracking</span>
                      <span className="text-red-600 font-semibold text-sm md:text-base">Zero</span>
                    </div>
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 italic">
                    No data, no verification, no ROI visibility
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.8} className="text-center">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-sm md:text-base lg:text-lg px-6 md:px-8 py-4 rounded-full">
              Pay only for verified attention from real people
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
