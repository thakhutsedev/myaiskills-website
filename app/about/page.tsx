import Link from "next/link"
import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the founder and team behind myaiskills.',
}

export const dynamic = 'force-static'
export const revalidate = 86400

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900">
              About
            </h1>

            {/* Placeholder for founder photo */}
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-6xl font-bold">
                [PLACEHOLDER: Founder photo]
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900">
                [Founder Name]
              </h2>
              <p className="text-lg text-gray-600">
                Founder, myaiskills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="py-8 px-6 lg:px-10">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-6">
                Background
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  [PLACEHOLDER: Founder bio - Professional background, experience, and expertise]
                </p>
                <p>
                  [PLACEHOLDER: Experience with AI and technology education]
                </p>
                <p>
                  [PLACEHOLDER: Why teaching AI skills matters to you]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why I Teach This Section */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="glass-dark">
            <CardContent className="py-8 px-6 lg:px-10">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
                Why I Teach This
              </h2>
              <div className="space-y-4 text-lg text-white/90 leading-relaxed">
                <p>
                  [PLACEHOLDER: Personal statement about motivation for teaching AI skills]
                </p>
                <p>
                  [PLACEHOLDER: Vision for helping people build AI capability]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who I've Worked With Section */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="py-8 px-6 lg:px-10">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-6">
                Who I've Worked With
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  [PLACEHOLDER: Logos or text list of institutions/companies]
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Universities</li>
                  <li>Corporates</li>
                  <li>Government bodies</li>
                  <li>Tech startups</li>
                  <li>Professional associations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="py-8 px-6 lg:px-10">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-6">
                Credentials
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  [PLACEHOLDER: Relevant qualifications, certifications, and experience]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="glass-card" className="text-center">
            <CardContent className="py-12 px-6">
              <h2 className="text-3xl font-bold font-display mb-6">
                Want to work together?
              </h2>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
