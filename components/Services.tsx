'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Network, TrendingUp, Settings, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: Briefcase,
      title: t('Pilotage complet de la post-production', 'Complete post-production management'),
      description: t(
        'Budget, planning, workflows, livraisons : je structure et sécurise l\'ensemble du processus pour que la fabrication avance sereinement, sans stress ni surprise.',
        'Budget, planning, workflows, deliveries: I structure and secure the entire process so that production moves forward smoothly, without stress or surprises.'
      ),
    },
    {
      icon: Users,
      title: t('Des équipes bien accompagnées', 'Well-supported teams'),
      description: t(
        'Recrutement, coordination et management des équipes artistiques et techniques, avec une attention portée autant sur l\'efficacité que sur la dynamique humaine.',
        'Recruitment, coordination and management of artistic and technical teams, with attention paid to both efficiency and human dynamics.'
      ),
    },
    {
      icon: Network,
      title: t('Supervision des partenaires et prestataires', 'Partner and vendor supervision'),
      description: t(
        'Je coordonne l\'ensemble des partenaires (laboratoires, studios VFX, techniciens) en négociant, anticipant et assurant un suivi rigoureux de chaque étape.',
        'I coordinate all partners (labs, VFX studios, technicians) by negotiating, anticipating and ensuring rigorous follow-up at each stage.'
      ),
    },
    {
      icon: TrendingUp,
      title: t('Optimisation budgétaire et stratégique', 'Budget and strategic optimization'),
      description: t(
        'J\'analyse les besoins, propose des solutions pertinentes et identifie les pistes d\'optimisation, tout en préservant l\'ambition artistique et la cohérence technique. Je sécurise le suivi budgétaire jusqu\'aux deliveries.',
        'I analyze needs, propose relevant solutions and identify optimization opportunities, while respecting artistic ambition and technical consistency. I secure budget tracking through to French and international deliveries.'
      ),
    },
    {
      icon: Settings,
      title: t('Services sur mesure', 'Custom services'),
      description: t(
        'Je peux intervenir sur une mission spécifique ou prendre en charge l\'ensemble de la post-production, selon les besoins et la configuration du projet.',
        'I can work on a specific mission or take charge of the entire post-production, depending on the needs and configuration of the project.'
      ),
    },
    {
      icon: GraduationCap,
      title: t('Enseignement', 'Teaching'),
      description: t(
        'En parallèle, j\'interviens en tant que formateur dans les écoles suivantes : ESRA, CinéFabrique et Futurae.',
        'In parallel, I work as a trainer in the following schools: ESRA, CinéFabrique and Futurae.'
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="expertise" 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-cinema-dark dark:bg-cinema-dark light:bg-[#FAFAF8] relative overflow-hidden transition-colors duration-300"
      aria-labelledby="expertise-title"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 id="expertise-title" className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 tracking-wide">
            <span className="text-cinema-gold">{t('Expertise', 'Expertise')}</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mt-4 sm:mt-6" aria-hidden="true" />
        </motion.header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="p-6 sm:p-8 bg-cinema-black/50 dark:bg-cinema-black/50 light:bg-light-bg/60 border border-white/5 dark:border-white/5 light:border-light-border rounded-sm hover:border-cinema-gold/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cinema-gold/10 rounded-sm border border-cinema-gold/30">
                  <service.icon className="w-6 h-6 text-cinema-gold" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-medium text-white dark:text-white light:text-light-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 dark:text-white/70 light:text-light-text-muted text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services




