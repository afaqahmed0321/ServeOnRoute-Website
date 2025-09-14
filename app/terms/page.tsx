import { COLOR } from "@/lib/colors"
import { PageHero } from "@/components/page-hero"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero title="Terms of Service" subtitle="Last updated: January 1, 2024" variant="terms" />

      {/* Terms Content */}
      <section className="py-20" style={{ backgroundColor: COLOR.SMOKELIGHT }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                By accessing and using ServeOnRoute's services, you accept and agree to be bound by the terms and
                provision of this agreement. These Terms of Service ("Terms") govern your use of the ServeOnRoute
                platform, mobile application, and related services (collectively, the "Service") operated by
                ServeOnRoute Inc. ("we," "us," or "our").
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                2. Description of Service
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                ServeOnRoute is a technology platform that connects users who need delivery services ("Customers") with
                independent contractors who provide delivery services ("Drivers"). The Service includes:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: COLOR.GREY }}>
                <li>Mobile and web applications for requesting and providing delivery services</li>
                <li>Real-time tracking and communication features</li>
                <li>Payment processing services</li>
                <li>Customer support services</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                3. User Accounts and Registration
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                To use our Service, you must create an account and provide accurate, complete, and current information.
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: COLOR.GREY }}>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring you meet the minimum age requirement (18 years or older)</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                4. Customer Terms
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                As a Customer using our delivery services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: COLOR.GREY }}>
                <li>Provide accurate pickup and delivery information</li>
                <li>Be available to receive deliveries at the specified time and location</li>
                <li>Pay all fees and charges associated with your delivery requests</li>
                <li>Not request delivery of prohibited items (illegal, hazardous, or restricted materials)</li>
                <li>Treat Drivers with respect and professionalism</li>
              </ul>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                You acknowledge that delivery times are estimates and may vary due to traffic, weather, or other
                circumstances beyond our control.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                5. Driver Terms
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                As a Driver providing delivery services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: COLOR.GREY }}>
                <li>Maintain a valid driver's license and vehicle insurance</li>
                <li>Complete background checks and vehicle inspections as required</li>
                <li>Provide delivery services in a professional and timely manner</li>
                <li>Follow all applicable traffic laws and regulations</li>
                <li>Handle items with care and deliver them safely</li>
                <li>Maintain the confidentiality of customer information</li>
              </ul>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                You acknowledge that you are an independent contractor and not an employee of ServeOnRoute.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                6. Fees and Payment
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                Our fee structure includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: COLOR.GREY }}>
                <li>Delivery fees based on distance, item size, and delivery urgency</li>
                <li>Service fees to support platform operations</li>
                <li>Optional tips for Drivers</li>
              </ul>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                All fees are displayed upfront before you confirm your order. Payment is processed automatically through
                your chosen payment method. Refunds are handled on a case-by-case basis according to our refund policy.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                7. Prohibited Uses
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                You may not use our Service to:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: COLOR.GREY }}>
                <li>Deliver illegal, hazardous, or prohibited items</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service for any commercial purpose without our written consent</li>
                <li>Harass, abuse, or harm other users</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                8. Limitation of Liability
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                ServeOnRoute's liability is limited to the maximum extent permitted by law. We are not liable for any
                indirect, incidental, special, or consequential damages arising from your use of the Service. Our total
                liability for any claim related to the Service will not exceed the amount you paid for the specific
                delivery in question.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                9. Privacy Policy
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                information when you use our Service. By using our Service, you agree to the collection and use of
                information in accordance with our Privacy Policy.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                10. Termination
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                We may terminate or suspend your account and access to the Service immediately, without prior notice,
                for any reason, including if you breach these Terms. You may also terminate your account at any time by
                contacting our customer support.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                11. Changes to Terms
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                posting the new Terms on our website and updating the "Last updated" date. Your continued use of the
                Service after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                12. Governing Law
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                These Terms are governed by and construed in accordance with the laws of Canada and the Province of
                Ontario. Any disputes arising from these Terms or your use of the Service will be subject to the
                exclusive jurisdiction of the courts of Ontario, Canada.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                13. Contact Information
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                <br />
                ServeOnRoute Inc.
                <br />
                Email: legal@serveonroute.com
                <br />
                Phone: 1-800-SERVE-ON
                <br />
                Address: 123 Delivery Street, Toronto, ON, Canada
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
