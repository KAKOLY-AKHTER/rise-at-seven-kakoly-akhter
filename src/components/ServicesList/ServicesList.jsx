import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ServicesItem from '../ServicesItem'
import './ServicesList.css'

const services = [
  { id: 1, title: 'Digital PR', href: '/services/digital-pr',
    hoverImage: '/images/services/digital-pr.jpg',
    mobileImg: '/images/services/digital-pr.jpg' },
  { id: 2, title: 'Organic Social & Content', href: '/services/social',
    hoverImage: '/images/services/social-content.jpg',
    mobileImg: '/images/services/social-content.jpg' },
  { id: 3, title: 'Search & Growth Strategy', href: '/services/strategy-growth',
    hoverImage: '/images/services/strategy-growth.jpg',
    mobileImg: '/images/services/strategy-growth.jpg' },
  { id: 4, title: 'Content Experience', href: '/services/content-experience',
    hoverImage: '/images/services/content-experience.jpg',
    mobileImg: '/images/services/content-experience.jpg' },
  { id: 5, title: 'Data & Insights', href: '/services/data-insights',
    hoverImage: '/images/services/data-insights.jpg',
    mobileImg: '/images/services/data-insights.jpg' },
  { id: 6, title: 'Onsite SEO', href: '/services/onsite-seo',
    hoverImage: '/images/services/onsite-seo.jpg',
    mobileImg: '/images/services/onsite-seo.jpg' },
]

function splitChars(text) {
  return text.split('').map((char, i) =>
    char === ' ' ? ' ' : (
      <span key={i} className="sh-char">{char}</span>
    )
  )
}

function ViewAllBtn() {
  return (
    <a href="/services" className="view-all-btn">
      <div className="vab-inner">
        <div className="vab-front">
          <span>View All Services</span>
          <span className="vab-arrow">↗</span>
        </div>
        <div className="vab-back">
          <span>View All Services</span>
          <span className="vab-arrow">↗</span>
        </div>
      </div>
    </a>
  )
}

export default function ServicesList() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = sectionRef.current.querySelectorAll('.sh-char')

      gsap.from(chars, {
        y: 80,
        rotate: 8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="ss-outer">
        <div className="ss-header-row">
          <div className="ss-header-title-col">
            <h2 className="services-heading" aria-label="OurServices">
              <div className="sh-flex-wrap">
                <span className="sh-word">{splitChars('Our')}</span>
                <span className="sh-img-wrap">
                  <img src="/images/services/heading.jpg" alt="" />
                </span>
                <span className="sh-word">{splitChars('Services')}</span>
              </div>
            </h2>
          </div>
          <div className="ss-header-btn-col">
            <ViewAllBtn />
          </div>
        </div>

        <div className="ss-grid">
          {services.map((svc) => (
            <div key={svc.id} className="ss-grid-item">
              <ServicesItem service={svc} />
            </div>
          ))}
        </div>

        <div className="ss-mobile-btn">
          <ViewAllBtn />
        </div>
      </div>
    </section>
  )
}
