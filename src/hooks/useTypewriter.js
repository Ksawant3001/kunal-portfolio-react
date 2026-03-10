import { useState, useEffect } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words  - Array of strings to type
 * @param {number}   speed  - Typing speed in ms per character
 * @param {number}   eraseSpeed - Erase speed in ms per character
 * @param {number}   pause  - Pause duration after full word is typed (ms)
 */
export default function useTypewriter(words, speed = 72, eraseSpeed = 36, pause = 2300) {
  const [index, setIndex]   = useState(0)
  const [typed, setTyped]   = useState('')

  useEffect(() => {
    let i = 0
    let timeout
    const current = words[index]

    const type = () => {
      setTyped(current.slice(0, i++))
      if (i <= current.length) {
        timeout = setTimeout(type, speed)
      } else {
        timeout = setTimeout(erase, pause)
      }
    }

    const erase = () => {
      setTyped(current.slice(0, i--))
      if (i >= 0) {
        timeout = setTimeout(erase, eraseSpeed)
      } else {
        setIndex(prev => (prev + 1) % words.length)
      }
    }

    timeout = setTimeout(type, 400)
    return () => clearTimeout(timeout)
  }, [index])

  return typed
}
