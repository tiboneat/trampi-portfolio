'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Film, Calendar, Award, X } from 'lucide-react'
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
  posterColor?: string
}

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="card-cinema hover-scale cursor-pointer group"
    >
      {/* Poster placeholder */}
      <div 
        className="h-96 flex items-center justify-center text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.posterColor || '#2d2d2d'} 0%, #1a1a1a 100%)` }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
        <div className="relative z-10 text-center p-6">
          <Film className="w-16 h-16 mx-auto mb-4 text-white/60" />
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="flex items-center gap-2 text-cinema-gold">
            <Calendar size={16} />
            <span className="text-sm">{project.year}</span>
          </div>
        </div>
      </div>
      
      {/* Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-cinema-gold mb-2">{project.director}</p>
        <p className="text-white/60 text-sm">{project.type}</p>
        {project.festival && (
          <div className="flex items-start gap-2 mt-4 text-cinema-gold text-sm">
            <Award size={16} className="mt-0.5 flex-shrink-0" />
            <span>{project.festival}</span>
          </div>
        )}
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
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cinema-gray rounded-lg max-w-3xl w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Poster */}
          <div 
            className="h-96 rounded-lg flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${project.posterColor || '#2d2d2d'} 0%, #1a1a1a 100%)` }}
          >
            <div className="text-center">
              <Film className="w-24 h-24 mx-auto text-white/40" />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <p className="text-xl text-cinema-gold">{project.director}</p>
            
            <div className="space-y-3 text-white/80">
              <div>
                <span className="text-cinema-gold font-medium">Type : </span>
                {project.type}
              </div>
              <div>
                <span className="text-cinema-gold font-medium">Production : </span>
                {project.producer}
              </div>
              {project.festival && (
                <div>
                  <span className="text-cinema-gold font-medium">Festival : </span>
                  {project.festival}
                </div>
              )}
              {project.distributor && (
                <div>
                  <span className="text-cinema-gold font-medium">Distribution : </span>
                  {project.distributor}
                </div>
              )}
              {project.release && (
                <div>
                  <span className="text-cinema-gold font-medium">Sortie : </span>
                  {project.release}
                </div>
              )}
              {project.sales && (
                <div>
                  <span className="text-cinema-gold font-medium">Ventes : </span>
                  {project.sales}
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
    <section id="projects" className="section-padding bg-cinema-black relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projets <span className="text-cinema-gold">Sélectionnés</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cinema-gold to-cinema-blue mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Une sélection de films et séries présentés dans les plus grands festivals internationaux
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project as Project}
              onClick={() => setSelectedProject(project as Project)}
            />
          ))}
        </div>

        {/* Other Projects */}
        {showAllProjects && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Autres projets</h3>
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

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-8 py-4 bg-cinema-anthracite text-white rounded-full hover:bg-cinema-gold hover:text-cinema-black transition-all duration-300 font-medium"
          >
            {showAllProjects ? 'Voir moins' : 'Voir tous les projets'}
          </button>
        </div>

        <div className="text-center mt-8 text-white/60">
          <p className="text-lg">+ 20 autres films & séries sélectionnés</p>
          <p className="text-sm mt-2">Cannes • Berlin • Venise • Annecy • Rotterdam</p>
        </div>
      </div>

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

