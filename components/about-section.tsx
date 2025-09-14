import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">About ServeOnRoute</h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            We're revolutionizing the delivery industry with technology-driven solutions that put people first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 bg-purple-800 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-purple-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-white">
                To create a seamless, transparent, and reliable delivery experience that connects communities and
                empowers local businesses.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-purple-800 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-purple-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
              <p className="text-white">
                To be the most trusted delivery platform that brings convenience and joy to everyday life while
                supporting local economies.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-purple-800 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-purple-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
              <p className="text-white">
                Transparency, reliability, innovation, and community-first approach guide everything we do.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-purple-50 rounded-lg p-8 shadow-sm border border-purple-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Who We Are</h3>
              <p className="text-purple-700 mb-4">
                ServeOnRoute is a team of passionate innovators, technologists, and logistics experts who believe that
                delivery should be simple, fast, and transparent.
              </p>
              <p className="text-purple-700">
                Founded with the vision of reimagining how goods move from point A to point B, we leverage cutting-edge
                technology to create solutions that benefit everyone in the delivery ecosystem.
              </p>
            </div>
            <div className="bg-purple-800 rounded-lg p-8 text-white">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-purple-200">Deliveries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-purple-200">Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-purple-200">Cities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-purple-200">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
