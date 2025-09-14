import { Button } from "@/components/ui/button"
import { Users, Car, Smartphone, Star, Heart, Zap } from "lucide-react"

export function JoinUsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Connection lines between elements */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#7c3aed", stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: "#a855f7", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path
            d="M200,150 L800,150 M200,300 L800,300 M200,450 L800,450"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
          <path
            d="M150,200 L850,400 M150,400 L850,200"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            strokeDasharray="3,3"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>

        <div
          className="absolute top-12 left-12 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        >
          <Heart size={20} className="text-purple-600" />
        </div>
        <div
          className="absolute top-20 right-20 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        >
          <Star size={18} className="text-purple-500" />
        </div>
        <div
          className="absolute bottom-20 left-20 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        >
          <Zap size={22} className="text-purple-600" />
        </div>
        <div
          className="absolute bottom-12 right-12 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
        >
          <Smartphone size={16} className="text-purple-600" />
        </div>

        <div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-600 rounded-full animate-ping opacity-10"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-12 h-12 bg-purple-500 rounded-full animate-ping opacity-10"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-600 rounded-full animate-ping opacity-10"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-14 h-14 bg-purple-600 rounded-full animate-ping opacity-10"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900">
            Join the ServeOnRoute Community
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-pretty text-gray-700">
            Whether you're looking for convenient deliveries or flexible earning opportunities, we have something for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* For Customers */}
          <div className="p-8 rounded-2xl text-center space-y-6 bg-purple-50 border border-purple-100">
            <div className="w-20 h-20 bg-purple-800 rounded-full flex items-center justify-center mx-auto">
              <Users size={40} className="text-white" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-balance text-gray-900">For Customers</h3>
              <p className="leading-relaxed text-pretty text-gray-700">
                Experience fast, reliable deliveries with transparent pricing and real-time tracking. Download our app
                and get your first delivery today.
              </p>
            </div>
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full py-4 text-lg font-semibold rounded-xl bg-purple-800 hover:bg-purple-900 text-white"
              >
                Download Customer App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full py-4 text-lg font-semibold rounded-xl bg-white border-purple-800 text-purple-800 hover:bg-purple-50"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* For Drivers */}
          <div className="p-8 rounded-2xl text-center space-y-6 bg-purple-50 border border-purple-100">
            <div className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center mx-auto">
              <Car size={40} className="text-white" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-balance text-gray-900">For Drivers</h3>
              <p className="leading-relaxed text-pretty text-gray-700">
                Earn more with flexible schedules, transparent pricing, and full control over your deliveries. Join our
                driver community today.
              </p>
            </div>
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full py-4 text-lg font-semibold rounded-xl bg-purple-700 hover:bg-purple-800 text-white"
              >
                Become a Driver
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full py-4 text-lg font-semibold rounded-xl bg-white border-purple-700 text-purple-700 hover:bg-purple-50"
              >
                Driver Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
