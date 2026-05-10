import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesList from './components/ServicesList'
import FeaturedWork from './components/FeaturedWork'
import Marquee from './components/Marquee'
import LegacyCards from './components/LegacyCards'
import BlogCards from './components/BlogCards'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import './App.css'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="main-content">
        <Hero />
     
        <FeaturedWork />

           <ServicesList />
        <Marquee />
        <LegacyCards />
        <BlogCards />
      </main>
      <CTABanner />
      <Footer />
    </>
  )
}

export default App
