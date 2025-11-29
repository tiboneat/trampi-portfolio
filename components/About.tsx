'use client'

import { motion } from 'framer-motion'
import { Film, Users, Award, BookOpen } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Film, value: '30+', label: 'Films & Séries' },
    { icon: Award, value: '8+', label: 'Années d\'expérience' },
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
    <section id="about" className="section-padding bg-cinema-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cinema-gold/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="text-cinema-gold">propos</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cinema-gold to-cinema-blue mx-auto"></div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 card-cinema hover-scale"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-cinema-gold" />
              {stat.value && (
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              )}
              <div className="text-white/70 text-sm">{stat.label}</div>
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
          <div className="card-cinema p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-cinema-gold">
              Directeur de post-production depuis 2016
            </h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Spécialisé dans la supervision de films et séries à haute valeur artistique, 
              je pilote l'intégralité du processus de post-production pour garantir l'excellence 
              technique et la vision créative de chaque projet.
            </p>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-cinema-gold rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/80">{skill}</p>
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

