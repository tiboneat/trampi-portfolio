'use client'

import { Mail, Phone, MapPin, Film } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cinema-black">
      {/* Background avec effet cinéma */}
      <div className="absolute inset-0">
        {/* Grain de film */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}></div>
        </div>
        
        {/* Vignettage */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-cinema-black"></div>
      </div>

      <div className="container-custom relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal discret et élégant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-16"
          >
            {/* Ornement supérieur */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cinema-gold"></div>
              <Film className="mx-3 text-cinema-gold" size={20} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cinema-gold"></div>
            </div>

            {/* Nom discret */}
            <h1 className="text-3xl md:text-4xl font-light mb-4 tracking-[0.3em] text-cinema-silver uppercase">
              Fabien Trampont
            </h1>

            {/* Titre / Fonction - PLUS IMPORTANT */}
            <div className="relative inline-block mb-8">
              <p className="relative text-4xl md:text-5xl text-cinema-gold font-light tracking-[0.2em] uppercase">
                Directeur de Post-Production
              </p>
            </div>

            {/* Ligne décorative */}
            <div className="mb-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto"></div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-cinema-silver max-w-xl mx-auto leading-relaxed font-light">
              Supervision de plus de 30 films et séries
              <br className="hidden md:block" />
              présentés dans les plus grands festivals internationaux
            </p>
          </motion.div>

          {/* Coordonnées minimalistes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
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

        {/* Scroll indicator élégant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-cinema-silver/40">
            <div className="w-px h-12 bg-gradient-to-b from-cinema-gold/30 to-transparent">
              <motion.div
                animate={{ y: [0, 36, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 bg-cinema-gold rounded-full mx-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Film Scanline Effect */}
      <div className="film-scanline"></div>
    </header>
  )
}

export default Header
