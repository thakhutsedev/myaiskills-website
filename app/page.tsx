import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Input } from "@/components/ui/Input"
import { Briefcase, Code, GraduationCap, Building, ArrowRight } from "lucide-react"

export const dynamic = 'force-static'
export const revalidate = 86400

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 text-balance">
              Master AI Skills That Actually Work
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-balance">
              Practical training to transform how you work, create, and compete in the AI era. No theory overload. Real skills. Real outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <Link href="/quiz">Take the Free AI Readiness Quiz</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/programmes">Explore Programmes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-gray-900 mb-12">
            Built for People Who Want to Do, Not Just Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Working Professionals",
                description: "Stay relevant as AI transforms your industry"
              },
              {
                icon: Code,
                title: "Developers & Tech Leaders",
                description: "Augment your skills, don't get replaced"
              },
              {
                icon: GraduationCap,
                title: "Academics & Educators",
                description: "Bring practical AI into your teaching"
              },
              {
                icon: Building,
                title: "Institutions & Teams",
                description: "Upskill your people with structured programmes"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="glass-dark" className="text-center">
            <CardContent className="py-12 px-6">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Most People Are AI-Aware, Not AI-Capable
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                You've heard of ChatGPT. You've tried it once or twice. But you're not using AI to actually get work done, create value, or solve real problems. That gap between awareness and capability is costing you time, opportunity, and confidence.
              </p>
              <p className="text-xl font-semibold mt-6">
                We close that gap.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-gray-900 mb-12">
            Four Ways to Build Real AI Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="popular">Most Popular</Badge>
                </div>
                <CardTitle>AI Foundations Cohort</CardTitle>
                <CardDescription>4 weeks from AI-curious to AI-capable</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/aifoundations">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mentoring & Guidance</CardTitle>
                <CardDescription>1:1 support for your AI journey</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">
                    Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
                <CardTitle>Applied Projects</CardTitle>
                <CardDescription>Build real AI solutions with guidance</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Training</CardTitle>
                <CardDescription>Custom programmes for organisations</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programme Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="glass-card" className="border-2 border-primary/30">
            <CardContent className="py-12 px-6 lg:px-12">
              <div className="text-center space-y-6">
                <Badge variant="popular" className="text-sm px-4 py-2">Featured Programme</Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-display">
                  AI Foundations: From Curious to Capable
                </h2>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span>4 Weeks</span>
                  <span>•</span>
                  <span>8 Live Sessions</span>
                  <span>•</span>
                  <span>Portfolio Outcomes</span>
                </div>
                <p className="text-lg text-gray-700">
                  Next cohort starts <span className="font-semibold">[PLACEHOLDER: Next cohort start date]</span>
                </p>
                <p className="text-2xl font-bold text-primary">
                  R1,500 - R2,500
                </p>
                <Button asChild size="lg">
                  <Link href="/aifoundations">Secure Your Spot</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Philosophy Preview Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-gray-900 mb-12">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Practical AI",
                description: "Skills you can use tomorrow, not theory for someday"
              },
              {
                title: "Build. Ship. Reflect.",
                description: "Every week you create something real"
              },
              {
                title: "Skills Before Tools",
                description: "Master the thinking, tools will come and go"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/philosophy">Read Our Philosophy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="text-center">
            <CardContent className="py-12 px-6">
              <p className="text-2xl font-semibold text-gray-900 mb-4">
                Join professionals building real AI skills
              </p>
              <p className="text-gray-600">
                [PLACEHOLDER: Testimonials after first cohort]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lead Magnet CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="glass-card">
            <CardContent className="py-12 px-6 lg:px-12">
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-display">
                  Not Sure Where to Start?
                </h2>
                <p className="text-lg text-gray-700">
                  Take our free 5-minute AI Readiness Quiz and get a personalised recommendation
                </p>
                <div className="max-w-md mx-auto space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                  <Button asChild size="lg" className="w-full">
                    <Link href="/quiz">Start the Quiz</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
