import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Services', href: '/services', mega: true },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
]

const serviceItems = [
  { title: 'Digital PR', desc: 'Earned media & link building at scale' },
  { title: 'Search & Growth Strategy', desc: 'Data-driven SEO & growth roadmaps' },
  { title: 'Data & Insights', desc: 'Powerful analytics & actionable reporting' },
  { title: 'Organic Social & Content', desc: 'Platform-native content that converts' },
  { title: 'Content Experience', desc: 'Immersive digital experiences & CRO' },
  { title: 'Onsite SEO', desc: 'Technical SEO & site architecture' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          <svg viewBox="0 0 120 24" className="logo-svg" aria-label="Rise at Seven">
            <text x="0" y="20" fontSize="20" fontWeight="700" fill="#111212">Rise at Seven</text>
          </svg>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className={`nav-item ${link.mega ? 'has-mega' : ''}`}
              onMouseEnter={() => link.mega && setMegaOpen(true)}
              onMouseLeave={() => link.mega && setMegaOpen(false)}
            >
              <a href={link.href} className="nav-link">
                {link.label}
                {link.mega && <span className="nav-chevron">▾</span>}
              </a>
              {link.mega && megaOpen && (
                <div className="mega-menu">
                  <div className="mega-grid">
                    {serviceItems.map((s) => (
                      <a key={s.title} href="/services" className="mega-item">
                        <span className="mega-title">{s.title}</span>
                        <span className="mega-desc">{s.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="/contact" className="nav-cta-mobile">Work With Us</a>
        </div>

        <a href="/contact" className="nav-cta">Work With Us</a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}
