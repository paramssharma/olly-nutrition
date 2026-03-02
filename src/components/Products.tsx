export default function Products() {
  return (
    <section className="product-feature" aria-label="Kids Daily Multivitamin Gummy">
      <div className="product-feature-content">
        <div className="hero-image-wrap">
          <div className="hero-img-bg" />
          <div className="hero-img-frame">
            <img
              src="http://localhost:3845/assets/79b4701e7aacd0a231c57953e59ad461565b6c2f.png"
              alt="Kids Daily Multivitamin Gummy"
            />
          </div>
        </div>

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
              <p className="detail-heading">The clean label:</p>
              <p className="detail-body">
                Pectin base · Zero added sugar · Fruit juice sweetened · Natural colors (beetroot, turmeric, spirulina) · No artificial flavors · Vegan
              </p>
            </div>
          </div>

          <div className="product-ctas">
            <a href="#" className="btn-primary">Subscribe — ₹799/mo →</a>
            <span className="price-alt">One-Time — ₹899</span>
          </div>
        </div>

        <div className="product-badge">
          <img
            src="http://localhost:3845/assets/2c37a9358fd2c9be7e176058349a7da4ef87cc48.svg"
            alt="Badge"
          />
        </div>
      </div>
    </section>
  )
}
