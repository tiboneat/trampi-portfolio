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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer relative"
    >
      <div className="relative h-[480px] overflow-hidden rounded-sm border border-white/10 bg-cinema-dark">
        <img
          src={project.poster}
          alt={`Affiche de ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay toujours visible mais plus fort au hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />
        
        {/* Badge année */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 border border-cinema-gold/30">
          <span className="text-cinema-gold text-sm font-medium">{project.year}</span>
        </div>

        {/* Infos toujours visibles */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 text-cinema-gold/80 mb-2">
            <Film size={14} />
            <span className="text-xs uppercase tracking-wider">{project.type}</span>
          </div>
          <h3 className="text-xl font-bold mb-1 text-white tracking-wide">{project.title}</h3>
          <p className="text-cinema-gold-light/80 text-sm">{project.director}</p>
          
          {project.festival && (
            <div className="flex items-start gap-2 text-white/60 text-xs mt-3">
              <Award size={12} className="mt-0.5 flex-shrink-0 text-cinema-gold" />
              <span className="line-clamp-2">{project.festival.replace(/\d{4}/g, '').replace(/\s+/g, ' ').trim()}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  // Nettoyer le festival (enlever l'année)
  const cleanFestival = project.festival ? project.festival.replace(/\d{4}/g, '').replace(/\s+/g, ' ').trim() : null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cinema-dark border border-white/10 rounded-sm max-w-4xl w-full relative my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-cinema-gold transition-colors z-10 bg-black/50 backdrop-blur-sm p-2 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative h-[500px] rounded-sm overflow-hidden border border-white/10">
            <img
              src={project.poster}
              alt={`Affiche de ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-5 py-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">{project.title}</h2>
              <p className="text-xl text-cinema-gold-light">{project.director}</p>
              <div className="h-px w-16 bg-cinema-gold/50 mt-4" />
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-cinema-gold w-28 flex-shrink-0">Type</span>
                <span className="text-white/80">{project.type}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-cinema-gold w-28 flex-shrink-0">Année</span>
                <span className="text-white/80">{project.year}</span>
              </div>
              {project.producer && (
                <div className="flex gap-3">
                  <span className="text-cinema-gold w-28 flex-shrink-0">Production</span>
                  <span className="text-white/80">{project.producer}</span>
                </div>
              )}
              {cleanFestival && (
                <div className="flex gap-3">
                  <span className="text-cinema-gold w-28 flex-shrink-0">Festival</span>
                  <span className="text-white/80">{cleanFestival}</span>
                </div>
              )}
              {project.distributor && (
                <div className="flex gap-3">
                  <span className="text-cinema-gold w-28 flex-shrink-0">Distribution</span>
                  <span className="text-white/80">{project.distributor}</span>
                </div>
              )}
              {project.sales && (
                <div className="flex gap-3">
                  <span className="text-cinema-gold w-28 flex-shrink-0">Ventes</span>
                  <span className="text-white/80">{project.sales}</span>
                </div>
              )}
            </div>
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
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-cinema-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cinema-gold/50" />
            <Film className="mx-4 text-cinema-gold" size={20} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cinema-gold/50" />
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
            <span className="text-cinema-gold">Portfolio</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mt-6 font-light">
            Films et séries supervisés en post-production
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
              <div className="mb-10 text-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cinema-gold/30 to-transparent mx-auto mb-6" />
                <h3 className="text-2xl font-light text-white/80">Autres Projets</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-8 py-3 border border-cinema-gold/50 text-cinema-gold text-sm uppercase tracking-wider hover:bg-cinema-gold/10 transition-all duration-300"
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
