'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Film, Award, X, Play, ChevronLeft, ChevronRight } from 'lucide-react'
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
  trailer?: string
}

// Générer le schema.org JSON-LD pour un film
const generateMovieSchema = (project: Project) => ({
  '@context': 'https://schema.org',
  '@type': 'Movie',
  name: project.title,
  alternateName: project.titleEn,
  datePublished: project.year.toString(),
  director: {
    '@type': 'Person',
    name: project.director
  },
  productionCompany: project.producer ? {
    '@type': 'Organization',
    name: project.producer
  } : undefined,
  image: `https://trampi.vercel.app${project.poster}`,
  ...(project.festival && { 
    award: project.festival.replace(/\d{4}/g, '').trim() 
  }),
  ...(project.distributor && {
    distributor: {
      '@type': 'Organization',
      name: project.distributor.replace(/Distribution France\s*:\s*/, '').replace(/Diffusion\s*/, '')
    }
  }),
  contributor: {
    '@type': 'Person',
    name: 'Fabien Trampont',
    jobTitle: 'Directeur de Post-Production',
    url: 'https://trampi.vercel.app'
  }
})

const ProjectCard = ({ project, onClick, lang }: { project: Project; onClick: () => void; lang: string }) => {
  const title = lang === 'en' && project.titleEn ? project.titleEn : project.title
  const type = lang === 'en' && project.typeEn ? project.typeEn : project.type
  const festival = lang === 'en' && project.festivalEn ? project.festivalEn : project.festival

  // Effet projecteur avec suivi de la souris
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
  }

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
      <div 
        className="poster-spotlight relative h-[380px] sm:h-[420px] md:h-[480px] overflow-hidden rounded-sm border border-white/10 bg-cinema-dark"
        onMouseMove={handleMouseMove}
      >
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
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-white tracking-wide">{title}</h3>
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
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
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
        className="bg-theme-primary border border-theme rounded-sm max-w-4xl w-full relative my-4 sm:my-8 max-h-[90vh] overflow-y-auto"
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
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-theme-primary mb-2 tracking-wide">{title}</h2>
              <p className="text-lg sm:text-xl text-cinema-gold-light">{director}</p>
              <div className="h-px w-16 bg-cinema-gold/50 mt-4" aria-hidden="true" />
            </div>
            
            <dl className="space-y-2 sm:space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Type', 'Type')}</dt>
                <dd className="text-theme-secondary">{type}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Année', 'Year')}</dt>
                <dd className="text-theme-secondary">{project.year}</dd>
              </div>
              {producer && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Production', 'Production')}</dt>
                  <dd className="text-theme-secondary">{producer}</dd>
                </div>
              )}
              {cleanFestival && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Festival', 'Festival')}</dt>
                  <dd className="text-theme-secondary">{cleanFestival}</dd>
                </div>
              )}
              {distributor && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Distribution', 'Distribution')}</dt>
                  <dd className="text-theme-secondary">{distributor}</dd>
                </div>
              )}
              {sales && (
                <div className="flex gap-3">
                  <dt className="text-cinema-gold w-24 sm:w-28 flex-shrink-0">{t('Ventes', 'Sales')}</dt>
                  <dd className="text-theme-secondary">{sales}</dd>
                </div>
              )}
            </dl>

            {/* Bouton Bande-annonce */}
            {project.trailer && (
              <div className="pt-4 mt-4 border-t border-theme">
                <a
                  href={project.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-cinema-gold text-cinema-black font-bold text-sm tracking-wide hover:bg-cinema-gold-light transition-colors rounded-sm min-h-[44px]"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={t(`Voir la bande-annonce de ${title}`, `Watch the trailer for ${title}`)}
                >
                  <Play size={16} fill="currentColor" aria-hidden="true" />
                  {t('Bande-annonce', 'Trailer')}
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { lang, t } = useLanguage()

  // Tous les projets pour le carrousel
  const allProjects = [...projectsData.featured, ...projectsData.other] as Project[]

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('carousel-container')
    if (!container) return
    
    const isMobile = window.innerWidth < 640
    const currentScroll = container.scrollLeft
    const maxScroll = container.scrollWidth - container.offsetWidth
    
    if (direction === 'right') {
      // Vérifier si on est proche de la fin (avec marge de 10px)
      if (currentScroll >= maxScroll - 10) {
        // Revenir au début avec animation smooth
        container.scrollTo({ left: 0, behavior: 'smooth' })
        return
      }
      
      // Scroller vers la droite
      const scrollAmount = isMobile ? container.offsetWidth : 400
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    } else {
      // direction === 'left'
      // Sur mobile : ne pas permettre d'aller à gauche depuis le début
      if (isMobile && currentScroll <= 10) {
        // Ne rien faire sur mobile si on est au début
        return
      }
      
      // Sur desktop : ne pas permettre d'aller à gauche depuis le début (pas de boucle)
      if (!isMobile && currentScroll <= 10) {
        // Ne rien faire si on est au début
        return
      }
      
      // Scroller vers la gauche
      const scrollAmount = isMobile ? container.offsetWidth : 400
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="projects" 
      className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 md:px-12 lg:px-20 bg-theme-secondary relative overflow-hidden transition-colors duration-300"
      aria-labelledby="portfolio-title"
    >
      {/* Schema.org JSON-LD pour chaque film */}
      {allProjects.map((project) => (
        <script
          key={`schema-${project.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(generateMovieSchema(project)) 
          }}
        />
      ))}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6" aria-hidden="true">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-cinema-gold/50" />
            <Film className="mx-3 sm:mx-4 text-cinema-gold" size={18} />
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-cinema-gold/50" />
          </div>
          <h2 id="portfolio-title" className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 tracking-wide">
            <span className="text-cinema-gold">{t('Films & Séries', 'Films & Series')}</span>
          </h2>
          <p className="text-theme-muted text-base sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-6 font-light px-4">
            {t('supervisés en post-production', 'supervised in post-production')}
          </p>
        </motion.header>

        {/* All Projects Carousel */}
        <div className="relative mb-8 sm:mb-10">
          {/* Navigation Arrows - Toujours visibles */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 bg-cinema-gold hover:bg-cinema-gold-light text-cinema-black p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-2xl z-20 border-2 border-cinema-black/20 hover:scale-110"
            aria-label={t('Faire défiler vers la gauche', 'Scroll left')}
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 bg-cinema-gold hover:bg-cinema-gold-light text-cinema-black p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-2xl z-20 border-2 border-cinema-black/20 hover:scale-110"
            aria-label={t('Faire défiler vers la droite', 'Scroll right')}
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
          </button>

          {/* Carousel Container */}
          <div 
            id="carousel-container"
            className="overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
            }}
          >
            <motion.div 
              className="flex gap-4 sm:gap-8 md:gap-10 pb-4 px-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {allProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex-shrink-0 w-[calc(100vw-7rem)] sm:w-[340px] md:w-[380px] snap-center snap-always"
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                    lang={lang}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-theme-secondary to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-theme-secondary to-transparent z-10" />
          
          {/* Indicateur de scroll mobile */}
          <div className="flex md:hidden justify-center mt-4 gap-1">
            <div className="h-1 w-8 bg-cinema-gold/30 rounded-full" />
            <div className="h-1 w-8 bg-cinema-gold/30 rounded-full" />
            <div className="h-1 w-8 bg-cinema-gold/30 rounded-full" />
          </div>
        </div>
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
