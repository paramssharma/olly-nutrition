export default function MobileCta() {
  return (
    <div className="mobile-cta-bar">
      <div className="mobile-cta-inner">
        <div className="mobile-cta-price">
          <span className="mobile-cta-mrp">&#8377;1,199</span>
          <span className="mobile-cta-amount">&#8377;799</span>
          <span className="mobile-cta-period">/mo</span>
        </div>
        <a href="#subscribe" className="btn-primary mobile-cta-btn">
          Subscribe Now
          <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
        </a>
      </div>
    </div>
  )
}
