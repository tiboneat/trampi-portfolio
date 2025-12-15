'use client'

import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <footer 
      id="contact" 
      className="bg-cinema-black dark:bg-cinema-black light:bg-[#F5F3EE] border-t border-white/10 dark:border-white/10 light:border-light-border transition-colors duration-300"
      role="contentinfo"
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm sm:text-base font-light mb-3 sm:mb-4 text-cinema-gold tracking-wider">Contact</h3>
            <address className="space-y-2 sm:space-y-3 not-italic">
              <a
                href="mailto:fabien.trampont@gmail.com"
                className="flex items-center gap-3 text-white/70 dark:text-white/70 light:text-light-text-muted hover:text-cinema-gold transition-colors text-xs sm:text-sm min-h-[44px]"
                aria-label={t('Envoyer un email', 'Send an email')}
              >
                <Mail size={16} aria-hidden="true" />
                <span>fabien.trampont@gmail.com</span>
              </a>
              <a
                href="tel:+33621152533"
                className="flex items-center gap-3 text-white/70 dark:text-white/70 light:text-light-text-muted hover:text-cinema-gold transition-colors text-xs sm:text-sm min-h-[44px]"
                aria-label={t('Appeler', 'Call')}
              >
                <Phone size={16} aria-hidden="true" />
                <span>06 21 15 25 33</span>
              </a>
              <div className="flex items-center gap-3 text-white/70 dark:text-white/70 light:text-light-text-muted text-xs sm:text-sm">
                <MapPin size={16} aria-hidden="true" />
                <span>Paris</span>
              </div>
            </address>
          </motion.div>

          {/* Navigation */}
          <motion.nav variants={itemVariants} aria-label={t('Navigation du pied de page', 'Footer navigation')}>
            <h3 className="text-sm sm:text-base font-light mb-3 sm:mb-4 text-cinema-gold tracking-wider">Navigation</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="#projects"
                  className="text-white/70 dark:text-white/70 light:text-light-text-muted hover:text-cinema-gold transition-colors text-xs sm:text-sm min-h-[44px] inline-flex items-center"
                >
                  Films & Séries
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 dark:text-white/70 light:text-light-text-muted hover:text-cinema-gold transition-colors text-xs sm:text-sm min-h-[44px] inline-flex items-center"
                >
                  {t('Qui je suis', 'About')}
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="text-white/70 dark:text-white/70 light:text-light-text-muted hover:text-cinema-gold transition-colors text-xs sm:text-sm min-h-[44px] inline-flex items-center"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/70 dark:text-white/70 light:text-light-text-muted hover:text-cinema-gold transition-colors text-xs sm:text-sm min-h-[44px] inline-flex items-center"
                >
                  {t('Témoignages', 'Testimonials')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 dark:text-white/70 light:text-light-text-muted hover:text-cinema-gold transition-colors text-xs sm:text-sm min-h-[44px] inline-flex items-center"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>

          {/* Liens utiles */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm sm:text-base font-light mb-3 sm:mb-4 text-cinema-gold tracking-wider">
              {t('Liens utiles', 'Useful links')}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="https://www.imdb.com/fr/name/nm8268744/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 dark:text-white/70 light:text-light-text-muted hover:text-cinema-gold transition-colors text-xs sm:text-sm min-h-[44px]"
                  aria-label={t('Profil IMDb de Fabien Trampont (s\'ouvre dans un nouvel onglet)', 'Fabien Trampont\'s IMDb profile (opens in new tab)')}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.165.062-.105.09-.39.09-.855v-2.735c0-.345-.008-.59-.022-.735-.016-.145-.07-.24-.15-.26zM22 2v20H2V2h20zM4.05 14.94V9.06h1.71v5.88H4.05zm5.2 0h-1.13l-.13-.48c-.37.37-.89.55-1.55.55-.44 0-.75-.15-.93-.45-.17-.3-.26-.73-.26-1.3v-3.2c0-.5.13-.88.38-1.15.25-.27.65-.4 1.2-.4.45 0 .84.1 1.17.3v-1.39h1.25v7.52zm1.72-7.12h2.06c.68 0 1.18.12 1.5.36.32.24.49.68.49 1.3v3.5c0 .63-.18 1.07-.54 1.32-.36.25-.93.37-1.71.37H10.97V7.82zm4.64 7.12h-1.25v-7.52h1.25v7.52zm5.03-1.68c-.14.43-.39.75-.75.96-.36.21-.82.32-1.38.32-.56 0-1.02-.11-1.38-.32-.36-.21-.63-.53-.81-.96-.18-.43-.27-.99-.27-1.68v-1.23c0-.69.09-1.25.27-1.68.18-.43.45-.75.81-.96.36-.21.82-.32 1.38-.32.56 0 1.02.11 1.38.32.36.21.61.53.75.96.14.43.21.99.21 1.68v1.23c0 .69-.07 1.25-.21 1.68z"/>
                  </svg>
                  <span>IMDb</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fabien-trampont-43811967/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 dark:text-white/70 light:text-light-text-muted hover:text-cinema-gold transition-colors text-xs sm:text-sm min-h-[44px]"
                  aria-label={t('Profil LinkedIn de Fabien Trampont (s\'ouvre dans un nouvel onglet)', 'Fabien Trampont\'s LinkedIn profile (opens in new tab)')}
                >
                  <Linkedin size={16} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="pt-4 sm:pt-6 border-t border-white/10 dark:border-white/10 light:border-light-border text-center text-white/40 dark:text-white/40 light:text-light-text-muted text-xs"
        >
          <p>© {currentYear} Fabien Trampont — {t('Directeur de Post-Production', 'Post-Production Supervisor')}</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
