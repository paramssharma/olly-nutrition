// ── Social icon SVG assets ──────────────────────────────────────────────────
const vCircle    = '/social-circle.svg'
const vInstaBox  = '/social-insta-box.svg'
const vInstaDot  = '/social-insta-dot.svg'
const vInstaView = '/social-insta-view.svg'
const vFbF       = '/social-fb-f.svg'
const vFbBar     = '/social-fb-bar.svg'
const vYtCircle  = '/social-yt-circle.svg'
const vYtPlay    = '/social-yt-play.svg'
const vYtBar     = '/social-yt-bar.svg'

const imgLogo       = '/footer-logo.svg'
const imgMobileLogo = '/footer-logo-mobile.svg'

function InstagramIcon() {
  return (
    <div style={{ width: 40, height: 40, overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ position: 'relative', width: 39.024, height: 40, margin: '0 0.488px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '0.53% 0 1.91% 0' }}>
          <img src={vCircle} alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
        <div style={{ position: 'absolute', inset: '31.63% 30.63% 33.01% 33.12%' }}>
          <div style={{ position: 'absolute', inset: '-5.17%' }}>
            <img src={vInstaBox} alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: '41.38% 40.62% 42.76% 43.12%' }}>
          <div style={{ position: 'absolute', inset: '-11.53% -11.54%' }}>
            <img src={vInstaDot} alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: '37.12% 36.25% 59.23% 60%' }}>
          <img src={vInstaView} alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
      </div>
    </div>
  )
}

function FacebookIcon() {
  return (
    <div style={{ width: 40, height: 40, overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ position: 'relative', width: 39.024, height: 40, margin: '0 0.488px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '0.53% 0 1.91% 0' }}>
          <img src={vCircle} alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
        <div style={{ position: 'absolute', inset: '29.19% 28.12% 30.57% 30.62%' }}>
          <div style={{ position: 'absolute', inset: '-4.54% -4.55% -4.54% -4.54%' }}>
            <img src={vFbF} alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: '39.71% 41.72% 31.48% 47.03%' }}>
          <div style={{ position: 'absolute', inset: '-6.35% -16.67%' }}>
            <img src={vFbBar} alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function YouTubeIcon() {
  return (
    <div style={{ width: 40, height: 40, overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ position: 'relative', width: 39.024, height: 40, margin: '0 0.488px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '0.13% 0 2.31% 0' }}>
          <img src={vYtCircle} alt="" style={{ position: 'absolute', display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
        <div style={{ position: 'absolute', inset: '33.48% 28.92% 29.04% 34.16%' }}>
          <div style={{ position: 'absolute', inset: '-4.88% -5.08% -0.18% -5.08%' }}>
            <img src={vYtPlay} alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: '42.65% 39.05% 39.06% 46.07%' }}>
          <div style={{ position: 'absolute', inset: '-10% -12.6%' }}>
            <img src={vYtBar} alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

const shopLinks = ['Adults', 'Kids', 'Our Story', 'Blogs', 'Learn']
const supportLinks = ['FAQ', 'Shipping & Returns', 'Contact Us', 'Privacy Policy', 'Terms of Service']

export default function Footer() {
  return (
    <footer className="footer">

      {/* Mobile-only top bar: logo + social icons */}
      <div className="footer-mobile-topbar">
        <img src={imgMobileLogo} alt="Olly" className="footer-mobile-logo" />
        <div className="footer-social">
          <a href="#" className="footer-social-icon" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" className="footer-social-icon" aria-label="Facebook"><FacebookIcon /></a>
          <a href="#" className="footer-social-icon" aria-label="YouTube"><YouTubeIcon /></a>
        </div>
      </div>

      {/* Mobile nav links */}
      <div className="footer-mobile-nav">
        <div className="footer-mobile-nav-col">
          {shopLinks.map((link) => <a key={link} href="#">{link}</a>)}
        </div>
        <div className="footer-mobile-nav-col">
          {supportLinks.map((link) => <a key={link} href="#">{link}</a>)}
        </div>
      </div>

      {/* Desktop-only main section */}
      <div className="footer-main">
        <div className="footer-social footer-social-desktop">
          <a href="#" className="footer-social-icon" aria-label="Instagram"><InstagramIcon /></a>
          <a href="#" className="footer-social-icon" aria-label="Facebook"><FacebookIcon /></a>
          <a href="#" className="footer-social-icon" aria-label="YouTube"><YouTubeIcon /></a>
        </div>
        <div className="footer-nav-col">
          {shopLinks.map((link) => <a key={link} href="#">{link}</a>)}
        </div>
        <div className="footer-nav-col">
          {supportLinks.map((link) => <a key={link} href="#">{link}</a>)}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-logo-area">
          <img src={imgLogo} alt="Olly" width="466" height="32" />
        </div>
        <p className="footer-address">Eden Au Lac Apartments, Indranagar, 560038</p>
        <a href="mailto:hello@ollyhealth.in" className="footer-email">hello@ollyhealth.in</a>
      </div>

      <div className="footer-legal">
        <p>FSSAI Lic. No. XXXXXXXXXXXXXXXXX &middot; &copy; {new Date().getFullYear()} olly Health India Pvt. Ltd. All rights reserved.</p>
      </div>

    </footer>
  )
}
