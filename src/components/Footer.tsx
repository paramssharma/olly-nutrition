const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
  </svg>
)

const navLinks = ['Adults', 'Kids', 'Our story', 'Blogs', 'Learn']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-social">
          <a href="#" className="footer-social-icon" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="footer-social-icon" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" className="footer-social-icon" aria-label="YouTube">
            <YouTubeIcon />
          </a>
        </div>

        <div className="footer-nav-col">
          {navLinks.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </div>

        <div className="footer-nav-col">
          {navLinks.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo-area">
          <img src="/olly-logo.svg" alt="olly" />
        </div>
        <p className="footer-address">Eden Au Lac Apartments, Indranagar, 560038</p>
        <a href="mailto:hello@ollyhealth.in" className="footer-email">hello@ollyhealth.in</a>
      </div>
    </footer>
  )
}
