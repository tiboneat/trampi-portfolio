'use client'

import { Mail, Phone, MapPin, Film, Calendar, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const stats = [
    { icon: Calendar, value: '10', label: "années d'expérience" },
    { icon: Film, value: '40', label: 'Films et séries' },
    { icon: Award, label: 'Enseignement' },
  ]

  return (
    <header 
      className="relative min-h-[100svh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-cinema-black"
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

      <div className="w-full max-w-5xl mx-auto relative z-10 px-4 sm:px-6 md:px-12 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Ornement */}
          <div className="flex items-center justify-center mb-6 sm:mb-8" aria-hidden="true">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-cinema-gold"></div>
            <Film className="mx-2 sm:mx-3 text-cinema-gold" size={18} />
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-cinema-gold"></div>
          </div>

          {/* Nom */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 tracking-[0.2em] sm:tracking-[0.3em] text-cinema-silver uppercase">
            Fabien Trampont
          </h1>

          {/* Titre sur 3 lignes */}
          <div className="relative inline-block mb-4 sm:mb-6">
            <p className="relative text-2xl sm:text-3xl md:text-4xl text-cinema-gold font-light tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-relaxed">
              Directeur
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl">de</span>
              <br />
              Post-Production
            </p>
          </div>

          {/* Ligne décorative */}
          <div className="mb-6 sm:mb-8" aria-hidden="true">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto"></div>
          </div>

          {/* Phrase */}
          <p className="text-sm sm:text-base md:text-lg text-cinema-silver max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light italic px-2">
            Rendre la post-production fluide, sereine et fidèle à la vision du projet
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl mx-auto"
          role="list"
          aria-label="Statistiques clés"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 sm:p-4 bg-cinema-dark/30 backdrop-blur-sm border border-white/5 rounded-sm"
              role="listitem"
            >
              {stat.value ? (
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-cinema-gold mb-1">{stat.value}</div>
              ) : (
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-cinema-gold" aria-hidden="true" />
              )}
              <div className="text-cinema-silver/70 text-[10px] sm:text-xs uppercase tracking-wider leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Coordonnées */}
        <motion.address
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm not-italic"
        >
          <a 
            href="mailto:fabien.trampont@gmail.com"
            className="flex items-center gap-2 text-cinema-silver hover:text-cinema-gold transition-colors min-h-[44px] px-2"
            aria-label="Envoyer un email à Fabien Trampont"
          >
            <Mail size={16} aria-hidden="true" />
            <span>fabien.trampont@gmail.com</span>
          </a>
          
          <span className="text-cinema-gold/30 hidden sm:inline" aria-hidden="true">•</span>
          
          <a 
            href="tel:+33621152533"
            className="flex items-center gap-2 text-cinema-silver hover:text-cinema-gold transition-colors min-h-[44px] px-2"
            aria-label="Appeler Fabien Trampont"
          >
            <Phone size={16} aria-hidden="true" />
            <span>06 21 15 25 33</span>
          </a>
          
          <span className="text-cinema-gold/30 hidden sm:inline" aria-hidden="true">•</span>
          
          <div className="flex items-center gap-2 text-cinema-silver min-h-[44px] px-2">
            <MapPin size={16} aria-hidden="true" />
            <span>Paris</span>
          </div>
        </motion.address>
      </div>

      <div className="film-scanline" aria-hidden="true"></div>
    </header>
  )
}

export default Header
