import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PressLogos from './components/PressLogos'
import Problem from './components/Problem'
import Products from './components/Products'
import Ingredients from './components/Ingredients'
import SocialProof from './components/SocialProof'
import HowItWorks from './components/HowItWorks'
import Faq from './components/Faq'
import CallToAction from './components/CallToAction'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'
import MobileCta from './components/MobileCta'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import CookieConsent from './components/CookieConsent'

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('main > *:not(:first-child)')
    sections.forEach((el) => el.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <PressLogos />
        <Problem />
        <Products />
        <Ingredients />
        <SocialProof />
        <HowItWorks />
        <Faq />
        <CallToAction />
        <EmailCapture />
      </main>
      <Footer />
      <MobileCta />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </>
  )
}
