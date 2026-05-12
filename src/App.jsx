
import Hero from './components/Hero'
import HeroServiceSection from './components/Hero/HeroServiceSection'
import ServicesList from './components/ServicesList'
import FeaturedWork from './components/FeaturedWork'
import Marquee from './components/Marquee'
import LegacyCards from './components/LegacyCards'
import BlogCards from './components/BlogCards'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import './App.css'
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar'
import LogoMarquee from './components/Logomarquee/Logomarquee'


function App() {
  return (
    <>
      
 <AnnouncementBar></AnnouncementBar>
      <Hero />
      <LogoMarquee></LogoMarquee>
      <HeroServiceSection />
 
      <main className="main-content">
        <FeaturedWork />
        <div className="explore-work-wrap">
          <a href="/work/" className="explore-work-btn">
            <div className="explore-work-btn-inner">
              <span className="explore-work-btn-label">Explore Our Work ↗</span>
              <span className="explore-work-btn-label dupe" aria-hidden="true">Explore Our Work ↗</span>
            </div>
          </a>
        </div>
        <ServicesList />
             <Marquee />
        <LegacyCards />
        <BlogCards />
      </main>
      <CTABanner />
      <Footer />
      <Cursor />
    </>
  )
}

export default App