import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CreditCard, Rocket, Leaf, Gift, Smartphone } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Track your delivery in real-time with GPS precision and get accurate ETAs.",
      benefits: ["Real-time GPS tracking", "Accurate delivery estimates", "Live driver location"],
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with bank-level security and instant processing.",
      benefits: ["Multiple payment methods", "Secure transactions", "Instant processing"],
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Optimized routes and smart logistics for the fastest possible delivery times.",
      benefits: ["Optimized routing", "Smart logistics", "Priority delivery options"],
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Carbon-neutral delivery options and sustainable packaging choices.",
      benefits: ["Carbon-neutral options", "Sustainable packaging", "Green delivery routes"],
    },
    {
      icon: Gift,
      title: "Rewards Program",
      description: "Earn points with every order and unlock exclusive benefits and discounts.",
      benefits: ["Points on every order", "Exclusive discounts", "VIP member benefits"],
    },
    {
      icon: Smartphone,
      title: "Smart App",
      description: "Intuitive mobile app with advanced features for seamless ordering experience.",
      benefits: ["User-friendly interface", "Advanced features", "Seamless experience"],
    },
  ]

  return (
    <section id="features" className="py-20 bg-purple-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover the features that make ServeOnRoute the smartest choice for all your delivery needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: "white" }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-800 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-800 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
