'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Film, Award, X } from 'lucide-react'
import projectsData from '@/data/projects.json'

interface Project {
  id: string
  title: string
  director: string
  type: string
  producer?: string
  festival?: string
  distributor?: string
  release?: string
  sales?: string
  year: number
  poster: string
}

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
      className="group cursor-pointer relative focus-within:ring-2 focus-within:ring-cinema-gold rounded-sm"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Voir les détails de ${project.title} réalisé par ${project.director}`}
    >
      <div className="relative h-[380px] sm:h-[420px] md:h-[480px] overflow-hidden rounded-sm border border-white/10 bg-cinema-dark">
        <img
          src={project.poster}
          alt={`Affiche du film ${project.title}`}
          className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
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
            <span className="text-[10px] sm:text-xs uppercase tracking-wider">{project.type}</span>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-white tracking-wide">{project.title}</h3>
          <p className="text-cinema-gold-light/80 text-xs sm:text-sm">{project.director}</p>
          
          {project.festival && (
            <div className="flex items-start gap-2 text-white/60 text-[10px] sm:text-xs mt-2 sm:mt-3">
              <Award size={12} className="mt-0.5 flex-shrink-0 text-cinema-gold" aria-hidden="true" />
              <span className="line-clamp-2">{project.festival.replace(/\d{4}/g, '').replace(/\s+/g, ' ').trim()}</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const cleanFestival = project.festival ? project.festival.replace(/\d{4}/g, '').replace(/\s+/g, ' ').trim() : null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cinema-dark border border-white/10 rounded-sm max-w-4xl w-full relative my-4 sm:my-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/60 hover:text-cinema-gold transition-colors z-10 bg-black/50 backdrop-blur-sm p-2 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Fermer la fenêtre"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-white/10 bg-black flex items-center justify-center">
            <img
              src={project.poster}
              alt={`Affiche du film ${project.title}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="space-y-4 sm:space-y-5 py-2 sm:py-4">
            <div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wide">{project.title}</h2>
              <p className="text-lg sm:text-xl text-cinema-gold-light">{project.director}</p>
              <div className="h-px w-16 bg-cinema-gold/50 mt-4" aria-hidden="true" />
            </div>
            
            <dl className="space-y-2 sm:space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">Type</dt>
                <dd className="text-white/80">{project.type}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">Année</dt>
                <dd className="text-white/80">{project.year}</dd>
              </div>
              {project.producer && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">Production</dt>
                  <dd className="text-white/80">{project.producer}</dd>
                </div>
              )}
              {cleanFestival && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">Festival</dt>
                  <dd className="text-white/80">{cleanFestival}</dd>
                </div>
              )}
              {project.distributor && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">Distribution</dt>
                  <dd className="text-white/80">{project.distributor}</dd>
                </div>
              )}
              {project.sales && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">Ventes</dt>
                  <dd className="text-white/80">{project.sales}</dd>
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

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-cinema-dark relative overflow-hidden"
      aria-labelledby="portfolio-title"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 font-light px-4">
            Films et séries supervisés en post-production
          </p>
        </motion.header>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {projectsData.featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project as Project}
              onClick={() => setSelectedProject(project as Project)}
            />
          ))}
        </div>

        {/* Other Projects */}
        <AnimatePresence>
          {showAllProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="mb-8 sm:mb-10 text-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold/30 to-transparent mx-auto mb-4 sm:mb-6" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-light text-white/80">Autres Projets</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {projectsData.other.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project as Project}
                    onClick={() => setSelectedProject(project as Project)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-6 sm:px-8 py-3 border border-cinema-gold/50 text-cinema-gold text-xs sm:text-sm uppercase tracking-wider hover:bg-cinema-gold/10 transition-all duration-300 min-h-[44px]"
            aria-expanded={showAllProjects}
          >
            {showAllProjects ? 'Voir moins' : `Voir les ${projectsData.other.length} autres projets`}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
