'use client'

import { Mail, Phone, MapPin, Download, Film } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cinema-black">
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
        
        {/* Bandes lumineuses subtiles */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinema-gold/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinema-gold/20 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 px-6 md:px-12 py-32">
        <div className="max-w-5xl mx-auto">
          {/* Titre principal avec effet cinématographique */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-12"
          >
            {/* Ornement supérieur */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cinema-gold"></div>
              <Film className="mx-4 text-cinema-gold" size={28} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cinema-gold"></div>
            </div>

            {/* Nom */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
              <span className="text-cinema-white">Fabien</span>
              <br />
              <span className="text-gradient-gold animate-glow">TRAMPONT</span>
            </h1>

            {/* Titre / Fonction */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-cinema-gold/10 blur-xl"></div>
              <p className="relative text-2xl md:text-3xl text-cinema-gold-light font-light tracking-[0.3em] uppercase">
                Directeur de Post-Production
              </p>
            </div>

            {/* Ligne décorative */}
            <div className="mt-8 mb-10">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto"></div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-cinema-silver max-w-2xl mx-auto leading-relaxed">
              Supervision de plus de <span className="text-cinema-gold font-medium">30 films et séries</span>
              <br className="hidden md:block" />
              sélectionnés dans les plus grands festivals internationaux
            </p>
          </motion.div>

          {/* Coordonnées élégantes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <a 
              href="mailto:fabien.trampont@gmail.com"
              className="flex items-center justify-center gap-3 p-4 bg-cinema-dark/50 backdrop-blur-sm border-cinema rounded-sm hover-cinema group"
            >
              <Mail className="text-cinema-gold group-hover:text-cinema-gold-light transition-colors" size={20} />
              <span className="text-cinema-white text-sm">fabien.trampont@gmail.com</span>
            </a>
            
            <a 
              href="tel:0621152533"
              className="flex items-center justify-center gap-3 p-4 bg-cinema-dark/50 backdrop-blur-sm border-cinema rounded-sm hover-cinema group"
            >
              <Phone className="text-cinema-gold group-hover:text-cinema-gold-light transition-colors" size={20} />
              <span className="text-cinema-white text-sm">06 21 15 25 33</span>
            </a>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-cinema-dark/50 backdrop-blur-sm border-cinema rounded-sm">
              <MapPin className="text-cinema-gold" size={20} />
              <span className="text-cinema-white text-sm">Paris 9ème</span>
            </div>
          </motion.div>

          {/* CTA Download CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-center"
          >
            <a
              href="/cv-fabien-trampont.pdf"
              download
              className="btn-cinema inline-flex"
            >
              <Download size={20} />
              Télécharger le CV
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator élégant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3 text-cinema-silver/50">
            <span className="text-xs uppercase tracking-[0.3em] font-light">Découvrir</span>
            <div className="w-px h-16 bg-gradient-to-b from-cinema-gold/50 to-transparent">
              <motion.div
                animate={{ y: [0, 48, 0] }}
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
