import { useEffect } from 'react'
import BackToTop from '../components/BackToTop'
import CookieConsent from '../components/CookieConsent'
import WhatsAppButton from '../components/WhatsAppButton'
import Header from '../components/Header'
import Hero from '../components/adults/Hero'
import DataStrip from '../components/adults/DataStrip'
import FormsSection from '../components/adults/FormsSection'
import ProductHero from '../components/adults/ProductHero'
import JarGallery from '../components/adults/JarGallery'
import ComparisonTable from '../components/adults/ComparisonTable'
import TrustArchitecture from '../components/adults/TrustArchitecture'
import JournalSection from '../components/adults/JournalSection'
import WaitlistCTA from '../components/adults/WaitlistCTA'
import Footer from '../components/Footer'
import useShopifyProduct from '../hooks/useShopifyProduct'
import { useCart } from '../hooks/useCart'
import { isProductBuyable } from '../lib/shopify'
import '../styles/adults.css'

export default function AdultsPage() {
  const { product, isLoading: productLoading } = useShopifyProduct('complete-multivitamin')
  const { addToCart } = useCart()
  const isBuyable = isProductBuyable(product)

  const primaryVariant = product?.variants.find(v => v.available) ?? product?.variants[0]

  const shopifyProps = {
    isBuyable,
    variantId: primaryVariant?.id ?? null,
    price: primaryVariant?.price ?? null,
    compareAtPrice: primaryVariant?.compareAtPrice ?? null,
    onAddToCart: addToCart,
    productLoading,
  }

  useEffect(() => {
    const sections = document.querySelectorAll('.adults-page main > *:not(:first-child)')
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
    <div className="adults-page">
      <a href="#adults-main" className="skip-link">Skip to content</a>
      <Header variant="adults" isBuyable={isBuyable} />
      <main id="adults-main">
        <Hero {...shopifyProps} />
        <DataStrip />
        <FormsSection />
        <ProductHero {...shopifyProps} />
        <JarGallery />
        <ComparisonTable />
        <TrustArchitecture />
        <JournalSection />
        <WaitlistCTA {...shopifyProps} />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </div>
  )
}
