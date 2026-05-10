import './LegacyCard.css'

export default function LegacyCard({ card }) {
  return (
    <div className="legacy-card-content" style={{ background: card.bg }}>
      <div className="lc-grid">
        <div className="lc-image-wrap">
          <picture>
            <img
              src={card.image}
              alt={card.title}
              className="lc-image"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="lc-text-col">
          <h2 className="lc-title" style={{ color: card.textColor }}>
            {card.title}
          </h2>
          <div className="lc-desc-wrap">
            {card.desc.map((p, i) => (
              <p key={i} className="lc-desc" style={{ color: card.textColor }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
