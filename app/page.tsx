import FloatingButtons from '@/components/FloatingButtons'
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import InstantSolution from '@/components/InstantSolution'
import Poojas from '@/components/Poojas'
import PlatformRatings from '@/components/PlatformRatings'
import Consultation from '@/components/Consultation'
import Testimonials from '@/components/Testimonials'
import BookCTA from '@/components/BookCTA'
import Branches from '@/components/Branches'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <FloatingButtons />
      <Ticker />
      <Navbar />
      <Hero />
      <TrustBadges />
      <About />
      <Stats />
      <Services />
      <InstantSolution />
      <Poojas />
      <PlatformRatings />
      <Consultation />
      <Testimonials />
      <BookCTA />
      <Branches />
      <Footer />
    </>
  )
}
