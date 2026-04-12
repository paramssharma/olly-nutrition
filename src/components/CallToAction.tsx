import { formatPrice } from '../lib/shopify'

interface CallToActionProps {
  subscribeVariantId?: string | null
  subscribePrice?: string | null
  subscribeCompareAt?: string | null
  onAddToCart?: (variantId: string, quantity?: number) => Promise<void>
  productLoading?: boolean
}

export default function CallToAction({
  subscribeVariantId,
  subscribePrice,
  subscribeCompareAt,
  onAddToCart,
  productLoading,
}: CallToActionProps) {
  const price = subscribePrice ? formatPrice(subscribePrice) : '₹799'
  const compareAt = subscribeCompareAt ? formatPrice(subscribeCompareAt) : '₹1,199'
  const canBuy = subscribeVariantId && onAddToCart

  return (
    <section className="cta-banner" id="subscribe" aria-label="Subscribe">
      <div className="cta-banner-inner">
        <h2 className="cta-banner-headline">
          The nutrition your child deserves.<br />Starting at &#8377;26/day.
        </h2>
        <p className="cta-banner-body">
          30-day money-back guarantee. Cancel anytime. Free delivery on every subscription.
        </p>
        <div className="cta-banner-actions">
          {canBuy ? (
            <button
              className="btn-primary btn-primary-lg"
              onClick={() => onAddToCart(subscribeVariantId)}
              disabled={productLoading}
            >
              Subscribe &mdash; <span className="price-anchor price-anchor-light">{compareAt}</span> {price}/mo
              <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
            </button>
          ) : (
            <a href="#" className="btn-primary btn-primary-lg">
              Subscribe &mdash; <span className="price-anchor price-anchor-light">{compareAt}</span> {price}/mo
              <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
            </a>
          )}
        </div>
        <p className="cta-banner-trust">FSSAI Licensed &middot; GMP Certified &middot; Third-Party Lab Tested</p>
      </div>
    </section>
  )
}
