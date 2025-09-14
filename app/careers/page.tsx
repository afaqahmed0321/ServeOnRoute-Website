import { COLOR } from "@/lib/colors"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export default function CareersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Advance your career with continuous learning and development programs.",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with passionate, talented people who care about making a difference.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options to fit your lifestyle.",
    },
    {
      icon: Briefcase,
      title: "Competitive Benefits",
      description: "Comprehensive health coverage, retirement plans, and performance bonuses.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Join Our Team"
        subtitle="Help us revolutionize the delivery industry. We're looking for passionate people who want to make a real impact."
        variant="careers"
      />

      {/* CTA Button Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold rounded-xl"
            style={{
              backgroundColor: COLOR.PRIMARY,
              color: COLOR.LIGHT,
            }}
          >
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20" style={{ backgroundColor: COLOR.SMOKELIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
              Why Work With Us?
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty" style={{ color: COLOR.GREY }}>
              We believe in creating an environment where everyone can thrive and make meaningful contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="p-6 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: COLOR.SMOKEBLUE }}
                    >
                      <IconComponent size={24} style={{ color: COLOR.PRIMARY }} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-balance" style={{ color: COLOR.DARK }}>
                        {benefit.title}
                      </h3>
                      <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: COLOR.DARK }}>
            Ready to Make a Difference?
          </h2>
          <p className="text-lg leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
            We're always looking for talented individuals to join our mission. Even if you don't see a perfect match
            right now, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-xl"
              style={{
                backgroundColor: COLOR.PRIMARY,
                color: COLOR.LIGHT,
              }}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-xl bg-transparent"
              style={{
                borderColor: COLOR.PRIMARY,
                color: COLOR.PRIMARY,
              }}
            >
              Contact HR
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
