import { formatPrice } from '../lib/shopify'

interface HeroProps {
  subscribeVariantId?: string | null
  subscribePrice?: string | null
  subscribeCompareAt?: string | null
  onAddToCart?: (variantId: string, quantity?: number) => Promise<void>
  productLoading?: boolean
}

export default function Hero({
  subscribeVariantId,
  subscribePrice,
  subscribeCompareAt,
  onAddToCart,
  productLoading,
}: HeroProps) {
  const price = subscribePrice ? formatPrice(subscribePrice) : '₹799'
  const compareAt = subscribeCompareAt ? formatPrice(subscribeCompareAt) : '₹1,199'
  const canBuy = subscribeVariantId && onAddToCart

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-content">
        <div className="hero-col-left">
          <div className="hero-text">
            <p className="hero-subhead">#1 Daily Nutrition</p>
            <h1 className="hero-headline">Zero sugar. Zero inactive ingredients. Zero compromise.</h1>
            <p className="hero-body">
              A children's gummy made with active, bioavailable vitamin forms<span className="hero-body-extra"> — not the synthetic versions most brands sell.</span>
            </p>
          </div>

          <div className="hero-ctas">
            {canBuy ? (
              <button
                className="btn-primary"
                onClick={() => onAddToCart(subscribeVariantId)}
                disabled={productLoading}
              >
                Subscribe — <span className="price-anchor">{compareAt}</span> {price}/mo
                <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
              </button>
            ) : (
              <a href="#subscribe" className="btn-primary">
                Subscribe — <span className="price-anchor">{compareAt}</span> {price}/mo
                <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
              </a>
            )}
            <a href="#products" className="btn-outline">See what's inside</a>
          </div>
          <p className="hero-trust">FSSAI Licensed · GMP Certified · Third-Party Lab Tested</p>
        </div>

        <div className="hero-image-wrap">
          <picture className="hero-picture">
            <source media="(max-width: 768px)" srcSet="/hero-mobile.png" />
            <img src="/hero-desktop.png" alt="Smiling girl with Olly nutrition products" className="hero-img" />
          </picture>
        </div>
      </div>
    </section>
  )
}
