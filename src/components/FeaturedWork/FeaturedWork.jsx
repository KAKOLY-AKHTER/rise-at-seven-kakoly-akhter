import { useState } from 'react';
import './FeaturedWork.css';

const projects = [
  {
    id: 1,
    year: '2023–2025',
    client: 'SIXT',
    headline: 'An extra 3m clicks regionally through SEO',
    category: 'Car rental',
    color: '#cb7b3a',
    img: '/public/images/7/001.jpg',
    href: '/work/sixt/',
  },
  {
    id: 2,
    year: '2021–2025',
    client: 'Dojo – B2B',
    headline: 'A B2B success story for Dojo card machines',
    category: 'Card Machines',
    color: '#fdd8c4',
    img: '/public/images/7/002.jpg',
    href: '/work/dojo/',
  },
  {
    id: 3,
    year: '2023–2024',
    client: 'Magnet Trade – B2B',
    headline: 'A full service SEO success story 170%+ increase',
    category: 'B2B SEO',
    color: '#d8c4fd',
    img: '/public/images/7/003.png',
    href: '/work/magnet-trade-b2b/',
  },
  {
    id: 4,
    year: '2023–2025',
    client: 'Leading eSIM Brand',
    headline: 'Increasing brand and non-brand visibility UK/ES',
    category: 'Esims',
    color: '#cb7b3a',
    img: '/public/images/7/004.jpg',
    href: '/work/esim-case-study/',
  },
  {
    id: 5,
    year: '2025',
    client: 'JD Sports',
    headline: '65% up YoY in clicks for JDSports FR, IT, ES',
    category: 'Trainers',
    color: '#3a8ccb',
    img: '/public/images/7/005.jpg',
    href: '/work/jd-sports-/',
  },
  {
    id: 6,
    year: '2019–2025',
    client: 'Parkdean Resorts',
    headline: 'Dominating Google and AI search',
    category: 'Easter Breaks',
    color: '#d2b59d',
    img: '/public/images/7/006.jpg',
    href: '/work/parkdean-resorts-easter-breaks/',
  },
  {
    id: 7,
    year: '2025',
    client: 'Pooky',
    headline: 'Driving demand for Pooky Rechargeable Lights',
    category: 'Rechargeable Lights',
    color: '#39b0bd',
    img: '/public/images/7/007.jpg',
    href: '/work/pooky/',
  },
  {
    id: 8,
    year: '2019–2025',
    client: 'Parkdean Resorts',
    headline: 'Social search and multi-channel content to #1',
    category: 'UK Holidays',
    color: '#d29dd0',
    img: '/public/images/7/008.jpg',
    href: '/work/parkdean-resorts-social-search/',
  },
  {
    id: 9,
    year: '2022–2025',
    client: 'Revolution Beauty',
    headline: "Building the UK's leading beauty dupe brand",
    category: 'Beauty Dupes',
    color: '#fecacc',
    img: '/public/images/7/009.png',
    href: '/work/revolution-beauty/',
  },
  {
    id: 10,
    year: '2022–23',
    client: 'Lloyds Pharmacy',
    headline: 'Driving category leadership for STI tests',
    category: 'STI Tests',
    color: '#60dcfb',
    img: '/public/images/7/0010.png',
    href: '/work/lloyds-pharmacy/',
  },
];

export default function FeaturedWork() {
  const [activeId, setActiveId] = useState(1);
  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <section className="fw">
      <div className="fw__container">
        {/* Left Side - Scrollable Content */}
        <div className="fw__left">
          <div className="fw__header">
            <h2 className="fw__title">Featured Work</h2>
            <div className="fw__counter">
              <span className="fw__counter-current">
                {String(projects.findIndex(p => p.id === activeId) + 1).padStart(2, '0')}
              </span>
              <span className="fw__counter-sep">/</span>
              <span className="fw__counter-total">
                {String(projects.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="fw__projects">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.href}
                className={`fw__project ${activeId === project.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveId(project.id)}
              >
                <div className="fw__project-main">
                  <span className="fw__client">{project.client}</span>
                  <span className="fw__year">[{project.year}]</span>
                </div>
                <p className="fw__headline">{project.headline}</p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="fw__cta">
            <a href="/work/" className="fw__cta-btn">
              Explore Our Work
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="fw__right">
          {activeProject && (
            <div className="fw__image-wrapper">
              <img
                src={activeProject.img}
                alt={activeProject.client}
                className="fw__image"
              />
              <div className="fw__pill">
                {activeProject.category}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}