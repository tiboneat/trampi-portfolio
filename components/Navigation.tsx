'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download, Film } from 'lucide-react'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-cinema-black/90 backdrop-blur-md shadow-2xl border-b border-cinema-gold/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cinema-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center w-12 h-12 border border-cinema-gold rounded-sm">
                <Film className="text-cinema-gold" size={24} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-sm uppercase tracking-[0.2em] text-cinema-gold font-medium">
                Fabien Trampont
              </div>
              <div className="text-xs text-cinema-silver tracking-wider">
                Post-Production
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-cinema-white/80 hover:text-cinema-gold transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-light group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-cinema-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="/cv-fabien-trampont.pdf"
              download
              className="btn-cinema text-xs"
            >
              <Download size={14} />
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-cinema-gold border border-cinema-gold/50 rounded-sm hover:bg-cinema-gold/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-cinema-gold/20 bg-cinema-black/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cinema-white/80 hover:text-cinema-gold transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-light py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/cv-fabien-trampont.pdf"
                download
                className="btn-cinema text-xs mt-4"
              >
                <Download size={14} />
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
