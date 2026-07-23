import { motion, useReducedMotion } from 'framer-motion'
import type { Slide } from '../../types'
import { EASE, rich } from '../../lib/motion'
import { Photo } from '../Photo'
import { Lines } from '../Lines'

type SlideOf<K extends Slide['kind']> = Extract<Slide, { kind: K }>

/** Partie 1 — photo plein écran, dégradé discret, texte ligne par ligne. */
export function CinemaSlide({ slide, index }: { slide: SlideOf<'cinema'>; index: number }) {
  return (
    <div className="slide slide-cinema">
      <Photo src={slide.image} zoomOut={index % 2 === 1} parallax />
      <div className="scrim" />
      <div className="cinema-content">
        {slide.title && (
          <motion.h1
            className="cinema-title"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
          >
            {slide.title}
          </motion.h1>
        )}
        <Lines lines={slide.lines} className="cinema-lines" />
      </div>
    </div>
  )
}

/** Partie 1 — mosaïque de souvenirs qui apparaissent une à une. */
export function MontageSlide({ slide }: { slide: SlideOf<'montage'> }) {
  const reduceMotion = useReducedMotion()
  return (
    <div className="slide slide-montage">
      <div className="montage-grid">
        {slide.images.map((src, i) => (
          <motion.div
            key={src}
            className={`montage-cell montage-cell-${i + 1}`}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.22, ease: EASE }}
          >
            <Photo src={src} zoomOut={i % 2 === 0} />
          </motion.div>
        ))}
      </div>
      <div className="scrim scrim-strong" />
      <div className="cinema-content">
        <Lines lines={slide.lines} className="cinema-lines" stagger={0.9} />
      </div>
    </div>
  )
}

/** Fond noir — lignes une à une, longue respiration, mot final mis en scène. */
export function NoirSlide({ slide }: { slide: SlideOf<'noir'> }) {
  const lineDelay = 1.5
  const finalDelay = 1 + slide.lines.length * lineDelay + 0.8
  return (
    <div className="slide slide-noir">
      <div className="noir-content">
        {slide.lines.map((text, i) => (
          <motion.p
            className="noir-line"
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 + i * lineDelay, ease: EASE }}
          >
            {rich(text)}
          </motion.p>
        ))}
        {slide.final && (
          <motion.p
            className="noir-final"
            initial={{ opacity: 0, scale: 0.9, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, scale: 1, letterSpacing: '0.02em' }}
            transition={{ duration: 1.6, delay: finalDelay, ease: EASE }}
          >
            {slide.final}
          </motion.p>
        )}
      </div>
    </div>
  )
}

/** Dernière slide — fond crème sobre, photo encadrée, mots simples. */
export function FinaleSlide({ slide }: { slide: SlideOf<'finale'> }) {
  return (
    <div className="slide slide-finale">
      <motion.div
        className="finale-frame"
        initial={{ opacity: 0, y: 26, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
      >
        <Photo src={slide.image} />
      </motion.div>
      <Lines lines={slide.lines} className="finale-lines" stagger={1} />
    </div>
  )
}

/** Fondu au noir final — un cœur, puis la possibilité de tout revoir. */
export function BlackoutSlide({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="slide slide-noir">
      <motion.div
        className="blackout-heart"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.9, 0.75] }}
        transition={{ duration: 5, delay: 1.5, times: [0, 0.7, 1] }}
      >
        ❤️
      </motion.div>
      <motion.button
        type="button"
        className="restart-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 6, duration: 1.5 }}
        onClick={(e) => {
          e.stopPropagation()
          onRestart()
        }}
      >
        ↺ revoir
      </motion.button>
    </div>
  )
}
