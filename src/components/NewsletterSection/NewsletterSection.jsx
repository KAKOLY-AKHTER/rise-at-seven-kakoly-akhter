import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './NewsletterSection.css'

gsap.registerPlugin(ScrollTrigger)

export default function NewsletterSection() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!headingRef.current || !wrapperRef.current) return

    const ctx = gsap.context(() => {
      const chars = headingRef.current.querySelectorAll('.nl-char')
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        }
      })

      // 1. Move the entire heading from the far right to the far left
      tl.fromTo(headingRef.current, 
        { 
          x: window.innerWidth 
        },
        {
          x: () => -(headingRef.current.scrollWidth),
          ease: 'none',
        }, 
      0)

      // 2. Initial state for characters (just the hop and fade)
      gsap.set(chars, {
        yPercent: -60,
        rotation: 10,
        opacity: 0,
      })

      // 3. Characters dropping into place sequentially
      tl.to(chars, {
        yPercent: 0,
        rotation: 0,
        opacity: 1,
        ease: "power2.out",
        stagger: {
          each: 0.1, // Smooth serial arrival
          from: "start"
        }
      }, 0)
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  const text = "Ready to Rise at Seven?"
  const splitText = text.split('').map((char, i) => (
    <div 
      key={i} 
      className="nl-char"
    >
      {char === ' ' ? '\u00A0' : char}
    </div>
  ))

  return (
    <div className="nl-wrapper" ref={wrapperRef}>
      <div 
        className="nl-section" 
        ref={sectionRef}
      >
        <div 
          className="nl-heading" 
          ref={headingRef} 
          aria-label="Ready to Rise at Seven?"
        > 
          {splitText}
        </div>
      </div>
    </div>
  )
}