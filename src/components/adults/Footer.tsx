import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="adults-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-wordmark">
              Olly<sup>DV</sup>
            </div>
            <p className="footer-tagline">
              Built on bioavailability. Made in India for adults who read the label.
            </p>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <a href="#product">DV-01 Multivitamin</a>
            <a href="#reserve">Founding Member</a>
            <Link to="/kids">Olly Kids</Link>
          </div>

          <div className="footer-col">
            <h4>Science</h4>
            <a href="#journal">The Journal</a>
            <a href="#science">Formulation Rationale</a>
            <a href="#">Advisory Board</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">WhatsApp Community</a>
          </div>
        </div>

        <div className="footer-legal">
          <span>© 2026 Olly Health Pvt Ltd · FSSAI Lic [Pending]</span>
          <span>Health Supplement · Not For Medicinal Use</span>
        </div>
      </div>
    </footer>
  )
}
