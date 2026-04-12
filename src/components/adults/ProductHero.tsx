import CapsuleCrossSection from './illustrations/CapsuleCrossSection'
import { formatPrice } from '../../lib/shopify'

interface ProductHeroProps {
  isBuyable?: boolean
  variantId?: string | null
  price?: string | null
  compareAtPrice?: string | null
  onAddToCart?: (variantId: string, quantity?: number) => Promise<void>
  productLoading?: boolean
}

export default function ProductHero({
  isBuyable,
  variantId,
  price,
  compareAtPrice,
  onAddToCart,
  productLoading,
}: ProductHeroProps) {
  const canBuy = isBuyable && variantId && onAddToCart

  return (
    <section className="product" id="product">
      <div className="container">
        <div className="section-eyebrow">The Product</div>
        <h2 className="section-h2">
          One capsule. Fourteen active forms.
        </h2>
      </div>

      <div className="container">
        <div className="product-grid">
          <div className="product-visual">
            <span className="product-visual-tag">OLLY / DV-01 / CROSS-SECTION</span>
            <CapsuleCrossSection />
            <span className="product-visual-tag-br">FIG. 01</span>
          </div>

          <div>
            <div className="product-code">OLLY · DV-01 · DAILY ESSENTIALS</div>
            <div className="product-name">Complete Multivitamin</div>
            <div className="product-tagline">For adults who read the label.</div>

            <div className="ingredients">
              <div className="ingredients-label">Active Forms · Per Capsule</div>
              <div className="ingredient-row">
                <span>
                  Vitamin B12<span className="form">Methylcobalamin</span>
                </span>
                <span className="dose">1000 MCG</span>
              </div>
              <div className="ingredient-row">
                <span>
                  Folate<span className="form">5-MTHF · Quatrefolic®</span>
                </span>
                <span className="dose">400 MCG</span>
              </div>
              <div className="ingredient-row">
                <span>
                  Vitamin D3<span className="form">Cholecalciferol</span>
                </span>
                <span className="dose">2000 IU</span>
              </div>
              <div className="ingredient-row">
                <span>
                  Vitamin K2<span className="form">MK-7 · MenaQ7®</span>
                </span>
                <span className="dose">100 MCG</span>
              </div>
              <div className="ingredient-row">
                <span>
                  Magnesium<span className="form">Bisglycinate</span>
                </span>
                <span className="dose">200 MG</span>
              </div>
              <div className="ingredient-row">
                <span>
                  Zinc<span className="form">Bisglycinate</span>
                </span>
                <span className="dose">15 MG</span>
              </div>
              <div className="ingredient-row">
                <span>
                  Iron<span className="form">Ferrous Bisglycinate</span>
                </span>
                <span className="dose">18 MG</span>
              </div>
            </div>

            <div className="product-footer">
              {canBuy ? (
                <>
                  <div>
                    <div className="price">
                      {compareAtPrice && (
                        <span className="price-was">{formatPrice(compareAtPrice)}</span>
                      )}{' '}
                      {price ? formatPrice(price) : '₹899'}<span className="per">/month</span>
                    </div>
                  </div>
                  <button
                    className="btn-primary"
                    type="button"
                    onClick={() => onAddToCart(variantId)}
                    disabled={productLoading}
                  >
                    Add to Cart
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <div className="price">
                      ₹899<span className="per">/month</span>
                    </div>
                    <div className="price-sub">Founding Member · ₹599 first month</div>
                  </div>
                  <button className="btn-primary" type="button">
                    Reserve
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
