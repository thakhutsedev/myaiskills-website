import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Mail, MessageSquare, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with myaiskills. Book a call, send an email, or join our mailing list.',
}

export const dynamic = 'force-static'
export const revalidate = 86400

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900">
            Let's Talk
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Whether you're ready to join a cohort or just have questions
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Book a Call */}
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Book a Call</CardTitle>
                <CardDescription className="text-center">
                  Schedule a free 15-minute discovery call
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  [PLACEHOLDER: Calendly embed or link]
                </p>
                <Button className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Email</CardTitle>
                <CardDescription className="text-center">
                  For general enquiries
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="mailto:hello@myaiskills.co.za"
                  className="text-primary hover:text-primary-dark text-lg font-medium transition-colors"
                >
                  hello@myaiskills.co.za
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">WhatsApp</CardTitle>
                <CardDescription className="text-center">
                  Quick questions welcome
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  [PLACEHOLDER: WhatsApp number or link]
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mailing List */}
          <Card variant="glass-card">
            <CardContent className="py-12 px-6 lg:px-12">
              <div className="max-w-md mx-auto text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold font-display">
                  Join the Mailing List
                </h2>
                <p className="text-lg text-gray-700">
                  Get updates on new cohorts and AI insights
                </p>
                <p className="text-sm text-gray-600">
                  No spam, just value
                </p>
                <form className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                  <Button type="submit" size="lg" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Office Hours (Optional) */}
          <Card className="mt-12">
            <CardContent className="py-8 px-6 text-center">
              <h3 className="text-xl font-bold mb-2">Office Hours</h3>
              <p className="text-gray-600">
                Live Q&A every [PLACEHOLDER: Day] at [PLACEHOLDER: Time]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
