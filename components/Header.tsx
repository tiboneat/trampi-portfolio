'use client'

import { Mail, Phone, MapPin, Film, Calendar, Wrench, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedCounter from './AnimatedCounter'

const Header = () => {
  const { t } = useLanguage()

  const stats = [
    { icon: Calendar, value: '10', label: t("années d'expérience", "years of experience") },
    { icon: Film, value: '40', label: t('Films et séries', 'Films and series') },
    { icon: Wrench, label: t('Un nombre incalculable de problèmes réglés', 'Countless problems solved'), isCounter: true },
  ]

  // Animation variants pour des entrées plus fluides
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <header 
      className="relative min-h-[100svh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-cinema-black dark:bg-cinema-black light:bg-light-bg transition-colors duration-300"
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
        className="w-full max-w-5xl mx-auto relative z-10 px-4 sm:px-6 md:px-12 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
          {/* Ornement */}
          <div className="flex items-center justify-center mb-6 sm:mb-8" aria-hidden="true">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-cinema-gold"></div>
            <Film className="mx-2 sm:mx-3 text-cinema-gold" size={18} />
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-cinema-gold"></div>
          </div>

          {/* Nom */}
          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 tracking-[0.2em] sm:tracking-[0.3em] text-cinema-silver dark:text-cinema-silver light:text-light-text uppercase font-gt-america font-light"
          >
            Fabien Trampont
          </motion.h1>

          {/* Titre sur 3 lignes */}
          <motion.div variants={itemVariants} className="relative inline-block mb-4 sm:mb-6">
            <p className="relative text-2xl sm:text-3xl md:text-4xl text-cinema-gold tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-relaxed font-gt-america font-light">
              {t('Directeur', 'Post-Production')}
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl">{t('de', '')}</span>
              {t('de', '') && <br />}
              {t('Post-Production', 'Supervisor')}
            </p>
          </motion.div>

          {/* Ligne décorative */}
          <div className="mb-6 sm:mb-8" aria-hidden="true">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto"></div>
          </div>

          {/* Phrase */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-cinema-silver dark:text-cinema-silver light:text-light-text-muted max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light italic px-2"
          >
            {t(
              'Anticiper, organiser, livrer : une post-production parfaitement maîtrisée',
              'Anticipate, organize, deliver: perfectly mastered post-production'
            )}
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-8 sm:mb-12 max-w-3xl mx-auto"
          role="list"
          aria-label={t('Statistiques clés', 'Key statistics')}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-center p-3 sm:p-4 bg-cinema-dark/30 dark:bg-cinema-dark/30 light:bg-white/50 backdrop-blur-sm border border-white/5 dark:border-white/5 light:border-light-border rounded-sm"
              role="listitem"
            >
              {stat.isCounter ? (
                <AnimatedCounter />
              ) : stat.value ? (
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-cinema-gold mb-1">{stat.value}</div>
              ) : (
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-cinema-gold" aria-hidden="true" />
              )}
              <div className="text-cinema-silver/70 dark:text-cinema-silver/70 light:text-light-text-muted text-[10px] sm:text-xs uppercase tracking-wider leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coordonnées */}
        <motion.address
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm not-italic"
        >
          <a 
            href="mailto:fabien.trampont@gmail.com"
            className="flex items-center gap-2 text-cinema-silver dark:text-cinema-silver light:text-light-text-muted hover:text-cinema-gold transition-colors min-h-[44px] px-2"
            aria-label={t('Envoyer un email à Fabien Trampont', 'Send an email to Fabien Trampont')}
          >
            <Mail size={16} aria-hidden="true" />
            <span>fabien.trampont@gmail.com</span>
          </a>
          
          <span className="text-cinema-gold/30 hidden sm:inline" aria-hidden="true">•</span>
          
          <a 
            href="tel:+33621152533"
            className="flex items-center gap-2 text-cinema-silver dark:text-cinema-silver light:text-light-text-muted hover:text-cinema-gold transition-colors min-h-[44px] px-2"
            aria-label={t('Appeler Fabien Trampont', 'Call Fabien Trampont')}
          >
            <Phone size={16} aria-hidden="true" />
            <span>06 21 15 25 33</span>
          </a>
          
          <span className="text-cinema-gold/30 hidden sm:inline" aria-hidden="true">•</span>
          
          <div className="flex items-center gap-2 text-cinema-silver dark:text-cinema-silver light:text-light-text-muted min-h-[44px] px-2">
            <MapPin size={16} aria-hidden="true" />
            <span>Paris</span>
          </div>
        </motion.address>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cinema-gold/60 hover:text-cinema-gold transition-colors cursor-pointer"
        aria-label={t('Voir le portfolio', 'View portfolio')}
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-light">
          {t('Découvrir', 'Discover')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>

      <div className="film-scanline" aria-hidden="true"></div>
    </header>
  )
}

export default Header
