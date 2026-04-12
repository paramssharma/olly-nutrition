import { formatPrice } from '../../lib/shopify'

interface HeroProps {
  isBuyable?: boolean
  variantId?: string | null
  price?: string | null
  onAddToCart?: (variantId: string, quantity?: number) => Promise<void>
  productLoading?: boolean
}

export default function Hero({
  isBuyable,
  variantId,
  price,
  onAddToCart,
  productLoading,
}: HeroProps) {
  const canBuy = isBuyable && variantId && onAddToCart

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-meta">
              <span className="dot" aria-hidden="true"></span>
              <span>Olly / DV-01 / For Adults 18+</span>
              <span>— India</span>
            </div>

            <h1>
              The only Indian supplement built on bioavailability.
            </h1>

            <p className="hero-sub">
              Methylcobalamin, not cyanocobalamin. 5-MTHF, not folic acid. Magnesium glycinate, not oxide. Every
              nutrient, the highest-bioavailability form. Every claim, verifiable.
            </p>

            <div className="hero-ctas">
              {canBuy ? (
                <>
                  <button
                    className="btn-primary"
                    type="button"
                    onClick={() => onAddToCart(variantId)}
                    disabled={productLoading}
                  >
                    Add to Cart — {price ? formatPrice(price) : '₹899'}
                  </button>
                  <span className="btn-note">Free shipping · 30-day guarantee</span>
                </>
              ) : (
                <>
                  <button className="btn-primary" type="button">
                    Reserve Yours — ₹99
                  </button>
                  <span className="btn-note">Refundable · First batch ships Q2 2026</span>
                </>
              )}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-label">
              <span>OLLY / DV-01</span>
              <span>AMBER GLASS / 60 CT</span>
            </div>

            <img
              src="/adults-hero-product.jpg"
              alt="Olly Nutrition Vitamin D3 + K2 supplement jar"
              className="hero-product-img"
            />

            <div className="hero-visual-footer">
              <span>FSSAI · PENDING</span>
              <span>MADE IN INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
