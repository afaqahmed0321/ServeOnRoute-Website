import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-purple-950">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Have questions or need support? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <Card className="bg-white border-0 shadow-lg" style={{ backgroundColor: "white" }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center">
                      <Mail className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-800">support@serveonroute.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg" style={{ backgroundColor: "white" }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-800">+966 50 357 8548</p>
                      <p className="text-gray-800">+966 53 457 5811</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg" style={{ backgroundColor: "white" }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center">
                      <MapPin className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-800">123 Innovation Drive</p>
                      <p className="text-gray-800">Tech City, TC 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg" style={{ backgroundColor: "white" }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center">
                      <Clock className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Support Hours</h4>
                      <p className="text-gray-800">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-800">Weekend: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            <Card className="bg-white border-0 shadow-lg" style={{ backgroundColor: "white" }}>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-800 mb-1">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" className="border-purple-200 focus:border-purple-500" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-800 mb-1">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" className="border-purple-200 focus:border-purple-500" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>

                  <Button className="w-full bg-purple-800 hover:bg-purple-900 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
