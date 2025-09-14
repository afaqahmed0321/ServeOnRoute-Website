import { COLOR } from "@/lib/colors"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@serveonroute.com",
      description: "Get in touch for general inquiries",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "1-800-SERVE-ON",
      description: "Speak with our support team",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Delivery Street, Toronto, ON",
      description: "Our headquarters location",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: "24/7 Customer Support",
      description: "We're here when you need us",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Get in Touch"
        subtitle="Have questions, feedback, or need support? We'd love to hear from you."
        variant="contact"
      />

      {/* Contact Info */}
      <section className="py-20" style={{ backgroundColor: COLOR.SMOKELIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="text-center p-6 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: COLOR.SMOKEBLUE }}
                  >
                    <IconComponent size={32} style={{ color: COLOR.PRIMARY }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-balance" style={{ color: COLOR.DARK }}>
                    {info.title}
                  </h3>
                  <p className="font-medium mb-2" style={{ color: COLOR.PRIMARY }}>
                    {info.details}
                  </p>
                  <p className="text-sm text-pretty" style={{ color: COLOR.GREY }}>
                    {info.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
              Send Us a Message
            </h2>
            <p className="text-lg leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: COLOR.DARK }}>
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300"
                  style={{
                    borderColor: COLOR.SMOKEDARK,
                    backgroundColor: COLOR.LIGHT,
                    color: COLOR.DARK,
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: COLOR.DARK }}>
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300"
                  style={{
                    borderColor: COLOR.SMOKEDARK,
                    backgroundColor: COLOR.LIGHT,
                    color: COLOR.DARK,
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: COLOR.DARK }}>
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  borderColor: COLOR.SMOKEDARK,
                  backgroundColor: COLOR.LIGHT,
                  color: COLOR.DARK,
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: COLOR.DARK }}>
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  borderColor: COLOR.SMOKEDARK,
                  backgroundColor: COLOR.LIGHT,
                  color: COLOR.DARK,
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: COLOR.DARK }}>
                Message
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                style={{
                  borderColor: COLOR.SMOKEDARK,
                  backgroundColor: COLOR.LIGHT,
                  color: COLOR.DARK,
                }}
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="px-12 py-4 text-lg font-semibold rounded-xl"
                style={{
                  backgroundColor: COLOR.PRIMARY,
                  color: COLOR.LIGHT,
                }}
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
