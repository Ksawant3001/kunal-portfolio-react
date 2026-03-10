import { useState, useEffect } from 'react'

/**
 * Returns true once the referenced element enters the viewport.
 * Disconnects observer after first trigger (fire-once).
 */
export default function useVisible(ref, threshold = 0.07) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold])

  return visible
}
