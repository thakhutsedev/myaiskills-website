import Link from "next/link"
import { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ArrowRight, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: 'Programmes',
  description: 'Choose your path to AI capability. From cohorts to mentoring to custom team training.',
}

export const dynamic = 'force-static'
export const revalidate = 86400

export default function ProgrammesPage() {
  const programmes = [
    {
      title: "AI Foundations",
      status: "Available Now",
      statusVariant: "success" as const,
      duration: "4 weeks",
      audience: "General public, professionals",
      price: "R1,500 - R2,500",
      description: "Go from AI-curious to AI-capable with practical skills and portfolio outcomes",
      href: "/aifoundations",
      featured: true
    },
    {
      title: "Tech Career Shield",
      status: "Coming Q2 2026",
      statusVariant: "secondary" as const,
      duration: "4 weeks",
      audience: "Developers",
      price: "TBA",
      description: "Future-proof your developer career in the age of AI",
      href: "#",
      waitlist: true
    },
    {
      title: "BuildABot Studio",
      status: "Coming Q2 2026",
      statusVariant: "secondary" as const,
      duration: "4 weeks",
      audience: "Institutions & Teams",
      price: "TBA",
      description: "Build and deploy conversational AI for your organisation",
      href: "#",
      waitlist: true
    },
    {
      title: "AI Tools Practitioner",
      status: "Coming Q3 2026",
      statusVariant: "secondary" as const,
      duration: "4 weeks",
      audience: "Knowledge workers",
      price: "TBA",
      description: "Master Claude Code, agentic AI, and automation workflows",
      href: "#",
      waitlist: true
    },
    {
      title: "1:1 Mentoring",
      status: "Available",
      statusVariant: "success" as const,
      duration: "Flexible",
      audience: "All levels",
      price: "Custom",
      description: "Personalised guidance for your AI journey",
      href: "/contact"
    },
    {
      title: "Team Training",
      status: "Available",
      statusVariant: "success" as const,
      duration: "Custom",
      audience: "Organisations",
      price: "Custom",
      description: "Bespoke AI skills programmes for your organisation",
      href: "/contact"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900">
            Programmes
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Choose your path to AI capability
          </p>
        </div>
      </section>

      {/* Programmes Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmes.map((programme, index) => (
              <Card
                key={index}
                className={programme.featured ? "border-2 border-primary/30" : ""}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant={programme.statusVariant === "success" ? "success" : "secondary"}
                    >
                      {programme.status}
                    </Badge>
                    {programme.featured && (
                      <Badge variant="popular">Most Popular</Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{programme.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {programme.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {programme.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>Audience: {programme.audience}</span>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {programme.price}
                  </div>
                </CardContent>

                <CardFooter>
                  {programme.waitlist ? (
                    <Button variant="outline" className="w-full" disabled>
                      Join Waitlist
                    </Button>
                  ) : programme.href === "/contact" ? (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={programme.href}>
                        {programme.title.includes("Mentoring") ? "Book a Call" : "Get in Touch"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={programme.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="glass-card" className="text-center">
            <CardContent className="py-12 px-6">
              <h2 className="text-3xl font-bold font-display mb-4">
                Not sure which programme is right for you?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Take our free AI Readiness Quiz to get a personalised recommendation
              </p>
              <Button asChild size="lg">
                <Link href="/quiz">Take the Quiz</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
