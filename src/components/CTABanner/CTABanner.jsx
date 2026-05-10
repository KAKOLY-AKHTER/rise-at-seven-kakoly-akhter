import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CTABanner.css'

gsap.registerPlugin(ScrollTrigger)

export default function CTABanner() {
  const triggerRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const trigger = triggerRef.current
    const heading = headingRef.current
    if (!trigger || !heading) return

    const headingWidth = heading.offsetWidth
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    let yStart = 150
    let yEnd = 400
    let charyStart = -60

    if (window.innerWidth < 1024) {
      yStart = 100
      yEnd = 200
      charyStart = -60
    }

    const ctx = gsap.context(() => {
      gsap.set(heading, {
        y: yStart,
        x: headingWidth - windowWidth + windowWidth * 0.5,
      })

      gsap.to(heading, {
        x: -(headingWidth - window.innerWidth + 1000),
        y: yEnd,
        ease: 'none',
        scrollTrigger: {
          trigger,
          start: 'top 70%',
          end: '+=' + (headingWidth - windowWidth + windowHeight * 0.35),
          scrub: true,
        },
      })

      const chars = heading.children

      gsap.set(chars, {
        yPercent: charyStart,
        rotate: 10,
      })

      gsap.to(chars, {
        yPercent: 0,
        rotate: 0,
        ease: 'back.inOut(4)',
        stagger: 0.35,
        duration: 2.5,
        scrollTrigger: {
          trigger,
          start: 'top 77%',
          end: '+=' + (headingWidth - windowWidth + 200),
          scrub: true,
        },
      })
    }, triggerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="cta-outer">
      <div className="cta-trigger" ref={triggerRef}>
        <div
          className="cta-heading js-heading-2250"
          ref={headingRef}
          aria-label="Ready to Rise at Seven?"
        >
          <span aria-hidden="true">R</span>
          <span aria-hidden="true">e</span>
          <span aria-hidden="true">a</span>
          <span aria-hidden="true">d</span>
          <span aria-hidden="true">y</span>
          <span aria-hidden="true">&nbsp;</span>
          <span aria-hidden="true">t</span>
          <span aria-hidden="true">o</span>
          <span aria-hidden="true">&nbsp;</span>
          <span aria-hidden="true">R</span>
          <span aria-hidden="true">i</span>
          <span aria-hidden="true">s</span>
          <span aria-hidden="true">e</span>
          <span aria-hidden="true">&nbsp;</span>
          <span aria-hidden="true">a</span>
          <span aria-hidden="true">t</span>
          <span aria-hidden="true">&nbsp;</span>
          <span aria-hidden="true">S</span>
          <span aria-hidden="true">e</span>
          <span aria-hidden="true">v</span>
          <span aria-hidden="true">e</span>
          <span aria-hidden="true">n</span>
          <span aria-hidden="true">?</span>
        </div>
      </div>
    </div>
  )
}
