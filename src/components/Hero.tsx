export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-content">
        <div className="hero-col-left">
          <div className="hero-text">
            <p className="hero-subhead">#1 Daily Nutrition</p>
            <h1 className="hero-headline">Zero sugar. Zero inactive ingredients. Zero compromise.</h1>
            <p className="hero-body">
              The only children's gummy in India with methylcobalamin, methylfolate, and K2<span className="hero-body-extra"> — the three nutrients every other brand gets wrong.</span>
            </p>
          </div>

          <div className="hero-ctas">
            <a href="#" className="btn-primary">
              Subscribe — ₹799/mo
              <img src="/arrow-icon.svg" alt="" aria-hidden="true" className="btn-arrow" />
            </a>
            <a href="#products" className="btn-outline">See what's inside</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <picture className="hero-picture">
            <source media="(max-width: 768px)" srcSet="/hero-mobile.png" />
            <img src="/hero-desktop.png" alt="Smiling girl with Olly nutrition products" className="hero-img" />
          </picture>
        </div>
      </div>
    </section>
  )
}
