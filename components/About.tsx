'use client'

import { motion } from 'framer-motion'
import { Film, Users, Award, BookOpen, Check } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Film, value: '30+', label: 'Films & Séries' },
    { icon: Award, value: '8', label: 'Années d\'expérience' },
    { icon: Users, label: 'Management d\'équipes' },
    { icon: BookOpen, label: 'Enseignement' },
  ]

  const skills = [
    'Gestion des enjeux artistiques, techniques et budgétaires',
    'Pilotage complet de la post-production : planning, organisation, workflows et livraisons',
    'Recrutement, management et coordination d\'équipes artistiques et techniques',
    'Enseignement et formation : ESRA, CinéFabrique, Futurae',
  ]

  return (
    <section id="about" className="section-padding bg-cinema-black relative overflow-hidden">
      {/* Ornement de fond */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cinema-gold rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cinema-gold rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-cinema-gold"></div>
            <span className="mx-4 text-cinema-gold text-sm uppercase tracking-[0.3em]">Profil</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cinema-gold"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-wide">
            <span className="text-cinema-white">À </span>
            <span className="text-gradient-gold">propos</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-cinema-dark/50 backdrop-blur-sm border-cinema rounded-sm hover-cinema group"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-cinema-gold group-hover:text-cinema-gold-light transition-colors" />
              {stat.value && (
                <div className="text-4xl font-bold text-cinema-white mb-2 font-cinzel">{stat.value}</div>
              )}
              <div className="text-cinema-silver text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-cinema-dark/30 backdrop-blur-sm border-cinema rounded-sm p-10 md:p-14">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-cinema-gold tracking-wide font-cinzel">
                Directeur de post-production depuis 2016
              </h3>
              <div className="h-px w-24 bg-gradient-to-r from-cinema-gold to-transparent mb-6"></div>
              <p className="text-lg text-cinema-white leading-relaxed">
                Spécialisé dans la supervision de films et séries à haute valeur artistique, 
                je pilote l'intégralité du processus de post-production pour garantir l'excellence 
                technique et la vision créative de chaque projet.
              </p>
            </div>

            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-sm border-cinema flex items-center justify-center mt-1 group-hover:bg-cinema-gold/10 transition-colors">
                    <Check className="w-4 h-4 text-cinema-gold" />
                  </div>
                  <p className="text-cinema-silver leading-relaxed">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
