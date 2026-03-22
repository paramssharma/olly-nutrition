import { useState } from 'react'

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(() => {
    try { return localStorage.getItem('cookie-consent') === 'true' }
    catch { return false }
  })

  if (accepted) return null

  const accept = () => {
    try { localStorage.setItem('cookie-consent', 'true') }
    catch { /* storage unavailable */ }
    setAccepted(true)
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-text">
        We use cookies to improve your experience and analyze site traffic.
        By continuing to browse, you agree to our use of cookies.
      </p>
      <button onClick={accept} className="cookie-accept">Accept</button>
    </div>
  )
}
