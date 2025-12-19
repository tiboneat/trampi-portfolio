'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Film } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '#projects', label: t('Films & Séries', 'Films & Series') },
    { href: '#about', label: t('Qui je suis', 'About') },
    { href: '#expertise', label: t('Expertise', 'Expertise') },
    { href: '#testimonials', label: t('Témoignages', 'Testimonials') },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-theme-primary/90 backdrop-blur-md shadow-2xl border-b border-theme-gold' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a 
            href="#about"
            className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:scale-105 transition-all duration-300 group"
            aria-label={t("Aller à la section Qui je suis", "Go to About section")}
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border border-cinema-gold/50 rounded-sm group-hover:border-cinema-gold group-hover:bg-cinema-gold/10 transition-all duration-300">
              <Film className="text-cinema-gold" size={16} aria-hidden="true" />
            </div>
            <span className="text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] text-cinema-gold font-light group-hover:text-cinema-gold-light transition-colors duration-300">
              Fabien Trampont
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative text-theme-secondary hover:text-cinema-gold transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-light group py-2"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-cinema-gold group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
                  </a>
                </li>
              ))}
            </ul>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile: Language Toggle + Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-cinema-gold border border-cinema-gold/50 rounded-sm hover:bg-cinema-gold/10 transition-colors min-w-[44px] min-h-[44px]"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-16 sm:top-20 bg-theme-primary/98 backdrop-blur-md z-40"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false)
              }
            }}
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-theme-secondary hover:text-cinema-gold transition-colors duration-300 text-xl uppercase tracking-[0.2em] font-light py-4 px-8 block min-h-[44px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
