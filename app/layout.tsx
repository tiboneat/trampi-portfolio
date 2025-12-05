import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://trampi.vercel.app'),
  title: {
    default: 'Fabien Trampont | Directeur de Post-Production Cinéma',
    template: '%s | Fabien Trampont'
  },
  description: 'Fabien Trampont, directeur de post-production depuis 2016. Plus de 40 films et séries supervisés, sélectionnés à Cannes, Venise, Berlin, Annecy. Accompagnement artistique et technique rigoureux pour une post-production fluide et fidèle à la vision créative.',
  keywords: [
    'Fabien Trampont',
    'directeur de post-production',
    'post-production cinéma',
    'post-production film',
    'superviseur post-production',
    'post-production Paris',
    'Festival de Cannes',
    'Mostra de Venise',
    'Berlinale',
    'Festival Annecy',
    'cinéma français',
    'production audiovisuelle',
    'workflow post-production',
    'coordination post-production'
  ],
  authors: [{ name: 'Fabien Trampont', url: 'https://trampi.vercel.app' }],
  creator: 'Fabien Trampont',
  publisher: 'Fabien Trampont',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: 'https://trampi.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://trampi.vercel.app',
    siteName: 'Fabien Trampont - Directeur de Post-Production',
    title: 'Fabien Trampont | Directeur de Post-Production Cinéma',
    description: 'Directeur de post-production depuis 2016. Plus de 40 films et séries supervisés, sélectionnés dans les plus grands festivals internationaux.',
    images: [
      {
        url: '/og-image',
        width: 1200,
        height: 630,
        alt: 'Fabien Trampont - Directeur de Post-Production',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabien Trampont | Directeur de Post-Production',
    description: 'Directeur de post-production depuis 2016. Plus de 40 films et séries supervisés à Cannes, Venise, Berlin, Annecy.',
    images: ['/og-image'],
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg' },
    ],
  },
  manifest: '/manifest.json',
  category: 'entertainment',
}

// Schema.org JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fabien Trampont',
  jobTitle: 'Directeur de Post-Production',
  description: 'Directeur de post-production cinéma depuis 2016, spécialisé dans les films et séries sélectionnés en festivals internationaux.',
  url: 'https://trampi.vercel.app',
  email: 'fabien.trampont@gmail.com',
  telephone: '+33621152533',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressCountry: 'FR'
  },
  sameAs: [
    'https://www.imdb.com/fr/name/nm8268744/',
    'https://www.linkedin.com/in/fabien-trampont-43811967/'
  ],
  knowsAbout: [
    'Post-production cinématographique',
    'Supervision de films',
    'Coordination technique',
    'Workflow post-production',
    'Festivals de cinéma'
  ],
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'ESLSCA'
    },
    {
      '@type': 'Organization', 
      name: 'ADVANCIA'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" data-theme="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} font-inter antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
