import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/chansa-logo.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Catalogue', path: '/catalogue' },
  { name: 'Price Guide', path: '/price-guide'},
  { name: "Blog", path: "/blog"},
  { name:  'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Chansa Enterprises logo"
            className="h-14 w-14 rounded-2xl bg-white object-contain p-1"
          />

          <div>
            <h1 className="text-lg font-bold tracking-wide md:text-xl">
              Chansa Enterprises
            </h1>
            <p className="text-xs text-cyan-400">Smart Tech Solutions</p>
          </div>
        </Link>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-cyan-300">
              {link.name}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/260967644528"
          className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300 md:inline-block"
        >
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4 text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 hover:bg-white/10 hover:text-cyan-300"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://wa.me/260967644528"
              className="mt-2 rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar