interface PageHeroProps {
  title: string
  subtitle?: string
  variant?: "about" | "features" | "careers" | "faq" | "contact" | "terms" | "privacy"
}

export function PageHero({ title, subtitle, variant = "about" }: PageHeroProps) {
  const getBackgroundElements = () => {
    switch (variant) {
      case "about":
        return (
          <>
            {/* Team/people themed elements */}
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
            <div
              className="absolute top-3/4 right-1/4 w-8 h-8 bg-white/20 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </>
        )
      case "features":
        return (
          <>
            {/* Tech/features themed elements */}
            <div
              className="absolute top-1/3 left-1/5 w-10 h-10 bg-white/20 rounded-lg rotate-45 animate-spin"
              style={{ animationDuration: "8s" }}
            ></div>
            <div
              className="absolute top-2/3 right-1/5 w-6 h-6 bg-white/20 rounded-lg rotate-45 animate-spin"
              style={{ animationDuration: "6s", animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-14 h-14 bg-white/10 rounded-lg rotate-45 animate-spin"
              style={{ animationDuration: "10s", animationDelay: "2s" }}
            ></div>
          </>
        )
      case "careers":
        return (
          <>
            {/* Growth/opportunity themed elements */}
            <div className="absolute top-1/4 right-1/4 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white/20 animate-bounce"></div>
            <div
              className="absolute top-3/4 left-1/3 w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-white/20 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </>
        )
      case "contact":
        return (
          <>
            {/* Communication themed elements */}
            <div className="absolute top-1/3 left-1/4 w-12 h-8 bg-white/20 rounded-lg animate-pulse"></div>
            <div
              className="absolute top-2/3 right-1/4 w-8 h-6 bg-white/20 rounded-lg animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </>
        )
      default:
        return (
          <>
            {/* Default elements */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            <div
              className="absolute top-3/4 right-1/4 w-6 h-6 bg-white/20 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </>
        )
    }
  }

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-purple-900 to-purple-950">
      <div className="absolute inset-0 opacity-15">{getBackgroundElements()}</div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-800/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-4 text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-pretty text-white">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
