import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Photo } from './Photo'

interface PhotoCycleProps {
  images: string[]
  /** Secondes entre deux photos (sans effet s'il n'y en a qu'une). */
  interval?: number
  /** Décalage initial en secondes, pour désynchroniser plusieurs cycles côte à côte. */
  offset?: number
  /** Décale l'alternance du sens du zoom Ken Burns d'une slide à l'autre. */
  zoomSeed?: number
  parallax?: boolean
}

/**
 * Diaporama en fondu enchaîné : affiche les photos d'un dossier de slide
 * les unes après les autres. La nouvelle photo apparaît par-dessus
 * l'ancienne — jamais de trou noir entre deux images.
 */
export function PhotoCycle({ images, interval = 5, offset = 0, zoomSeed = 0, parallax = false }: PhotoCycleProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    let cycle: ReturnType<typeof setInterval> | undefined
    const first = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length)
      cycle = setInterval(() => setIndex((i) => (i + 1) % images.length), interval * 1000)
    }, (interval + offset) * 1000)
    return () => {
      clearTimeout(first)
      clearInterval(cycle)
    }
  }, [images, interval, offset])

  if (images.length === 0) return null

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={index}
        className="photo-cycle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.1, ease: 'easeInOut' } }}
        // L'ancienne photo reste opaque sous la nouvelle le temps du fondu.
        exit={{ opacity: 0, transition: { duration: 0.3, delay: 1.1 } }}
      >
        <Photo
          src={images[index]}
          zoomOut={(index + zoomSeed) % 2 === 1}
          parallax={parallax}
        />
      </motion.div>
    </AnimatePresence>
  )
}
