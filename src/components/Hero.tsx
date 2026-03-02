export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text">
            <p className="hero-subhead">#1 Daily Nutrition</p>
            <h1 className="hero-headline">ZERO SUGAR. ZERO INACTIVE INGREDIENTS. ZERO COMPROMISE.</h1>
            <p className="hero-body">
              Finally, a daily nutrition brand that respects your intelligence. Every ingredient listed, every dose
              justified, nothing hidden.
            </p>
          </div>

          <div className="hero-ctas">
            <a href="#" className="btn-primary">
              Subscribe — ₹799/mo
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M1 7h16M10 1l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#products" className="btn-outline">See what's inside</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-img-bg" />
          <div className="hero-img-frame">
            <img src="/hero-image.png" alt="Smiling girl holding Olly nutrition products" />
          </div>
        </div>
      </div>
    </section>
  )
}
