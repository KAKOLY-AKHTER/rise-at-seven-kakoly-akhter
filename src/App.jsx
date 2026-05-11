
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

function App() {
  return (
    <>
      <Cursor />
 <AnnouncementBar></AnnouncementBar>
      <Hero />
        <Marquee />
    
      <HeroServiceSection />
          
      <main className="main-content">
        <FeaturedWork />
        <ServicesList />
      
        <LegacyCards />
        <BlogCards />
      </main>
      <CTABanner />
      <Footer />
    </>
  )
}

export default App