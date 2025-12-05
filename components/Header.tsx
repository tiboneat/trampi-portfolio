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
    <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-cinema-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}></div>
        </div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-cinema-black"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-12"
        >
          {/* Ornement */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cinema-gold"></div>
            <Film className="mx-3 text-cinema-gold" size={20} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cinema-gold"></div>
          </div>

          {/* Nom */}
          <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-[0.3em] text-cinema-silver uppercase">
            Fabien Trampont
          </h1>

          {/* Titre sur 3 lignes */}
          <div className="relative inline-block mb-6">
            <p className="relative text-3xl md:text-4xl text-cinema-gold font-light tracking-[0.15em] uppercase leading-relaxed">
              Directeur
              <br />
              <span className="text-2xl md:text-3xl">de</span>
              <br />
              Post-Production
            </p>
          </div>

          {/* Ligne décorative */}
          <div className="mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto"></div>
          </div>

          {/* Phrase */}
          <p className="text-base md:text-lg text-cinema-silver max-w-2xl mx-auto leading-relaxed font-light italic">
            Rendre la post-production fluide, sereine et fidèle à la vision du projet
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-cinema-dark/30 backdrop-blur-sm border border-white/5 rounded-sm"
            >
              {stat.value ? (
                <div className="text-3xl font-light text-cinema-gold mb-1">{stat.value}</div>
              ) : (
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-cinema-gold" />
              )}
              <div className="text-cinema-silver/70 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Coordonnées */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm"
        >
          <a 
            href="mailto:fabien.trampont@gmail.com"
            className="flex items-center gap-2 text-cinema-silver hover:text-cinema-gold transition-colors"
          >
            <Mail size={16} />
            <span>fabien.trampont@gmail.com</span>
          </a>
          
          <span className="text-cinema-gold/30">•</span>
          
          <a 
            href="tel:0621152533"
            className="flex items-center gap-2 text-cinema-silver hover:text-cinema-gold transition-colors"
          >
            <Phone size={16} />
            <span>06 21 15 25 33</span>
          </a>
          
          <span className="text-cinema-gold/30">•</span>
          
          <div className="flex items-center gap-2 text-cinema-silver">
            <MapPin size={16} />
            <span>Paris</span>
          </div>
        </motion.div>
      </div>

      <div className="film-scanline"></div>
    </header>
  )
}

export default Header
