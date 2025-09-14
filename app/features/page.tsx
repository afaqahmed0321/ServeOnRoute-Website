import { COLOR } from "@/lib/colors"
import { MapPin, CreditCard, Package, Leaf, Gift } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export default function FeaturesPage() {
  const features = [
    {
      icon: MapPin,
      title: "Live Tracking",
      description:
        "Track your delivery in real-time with GPS precision. Know exactly where your package is and when it will arrive.",
      benefits: [
        "Real-time GPS tracking",
        "Accurate delivery estimates",
        "Driver location updates",
        "Delivery notifications",
      ],
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Safe, secure, and convenient payment options with transparent pricing and no hidden fees.",
      benefits: ["Multiple payment methods", "Secure encryption", "Transparent pricing", "Digital receipts"],
    },
    {
      icon: Package,
      title: "Versatility",
      description: "From documents to groceries, we deliver anything you need, anywhere you need it.",
      benefits: [
        "Any item, any size",
        "Flexible pickup times",
        "Multiple delivery options",
        "Special handling available",
      ],
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Optimized routes and eco-conscious practices to reduce environmental impact.",
      benefits: ["Route optimization", "Carbon footprint tracking", "Green delivery options", "Sustainable practices"],
    },
    {
      icon: Gift,
      title: "Rewards Program",
      description: "Earn points with every delivery and unlock exclusive benefits and discounts.",
      benefits: ["Points for every delivery", "Exclusive discounts", "Priority support", "Special offers"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Powerful Features"
        subtitle="Discover the features that make ServeOnRoute the smartest choice for all your delivery needs."
        variant="features"
      />

      {/* Features Grid */}
      <section className="py-20" style={{ backgroundColor: COLOR.SMOKELIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: COLOR.SMOKEBLUE }}
                      >
                        <IconComponent size={32} style={{ color: COLOR.PRIMARY }} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: COLOR.DARK }}>
                        {feature.title}
                      </h2>
                    </div>
                    <p className="text-lg leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                      {feature.description}
                    </p>
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLOR.PRIMARY }} />
                          <span style={{ color: COLOR.GREYDARK }}>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div
                      className="w-full h-80 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: COLOR.LIGHTVIOLET }}
                    >
                      <IconComponent size={80} style={{ color: COLOR.PRIMARY }} />
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
