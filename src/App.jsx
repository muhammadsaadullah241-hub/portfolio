import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import BackToTop from './components/common/BackToTop.jsx'
import Hero from './components/sections/Hero.jsx'
import Problems from './components/sections/Problems.jsx'
import Services from './components/sections/Services.jsx'
import Work from './components/sections/Work.jsx'
import CaseStudies from './components/sections/CaseStudies.jsx'
import About from './components/sections/About.jsx'
import Stats from './components/sections/Stats.jsx'
import Process from './components/sections/Process.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import FAQ from './components/sections/FAQ.jsx'
import FinalCTA from './components/sections/FinalCTA.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream-light">
      {/* Accessibility: skip straight to content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-[#161311] focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Problems />
        <Services />
        <Work />
        <CaseStudies />
        <About />
        <Stats />
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
