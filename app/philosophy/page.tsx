import Link from "next/link"
import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: 'Philosophy',
  description: 'How we think about AI skills development. Our teaching approach and principles.',
}

export const dynamic = 'force-static'
export const revalidate = 86400

export default function PhilosophyPage() {
  const principles = [
    {
      title: "Practical AI",
      content: "We don't teach AI theory for its own sake. Every concept connects to something you can do. If you can't use it tomorrow, we don't include it."
    },
    {
      title: "Skills Before Tools",
      content: "Tools change. ChatGPT today, something else tomorrow. We teach the underlying skills—prompting, thinking with AI, evaluating outputs—that transfer across any tool."
    },
    {
      title: "Build. Ship. Reflect.",
      content: "You learn by doing. Every week, you create something real. You ship it. You reflect on what worked. This is how skills stick."
    },
    {
      title: "Cohorts Over Courses",
      content: "Self-paced courses have 5-10% completion rates. Our cohorts have 80%+. Why? Accountability, community, and momentum. You learn better together."
    },
    {
      title: "Transformation Over Information",
      content: "We don't measure success by videos watched. We measure it by what you can do that you couldn't do before. Portfolio outcomes. Demonstrated capability."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900">
            Our Philosophy
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            How we think about AI skills development
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {principles.map((principle, index) => (
            <Card key={index}>
              <CardContent className="py-8 px-6 lg:px-10">
                <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-4">
                  {index + 1}. {principle.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {principle.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="glass-dark" className="text-center">
            <CardContent className="py-12 px-6">
              <p className="text-2xl md:text-3xl font-bold font-display mb-8">
                If this resonates, we'd love to work with you.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/programmes">Explore Programmes</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
