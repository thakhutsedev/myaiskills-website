import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.myaiskills.co.za'),
  title: {
    default: 'myaiskills | Practical AI Skills Training',
    template: '%s | myaiskills'
  },
  description: 'Master AI skills that actually work. Practical training through cohorts, mentoring, and applied projects. Transform how you work in the AI era.',
  keywords: ['AI training', 'AI skills', 'AI course', 'ChatGPT training', 'prompt engineering', 'South Africa', 'AI cohort'],
  authors: [{ name: 'myaiskills' }],
  creator: 'myaiskills',
  publisher: 'myaiskills',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.myaiskills.co.za',
    siteName: 'myaiskills',
    title: 'myaiskills | Practical AI Skills Training',
    description: 'Master AI skills that actually work. From AI-curious to AI-capable in 4 weeks.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'myaiskills - Practical AI Skills Training',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'myaiskills | Practical AI Skills Training',
    description: 'Master AI skills that actually work. From AI-curious to AI-capable in 4 weeks.',
    images: ['/og-image.png'],
    creator: '@myaiskills',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
