'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const Header = () => {
  const { t } = useLanguage()

  return (
    <header 
      className="relative min-h-[35vh] flex items-center justify-center overflow-hidden bg-theme-primary transition-colors duration-300"
      role="banner"
      aria-label="Introduction Fabien Trampont"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}></div>
        </div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-cinema-black"></div>
      </div>

      <motion.div 
        className="w-full max-w-4xl mx-auto relative z-10 px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Nom */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3 tracking-[0.25em] sm:tracking-[0.3em] text-cinema-gold uppercase"
        >
          Fabien Trampont
        </motion.h1>

        {/* Titre */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-theme-secondary/80 tracking-[0.15em] uppercase font-light mb-4 sm:mb-6"
        >
          {t('Directeur de Post-Production', 'Post-Production Supervisor')}
        </motion.p>

        {/* Stats inline - Format badge minimaliste */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-theme-muted/70 font-light"
        >
          <a 
            href="#expertise" 
            className="hover:text-cinema-gold transition-colors tracking-wider"
          >
            {t('10 ANS', '10 YEARS')}
          </a>
          <span className="text-cinema-gold/30">•</span>
          <a 
            href="#projects" 
            className="hover:text-cinema-gold transition-colors tracking-wider"
          >
            {t('40 FILMS', '40 FILMS')}
          </a>
          <span className="text-cinema-gold/30">•</span>
          <a 
            href="#projects" 
            className="hover:text-cinema-gold transition-colors tracking-wider"
          >
            {t('CANNES, VENISE, BERLIN', 'CANNES, VENICE, BERLIN')}
          </a>
        </motion.div>
      </motion.div>

      <div className="film-scanline" aria-hidden="true"></div>
    </header>
  )
}

export default Header
