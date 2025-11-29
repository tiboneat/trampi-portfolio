'use client'

interface PosterImageProps {
  title: string
  director: string
  year: number
  index: number
  className?: string
}

const gradients = [
  'from-amber-900 via-amber-950 to-black',
  'from-slate-800 via-slate-900 to-black',
  'from-red-900 via-red-950 to-black',
  'from-blue-900 via-blue-950 to-black',
  'from-purple-900 via-purple-950 to-black',
  'from-green-900 via-green-950 to-black',
  'from-teal-900 via-teal-950 to-black',
  'from-indigo-900 via-indigo-950 to-black',
  'from-pink-900 via-pink-950 to-black',
  'from-orange-900 via-orange-950 to-black',
  'from-cyan-900 via-cyan-950 to-black',
]

const PosterImage = ({ title, director, year, index, className = '' }: PosterImageProps) => {
  const gradient = gradients[index % gradients.length]
  
  // Titre en plusieurs lignes pour mieux remplir l'espace
  const titleWords = title.split(' ')
  const titleLines = []
  let currentLine = ''
  
  titleWords.forEach(word => {
    if (currentLine.length + word.length < 15) {
      currentLine += (currentLine ? ' ' : '') + word
    } else {
      if (currentLine) titleLines.push(currentLine)
      currentLine = word
    }
  })
  if (currentLine) titleLines.push(currentLine)

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} ${className}`}>
      {/* Texture de grain */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Vignettage */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60" />
      
      {/* Ornements géométriques */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 600">
        {/* Cadre doré */}
        <rect x="20" y="20" width="360" height="560" fill="none" stroke="#C9A961" strokeWidth="1" />
        <rect x="30" y="30" width="340" height="540" fill="none" stroke="#C9A961" strokeWidth="0.5" />
        
        {/* Cercles décoratifs */}
        <circle cx="200" cy="100" r="40" fill="none" stroke="#C9A961" strokeWidth="0.5" />
        <circle cx="80" cy="500" r="30" fill="none" stroke="#C9A961" strokeWidth="0.5" />
        <circle cx="320" cy="480" r="25" fill="none" stroke="#C9A961" strokeWidth="0.5" />
        
        {/* Lignes diagonales */}
        <line x1="50" y1="150" x2="100" y2="200" stroke="#C9A961" strokeWidth="0.3" opacity="0.5" />
        <line x1="300" y1="400" x2="350" y2="450" stroke="#C9A961" strokeWidth="0.3" opacity="0.5" />
      </svg>
      
      {/* Badge année en haut */}
      <div className="absolute top-8 right-8 px-4 py-2 border border-cinema-gold/50 bg-black/40 backdrop-blur-sm">
        <span className="text-cinema-gold font-bold text-lg tracking-wider">{year}</span>
      </div>
      
      {/* Contenu centré */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
        {/* Ligne décorative du haut */}
        <div className="mb-8">
          <div className="h-px w-16 bg-cinema-gold mx-auto mb-2" />
          <div className="h-px w-24 bg-cinema-gold mx-auto" />
        </div>
        
        {/* Titre */}
        <div className="space-y-2 mb-6">
          {titleLines.map((line, i) => (
            <h3 
              key={i}
              className="text-4xl md:text-5xl font-bold text-white tracking-wider leading-tight"
              style={{
                textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(201,169,97,0.3)'
              }}
            >
              {line}
            </h3>
          ))}
        </div>
        
        {/* Ligne décorative du milieu */}
        <div className="my-6">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-cinema-gold to-transparent" />
        </div>
        
        {/* Réalisateur */}
        <p 
          className="text-xl md:text-2xl text-cinema-gold-light font-light tracking-wide mb-4"
          style={{
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}
        >
          {director}
        </p>
        
        {/* Icône pellicule */}
        <div className="mt-8 opacity-60">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cinema-gold">
            <rect x="2" y="3" width="20" height="18" rx="2" />
            <line x1="7" y1="3" x2="7" y2="21" />
            <line x1="17" y1="3" x2="17" y2="21" />
            <line x1="2" y1="9" x2="7" y2="9" />
            <line x1="2" y1="15" x2="7" y2="15" />
            <line x1="17" y1="9" x2="22" y2="9" />
            <line x1="17" y1="15" x2="22" y2="15" />
          </svg>
        </div>
        
        {/* Ligne décorative du bas */}
        <div className="mt-8">
          <div className="h-px w-24 bg-cinema-gold mx-auto mb-2" />
          <div className="h-px w-16 bg-cinema-gold mx-auto" />
        </div>
      </div>
      
      {/* Barre latérale style pellicule */}
      <div className="absolute left-0 top-0 bottom-0 w-8 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-8 border-t border-b border-cinema-gold" style={{ marginTop: i * 48 }} />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-8 border-t border-b border-cinema-gold" style={{ marginTop: i * 48 }} />
        ))}
      </div>
    </div>
  )
}

export default PosterImage

