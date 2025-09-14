import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Scale, DollarSign } from "lucide-react"

export function CareersSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Advance your career with continuous learning and development programs.",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with passionate, talented individuals who share your vision for innovation.",
    },
    {
      icon: Scale,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options to help you thrive.",
    },
    {
      icon: DollarSign,
      title: "Competitive Benefits",
      description: "Comprehensive health coverage, retirement plans, and performance bonuses.",
    },
  ]

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Join Our Mission</h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto mb-8">
            Be part of a team that's revolutionizing the delivery industry. We're always looking for talented
            individuals to join our mission.
          </p>
          <p className="text-purple-600 max-w-2xl mx-auto">
            Even if you don't see a perfect match right now, we'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={index}
                className="text-center bg-purple-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-purple-800 w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-3">Apply Now</Button>
          <Button variant="outline" className="border-purple-800 text-purple-800 hover:bg-purple-50 px-8 py-3 bg-white">
            Contact HR
          </Button>
        </div>
      </div>
    </section>
  )
}
