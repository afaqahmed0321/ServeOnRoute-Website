import { COLOR } from "@/lib/colors"
import { PageHero } from "@/components/page-hero"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero title="Privacy Policy" subtitle="Last updated: January 1, 2024" variant="privacy" />

      {/* Privacy Content */}
      <section className="py-20" style={{ backgroundColor: COLOR.SMOKELIGHT }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                1. Introduction
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                ServeOnRoute Inc. ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our delivery
                platform, mobile application, and related services (collectively, the "Service"). This policy applies to
                all users of our Service, including customers and drivers.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                2. Information We Collect
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                We collect information you provide directly to us, information we obtain automatically when you use our
                Service, and information from third-party sources.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-balance" style={{ color: COLOR.DARK }}>
                Information You Provide:
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: COLOR.GREY }}>
                <li>Account information (name, email, phone number, password)</li>
                <li>Profile information (photo, preferences, delivery instructions)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Delivery information (pickup and drop-off addresses, item descriptions)</li>
                <li>Communications with us (support requests, feedback, reviews)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-balance" style={{ color: COLOR.DARK }}>
                Information We Collect Automatically:
              </h3>
              <ul className="list-disc list-inside space-y-2" style={{ color: COLOR.GREY }}>
                <li>Location data (GPS coordinates, delivery routes)</li>
                <li>Device information (device type, operating system, unique identifiers)</li>
                <li>Usage data (app interactions, features used, time spent)</li>
                <li>Log data (IP address, browser type, access times)</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                3. How We Use Your Information
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: COLOR.GREY }}>
                <li>Provide, maintain, and improve our delivery services</li>
                <li>Process transactions and send related information</li>
                <li>Match customers with drivers and optimize delivery routes</li>
                <li>Provide real-time tracking and delivery updates</li>
                <li>Send administrative information and service notifications</li>
                <li>Respond to customer support requests</li>
                <li>Detect, prevent, and address fraud and security issues</li>
                <li>Analyze usage patterns to improve our Service</li>
                <li>Comply with legal obligations and enforce our Terms of Service</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                4. Information Sharing and Disclosure
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-3 text-balance" style={{ color: COLOR.DARK }}>
                With Other Users:
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: COLOR.GREY }}>
                <li>Customers and drivers see limited information necessary for delivery completion</li>
                <li>Names, photos, and contact information for delivery coordination</li>
                <li>Location information during active deliveries</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-balance" style={{ color: COLOR.DARK }}>
                With Service Providers:
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: COLOR.GREY }}>
                <li>Payment processors for transaction processing</li>
                <li>Cloud storage providers for data hosting</li>
                <li>Analytics providers for service improvement</li>
                <li>Customer support tools and communication platforms</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-balance" style={{ color: COLOR.DARK }}>
                For Legal Reasons:
              </h3>
              <ul className="list-disc list-inside space-y-2" style={{ color: COLOR.GREY }}>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>To investigate fraud or security issues</li>
                <li>In connection with business transfers or acquisitions</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                5. Location Information
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                Location data is essential to our Service. We collect location information to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: COLOR.GREY }}>
                <li>Match customers with nearby drivers</li>
                <li>Provide real-time tracking during deliveries</li>
                <li>Calculate accurate delivery fees and times</li>
                <li>Optimize delivery routes for efficiency</li>
              </ul>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                You can control location sharing through your device settings, but this may limit your ability to use
                certain features of our Service.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                6. Data Security
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: COLOR.GREY }}>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure payment processing through certified providers</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                7. Data Retention
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                We retain your information for as long as necessary to provide our Service and fulfill the purposes
                outlined in this Privacy Policy. We may retain certain information for longer periods as required by
                law, for safety and security purposes, or to resolve disputes. When we no longer need your information,
                we will securely delete or anonymize it.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                8. Your Rights and Choices
              </h2>
              <p className="leading-relaxed text-pretty mb-4" style={{ color: COLOR.GREY }}>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: COLOR.GREY }}>
                <li>Access: Request a copy of the personal information we hold about you</li>
                <li>Correction: Request correction of inaccurate or incomplete information</li>
                <li>Deletion: Request deletion of your personal information</li>
                <li>Portability: Request transfer of your information to another service</li>
                <li>Objection: Object to certain processing of your information</li>
                <li>Restriction: Request limitation of how we process your information</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                9. Children's Privacy
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                Our Service is not intended for children under 18 years of age. We do not knowingly collect personal
                information from children under 18. If we become aware that we have collected personal information from
                a child under 18, we will take steps to delete such information promptly.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                10. International Data Transfers
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                Your information may be transferred to and processed in countries other than your country of residence.
                These countries may have different data protection laws. When we transfer your information
                internationally, we ensure appropriate safeguards are in place to protect your privacy rights.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                11. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new Privacy Policy on our website and updating the "Last updated" date. We encourage you to
                review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: COLOR.LIGHT }}>
              <h2 className="text-2xl font-bold mb-4 text-balance" style={{ color: COLOR.DARK }}>
                12. Contact Us
              </h2>
              <p className="leading-relaxed text-pretty" style={{ color: COLOR.GREY }}>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                <br />
                <br />
                ServeOnRoute Inc.
                <br />
                Privacy Officer
                <br />
                Email: privacy@serveonroute.com
                <br />
                Phone: 1-800-SERVE-ON
                <br />
                Address: 123 Delivery Street, Toronto, ON, Canada
                <br />
                <br />
                We will respond to your inquiry within a reasonable timeframe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
