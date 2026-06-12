import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Catalogue from './pages/Catalogue'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import PriceGuide from './pages/PriceGuide'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'


function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/price-guide" element={<PriceGuide />} />
      </Routes>

      <WhatsAppButton />

      <Footer />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

export default App