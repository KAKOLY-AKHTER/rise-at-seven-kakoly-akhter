import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './Marquee.css'

export default function Marquee() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      const groupWidth = track.children[0]?.offsetWidth || 1

      gsap.to(track, {
        x: () => -(groupWidth * 3),
        duration: 120,
        repeat: -1,
        ease: 'none',
      })
    }, sectionRef)

    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setShowCursor(true)
    const handleMouseLeave = () => setShowCursor(false)

    const titles = section.querySelectorAll('.marquee-title-wrap')
    titles.forEach((el) => {
      el.addEventListener('mousemove', handleMouseMove)
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      ctx.revert()
      titles.forEach((el) => {
        el.removeEventListener('mousemove', handleMouseMove)
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  const group = (
    <div className="marquee-group">
      <a href="/brief" className="marquee-title-wrap">
        <h2 className="marquee-title">Chasing Consumers</h2>
      </a>
      <div className="marquee-img-wrap">
        <div className="marquee-img-inner">
          <img src="/images/marquee/marquee-1.jpg" alt="" className="marquee-img" />
        </div>
      </div>
      <a href="/brief" className="marquee-title-wrap">
        <h2 className="marquee-title">Not Algorithms</h2>
      </a>
      <div className="marquee-img-wrap">
        <div className="marquee-img-inner">
          <img 
            src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=aaebcfe9d0be7775d9036eea4ea51c0f" 
            alt="Marquee Image 2" 
            className="marquee-img" 
          />
        </div>
      </div>
    </div>
  )

  return (
    <section className="marquee-section" ref={sectionRef}>
      <div className="marquee-track" ref={trackRef}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="marquee-group-wrap">
            {group}
          </div>
        ))}
      </div>
      {showCursor && (
        <div
          className="marquee-cursor"
          style={{ left: cursorPos.x, top: cursorPos.y }}
        >
          Send Us your Brief <span className="cursor-arrow">↗</span>
        </div>
      )}
    </section>
  )
}
