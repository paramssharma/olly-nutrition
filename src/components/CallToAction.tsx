export default function CallToAction() {
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
          <a href="#" className="btn-primary btn-primary-lg">
            Subscribe &mdash; <span className="price-anchor price-anchor-light">&#8377;1,199</span> &#8377;799/mo
            <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
          </a>
        </div>
        <p className="cta-banner-trust">FSSAI Licensed &middot; GMP Certified &middot; Third-Party Lab Tested</p>
      </div>
    </section>
  )
}
