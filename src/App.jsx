
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
        <Marquee />
      <main className="main-content">
        <FeaturedWork />
        <ServicesList />
      
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