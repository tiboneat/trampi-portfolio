'use client'

import { motion } from 'framer-motion'
import { Mail, BookOpen } from 'lucide-react'

const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-cinema-black relative overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 id="about-title" className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-wide">
            <span className="text-cinema-gold">Qui je suis</span>
            <span className="text-white/50"> / </span>
            <span className="text-cinema-gold">Ma vision</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-4 sm:mt-6" aria-hidden="true" />
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6 text-white/80 text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0"
        >
          <p>
            Je m'appelle <span className="text-cinema-gold">Fabien</span> et je suis directeur de post-production depuis 2016.
          </p>
          
          <p>
            Porté par une vraie passion pour l'image et les récits, j'accompagne réalisateurs et producteurs sur des films et séries qui demandent un accompagnement artistique et technique rigoureux.
          </p>
          
          <p>
            <span className="text-cinema-gold">Mon rôle :</span> garantir une post-production fluide, maîtrisée et pleinement fidèle à la vision créative du film.
          </p>
          
          <p>
            J'anticipe les enjeux artistiques, techniques et budgétaires, je structure les workflows, j'organise les plannings et je coordonne les livraisons pour que chaque étape se déroule avec clarté et efficacité.
          </p>
          
          <p className="italic text-cinema-gold/80">
            Pour moi, la post-production doit être un espace créatif et serein.
          </p>
          
          <p>
            Un moment où le film ou la série se précise, où les intentions s'affinent, et où chacun peut travailler dans la même direction — avec précision, confiance et plaisir.
          </p>
        </motion.div>

        {/* Enseignement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <BookOpen className="text-cinema-gold" size={20} aria-hidden="true" />
            <h3 className="text-lg sm:text-xl font-light text-white">Enseignement & Interventions</h3>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {['ESRA', 'CinéFabrique', 'Futurae'].map((school) => (
              <span
                key={school}
                className="px-4 sm:px-5 py-2 bg-cinema-dark/50 border border-cinema-gold/30 text-cinema-gold text-xs sm:text-sm tracking-wider"
              >
                {school}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bouton contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="mailto:fabien.trampont@gmail.com?subject=Discussion%20projet"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-cinema-gold text-cinema-black font-medium tracking-wider uppercase text-xs sm:text-sm hover:bg-cinema-gold-light transition-all duration-300 min-h-[44px]"
            aria-label="Envoyer un email pour discuter de votre projet"
          >
            <Mail size={16} aria-hidden="true" />
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
