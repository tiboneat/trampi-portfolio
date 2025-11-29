import Navigation from '@/components/Navigation'
import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Formation from '@/components/Formation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Header />
      <Projects />
      <Experience />
      <About />
      <Formation />
      <Footer />
    </main>
  )
}

