import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-12 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold text-white">Chansa Enterprises</h2>
          <p className="mt-2 text-sm text-cyan-400">Smart Tech Solutions</p>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Digital services, electronics, hosting, business email, networking,
            software support, and IT solutions for individuals and businesses.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm">
            <Link to="/" className="hover:text-cyan-300">Home</Link>
            <Link to="/services" className="hover:text-cyan-300">Services</Link>
            <Link to="/catalogue" className="hover:text-cyan-300">Catalogue</Link>
            <Link to="/about" className="hover:text-cyan-300">About</Link>
            <Link to="/contact" className="hover:text-cyan-300">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Services</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm">
            <span>Web Development</span>
            <span>Web Hosting</span>
            <span>Business Email</span>
            <span>Graphic Design</span>
            <span>IT Support</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <a href="https://wa.me/260967644528" className="hover:text-cyan-300">
              WhatsApp: +260 967 644 528
            </a>

            <a href="tel:+260967644528" className="hover:text-cyan-300">
              Call: +260 967 644 528
            </a>

            <a href="mailto:info@chansaenterprises.com" className="hover:text-cyan-300">
              info@chansaenterprises.com
            </a>

            <span>chansaenterprises.com</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Chansa Enterprises. All rights reserved.</p>

        <p>Web • Hosting • Electronics • IT Support</p>
      </div>
    </footer>
  )
}

export default Footer