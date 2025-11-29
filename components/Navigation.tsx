'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#experience', label: 'Parcours' },
    { href: '#formation', label: 'Formation' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cinema-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-cinema-gold hover:text-white transition-colors">
            FT
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-cinema-gold transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/cv-fabien-trampont.pdf"
              download
              className="flex items-center gap-2 bg-cinema-gold text-cinema-black px-6 py-2 rounded-full hover:bg-white transition-all duration-300 font-medium"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-cinema-anthracite">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-cinema-gold transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/cv-fabien-trampont.pdf"
                download
                className="flex items-center justify-center gap-2 bg-cinema-gold text-cinema-black px-6 py-3 rounded-full hover:bg-white transition-all duration-300 font-medium"
              >
                <Download size={16} />
                Télécharger le CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

