import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0d0d]/92 backdrop-blur-md border-b border-[#1f2937]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-fira text-neon text-lg">
          &lt;KS /&gt;
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="nav-link font-outfit text-sm text-gray-400 hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:kunalsawant30122612@gmail.com"
          className="hidden lg:inline-flex font-fira text-xs bg-neon/10 border border-neon/30 text-neon px-4 py-2 rounded hover:bg-neon/20 transition-all"
        >
          Hire Me ↗
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-400 hover:text-white p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#161b27] border-t border-[#1f2937] px-5 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-outfit text-sm text-gray-300 hover:text-neon transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:kunalsawant30122612@gmail.com"
            className="font-fira text-xs text-neon border border-neon/30 px-4 py-2 rounded text-center mt-2"
          >
            Hire Me ↗
          </a>
        </div>
      )}
    </nav>
  )
}
