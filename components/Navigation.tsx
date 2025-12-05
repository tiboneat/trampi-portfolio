'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Film } from 'lucide-react'

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
    { href: '#projects', label: 'Portfolio' },
    { href: '#about', label: 'Qui je suis' },
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - pas de cursor pointer */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="relative flex items-center justify-center w-10 h-10 border border-cinema-gold/50 rounded-sm">
                <Film className="text-cinema-gold" size={20} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-sm tracking-[0.15em] text-cinema-gold font-light">
                Fabien Trampont
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white/80 hover:text-cinema-gold transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-light group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-cinema-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
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
                  className="text-white/80 hover:text-cinema-gold transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-light py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
