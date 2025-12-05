'use client'

import { motion } from 'framer-motion'
import { Mail, BookOpen } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-cinema-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
            <span className="text-cinema-gold">Qui je suis</span>
            <span className="text-white/50"> / </span>
            <span className="text-cinema-gold">Ma vision</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-white/80 text-lg leading-relaxed font-light"
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
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-cinema-gold" size={24} />
            <h3 className="text-xl font-light text-white">Enseignement & Interventions</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['ESRA', 'CinéFabrique', 'Futurae'].map((school) => (
              <span
                key={school}
                className="px-5 py-2 bg-cinema-dark/50 border border-cinema-gold/30 text-cinema-gold text-sm tracking-wider"
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
          className="mt-16 text-center"
        >
          <a
            href="mailto:fabien.trampont@gmail.com?subject=Discussion%20projet"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cinema-gold text-cinema-black font-medium tracking-wider uppercase text-sm hover:bg-cinema-gold-light transition-all duration-300"
          >
            <Mail size={18} />
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
