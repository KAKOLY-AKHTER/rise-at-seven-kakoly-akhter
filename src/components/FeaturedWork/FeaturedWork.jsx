import React, { useState, useEffect, useRef } from 'react';
import './FeaturedWork.css';

const projects = [
  {
    id: 1,
    client: 'SIXT',
    year: '2023-2025',
    headline: 'An extra 3m clicks regionally through SEO',
    category: 'Car rental',
    color: '#cb7b3a',
    image: '/images/7/001.jpg',
    href: '#'
  },
  {
    id: 2,
    client: 'Dojo - B2B',
    year: '2021-2025',
    headline: 'A B2B success story for Dojo card machines',
    category: 'Card Machines',
    color: '#fdd8c4',
    image: '/images/7/002.jpg',
    href: '#'
  },
  {
    id: 3,
    client: 'Magnet Trade - B2B',
    year: '2023-2024',
    headline: 'A full service SEO success story 170%+ increase',
    category: '',
    color: '#d8c4fd',
    image: '/images/7/003.png',
    href: '#'
  },
  {
    id: 4,
    client: <>Leading E Sim <br/> brand globally</>,
    year: '2023-2025',
    headline: 'Increasing brand and non brand visibility UK/ES',
    category: 'Esims',
    color: '#cb7b3a',
    image: '/images/7/004.jpg',
    href: '#'
  },
  {
    id: 5,
    client: 'JD Sports',
    year: '2025',
    headline: '65% up YoY in clicks for JDSports FR, IT, ES',
    category: 'Trainers',
    color: '#3a8ccb',
    image: '/images/7/005.jpg',
    href: '#'
  },
  {
    id: 6,
    client: 'Parkdean Resorts',
    year: '2019-2025',
    headline: 'Dominating Google and AI search',
    category: 'Easter Breaks',
    color: '#d2b59d',
    image: '/images/7/006.jpg',
    href: '#'
  },
  {
    id: 7,
    client: 'Pooky',
    year: '2025',
    headline: 'Driving demand for Pooky Rechargeable Lights',
    category: 'Rechargeable Lights',
    color: '#39b0bd',
    image: '/images/7/007.jpg',
    href: '#'
  },
  {
    id: 8,
    client: 'Revolution Beauty',
    year: '2022-2025',
    headline: 'Building the UK\'s leading beauty dupe brand',
    category: 'Beauty Dupes',
    color: '#fecacc',
    image: '/images/7/008.jpg',
    href: '#'
  },
  {
    id: 9,
    client: 'Lloyds Pharmacy',
    year: '2022-23',
    headline: 'Driving category leadership for STI tests',
    category: 'STI tests',
    color: '#60dcfb',
    image: '/images/7/009.png',
    href: '#'
  },
  {
    id: 10,
    client: 'PrettyLittleThing',
    year: '2021-2023',
    headline: 'Driving discovery for everything "outfits" for PLT',
    category: 'Outfits',
    color: '#fecacc',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=d730c3765e685a8264bc8304fc54e357',
    href: '#'
  }
];

export default function FeaturedWork() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const dispatchCursor = (active, icon = false) => {
    window.dispatchEvent(new CustomEvent('component-cursor', {
      detail: { active, icon }
    }));
  };

  const handleScroll = () => {
    if (!sectionRef.current || !cardsRef.current) return;
    
    const section = sectionRef.current;
    const cards = cardsRef.current;
    const sectionRect = section.getBoundingClientRect();
    const cardsRect = cards.getBoundingClientRect();
    
    const totalScrollableHeight = cardsRect.height - section.clientHeight;
    const currentScroll = section.scrollTop;
    const progress = Math.min(1, Math.max(0, currentScroll / totalScrollableHeight));
    
    setScrollProgress(progress);

    const cardElements = cards.querySelectorAll('.fw-card-link');
    cardElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const center = sectionRect.top + (sectionRect.height / 2);
      if (rect.top < center && rect.bottom > center) {
        setActiveId(parseInt(el.getAttribute('data-id')));
      }
    });
  };

  useEffect(() => {
    // Only used for initial setup or resize if needed, onScroll handles the rest
    handleScroll();
  }, []);

  const scrollToProject = (id) => {
    const el = document.querySelector(`.fw-card-link[data-id="${id}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="featured-work" ref={sectionRef} onScroll={handleScroll}>
      <div className="fw-container">
        
        {/* Left Side: Sticky Navigation */}
        <div className="fw-sidebar">
          <div className="fw-sidebar-inner">
            <h2 className="fw-sidebar-title">Featured Work</h2>
            
            <div className="fw-nav-wrapper">
              <div className="fw-nav-mask top"></div>
              <div className="fw-nav-mask bottom"></div>
              
              <nav 
                className="fw-nav-list"
                style={{ 
                  transform: `translateY(${160 - scrollProgress * 1200}px)` 
                }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`fw-nav-item ${activeId === project.id ? 'is-active' : ''}`}
                    onClick={() => scrollToProject(project.id)}
                  >
                    <div className="fw-nav-content">
                      <span className="fw-nav-text">{project.client}</span>
                      {activeId === project.id && (
                        <span className="fw-nav-year">[{project.year}]</span>
                      )}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Right Side: Scrollable Cards */}
        <div className="fw-main" ref={cardsRef}>
          <div className="fw-cards-grid">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.href}
                className={`fw-card-link ${activeId === project.id ? 'is-active' : ''}`}
                data-id={project.id}
                onMouseEnter={() => dispatchCursor(true, 'fa-arrow-up-right')}
                onMouseLeave={() => dispatchCursor(false)}
              >
                <div className="fw-card-box">
                  {/* Media */}
                  <div className="fw-card-media">
                    <img src={project.image} alt={project.client} loading="lazy" />
                  </div>

                  {/* Top Badge (Always visible on card) */}
                  {project.category && (
                    <div className="fw-card-badge">
                      <i className="fa-regular fa-sharp fa-magnifying-glass"></i>
                      <span>{project.category}</span>
                      <i className="fa-regular fa-sharp fa-chart-line-up"></i>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div 
                    className="fw-card-overlay"
                    style={{ backgroundColor: project.color }}
                  >
                    <h3 className="fw-overlay-headline">{project.headline}</h3>
                    
                    <div className="fw-overlay-footer">
                      <div className="fw-card-badge dark">
                        <i className="fa-regular fa-sharp fa-magnifying-glass"></i>
                        <span>{project.category}</span>
                        <i className="fa-regular fa-sharp fa-chart-line-up"></i>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Mobile Text (Hidden on Desktop) */}
                  <div className="fw-mobile-info">
                    <span className="fw-mobile-year">[{project.year}]</span>
                    <h4 className="fw-mobile-title">{project.client}</h4>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}