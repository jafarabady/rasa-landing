import { useEffect, useState } from 'react'

export function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
    }

    checkDeviceType()

    window.addEventListener('resize', checkDeviceType)

    return () => window.removeEventListener('resize', checkDeviceType)
  }, [])

  return isMobile
}
