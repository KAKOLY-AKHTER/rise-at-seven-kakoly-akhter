import { useState } from 'react'
import './ServicesItem.css'

export default function ServicesItem({ service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className={`si-wrap ${hovered ? 'hovered' : ''}`}>
      <div className="si-border-line" />

      <a
        href={service.href || '/services'}
        className="si-link"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Text content layer */}
        <div className="si-content">
          {service.mobileImg && (
            <div className="si-mobile-img">
              <img src={service.mobileImg} alt="" />
            </div>
          )}
          <div className="si-text-area">
            <div className="si-text-relative">
              {/* Arrow wrap - slides in from top-left on hover */}
              <div className="si-arrow-outer">
                <div className="si-arrow-inner">
                  <span className="si-arrow-icon">↗</span>
                </div>
              </div>
              {/* Title wrap - slides right on hover */}
              <div className="si-title-outer">
                <span className="si-title">{service.title}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background image overlay layer */}
        <div className="si-bg-layer">
          <div className="si-bg-inner">
            <div className="si-bg-img-wrap">
              <img src={service.hoverImage} alt="" className="si-bg-img" />
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
