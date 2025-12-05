import Navigation from '@/components/Navigation'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Timecode from '@/components/Timecode'
import SyncMarks from '@/components/SyncMarks'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Header />
      <Projects />
      <About />
      <Footer />
      <Timecode />
      <SyncMarks />
    </main>
  )
}
