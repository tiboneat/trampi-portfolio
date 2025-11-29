'use client'

import { motion } from 'framer-motion'
import { Briefcase, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      period: 'Depuis 2016',
      title: 'Directeur de Post-Production',
      company: 'Freelance',
      description: 'Supervision de plus de 30 films et séries',
      achievements: [
        'Gestion des enjeux artistiques, techniques et budgétaires',
        'Pilotage complet : planning, organisation, workflows, livraisons',
        'Recrutement et management d\'équipes artistiques et techniques',
        'Formation et enseignement : ESRA, CinéFabrique, Futurae',
      ],
      highlight: true,
    },
    {
      period: '2010 - 2016',
      title: 'Responsable Commercial Cinéma',
      company: 'Titra Film / TVS',
      description: 'Gestion et développement d\'un portefeuille clients',
      achievements: [
        'Producteurs : Fidélité Films, Kazak Productions, Rectangle Productions',
        'Distributeurs : Ad Vitam, Diaphana, Le Pacte',
        'Vendeurs Internationaux : Doc and Film, Memento Films, Pyramide',
      ],
      highlight: false,
    },
  ]

  return (
    <section id="experience" className="section-padding bg-cinema-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cinema-gold/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cinema-gold">Parcours</span> Professionnel
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cinema-gold to-cinema-blue mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cinema-gold via-cinema-blue to-cinema-gold"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-cinema-gold rounded-full transform -translate-x-1/2 border-4 border-cinema-gray z-10">
                  <div className="absolute inset-0 bg-cinema-gold rounded-full animate-ping opacity-75"></div>
                </div>

                <div className={`card-cinema p-8 ${exp.highlight ? 'border-2 border-cinema-gold' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="text-cinema-gold" size={24} />
                    <span className="text-cinema-gold font-medium">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white">{exp.title}</h3>
                  <p className="text-cinema-blue font-medium mb-4">{exp.company}</p>
                  <p className="text-white/80 mb-6">{exp.description}</p>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <TrendingUp className="text-cinema-gold flex-shrink-0 mt-1" size={16} />
                        <p className="text-white/70 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

