import { COLOR } from "@/lib/colors"
import { Target, Eye, Heart, Users, Shield, Zap } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description:
        "Every decision we make puts our customers and drivers at the center, ensuring the best experience for all.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear pricing, honest communication, and open processes build trust in every interaction.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our technology to make delivery faster, smarter, and more efficient.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building stronger communities by connecting people and supporting local businesses.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="About ServeOnRoute"
        subtitle="We're revolutionizing the delivery industry by creating a platform that works better for everyone - customers, drivers, and businesses alike."
        variant="about"
      />

      {/* Who We Are */}
      <section className="py-20" style={{ backgroundColor: COLOR.SMOKELIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: COLOR.DARK }}>
                Who We Are
              </h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: COLOR.GREY }}>
                <p className="text-pretty">
                  ServeOnRoute is a technology-driven delivery platform that connects customers with local drivers to
                  provide fast, reliable, and transparent delivery services. Founded with the vision of making delivery
                  accessible and fair for everyone, we've built a system that prioritizes efficiency, transparency, and
                  community.
                </p>
                <p className="text-pretty">
                  Our unique approach combines smart routing technology with flexible delivery options, ensuring that
                  customers get their items quickly while drivers have more control over their earnings and schedules.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="w-full h-96 rounded-2xl flex items-center justify-center text-6xl font-bold text-white"
                style={{ backgroundColor: COLOR.LIGHTVIOLET }}
              >
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold"
                  style={{ backgroundColor: COLOR.PRIMARY }}
                >
                  S
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Target size={48} style={{ color: COLOR.PRIMARY }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: COLOR.DARK }}>
              Our Mission
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-pretty"
              style={{ color: COLOR.GREY }}
            >
              To create a delivery ecosystem that empowers drivers with fair earnings and flexible schedules, while
              providing customers with fast, reliable, and transparent service that they can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20" style={{ backgroundColor: COLOR.SMOKELIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Eye size={48} style={{ color: COLOR.PRIMARY }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: COLOR.DARK }}>
              Our Vision
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-pretty"
              style={{ color: COLOR.GREY }}
            >
              To become the leading delivery platform that sets the standard for transparency, efficiency, and community
              impact, transforming how people think about and experience delivery services.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
              Core Values
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty" style={{ color: COLOR.GREY }}>
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: COLOR.LIGHT }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: COLOR.SMOKEBLUE }}
                    >
                      <IconComponent size={24} style={{ color: COLOR.PRIMARY }} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-balance" style={{ color: COLOR.DARK }}>
                        {value.title}
                      </h3>
                      <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
