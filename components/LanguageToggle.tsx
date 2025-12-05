'use client'

import { useLanguage } from '@/context/LanguageContext'

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-cinema-dark/50 backdrop-blur-sm border border-cinema-gold/30 rounded-sm p-1">
      <button
        onClick={() => setLang('fr')}
        className={`px-3 py-1.5 text-xs font-medium tracking-wider transition-all duration-300 min-h-[32px] ${
          lang === 'fr'
            ? 'bg-cinema-gold text-cinema-black'
            : 'text-cinema-gold/70 hover:text-cinema-gold'
        }`}
        aria-label="Français"
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 text-xs font-medium tracking-wider transition-all duration-300 min-h-[32px] ${
          lang === 'en'
            ? 'bg-cinema-gold text-cinema-black'
            : 'text-cinema-gold/70 hover:text-cinema-gold'
        }`}
        aria-label="English"
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageToggle

