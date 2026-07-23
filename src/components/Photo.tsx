import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useSpring } from 'framer-motion'
import { fallbackGradients } from '../data/palettes'

interface PhotoProps {
  src: string
  /** Alterne le sens du zoom Ken Burns d'une slide à l'autre. */
  zoomOut?: boolean
  /** Active la très légère parallaxe qui suit la souris (desktop). */
  parallax?: boolean
  /** Flou volontaire (slide "Dans les airs ??"). */
  blurred?: boolean
  className?: string
}

function hashCode(str: string) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0
  return Math.abs(h)
}

/**
 * Photo plein cadre : object-fit cover, zoom Ken Burns très lent,
 * parallaxe discrète, et dégradé élégant si le fichier n'existe pas encore.
 */
export function Photo({ src, zoomOut = false, parallax = false, blurred = false, className }: PhotoProps) {
  const [failed, setFailed] = useState(false)
  const reduceMotion = useReducedMotion()

  const px = useSpring(0, { stiffness: 40, damping: 20 })
  const py = useSpring(0, { stiffness: 40, damping: 20 })

  useEffect(() => {
    if (!parallax || reduceMotion) return
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      px.set((e.clientX / window.innerWidth - 0.5) * -14)
      py.set((e.clientY / window.innerHeight - 0.5) * -10)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [parallax, reduceMotion, px, py])

  const from = reduceMotion ? 1.02 : zoomOut ? 1.12 : 1.03
  const to = reduceMotion ? 1.02 : zoomOut ? 1.04 : 1.12

  return (
    <motion.div className={`photo ${className ?? ''}`} style={{ x: px, y: py }}>
      <motion.div
        className="photo-inner"
        initial={{ scale: from }}
        animate={{ scale: to }}
        transition={{ duration: 18, ease: 'linear' }}
      >
        {failed ? (
          <div
            className="photo-fallback"
            style={{ background: fallbackGradients[hashCode(src) % fallbackGradients.length] }}
          />
        ) : (
          <img
            src={src}
            alt=""
            draggable={false}
            onError={() => setFailed(true)}
            style={blurred ? { filter: 'blur(16px)', transform: 'scale(1.08)' } : undefined}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
