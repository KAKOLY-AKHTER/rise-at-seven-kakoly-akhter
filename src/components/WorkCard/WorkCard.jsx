import { useState } from 'react'
import './WorkCard.css'

export default function WorkCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={project.href || '/work'}
      className="work-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="wc-image-wrap">
        <img src={project.image} alt={project.title} className="wc-image" />
        <div
          className="wc-overlay"
          style={{
            background: hovered ? project.color || '#111212' : 'transparent',
            opacity: hovered ? 0.85 : 0,
          }}
        />
        <div className={`wc-label ${hovered ? 'visible' : ''}`}>
          <span>View Project</span>
          <span className="wc-label-arrow">↗</span>
        </div>
      </div>
      <div className="wc-info">
        <span className="wc-category">{project.category}</span>
        <h3 className="wc-title">{project.title}</h3>
      </div>
    </a>
  )
}
