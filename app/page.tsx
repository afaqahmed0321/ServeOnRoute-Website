import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { HighlightsSection } from "@/components/highlights-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CareersSection } from "@/components/careers-section"
import { ContactSection } from "@/components/contact-section"
import { JoinUsSection } from "@/components/join-us-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HighlightsSection />
      <HowItWorksSection />
      <CareersSection />
      <ContactSection />
      <JoinUsSection />
    </div>
  )
}
