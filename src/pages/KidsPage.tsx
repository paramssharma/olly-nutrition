import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PressLogos from '../components/PressLogos'
import Problem from '../components/Problem'
import Products from '../components/Products'
import Ingredients from '../components/Ingredients'
import SocialProof from '../components/SocialProof'
import HowItWorks from '../components/HowItWorks'
import Faq from '../components/Faq'
import CallToAction from '../components/CallToAction'
import EmailCapture from '../components/EmailCapture'
import Footer from '../components/Footer'
import MobileCta from '../components/MobileCta'
import WhatsAppButton from '../components/WhatsAppButton'
import BackToTop from '../components/BackToTop'
import CookieConsent from '../components/CookieConsent'
import useShopifyProduct from '../hooks/useShopifyProduct'
import { useCart } from '../hooks/useCart'

export default function KidsPage() {
  const { product, isLoading: productLoading } = useShopifyProduct('kids-daily-multivitamin-gummy')
  const { addToCart } = useCart()

  // Extract variants
  const subscribeVariant = product?.variants.find(v => v.title.toLowerCase().includes('subscribe'))
  const onetimeVariant = product?.variants.find(v => v.title.toLowerCase().includes('one-time') || v.title.toLowerCase().includes('one time'))

  // If product has only one variant, use it for both
  const fallbackVariant = product?.variants[0]

  const shopifyProps = {
    subscribeVariantId: subscribeVariant?.id ?? fallbackVariant?.id ?? null,
    onetimeVariantId: onetimeVariant?.id ?? fallbackVariant?.id ?? null,
    subscribePrice: subscribeVariant?.price ?? fallbackVariant?.price ?? null,
    subscribeCompareAt: subscribeVariant?.compareAtPrice ?? fallbackVariant?.compareAtPrice ?? null,
    onetimePrice: onetimeVariant?.price ?? fallbackVariant?.price ?? null,
    onetimeCompareAt: onetimeVariant?.compareAtPrice ?? fallbackVariant?.compareAtPrice ?? null,
    onAddToCart: addToCart,
    productLoading,
  }

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
        <Hero {...shopifyProps} />
        <PressLogos />
        <Problem />
        <Products {...shopifyProps} />
        <Ingredients />
        <SocialProof />
        <HowItWorks />
        <Faq />
        <CallToAction {...shopifyProps} />
        <EmailCapture />
      </main>
      <Footer />
      <MobileCta {...shopifyProps} />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </>
  )
}
