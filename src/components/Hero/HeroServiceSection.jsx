import React from 'react'
import './HeroServiceSection.css'

const HeroServiceSection = () => {
  return (
    <section className="hs">
      <div className="hs__inner">

        {/*
          Original structure:
          flex-col-reverse → md:flex-row
          Left col: description (order 2 on mobile via col-reverse)
          Right col: heading + desktop buttons (order 1 on mobile via col-reverse)
          Mobile buttons: rendered first in DOM, floats to top via col-reverse
        */}
        <div className="hs__row">

          {/* Mobile-only buttons — col-reverse makes these appear at top on mobile */}
          <div className="hs__btns-mobile">
            <a href="/about/" className="hs__btn-mobile hs__btn-mobile--filled">
              Our Story ↗
            </a>
            <a href="/services/" className="hs__btn-mobile hs__btn-mobile--ghost">
              Our Services ↗
            </a>
          </div>

          {/* LEFT — description text */}
          <div className="hs__left">
            <p className="hs__desc">
              A global team of search-first content marketers engineering
              semantic relevancy &amp; category signals for both the internet and people
            </p>
          </div>

          {/* RIGHT — heading + desktop buttons */}
          <div className="hs__right">

            <h2 className="hs__heading">
              {/* Each "word" has margin-right: 12px in original via js-word */}
              <div className="hs__heading-line">
                <span style={{ marginRight: 12 }}>Driving</span>
                <span style={{ marginRight: 12 }}>Demand</span>
                <span style={{ marginRight: 12 }}>&amp;</span>
                <span style={{ marginRight: 12 }}>Discovery</span>
                {/* Inline image — original width: 81px at ~72px heading */}
                <span className="hs__img-wrap">
                  <img
                    src="/images/services/heading.jpg"
                    alt=""
                    className="hs__inline-img"
                  />
                </span>
              </div>
            </h2>

            {/* Desktop-only buttons */}
            <div className="hs__btns">

              <a href="/about/" className="hs__btn hs__btn--filled">
                <span className="hs__btn-label">
                  Our Story ↗
                </span>
              </a>

              <a href="/services/" className="hs__btn hs__btn--ghost">
                <span className="hs__btn-label">
                  Our Services ↗
                </span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroServiceSection