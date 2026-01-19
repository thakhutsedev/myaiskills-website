'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Badge } from "@/components/ui/Badge"
import { ArrowRight, ArrowLeft } from "lucide-react"

type QuizStep = 'intro' | 'questions' | 'email' | 'results'
type Recommendation = 'beginner' | 'intermediate' | 'advanced'

export default function QuizPage() {
  const [step, setStep] = useState<QuizStep>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [email, setEmail] = useState('')
  const [recommendation, setRecommendation] = useState<Recommendation>('beginner')

  const questions = [
    {
      id: 0,
      question: "How often do you currently use AI tools like ChatGPT?",
      options: [
        { value: "never", label: "Never or rarely", score: 0 },
        { value: "sometimes", label: "Once or twice a month", score: 1 },
        { value: "weekly", label: "Weekly", score: 2 },
        { value: "daily", label: "Daily", score: 3 }
      ]
    },
    {
      id: 1,
      question: "How confident are you in your ability to write effective AI prompts?",
      options: [
        { value: "not_confident", label: "Not confident at all", score: 0 },
        { value: "somewhat", label: "Somewhat confident", score: 1 },
        { value: "confident", label: "Confident", score: 2 },
        { value: "very_confident", label: "Very confident", score: 3 }
      ]
    },
    {
      id: 2,
      question: "What's your main goal for learning AI skills?",
      options: [
        { value: "understand", label: "Understand what AI can do", score: 0 },
        { value: "work", label: "Use AI to improve my work", score: 1 },
        { value: "projects", label: "Build AI-powered projects", score: 2 },
        { value: "lead", label: "Lead AI initiatives in my organization", score: 3 }
      ]
    },
    {
      id: 3,
      question: "How much time can you dedicate to learning AI skills per week?",
      options: [
        { value: "1-2", label: "1-2 hours", score: 1 },
        { value: "3-5", label: "3-5 hours", score: 2 },
        { value: "6-10", label: "6-10 hours", score: 3 },
        { value: "10plus", label: "10+ hours", score: 3 }
      ]
    },
    {
      id: 4,
      question: "What's your technical background?",
      options: [
        { value: "non_technical", label: "Non-technical", score: 0 },
        { value: "some_tech", label: "Some technical experience", score: 1 },
        { value: "technical", label: "Technical professional", score: 2 },
        { value: "developer", label: "Developer or engineer", score: 3 }
      ]
    }
  ]

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setStep('email')
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateRecommendation = (): Recommendation => {
    let totalScore = 0
    questions.forEach(q => {
      const answer = answers[q.id]
      const option = q.options.find(o => o.value === answer)
      if (option) totalScore += option.score
    })

    const maxScore = questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.score)), 0)
    const percentage = (totalScore / maxScore) * 100

    if (percentage < 35) return 'beginner'
    if (percentage < 70) return 'intermediate'
    return 'advanced'
  }

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const rec = calculateRecommendation()
    setRecommendation(rec)
    setStep('results')
  }

  const getRecommendationContent = () => {
    switch (recommendation) {
      case 'beginner':
        return {
          title: "AI Foundations is perfect for you!",
          description: "You're at the beginning of your AI journey, and that's exactly where AI Foundations meets you. This 4-week cohort will take you from AI-curious to AI-capable with practical skills you can use immediately.",
          cta: "Enrol in AI Foundations",
          href: "/aifoundations"
        }
      case 'intermediate':
        return {
          title: "AI Tools Practitioner (Coming Soon)",
          description: "You have some AI experience and are ready to level up. The AI Tools Practitioner programme will help you master advanced tools like Claude Code, agentic AI, and automation workflows.",
          cta: "Join Waitlist",
          href: "/programmes"
        }
      case 'advanced':
        return {
          title: "1:1 Mentoring or Team Training",
          description: "You're already using AI effectively and need personalized guidance or team-wide implementation. Let's discuss how we can support your specific needs.",
          cta: "Book a Call",
          href: "/contact"
        }
    }
  }

  if (step === 'intro') {
    return (
      <div className="min-h-screen">
        <section className="py-20 lg:py-32 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card variant="glass-card">
              <CardContent className="py-12 px-6 lg:px-12 text-center space-y-6">
                <Badge variant="popular" className="text-sm px-4 py-2">Free Assessment</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900">
                  AI Readiness Quiz
                </h1>
                <p className="text-lg md:text-xl text-gray-700">
                  Find out where you are on your AI journey and get a personalised recommendation
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <span>5 questions</span>
                  <span>•</span>
                  <span>Takes 5 minutes</span>
                  <span>•</span>
                  <span>Personalized results</span>
                </div>
                <Button size="lg" onClick={() => setStep('questions')}>
                  Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  if (step === 'questions') {
    const question = questions[currentQuestion]
    const progress = ((currentQuestion + 1) / questions.length) * 100

    return (
      <div className="min-h-screen">
        <section className="py-20 lg:py-32 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">{question.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(question.id, option.value)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-primary/5 ${
                      answers[question.id] === option.value
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </CardContent>
              <div className="p-6 flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!answers[question.id]}
                >
                  {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  if (step === 'email') {
    return (
      <div className="min-h-screen">
        <section className="py-20 lg:py-32 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card variant="glass-card">
              <CardContent className="py-12 px-6 lg:px-12">
                <div className="max-w-md mx-auto text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold font-display">
                    One Last Step
                  </h2>
                  <p className="text-lg text-gray-700">
                    Enter your email to see your personalized recommendation
                  </p>
                  <form onSubmit={handleSubmitEmail} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" size="lg" className="w-full">
                      See My Results
                    </Button>
                  </form>
                  <p className="text-xs text-gray-500">
                    We'll never spam you. Just helpful AI insights and course updates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  // Results step
  const content = getRecommendationContent()
  return (
    <div className="min-h-screen">
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card variant="glass-dark">
            <CardContent className="py-12 px-6 lg:px-12 text-center space-y-8">
              <Badge variant="popular" className="text-sm px-4 py-2">Your Recommendation</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                {content.title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                {content.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href={content.href}>{content.cta}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/programmes">View All Programmes</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardContent className="py-8 px-6 text-center">
              <p className="text-gray-600">
                Results sent to <span className="font-semibold">{email}</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
