import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          We build brands<br />
          <span className="hero-highlight">that rise above</span>
          <span className="hero-badge">the noise</span>
        </h1>
        <p className="hero-desc">
          Rise at Seven is an award-winning SEO, Digital PR &amp; Content agency.
          We help ambitious brands grow through data-driven strategies and creative campaigns.
        </p>
        <div className="hero-ctas">
          <a href="/contact" className="hero-btn-primary">Work With Us</a>
          <a href="/work" className="hero-btn-secondary">View Our Work</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-circle" />
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">150+</span>
            <span className="hero-stat-label">Clients</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">500+</span>
            <span className="hero-stat-label">Campaigns</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">50+</span>
            <span className="hero-stat-label">Awards</span>
          </div>
        </div>
      </div>
    </section>
  )
}
