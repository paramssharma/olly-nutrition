import { formatPrice } from '../lib/shopify'

interface ProductsProps {
  subscribeVariantId?: string | null
  onetimeVariantId?: string | null
  subscribePrice?: string | null
  subscribeCompareAt?: string | null
  onetimePrice?: string | null
  onetimeCompareAt?: string | null
  onAddToCart?: (variantId: string, quantity?: number) => Promise<void>
  productLoading?: boolean
}

export default function Products({
  subscribeVariantId,
  onetimeVariantId,
  subscribePrice,
  subscribeCompareAt,
  onetimePrice,
  onetimeCompareAt,
  onAddToCart,
  productLoading,
}: ProductsProps) {
  const subPrice = subscribePrice ? formatPrice(subscribePrice) : '₹799'
  const subCompare = subscribeCompareAt ? formatPrice(subscribeCompareAt) : '₹1,199'
  const otPrice = onetimePrice ? formatPrice(onetimePrice) : '₹899'
  const otCompare = onetimeCompareAt ? formatPrice(onetimeCompareAt) : '₹1,099'

  const canBuySub = subscribeVariantId && onAddToCart
  const canBuyOT = onetimeVariantId && onAddToCart

  return (
    <section className="product-feature" id="products" aria-label="Kids Daily Multivitamin Gummy">
      <div className="product-feature-content">
        {/* Product image — desktop: left column; mobile: below text via order CSS */}
        <div className="product-img-wrap">
          <picture>
            <source media="(max-width: 900px)" srcSet="/product-mobile-image.png" />
            <img src="/product-image.png" alt="Kids Daily Multivitamin Gummy" className="product-img" loading="lazy" />
          </picture>
        </div>

        {/* Text content */}
        <div className="product-right">
          <h2 className="product-title">
            Kids Daily<br />Multivitamin Gummy
          </h2>
          {/* TODO: Add real rating once product has verified reviews */}

          <div className="product-details">
            <div className="product-detail-block">
              <p className="detail-heading">The active forms:</p>
              <ul className="detail-list">
                <li>Methylcobalamin B12</li>
                <li>5-MTHF Methylfolate (Quatrefolic)</li>
                <li>D3 + K2-MK7</li>
                <li>Zinc Bisglycinate</li>
                <li>Vitamin C</li>
                <li>B-Complex</li>
              </ul>
            </div>
            <div className="product-detail-block">
              <p className="detail-heading">The clean label</p>
              <ul className="detail-list">
                <li>Pectin base</li>
                <li>Zero added sugar</li>
                <li>Fruit juice sweetened</li>
                <li>Natural colors (beetroot, turmeric, spirulina)</li>
                <li>No artificial flavors</li>
                <li>Vegan</li>
              </ul>
            </div>
          </div>

          <div className="product-ctas">
            {canBuySub ? (
              <button
                className="btn-primary"
                onClick={() => onAddToCart(subscribeVariantId)}
                disabled={productLoading}
              >
                Subscribe — <span className="price-anchor">{subCompare}</span> {subPrice}/mo
                <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
              </button>
            ) : (
              <a href="#subscribe" className="btn-primary">
                Subscribe — <span className="price-anchor">{subCompare}</span> {subPrice}/mo
                <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
              </a>
            )}
            {canBuyOT ? (
              <button
                className="btn-outline product-btn-onetime"
                onClick={() => onAddToCart(onetimeVariantId)}
                disabled={productLoading}
              >
                One-Time — <span className="price-anchor">{otCompare}</span> {otPrice}
              </button>
            ) : (
              <a href="#subscribe" className="btn-outline product-btn-onetime">
                One-Time — <span className="price-anchor">{otCompare}</span> {otPrice}
              </a>
            )}
          </div>
          <p className="product-daily-price">That's just &#8377;26/day for complete nutrition.</p>
        </div>

        <div className="product-badge product-badge-desktop" aria-hidden="true">
          <img src="/badge.svg" alt="" className="badge-img" />
        </div>
        <div className="product-badge product-badge-mobile" aria-hidden="true">
          <img src="/badge-mobile.svg" alt="" className="badge-img" />
        </div>
      </div>
    </section>
  )
}
