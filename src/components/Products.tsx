export default function Products() {
  return (
    <section className="product-feature" aria-label="Kids Daily Multivitamin Gummy">
      <div className="product-feature-content">
        {/* Product image — desktop: left column; mobile: below text via order CSS */}
        <div className="product-img-wrap">
          <picture>
            <source media="(max-width: 900px)" srcSet="/product-mobile-image.png" />
            <img src="/product-image.png" alt="Kids Daily Multivitamin Gummy" className="product-img" />
          </picture>
        </div>

        {/* Text content */}
        <div className="product-right">
          <h2 className="product-title">
            Kids Daily<br />Multivitamin Gummy
          </h2>

          <div className="product-details">
            <div className="product-detail-block">
              <p className="detail-heading">The active forms:</p>
              <p className="detail-body">
                Methylcobalamin B12 · 5-MTHF Methylfolate (Quatrefolic) · D3 + K2-MK7 · Zinc Bisglycinate · Vitamin C · B-Complex
              </p>
            </div>
            <div className="product-detail-block">
              <p className="detail-heading">The clean label</p>
              <p className="detail-body">
                Pectin base · Zero added sugar · Fruit juice sweetened · Natural colors (beetroot, turmeric, spirulina) · No artificial flavors · Vegan
              </p>
            </div>
          </div>

          <div className="product-ctas">
            <a href="#" className="btn-primary">
              Subscribe — ₹799/mo
              <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
            </a>
            <a href="#" className="btn-outline product-btn-onetime">One-Time — ₹899</a>
          </div>
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
