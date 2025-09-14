import { COLOR } from "@/lib/colors"
import { Package, MapPin, Truck, CheckCircle, User, DollarSign, Clock, Star } from "lucide-react"

export function HowItWorksSection() {
  const customerSteps = [
    {
      icon: Package,
      title: "Place Your Order",
      description: "Select what you need delivered and provide pickup and delivery details.",
    },
    {
      icon: MapPin,
      title: "Get Matched",
      description: "Our smart system matches you with the best available driver on your route.",
    },
    {
      icon: Truck,
      title: "Track in Real-Time",
      description: "Follow your delivery every step of the way with live GPS tracking.",
    },
    {
      icon: CheckCircle,
      title: "Receive & Rate",
      description: "Get your items delivered safely and rate your experience.",
    },
  ]

  const driverSteps = [
    {
      icon: User,
      title: "Sign Up & Verify",
      description: "Complete our simple registration process and get verified to start driving.",
    },
    {
      icon: Clock,
      title: "Choose Your Schedule",
      description: "Work when you want with flexible hours that fit your lifestyle.",
    },
    {
      icon: DollarSign,
      title: "Accept Deliveries",
      description: "See transparent pricing upfront and choose deliveries that work for you.",
    },
    {
      icon: Star,
      title: "Earn & Grow",
      description: "Build your reputation, earn more, and enjoy the benefits of being a top driver.",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: COLOR.LIGHT }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800">
          <path
            d="M100,200 Q300,100 500,200 T900,200"
            stroke={COLOR.PRIMARY}
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            className="animate-pulse"
          />
          <path
            d="M100,400 Q400,300 700,400 T900,400"
            stroke={COLOR.PURPLE_LIGHT}
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M100,600 Q350,500 600,600 T900,600"
            stroke={COLOR.PURPLE_MEDIUM}
            strokeWidth="2"
            fill="none"
            strokeDasharray="12,6"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </svg>

        <div
          className="absolute top-16 left-16 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        >
          <Package size={28} style={{ color: COLOR.PRIMARY, opacity: 0.4 }} />
        </div>
        <div
          className="absolute top-32 right-32 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        >
          <Truck size={32} style={{ color: COLOR.PURPLE_LIGHT, opacity: 0.4 }} />
        </div>
        <div
          className="absolute bottom-32 left-32 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          <MapPin size={24} style={{ color: COLOR.PURPLE_MEDIUM, opacity: 0.4 }} />
        </div>
        <div
          className="absolute bottom-16 right-16 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        >
          <CheckCircle size={26} style={{ color: COLOR.PRIMARY, opacity: 0.4 }} />
        </div>

        <div
          className="absolute top-48 left-20 w-3 h-3 rounded-full animate-ping"
          style={{ backgroundColor: COLOR.PRIMARY, animationDuration: "2s" }}
        ></div>
        <div
          className="absolute top-96 left-40 w-2 h-2 rounded-full animate-ping"
          style={{ backgroundColor: COLOR.PURPLE_LIGHT, animationDuration: "3s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-48 left-60 w-4 h-4 rounded-full animate-ping"
          style={{ backgroundColor: COLOR.PURPLE_MEDIUM, animationDuration: "2.5s", animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
            How It Works
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty" style={{ color: COLOR.GREY }}>
            Simple, transparent, and efficient for both customers and drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Customers */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-balance" style={{ color: COLOR.PRIMARY }}>
                For Customers
              </h3>
              <p className="text-pretty" style={{ color: COLOR.GREY }}>
                Get anything delivered in just a few taps
              </p>
            </div>

            <div className="space-y-6">
              {customerSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: COLOR.SMOKEBLUE }}
                      >
                        <IconComponent size={24} style={{ color: COLOR.PRIMARY }} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-balance" style={{ color: COLOR.DARK }}>
                        {step.title}
                      </h4>
                      <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* For Drivers */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-balance" style={{ color: COLOR.PURPLE_LIGHT }}>
                For Drivers
              </h3>
              <p className="text-pretty" style={{ color: COLOR.GREY }}>
                Earn more with flexible schedules and transparent pricing
              </p>
            </div>

            <div className="space-y-6">
              {driverSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(120, 100, 180, 0.1)" }}
                      >
                        <IconComponent size={24} style={{ color: COLOR.PURPLE_LIGHT }} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-balance" style={{ color: COLOR.DARK }}>
                        {step.title}
                      </h4>
                      <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
