import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-2xl w-full">
        <Card variant="glass-card" className="text-center">
          <CardContent className="py-16 px-6 lg:px-12">
            <h1 className="text-6xl md:text-8xl font-bold font-display text-primary mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" /> Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/programmes">
                  <ArrowLeft className="mr-2 h-4 w-4" /> View Programmes
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
