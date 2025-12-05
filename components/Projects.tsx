'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Film, Award, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import projectsData from '@/data/projects.json'

interface Project {
  id: string
  title: string
  titleEn?: string
  director: string
  directorEn?: string
  type: string
  typeEn?: string
  producer?: string
  producerEn?: string
  festival?: string
  festivalEn?: string
  distributor?: string
  distributorEn?: string
  release?: string
  sales?: string
  salesEn?: string
  year: number
  poster: string
}

const ProjectCard = ({ project, onClick, lang }: { project: Project; onClick: () => void; lang: string }) => {
  const title = lang === 'en' && project.titleEn ? project.titleEn : project.title
  const type = lang === 'en' && project.typeEn ? project.typeEn : project.type
  const festival = lang === 'en' && project.festivalEn ? project.festivalEn : project.festival

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-80px" }}
      onClick={onClick}
      className="group cursor-pointer relative focus-within:ring-2 focus-within:ring-cinema-gold rounded-sm"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`${lang === 'fr' ? 'Voir les détails de' : 'View details of'} ${title}`}
    >
      <div className="relative h-[380px] sm:h-[420px] md:h-[480px] overflow-hidden rounded-sm border border-white/10 bg-cinema-dark">
        <motion.img
          src={project.poster}
          alt={`${lang === 'fr' ? 'Affiche du film' : 'Movie poster'} ${title}`}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" aria-hidden="true" />
        
        {/* Badge année */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/70 backdrop-blur-sm px-2 sm:px-3 py-1 border border-cinema-gold/30">
          <span className="text-cinema-gold text-xs sm:text-sm font-medium">{project.year}</span>
        </div>

        {/* Infos */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <div className="flex items-center gap-2 text-cinema-gold/80 mb-1 sm:mb-2">
            <Film size={12} aria-hidden="true" />
            <span className="text-[10px] sm:text-xs uppercase tracking-wider">{type}</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-white dark:text-white light:text-white tracking-wide">{title}</h3>
          <p className="text-cinema-gold-light/80 text-xs sm:text-sm">{project.director}</p>
          
          {festival && (
            <div className="flex items-start gap-2 text-white/60 text-[10px] sm:text-xs mt-2 sm:mt-3">
              <Award size={12} className="mt-0.5 flex-shrink-0 text-cinema-gold" aria-hidden="true" />
              <span className="line-clamp-2">{festival.replace(/\d{4}/g, '').replace(/\s+/g, ' ').trim()}</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

const ProjectModal = ({ project, onClose, lang, t }: { project: Project; onClose: () => void; lang: string; t: (fr: string, en: string) => string }) => {
  const title = lang === 'en' && project.titleEn ? project.titleEn : project.title
  const type = lang === 'en' && project.typeEn ? project.typeEn : project.type
  const director = lang === 'en' && project.directorEn ? project.directorEn : project.director
  const producer = lang === 'en' && project.producerEn ? project.producerEn : project.producer
  const festival = lang === 'en' && project.festivalEn ? project.festivalEn : project.festival
  const distributor = lang === 'en' && project.distributorEn ? project.distributorEn : project.distributor
  const sales = lang === 'en' && project.salesEn ? project.salesEn : project.sales

  const cleanFestival = festival ? festival.replace(/\d{4}/g, '').replace(/\s+/g, ' ').trim() : null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 dark:bg-black/95 light:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cinema-dark dark:bg-cinema-dark light:bg-white border border-white/10 dark:border-white/10 light:border-light-border rounded-sm max-w-4xl w-full relative my-4 sm:my-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/60 hover:text-cinema-gold transition-colors z-10 bg-black/50 backdrop-blur-sm p-2 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={t('Fermer la fenêtre', 'Close window')}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-white/10">
            <img
              src={project.poster}
              alt={`${t('Affiche du film', 'Movie poster')} ${title}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 sm:space-y-5 py-2 sm:py-4">
            <div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-light-text mb-2 tracking-wide">{title}</h2>
              <p className="text-lg sm:text-xl text-cinema-gold-light">{director}</p>
              <div className="h-px w-16 bg-cinema-gold/50 mt-4" aria-hidden="true" />
            </div>
            
            <dl className="space-y-2 sm:space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Type', 'Type')}</dt>
                <dd className="text-white/80 dark:text-white/80 light:text-light-text">{type}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Année', 'Year')}</dt>
                <dd className="text-white/80 dark:text-white/80 light:text-light-text">{project.year}</dd>
              </div>
              {producer && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Production', 'Production')}</dt>
                  <dd className="text-white/80 dark:text-white/80 light:text-light-text">{producer}</dd>
                </div>
              )}
              {cleanFestival && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Festival', 'Festival')}</dt>
                  <dd className="text-white/80 dark:text-white/80 light:text-light-text">{cleanFestival}</dd>
                </div>
              )}
              {distributor && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Distribution', 'Distribution')}</dt>
                  <dd className="text-white/80 dark:text-white/80 light:text-light-text">{distributor}</dd>
                </div>
              )}
              {sales && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Ventes', 'Sales')}</dt>
                  <dd className="text-white/80 dark:text-white/80 light:text-light-text">{sales}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const { lang, t } = useLanguage()

  // Animation pour le conteneur de la grille
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-cinema-dark dark:bg-cinema-dark light:bg-white relative overflow-hidden transition-colors duration-300"
      aria-labelledby="portfolio-title"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-cinema-gold/50" />
            <Film className="mx-3 sm:mx-4 text-cinema-gold" size={18} />
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-cinema-gold/50" />
          </div>
          <h2 id="portfolio-title" className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 tracking-wide">
            <span className="text-cinema-gold">Portfolio</span>
          </h2>
          <p className="text-white/50 dark:text-white/50 light:text-light-text-muted text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 font-light px-4">
            {t('Films et séries supervisés en post-production', 'Films and series supervised in post-production')}
          </p>
        </motion.header>

        {/* Featured Projects */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project as Project}
              onClick={() => setSelectedProject(project as Project)}
              lang={lang}
            />
          ))}
        </motion.div>

        {/* Other Projects */}
        <AnimatePresence>
          {showAllProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="mb-8 sm:mb-10 text-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold/30 to-transparent mx-auto mb-4 sm:mb-6" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-light text-white/80 dark:text-white/80 light:text-light-text">
                  {t('Autres Projets', 'Other Projects')}
                </h3>
              </div>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {projectsData.other.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project as Project}
                    onClick={() => setSelectedProject(project as Project)}
                    lang={lang}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show More Button */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-6 sm:px-8 py-3 border border-cinema-gold/50 text-cinema-gold text-xs sm:text-sm uppercase tracking-wider hover:bg-cinema-gold/10 transition-all duration-300 min-h-[44px]"
            aria-expanded={showAllProjects}
          >
            {showAllProjects 
              ? t('Voir moins', 'Show less') 
              : t(`Voir les ${projectsData.other.length} autres projets`, `View ${projectsData.other.length} more projects`)
            }
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            lang={lang}
            t={t}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
