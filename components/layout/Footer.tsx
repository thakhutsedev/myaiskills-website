import Link from "next/link"
import { Linkedin, Youtube, Twitter } from "lucide-react"

export function Footer() {
  const navigation = {
    main: [
      { name: 'Programmes', href: '/programmes' },
      { name: 'Philosophy', href: '/philosophy' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: '#',
        icon: Linkedin,
      },
      {
        name: 'YouTube',
        href: '#',
        icon: Youtube,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
    ],
  }

  return (
    <footer className="mt-20 glass-card">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold font-display text-primary">
              myaiskills
            </Link>
            <p className="text-sm text-gray-600">
              Practical AI Skills Training
            </p>
            <p className="text-sm text-gray-600">
              Built in South Africa 🇿🇦
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@myaiskills.co.za"
                className="text-sm text-gray-600 hover:text-primary transition-colors block"
              >
                hello@myaiskills.co.za
              </a>
              <div className="flex gap-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} myaiskills. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
