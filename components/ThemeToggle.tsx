'use client'

import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light'
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.remove('dark', 'light')
      document.documentElement.classList.add(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(newTheme)
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
      aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-cinema-gold" />
      ) : (
        <Moon size={18} className="text-cinema-gold" />
      )}
    </button>
  )
}

export default ThemeToggle
