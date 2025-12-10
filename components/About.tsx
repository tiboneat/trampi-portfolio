'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section 
      id="about" 
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-cinema-black dark:bg-cinema-black light:bg-light-bg relative overflow-hidden transition-colors duration-300"
      aria-labelledby="about-title"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 id="about-title" className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-wide">
            <span className="text-cinema-gold">{t('Qui je suis', 'About me')}</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-4 sm:mt-6" aria-hidden="true" />
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 overflow-hidden rounded-sm border border-cinema-gold/30">
                <img
                  src="/fabien-trampont.jpg"
                  alt="Fabien Trampont - Directeur de Post-Production"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Cadre décoratif */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-cinema-gold/20 rounded-sm -z-10" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-4 sm:space-y-6 text-white/80 dark:text-white/80 light:text-light-text text-base sm:text-lg leading-relaxed font-light px-2 sm:px-0"
          >
            <motion.p variants={itemVariants}>
              {t(
                "Je m'appelle ",
                "My name is "
              )}
              <span className="text-cinema-gold">Fabien</span>
              {t(
                " et je suis directeur de post-production depuis 2016.",
                " and I've been a post-production director since 2016."
              )}
            </motion.p>
            
            <motion.p variants={itemVariants}>
              {t(
                "Porté par une vraie passion pour l'image et les récits, j'accompagne réalisateurs et producteurs sur des films et séries qui demandent un accompagnement artistique et technique rigoureux.",
                "Driven by a true passion for images and storytelling, I work alongside directors and producers on films and series that require rigorous artistic and technical support."
              )}
            </motion.p>
            
            <motion.p variants={itemVariants}>
              <span className="text-cinema-gold">{t('Mon rôle :', 'My role:')}</span>
              {t(
                " garantir une post-production fluide, maîtrisée et pleinement fidèle à la vision créative du film.",
                " ensuring smooth, controlled post-production that fully respects the film's creative vision."
              )}
            </motion.p>
            
            <motion.p variants={itemVariants}>
              {t(
                "J'anticipe les enjeux artistiques, techniques et budgétaires, je structure les workflows, j'organise les plannings et je coordonne les livraisons pour que chaque étape se déroule avec clarté et efficacité.",
                "I anticipate artistic, technical and budgetary challenges, structure workflows, organize schedules and coordinate deliveries so that each step proceeds with clarity and efficiency."
              )}
            </motion.p>
            
            <motion.p variants={itemVariants} className="italic text-cinema-gold/80">
              {t(
                "Pour moi, la post-production doit être un espace créatif et serein.",
                "For me, post-production should be a creative and serene space."
              )}
            </motion.p>
            
            <motion.p variants={itemVariants}>
              {t(
                "Un moment où le film ou la série se précise, où les intentions s'affinent, et où chacun peut travailler dans la même direction — avec précision, confiance et plaisir.",
                "A time when the film or series takes shape, intentions are refined, and everyone can work in the same direction — with precision, confidence and enjoyment."
              )}
            </motion.p>
          </motion.div>
        </div>

        {/* Bouton contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="mailto:fabien.trampont@gmail.com?subject=Discussion%20projet"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-cinema-gold text-cinema-black font-medium tracking-wider uppercase text-xs sm:text-sm hover:bg-cinema-gold-light transition-all duration-300 min-h-[44px]"
            aria-label={t('Envoyer un email pour discuter de votre projet', 'Send an email to discuss your project')}
          >
            <Mail size={16} aria-hidden="true" />
            {t('Discutons de votre projet', "Let's discuss your project")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
