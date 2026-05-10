import { useEffect, useRef, useState } from 'react'
import WorkCard from '../WorkCard'
import './FeaturedWork.css'

const projects = [
  {
    id: 1,
    title: 'Boosting organic traffic by 400% for a fintech startup',
    category: 'SEO Strategy',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=800&h=600&q=80&fm=webp&fit=crop',
    color: '#1a1a2e',
    href: '/work/fintech-seo',
  },
  {
    id: 2,
    title: 'Digital PR campaign generating 500+ press mentions',
    category: 'Digital PR',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=800&h=600&q=80&fm=webp&fit=crop',
    color: '#16213e',
    href: '/work/digital-pr-campaign',
  },
  {
    id: 3,
    title: 'E-commerce content experience driving 3x conversions',
    category: 'Content Experience',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=800&h=600&q=80&fm=webp&fit=crop',
    color: '#0f3460',
    href: '/work/ecommerce-content',
  },
]

export default function FeaturedWork() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const scrollProgress = Math.abs(rect.top) / (sectionHeight - window.innerHeight)
      const idx = Math.min(Math.floor(scrollProgress * projects.length), projects.length - 1)
      setActiveIndex(idx)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="featured-work" ref={sectionRef}>
      <div className="fw-sticky">
        <div className="fw-header">
          <h2 className="fw-heading">
            Featured{' '}
            <span className="fw-heading-img">
              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop"
                alt=""
              />
            </span>
            {' '}Work
          </h2>
        </div>
        <div className="fw-counter">
          <span className="fw-current">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="fw-divider-dot">/</span>
          <span className="fw-total">{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>
      <div className="fw-cards">
        {projects.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
