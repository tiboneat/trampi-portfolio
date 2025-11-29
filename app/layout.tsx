import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Fabien Trampont | Directeur de Post-Production',
  description: 'Directeur de post-production depuis 2016. Supervision de plus de 30 films et séries sélectionnés à Cannes, Berlin, Venise, Annecy.',
  keywords: 'Fabien Trampont, directeur de post-production, cinéma, post-production, VFX, montage, films',
  authors: [{ name: 'Fabien Trampont' }],
  openGraph: {
    title: 'Fabien Trampont | Directeur de Post-Production',
    description: 'Directeur de post-production depuis 2016. Supervision de plus de 30 films et séries.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} font-inter antialiased bg-cinema-black text-white`}>
        {children}
      </body>
    </html>
  )
}

