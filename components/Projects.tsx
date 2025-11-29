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
  imdb?: string
}

const getGradient = (index: number) => {
  const gradients = [
    'from-amber-900/40 to-amber-950/40',
    'from-slate-900/40 to-slate-950/40',
    'from-stone-900/40 to-stone-950/40',
    'from-zinc-900/40 to-zinc-950/40',
    'from-neutral-900/40 to-neutral-950/40',
    'from-gray-900/40 to-gray-950/40',
  ]
  return gradients[index % gradients.length]
}

const ProjectCard = ({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer relative"
    >
      {/* Affiche stylisée du film */}
      <div className="relative h-[500px] overflow-hidden rounded-sm border-cinema bg-cinema-dark">
        <div className={`relative w-full h-full bg-gradient-to-br ${getGradient(index)} flex items-center justify-center p-8`}>
          {/* Ornement de fond */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-cinema-gold rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-cinema-gold rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cinema-gold"></div>
          </div>

          {/* Grain de film */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          {/* Icône Film */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <Film className="w-32 h-32 text-cinema-gold" />
          </div>

          {/* Badge année */}
          <div className="absolute top-4 right-4 bg-cinema-black/80 backdrop-blur-sm px-3 py-1 rounded-sm border-cinema">
            <span className="text-cinema-gold text-sm font-medium">{project.year}</span>
          </div>

          {/* Contenu */}
          <div className="relative z-10 text-center">
            <div className="mb-6">
              <Film className="w-16 h-16 mx-auto text-cinema-gold opacity-60 mb-4" />
              <div className="h-px w-20 bg-cinema-gold mx-auto mb-6"></div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white tracking-wide leading-tight">{project.title}</h3>
            <p className="text-cinema-gold-light text-lg mb-3 font-light">{project.director}</p>
            <div className="flex items-center justify-center gap-2 text-cinema-silver text-sm mb-4">
              <Film size={14} />
              <span className="uppercase tracking-wider">{project.type}</span>
            </div>
          </div>

          {/* Infos en bas */}
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.festival && (
              <div className="flex items-start gap-2 text-cinema-silver text-sm">
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
        className="bg-cinema-dark border-cinema rounded-sm max-w-4xl w-full relative my-8"
      >
        {/* Bouton fermeture */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-cinema-silver hover:text-cinema-gold transition-colors z-10 bg-cinema-black/50 backdrop-blur-sm p-2 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          {/* Titre principal */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Film className="text-cinema-gold" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">{project.title}</h2>
            </div>
            <p className="text-2xl text-cinema-gold-light mb-4">{project.director}</p>
            <div className="h-px w-24 bg-gradient-to-r from-cinema-gold to-transparent mb-6"></div>
          </div>
          
          {/* Détails */}
          <div className="grid md:grid-cols-2 gap-6 text-cinema-white">
            <div className="space-y-4">
              <div>
                <span className="text-cinema-gold font-medium text-sm uppercase tracking-wider block mb-2">Type</span>
                <span className="text-cinema-silver text-lg">{project.type}</span>
              </div>
              
              <div>
                <span className="text-cinema-gold font-medium text-sm uppercase tracking-wider block mb-2">Production</span>
                <span className="text-cinema-silver text-lg">{project.producer}</span>
              </div>
              
              <div>
                <span className="text-cinema-gold font-medium text-sm uppercase tracking-wider block mb-2">Année</span>
                <span className="text-cinema-silver text-lg">{project.year}</span>
              </div>
            </div>

            <div className="space-y-4">
              {project.festival && (
                <div>
                  <span className="text-cinema-gold font-medium text-sm uppercase tracking-wider block mb-2">Festivals</span>
                  <span className="text-cinema-silver text-lg">{project.festival}</span>
                </div>
              )}
              
              {project.distributor && (
                <div>
                  <span className="text-cinema-gold font-medium text-sm uppercase tracking-wider block mb-2">Distribution</span>
                  <span className="text-cinema-silver text-lg">{project.distributor}</span>
                </div>
              )}
              
              {project.release && (
                <div>
                  <span className="text-cinema-gold font-medium text-sm uppercase tracking-wider block mb-2">Sortie</span>
                  <span className="text-cinema-silver text-lg">{project.release}</span>
                </div>
              )}
            </div>
          </div>

          {project.sales && (
            <div className="mt-6 pt-6 border-t border-cinema-gold/20">
              <span className="text-cinema-gold font-medium text-sm uppercase tracking-wider block mb-2">Ventes internationales</span>
              <span className="text-cinema-silver text-lg">{project.sales}</span>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-cinema-gold/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cinema-black/50 rounded-sm border-cinema">
              <Award size={16} className="text-cinema-gold" />
              <span className="text-cinema-gold text-sm">Post-Production : Fabien Trampont</span>
            </div>
          </div>

          {project.imdb && (
            <div className="mt-6">
              <a
                href={project.imdb}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cinema inline-flex"
              >
                <ExternalLink size={18} />
                Voir sur IMDb
              </a>
            </div>
          )}
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
          {projectsData.featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project as Project}
              onClick={() => setSelectedProject(project as Project)}
              index={index}
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectsData.other.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project as Project}
                    onClick={() => setSelectedProject(project as Project)}
                    index={index + 6}
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

