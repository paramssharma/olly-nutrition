import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="adults-nav">
      <div className="container">
        <span className="wordmark">
          Olly<sup>DV</sup>
        </span>
        <div className="nav-links">
          <a href="#science">The Science</a>
          <a href="#product">The Product</a>
          <a href="#comparison">Comparison</a>
          <a href="#journal">Journal</a>
          <Link to="/kids">For Kids →</Link>
        </div>
        <a href="#reserve" className="nav-cta">
          Reserve Yours
        </a>
      </div>
    </nav>
  )
}
