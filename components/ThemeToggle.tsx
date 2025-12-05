'use client'

import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Vérifier si un thème est sauvegardé
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-cinema-dark/50 backdrop-blur-sm border border-cinema-gold/30 rounded-sm" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center bg-cinema-dark/50 backdrop-blur-sm border border-cinema-gold/30 rounded-sm hover:bg-cinema-gold/10 transition-all duration-300 min-w-[44px] min-h-[44px]"
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {isDark ? (
        <Sun size={18} className="text-cinema-gold" />
      ) : (
        <Moon size={18} className="text-cinema-gold" />
      )}
    </button>
  )
}

export default ThemeToggle
