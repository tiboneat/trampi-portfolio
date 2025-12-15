'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (fr: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('fr')

  const t = (fr: string, en: string) => (lang === 'fr' ? fr : en)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}












