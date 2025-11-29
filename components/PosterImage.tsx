'use client'

interface PosterImageProps {
  title: string
  director: string
  year: number
  index: number
  className?: string
}

const colorSchemes = [
  { bg: 'from-zinc-950 via-zinc-900 to-black', accent: 'bg-amber-600' },
  { bg: 'from-slate-950 via-slate-900 to-black', accent: 'bg-blue-500' },
  { bg: 'from-neutral-950 via-neutral-900 to-black', accent: 'bg-red-600' },
  { bg: 'from-stone-950 via-stone-900 to-black', accent: 'bg-emerald-600' },
  { bg: 'from-gray-950 via-gray-900 to-black', accent: 'bg-purple-600' },
  { bg: 'from-zinc-950 via-black to-zinc-900', accent: 'bg-orange-600' },
  { bg: 'from-slate-950 via-black to-slate-900', accent: 'bg-teal-600' },
  { bg: 'from-neutral-950 via-black to-neutral-900', accent: 'bg-pink-600' },
  { bg: 'from-stone-950 via-black to-stone-900', accent: 'bg-cyan-600' },
  { bg: 'from-gray-950 via-black to-gray-900', accent: 'bg-indigo-600' },
  { bg: 'from-zinc-950 via-black to-zinc-900', accent: 'bg-rose-600' },
]

const PosterImage = ({ title, director, year, index, className = '' }: PosterImageProps) => {
  const scheme = colorSchemes[index % colorSchemes.length]
  
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${scheme.bg} ${className} overflow-hidden`}>
      {/* Texture subtile */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Vignettage très subtil */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />
      
      {/* Barre d'accent en haut */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${scheme.accent} opacity-80`} />
      
      {/* Contenu principal */}
      <div className="absolute inset-0 flex flex-col justify-between p-10">
        {/* Header minimal */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="text-cinema-gold/60 text-xs uppercase tracking-[0.3em] font-light">
              Film
            </div>
          </div>
          <div className="text-right">
            <div className="text-cinema-gold text-2xl font-light tracking-wider">
              {year}
            </div>
          </div>
        </div>
        
        {/* Titre centré */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <div className="space-y-3">
              <h3 
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight"
                style={{
                  textShadow: '0 4px 30px rgba(0,0,0,0.8)'
                }}
              >
                {title}
              </h3>
              <div className="h-px w-16 bg-cinema-gold/50 mx-auto" />
            </div>
            
            <p 
              className="text-lg md:text-xl text-cinema-gold/80 font-light tracking-wide"
              style={{
                textShadow: '0 2px 20px rgba(0,0,0,0.8)'
              }}
            >
              {director}
            </p>
          </div>
        </div>
        
        {/* Footer minimal */}
        <div className="flex justify-between items-end">
          <div className="text-cinema-gold/40 text-xs uppercase tracking-[0.3em] font-light">
            Post-Production
          </div>
          <div className="text-cinema-gold/40 text-xs uppercase tracking-[0.3em] font-light">
            {year}
          </div>
        </div>
      </div>
      
      {/* Lignes décoratives subtiles */}
      <div className="absolute left-8 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-cinema-gold/10 to-transparent" />
      <div className="absolute right-8 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-cinema-gold/10 to-transparent" />
    </div>
  )
}

export default PosterImage
