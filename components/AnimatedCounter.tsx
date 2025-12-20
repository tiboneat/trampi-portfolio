'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 9999) {
          return 0
        }
        // Accélération progressive pour un effet plus dynamique
        const increment = prev < 100 ? 1 : prev < 1000 ? 7 : 23
        const newCount = prev + increment
        return newCount > 9999 ? 9999 : newCount
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Reset à 0 quand on atteint 9999
  useEffect(() => {
    if (count === 9999) {
      const timeout = setTimeout(() => {
        setCount(0)
      }, 1000) // Pause d'une seconde à 9999 avant de recommencer
      return () => clearTimeout(timeout)
    }
  }, [count])

  const formattedCount = count.toString().padStart(4, '0')

  return (
    <div className="text-lg sm:text-xl md:text-2xl font-light text-cinema-gold mb-0.5 font-mono tabular-nums">
      <AnimatePresence mode="popLayout">
        {formattedCount.split('').map((digit, index) => (
          <motion.span
            key={`${index}-${digit}`}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="inline-block"
            style={{ minWidth: '0.6em' }}
          >
            {digit}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default AnimatedCounter











