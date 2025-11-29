'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Film, Calendar, Award, X, ExternalLink } from 'lucide-react'
import projectsData from '@/data/projects.json'

interface Project {
  id: string
  title: string
  director: string
  type: string
  producer: string
  festival?: string
  distributor?: string
  release?: string
  sales?: string
  year: number
  imdb: string
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
      {/* Affiche du film */}
      <div className="relative h-[500px] overflow-hidden rounded-sm border-cinema bg-cinema-dark">
        <div className="relative w-full h-full">
          <img
            src={project.poster}
            alt={`Affiche de ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay avec dégradé */}
          <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          {/* Badge année */}
          <div className="absolute top-4 right-4 bg-cinema-black/80 backdrop-blur-sm px-3 py-1 rounded-sm border-cinema">
            <span className="text-cinema-gold text-sm font-medium">{project.year}</span>
          </div>

          {/* Infos en bas */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-2 text-cinema-gold mb-2">
              <Film size={16} />
              <span className="text-xs uppercase tracking-wider">{project.type}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white tracking-wide">{project.title}</h3>
            <p className="text-cinema-gold-light text-sm mb-3">{project.director}</p>
            
            {project.festival && (
              <div className="flex items-start gap-2 text-cinema-silver text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Award size={14} className="mt-0.5 flex-shrink-0 text-cinema-gold" />
                <span className="line-clamp-2">{project.festival}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-cinema-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cinema-dark border-cinema rounded-sm max-w-5xl w-full relative my-8"
      >
        {/* Bouton fermeture */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-cinema-silver hover:text-cinema-gold transition-colors z-10 bg-cinema-black/50 backdrop-blur-sm p-2 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-5 gap-8 p-8">
          {/* Affiche */}
          <div className="md:col-span-2">
            <div className="relative h-[600px] rounded-sm overflow-hidden border-cinema">
              <img
                src={project.poster}
                alt={`Affiche de ${project.title}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Lien IMDb */}
            <a
              href={project.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-cinema w-full flex items-center justify-center"
            >
              <ExternalLink size={18} />
              Voir sur IMDb
            </a>
          </div>

          {/* Détails */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2 tracking-wide">{project.title}</h2>
              <p className="text-2xl text-cinema-gold-light mb-4">{project.director}</p>
              <div className="h-px w-20 bg-gradient-to-r from-cinema-gold to-transparent mb-6"></div>
            </div>
            
            <div className="space-y-4 text-cinema-white">
              <div className="flex items-start gap-3">
                <span className="text-cinema-gold font-medium w-32 flex-shrink-0">Type</span>
                <span className="text-cinema-silver">{project.type}</span>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-cinema-gold font-medium w-32 flex-shrink-0">Production</span>
                <span className="text-cinema-silver">{project.producer}</span>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-cinema-gold font-medium w-32 flex-shrink-0">Année</span>
                <span className="text-cinema-silver">{project.year}</span>
              </div>
              
              {project.festival && (
                <div className="flex items-start gap-3">
                  <span className="text-cinema-gold font-medium w-32 flex-shrink-0">Festivals</span>
                  <span className="text-cinema-silver">{project.festival}</span>
                </div>
              )}
              
              {project.distributor && (
                <div className="flex items-start gap-3">
                  <span className="text-cinema-gold font-medium w-32 flex-shrink-0">Distribution</span>
                  <span className="text-cinema-silver">{project.distributor}</span>
                </div>
              )}
              
              {project.release && (
                <div className="flex items-start gap-3">
                  <span className="text-cinema-gold font-medium w-32 flex-shrink-0">Sortie</span>
                  <span className="text-cinema-silver">{project.release}</span>
                </div>
              )}
              
              {project.sales && (
                <div className="flex items-start gap-3">
                  <span className="text-cinema-gold font-medium w-32 flex-shrink-0">Ventes</span>
                  <span className="text-cinema-silver">{project.sales}</span>
                </div>
              )}
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cinema-black/50 rounded-sm border-cinema">
                <Award size={16} className="text-cinema-gold" />
                <span className="text-cinema-gold text-sm">Post-Production : Fabien Trampont</span>
              </div>
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
    <section id="projects" className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-cinema-dark relative overflow-hidden vignette">
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
            <Film className="mx-4 text-cinema-gold" size={24} />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cinema-gold"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
            <span className="text-gradient-gold">Portfolio</span>
          </h2>
          <p className="text-cinema-silver text-xl max-w-3xl mx-auto mt-8 leading-relaxed font-light">
            Films et séries supervisés en post-production
            <br className="hidden md:block" />
            présentés dans les plus prestigieux festivals internationaux
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
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
              <div className="mb-12 text-center">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-cinema-gold to-transparent mx-auto mb-8"></div>
                <h3 className="text-3xl font-bold text-cinema-white mb-2">Autres Projets</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="text-center mt-16">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="btn-cinema"
          >
            {showAllProjects ? 'Voir moins' : 'Voir tous les projets'}
          </button>
        </div>

        {/* Additional Projects Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-cinema-gold/20"
        >
          <p className="text-cinema-gold text-xl font-medium mb-2">+ 20 autres films & séries</p>
          <p className="text-cinema-silver text-sm uppercase tracking-widest">
            Cannes • Berlin • Venise • Annecy • Rotterdam • San Sebastián
          </p>
        </motion.div>
      </div>

      {/* Film Scanline Effect */}
      <div className="film-scanline"></div>

      {/* Modal */}
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
