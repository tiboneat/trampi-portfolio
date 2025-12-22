'use client'

import { Film, Calendar, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedCounter from './AnimatedCounter'

const Header = () => {
  const { t } = useLanguage()

  const stats = [
    { icon: Calendar, value: '10', label: t("années d'expérience", "years of experience"), link: '#expertise' },
    { icon: Film, value: '40', label: t('Films et séries', 'Films and series'), link: '#projects' },
    { icon: Wrench, label: t('Un nombre incalculable de problèmes réglés', 'Countless problems solved'), isCounter: true, link: '#about' },
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
      className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-theme-primary transition-colors duration-300"
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
        className="w-full max-w-5xl mx-auto relative z-10 px-4 sm:px-6 md:px-12 py-4 sm:py-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-3 sm:mb-4">
          {/* Nom avec Montserrat */}
          <motion.h1 
            variants={itemVariants}
            className="text-base sm:text-xl md:text-2xl font-montserrat font-light mb-1.5 sm:mb-2 tracking-[0.2em] sm:tracking-[0.25em] text-cinema-gold uppercase"
          >
            Fabien Trampont
          </motion.h1>

          {/* Titre */}
          <motion.div variants={itemVariants} className="relative inline-block mb-1.5 sm:mb-2">
            <p className="relative text-sm sm:text-lg md:text-xl text-theme-secondary tracking-[0.1em] sm:tracking-[0.12em] uppercase font-light">
              {t('Directeur de Post-Production', 'Post-Production Supervisor')}
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-3xl mx-auto"
          role="list"
          aria-label={t('Statistiques clés', 'Key statistics')}
        >
          {stats.map((stat, index) => (
            <motion.a
              key={index}
              href={stat.link}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-center px-3 py-2 sm:px-4 sm:py-2 bg-theme-card backdrop-blur-sm border border-theme rounded-sm cursor-pointer hover:border-cinema-gold/50 hover:bg-theme-card/80 transition-all duration-300 group"
              role="listitem"
            >
              {stat.isCounter ? (
                <AnimatedCounter />
              ) : stat.value ? (
                <div className="text-base sm:text-lg md:text-xl font-light text-cinema-gold mb-0.5 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              ) : (
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-cinema-gold" aria-hidden="true" />
              )}
              <div className="text-theme-muted text-[9px] sm:text-[10px] uppercase tracking-wider leading-tight group-hover:text-cinema-gold/80 transition-colors duration-300">{stat.label}</div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <div className="film-scanline" aria-hidden="true"></div>
    </header>
  )
}

export default Header
