'use client'

import { useState, useEffect } from 'react'

const Timecode = () => {
  const [time, setTime] = useState('00:00:00:00')

  useEffect(() => {
    const startTime = Date.now()
    
    const updateTimecode = () => {
      const elapsed = Date.now() - startTime
      
      const hours = Math.floor(elapsed / 3600000) % 24
      const minutes = Math.floor(elapsed / 60000) % 60
      const seconds = Math.floor(elapsed / 1000) % 60
      const frames = Math.floor((elapsed % 1000) / (1000 / 24)) // 24 fps
      
      setTime(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`
      )
    }

    const interval = setInterval(updateTimecode, 1000 / 24) // 24 fps
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="timecode" aria-hidden="true">
      TC {time}
    </div>
  )
}

export default Timecode




















