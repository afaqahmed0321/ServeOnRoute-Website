import { Rocket, Link2, Smartphone, Users } from "lucide-react"
import { COLOR } from "@/lib/colors"

export function HighlightsSection() {
  const highlights = [
    {
      icon: Rocket,
      title: "On-Demand Deliveries",
      description: "Get anything delivered in minutes.",
    },
    {
      icon: Link2,
      title: "Unique Delivery Model",
      description: "Transparent pricing & flexible routes.",
    },
    {
      icon: Smartphone,
      title: "Simple & Smart",
      description: "Track, manage, and pay seamlessly.",
    },
    {
      icon: Users,
      title: "Empowering Drivers",
      description: "More earnings, more control.",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-10 left-10 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce"
          style={{ backgroundColor: COLOR.PRIMARY, animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce"
          style={{ backgroundColor: COLOR.PURPLE_LIGHT, animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce"
          style={{ backgroundColor: COLOR.PURPLE_MEDIUM, animationDelay: "2s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-7 h-7 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce"
          style={{ backgroundColor: COLOR.PRIMARY, animationDelay: "0.5s", animationDuration: "3.5s" }}
        ></div>

        {/* Floating delivery icons */}
        <div className="absolute top-1/4 left-1/4 animate-pulse" style={{ animationDuration: "2s" }}>
          <Smartphone size={24} style={{ color: COLOR.PRIMARY, opacity: 0.3 }} />
        </div>
        <div
          className="absolute top-1/3 right-1/3 animate-pulse"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        >
          <Rocket size={20} style={{ color: COLOR.PURPLE_LIGHT, opacity: 0.3 }} />
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 animate-pulse"
          style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
        >
          <Users size={22} style={{ color: COLOR.PURPLE_MEDIUM, opacity: 0.3 }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900">Why Choose ServeOnRoute?</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty text-gray-700">
            Experience the future of delivery with our innovative platform designed for both customers and drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: COLOR.LIGHT }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: COLOR.SMOKEBLUE }}
                >
                  <IconComponent size={32} style={{ color: COLOR.PRIMARY }} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-balance" style={{ color: COLOR.DARK }}>
                  {highlight.title}
                </h3>
                <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                  {highlight.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
