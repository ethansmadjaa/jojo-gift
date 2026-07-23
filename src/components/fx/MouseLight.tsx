import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useSpring, useMotionTemplate } from 'framer-motion'

/**
 * Halo de lumière très doux qui suit la souris (desktop uniquement).
 * Invisible sur mobile et si l'utilisateur préfère réduire les animations.
 */
export function MouseLight() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(false)
  const x = useSpring(0, { stiffness: 50, damping: 18 })
  const y = useSpring(0, { stiffness: 50, damping: 18 })
  const background = useMotionTemplate`radial-gradient(560px circle at ${x}px ${y}px, rgba(255,255,255,0.07), transparent 70%)`

  useEffect(() => {
    if (reduceMotion) return
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      setActive(true)
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduceMotion, x, y])

  if (reduceMotion || !active) return null
  return <motion.div className="mouse-light" aria-hidden style={{ background }} />
}
