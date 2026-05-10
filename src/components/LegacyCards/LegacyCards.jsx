import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import LegacyCard from '../LegacyCard'
import 'swiper/css'
import 'swiper/css/pagination'
import './LegacyCards.css'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    id: 1,
    title: 'Pioneers',
    outerZ: 2,
    outerRotate: 4,
    x: 0,
    y: 0,
    scale: 1,
    bg: '#000',
    textColor: '#fff',
    desc: [
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    ],
    image: '/images/legacy/pioneers.webp',
  },
  {
    id: 2,
    title: 'Award Winning',
    outerZ: 1,
    outerRotate: -2,
    x: -5,
    y: -5,
    scale: 1.04,
    bg: '#b2f6e3',
    textColor: '#111212',
    desc: [
      'A roll top bath full of 79 awards. Voted The Drum\'s best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.',
    ],
    image: '/images/legacy/award.webp',
  },
  {
    id: 3,
    title: 'Speed',
    outerZ: 0,
    outerRotate: -6,
    x: -10,
    y: -10,
    scale: 1.08,
    bg: '#fff',
    textColor: '#111212',
    desc: [
      'People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We\'ve created a service which takes ideas to result within 60 minutes.',
    ],
    image: '/images/legacy/speed.webp',
  },
]

export default function LegacyCards() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial rotations, positions, and scales from card data using GSAP
      cardRefs.current.forEach((el, i) => {
        if (el) {
          gsap.set(el, { 
            rotation: cards[i].outerRotate,
            x: cards[i].x,
            y: cards[i].y,
            scale: cards[i].scale
          })
        }
      })

      // Create a single timeline tied to the section's scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        }
      })

      // Animate sequentially:
      // 1. Black Card moves up. Cyan card moves into front position. White card moves into second position.
      if (cardRefs.current[0]) {
        tl.to(cardRefs.current[0], {
          yPercent: -130,
          rotation: -15,
          scale: 1,
          ease: 'power1.inOut'
        }, "step1")
      }
      if (cardRefs.current[1]) {
        tl.to(cardRefs.current[1], {
          rotation: 4, 
          x: 0,
          y: 0,
          scale: 1,
          ease: 'power1.inOut'
        }, "step1")
      }
      if (cardRefs.current[2]) {
        tl.to(cardRefs.current[2], {
          rotation: -2, 
          x: -5,
          y: -5,
          scale: 1.04,
          ease: 'power1.inOut'
        }, "step1")
      }
      
      // 2. Cyan Card moves up. White card moves into front position.
      if (cardRefs.current[1]) {
        tl.to(cardRefs.current[1], {
          yPercent: -130, 
          rotation: -15,
          scale: 1,
          ease: 'power1.inOut'
        }, "step2")
      }
      if (cardRefs.current[2]) {
        tl.to(cardRefs.current[2], {
          rotation: 4, 
          x: 0,
          y: 0,
          scale: 1,
          ease: 'power1.inOut'
        }, "step2")
      }
      
      // The 3rd card stays on screen, and the sticky effect ends naturally

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="legacy-section" ref={sectionRef}>
      <div className="legacy-heading-wrap">
        <h2 className="legacy-heading">Legacy In The Making</h2>
      </div>

      <div className="legacy-sticky desktop-only">
        <div className="legacy-sticky-inner">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="legacy-card-abs"
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ zIndex: card.outerZ }}
            >
              <div className="legacy-card-outer">
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
                        {card.desc.map((p, di) => (
                          <p key={di} className="lc-desc" style={{ color: card.textColor }}>
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="legacy-mobile mobile-only">
        <div className="legacy-mobile-inner">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides
            speed={1000}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <LegacyCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
