'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const Formation = () => {
  const formations = [
    {
      period: '2004 - 2006',
      school: 'ESLSCA',
      fullName: 'École Supérieure Libre des Sciences Commerciales Appliquées',
      degree: 'Diplôme Bac +5',
      specialization: 'Management Organisation Conseil',
      icon: '🎓',
    },
    {
      period: '2001 - 2004',
      school: 'ADVANCIA',
      fullName: 'École de la Chambre de Commerce et d\'Industrie de Paris',
      degree: 'Diplôme Bac+3',
      specialization: 'Marketing',
      icon: '📚',
    },
  ]

  return (
    <section id="formation" className="section-padding bg-cinema-black relative overflow-hidden">
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
            <span className="text-cinema-gold">Formation</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cinema-gold to-cinema-blue mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-cinema p-8 hover-scale"
            >
              <div className="text-5xl mb-4">{formation.icon}</div>
              
              <div className="flex items-center gap-2 text-cinema-gold mb-4">
                <GraduationCap size={20} />
                <span className="font-medium">{formation.period}</span>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white">{formation.school}</h3>
              <p className="text-white/60 text-sm mb-4">{formation.fullName}</p>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="text-cinema-blue" size={16} />
                  <span className="text-white/80">{formation.degree}</span>
                </div>
                <p className="text-cinema-gold text-sm ml-6">{formation.specialization}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enseignement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="card-cinema p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Enseignement & Interventions</h3>
            <p className="text-lg text-white/80 mb-6">
              Formateur en post-production
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['ESRA', 'CinéFabrique', 'Futurae'].map((school, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-cinema-gold/10 border border-cinema-gold text-cinema-gold rounded-full font-medium"
                >
                  {school}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Formation

