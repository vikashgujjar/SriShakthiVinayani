'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#poojas', label: 'Poojas' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id], div[id]')
      let cur = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 130) cur = s.id
      })
      setActiveSection(cur)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-purple-500/20 shadow-sm"
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-2 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="h-22 w-22 sm:h-22 sm:w-22 object-contain drop-shadow-purple-sm"
          />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link font-inter text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full transition-all duration-200 ${
                activeSection === item.href.slice(1)
                  ? 'bg-purple-gradient text-white'
                  : 'text-purple-700 hover:bg-purple-500/10 hover:text-purple-800'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:9902762211"
            className="hidden sm:inline-flex items-center gap-1.5 bg-purple-gradient text-white text-xs font-bold tracking-wide px-4 py-2.5 rounded-full shadow-purple hover:-translate-y-0.5 hover:shadow-purple-lg transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            9902762211
          </a>

          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-xl border border-purple-500/20 bg-purple-50 hover:bg-purple-100 transition-all"
            aria-label="Open Menu"
          >
            <span
              className={`w-5 h-0.5 bg-purple-700 rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span className={`w-5 h-0.5 bg-purple-700 rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`w-5 h-0.5 bg-purple-700 rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-purple-500/15 bg-white/98 backdrop-blur-xl animate-mobileMenu">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="mob-link font-cinzel text-sm font-semibold text-purple-700 px-4 py-3 rounded-xl hover:bg-purple-50 hover:text-purple-800 transition-all flex items-center gap-3"
              >
                <span className="text-purple-400 text-lg">✦</span>
                {item.label}
              </a>
            ))}
            <a
              href="tel:9902762211"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 bg-purple-gradient text-white text-sm font-bold px-6 py-3 rounded-full shadow-purple"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call Now: 9902762211
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
