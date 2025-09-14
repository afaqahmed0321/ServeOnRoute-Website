import { COLOR } from "@/lib/colors"
import { ChevronDown } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export default function FAQPage() {
  const faqs = [
    {
      question: "How does ServeOnRoute work?",
      answer:
        "ServeOnRoute connects customers who need deliveries with local drivers. Simply place your order through our app, get matched with a nearby driver, track your delivery in real-time, and receive your items safely.",
    },
    {
      question: "What can I get delivered?",
      answer:
        "We deliver almost anything! From documents and packages to groceries and restaurant orders. If it fits in a vehicle and is legal to transport, we can deliver it.",
    },
    {
      question: "How much does delivery cost?",
      answer:
        "Our pricing is transparent and based on distance, item size, and delivery urgency. You'll see the exact cost upfront before confirming your order, with no hidden fees.",
    },
    {
      question: "How do I track my delivery?",
      answer:
        "Once your order is accepted by a driver, you'll receive real-time GPS tracking through our app. You can see exactly where your driver is and get accurate delivery time estimates.",
    },
    {
      question: "How do I become a driver?",
      answer:
        "Sign up through our driver app, complete the verification process (including background check and vehicle inspection), and start accepting deliveries. You choose your own schedule and see pricing upfront.",
    },
    {
      question: "What are the driver requirements?",
      answer:
        "You need a valid driver's license, insurance, a reliable vehicle, and must pass our background check. You should also have a smartphone to use our driver app.",
    },
    {
      question: "How do drivers get paid?",
      answer:
        "Drivers are paid weekly via direct deposit. You keep 100% of tips, and our transparent pricing means you know exactly how much you'll earn for each delivery before accepting it.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect all payment information. We never store your full credit card details on our servers.",
    },
    {
      question: "What if something goes wrong with my delivery?",
      answer:
        "We have 24/7 customer support to help resolve any issues. If there's a problem with your delivery, contact us immediately and we'll work to make it right.",
    },
    {
      question: "Do you deliver 24/7?",
      answer:
        "Our platform operates 24/7, but delivery availability depends on driver availability in your area. Most areas have good coverage during standard business hours and evenings.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about ServeOnRoute's delivery service."
        variant="faq"
      />

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: COLOR.SMOKELIGHT }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-2xl transition-all duration-300"
                style={{ backgroundColor: COLOR.LIGHT }}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-balance pr-4" style={{ color: COLOR.DARK }}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    style={{ color: COLOR.PRIMARY }}
                    className="transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="mt-4 pt-4 border-t" style={{ borderColor: COLOR.SMOKEDARK }}>
                  <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: COLOR.DARK }}>
            Still Have Questions?
          </h2>
          <p className="text-lg leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              style={{
                backgroundColor: COLOR.PRIMARY,
                color: COLOR.LIGHT,
              }}
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
