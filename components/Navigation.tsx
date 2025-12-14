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
          ? 'bg-cinema-black/90 dark:bg-cinema-black/90 light:bg-light-bg/95 backdrop-blur-md shadow-2xl border-b border-cinema-gold/20 dark:border-cinema-gold/20 light:border-light-border' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Retour en haut de page"
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border border-cinema-gold/50 rounded-sm">
              <Film className="text-cinema-gold" size={16} aria-hidden="true" />
            </div>
            <span className="text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] text-cinema-gold font-light">
              Fabien Trampont
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative text-white/80 dark:text-white/80 light:text-light-text/80 hover:text-cinema-gold transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-light group py-2"
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
            className="md:hidden fixed inset-0 top-16 bg-cinema-black/98 dark:bg-cinema-black/98 light:bg-light-bg/98 backdrop-blur-md z-40"
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-white/80 hover:text-cinema-gold transition-colors duration-300 text-xl uppercase tracking-[0.2em] font-light py-4 px-8 block min-h-[44px]"
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
