'use client'

import { Mail, Phone, MapPin, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec effet cinéma */}
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-black via-cinema-gray to-cinema-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cinema-gold rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cinema-blue rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container-custom relative z-10 px-6 md:px-12 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo et infos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Photo placeholder */}
            <div className="w-64 h-64 mb-8 rounded-lg bg-gradient-to-br from-cinema-gold to-cinema-blue p-1">
              <div className="w-full h-full bg-cinema-gray rounded-lg flex items-center justify-center">
                <div className="text-6xl font-bold text-cinema-gold">FT</div>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="text-cinema-gold" size={20} />
                <span>11 Boulevard de Clichy, 75009 Paris</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-cinema-gold" size={20} />
                <a href="tel:0621152533" className="hover:text-cinema-gold transition-colors">
                  06 21 15 25 33
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-cinema-gold" size={20} />
                <a href="mailto:fabien.trampont@gmail.com" className="hover:text-cinema-gold transition-colors">
                  fabien.trampont@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Titre et CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Fabien <span className="text-cinema-gold">Trampont</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cinema-gold to-cinema-blue mb-8 mx-auto md:mx-0"></div>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
              Directeur de <span className="text-cinema-gold font-medium">Post-Production</span>
            </p>
            <p className="text-lg text-white/70 mb-12 max-w-lg">
              Supervision de plus de 30 films et séries sélectionnés dans les plus grands festivals internationaux
            </p>

            <a
              href="/cv-fabien-trampont.pdf"
              download
              className="inline-flex items-center gap-3 bg-cinema-gold text-cinema-black px-8 py-4 rounded-full hover:bg-white transition-all duration-300 font-medium text-lg hover:scale-105 transform"
            >
              <Download size={20} />
              Télécharger le CV
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-sm uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-cinema-gold rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header

