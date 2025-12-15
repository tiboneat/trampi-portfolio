'use client'

import { useLanguage } from '@/context/LanguageContext'

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-theme-card backdrop-blur-sm border border-theme-gold rounded-sm p-1">
      <button
        onClick={() => setLang('fr')}
        className={`px-3 py-1.5 text-xs font-medium tracking-wider transition-all duration-300 min-h-[32px] rounded-sm ${
          lang === 'fr'
            ? 'bg-cinema-gold text-cinema-black'
            : 'text-cinema-gold/70 hover:text-cinema-gold hover:bg-cinema-gold/10'
        }`}
        aria-label="Français"
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 text-xs font-medium tracking-wider transition-all duration-300 min-h-[32px] rounded-sm ${
          lang === 'en'
            ? 'bg-cinema-gold text-cinema-black'
            : 'text-cinema-gold/70 hover:text-cinema-gold hover:bg-cinema-gold/10'
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











