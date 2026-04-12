import { formatPrice } from '../lib/shopify'

interface MobileCtaProps {
  subscribeVariantId?: string | null
  subscribePrice?: string | null
  subscribeCompareAt?: string | null
  onAddToCart?: (variantId: string, quantity?: number) => Promise<void>
  productLoading?: boolean
}

export default function MobileCta({
  subscribeVariantId,
  subscribePrice,
  subscribeCompareAt,
  onAddToCart,
  productLoading,
}: MobileCtaProps) {
  const price = subscribePrice ? formatPrice(subscribePrice) : '₹799'
  const compareAt = subscribeCompareAt ? formatPrice(subscribeCompareAt) : '₹1,199'
  const canBuy = subscribeVariantId && onAddToCart

  return (
    <div className="mobile-cta-bar">
      <div className="mobile-cta-inner">
        <div className="mobile-cta-price">
          <span className="mobile-cta-mrp">{compareAt}</span>
          <span className="mobile-cta-amount">{price}</span>
          <span className="mobile-cta-period">/mo</span>
        </div>
        {canBuy ? (
          <button
            className="btn-primary mobile-cta-btn"
            onClick={() => onAddToCart(subscribeVariantId)}
            disabled={productLoading}
          >
            Subscribe Now
            <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
          </button>
        ) : (
          <a href="#subscribe" className="btn-primary mobile-cta-btn">
            Subscribe Now
            <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
          </a>
        )}
      </div>
    </div>
  )
}
