'use client'

import { useState, useEffect } from 'react'

const AnimatedCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 9999) {
          return 0
        }
        // Incrémentation plus fluide
        const increment = prev < 100 ? 3 : prev < 1000 ? 13 : 37
        const newCount = prev + increment
        return newCount > 9999 ? 9999 : newCount
      })
    }, 60)

    return () => clearInterval(interval)
  }, [])

  // Reset à 0 quand on atteint 9999
  useEffect(() => {
    if (count === 9999) {
      const timeout = setTimeout(() => {
        setCount(0)
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [count])

  const formattedCount = count.toString().padStart(4, '0')

  return (
    <div className="text-base sm:text-lg md:text-xl font-light text-cinema-gold mb-0.5 font-mono tabular-nums transition-all duration-100">
      {formattedCount}
    </div>
  )
}

export default AnimatedCounter














