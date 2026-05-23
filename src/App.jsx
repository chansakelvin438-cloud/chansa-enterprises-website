import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Catalogue from './pages/Catalogue'
import Contact from './pages/Contact'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App