'use client'

import { useEffect, useState } from 'react'

const GlitchEffect = () => {
  const [isGlitching, setIsGlitching] = useState(false)
  const [glitchType, setGlitchType] = useState(0)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let scrollDelta = 0
    let timeout: NodeJS.Timeout

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = Math.abs(currentScrollY - lastScrollY)
      scrollDelta += delta
      lastScrollY = currentScrollY

      // Déclencher un glitch après un certain scroll
      if (scrollDelta > 300 && !isGlitching) {
        scrollDelta = 0
        
        // Random chance de glitch (30%)
        if (Math.random() > 0.7) {
          setGlitchType(Math.floor(Math.random() * 4))
          setIsGlitching(true)
          
          // Durée du glitch
          timeout = setTimeout(() => {
            setIsGlitching(false)
          }, 150 + Math.random() * 200)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeout)
    }
  }, [isGlitching])

  if (!isGlitching) return null

  return (
    <div className="glitch-container" aria-hidden="true">
      {/* Lignes de scan VHS */}
      {glitchType === 0 && (
        <div className="glitch-scanlines" />
      )}
      
      {/* Décalage RGB */}
      {glitchType === 1 && (
        <div className="glitch-rgb" />
      )}
      
      {/* Bande de corruption */}
      {glitchType === 2 && (
        <div 
          className="glitch-band"
          style={{ top: `${Math.random() * 80 + 10}%` }}
        />
      )}
      
      {/* Noise burst */}
      {glitchType === 3 && (
        <div className="glitch-noise" />
      )}
    </div>
  )
}

export default GlitchEffect

