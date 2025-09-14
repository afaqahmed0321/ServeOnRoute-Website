import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-purple-950">
      {/* Animated floating elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Delivery truck animation */}
        <div className="absolute top-1/4 left-0 w-16 h-8 bg-white rounded-lg animate-pulse">
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
        </div>

        {/* Food icons floating */}
        <div
          className="absolute top-1/3 right-1/4 w-8 h-8 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-6 h-6 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-10 h-10 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Route lines */}
        <div className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-white opacity-30 transform rotate-12"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-0.5 bg-white opacity-30 transform -rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
              Delivery, Reimagined. <span className="text-yellow-300">Right on Route.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-pretty text-white">
              Fast. Reliable. Transparent. A delivery experience built for people, powered by technology.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-purple-950 hover:bg-gray-50"
            >
              Download on App Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-950"
            >
              Get it on Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
