import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { allImages, PART_TWO_START, slides } from '../data/slides'
import { usePreload } from '../hooks/usePreload'
import { useSoundtrack } from '../hooks/useSoundtrack'
import { EASE } from '../lib/motion'
import { BackButton, Counter, Hint, MusicButton, ProgressBar } from './Chrome'
import { Grain } from './fx/Grain'
import { MouseLight } from './fx/MouseLight'
import { RotateOverlay } from './RotateOverlay'
import { BlackoutSlide, CinemaSlide, FinaleSlide, MontageSlide, NoirSlide } from './slides/PartOne'
import { ChapterSlide, RevealSlide, TeaseSlide } from './slides/PartTwo'
import type { Slide } from '../types'

function imagesOf(slide: Slide | undefined): string[] {
  if (!slide) return []
  if ('images' in slide) return slide.images
  return 'image' in slide && slide.image ? [slide.image] : []
}

/** Le moteur de la présentation : navigation, musique, préchargement, habillage. */
export function Experience() {
  const [index, setIndex] = useState(0)
  const [visited, setVisited] = useState(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const slide = slides[index]
  const isPartTwo = index >= PART_TWO_START && slide.kind !== 'finale' && slide.kind !== 'blackout'

  const next = useCallback(() => {
    setVisited(true)
    setIndex((i) => Math.min(i + 1, slides.length - 1))
  }, [])
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])
  const restart = useCallback(() => setIndex(0), [])

  // Musique : partie 1 puis partie 2, volume baissé sur les slides noires.
  const { playing, toggle } = useSoundtrack(
    index >= PART_TWO_START ? 'two' : 'one',
    slide.kind === 'noir' || slide.kind === 'blackout',
  )

  // Préchargement : les 3 prochaines images en priorité, tout le reste ensuite.
  const upcoming = useMemo(
    () => [slide, slides[index + 1], slides[index + 2]].flatMap(imagesOf),
    [slide, index],
  )
  usePreload(allImages, upcoming)

  // Clavier : ← → espace entrée.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // Tactile : tap = suivant, balayage vers la droite = précédent.
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current
    touchStart.current = null
    if (!start) return
    const dx = e.changedTouches[0].clientX - start.x
    const dy = e.changedTouches[0].clientY - start.y
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) prev()
      else next()
    }
  }

  // Clic n'importe où = slide suivante (sauf sur un bouton).
  const onClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return
    next()
  }

  const isEnd = slide.kind === 'blackout'

  return (
    <div
      className={`stage ${isPartTwo ? 'theme-book' : 'theme-film'}`}
      onClick={onClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence>
        <motion.div
          key={slide.id}
          className="slide-holder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.9, ease: EASE } }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
        >
          {slide.kind === 'cinema' && <CinemaSlide slide={slide} index={index} />}
          {slide.kind === 'montage' && <MontageSlide slide={slide} />}
          {slide.kind === 'noir' && <NoirSlide slide={slide} />}
          {slide.kind === 'chapter' && <ChapterSlide slide={slide} index={index} />}
          {slide.kind === 'tease' && <TeaseSlide slide={slide} />}
          {slide.kind === 'reveal' && <RevealSlide />}
          {slide.kind === 'finale' && <FinaleSlide slide={slide} />}
          {slide.kind === 'blackout' && <BlackoutSlide onRestart={restart} />}
        </motion.div>
      </AnimatePresence>

      <MouseLight />
      <Grain />

      <ProgressBar progress={index / (slides.length - 1)} hidden={isEnd} />
      <Counter index={index} total={slides.length} hidden={isEnd} />
      <MusicButton playing={playing} onToggle={toggle} />
      <BackButton visible={index > 0 && !isEnd} onBack={prev} />
      <Hint visible={index === 0 && !visited} />
      <RotateOverlay />
    </div>
  )
}
