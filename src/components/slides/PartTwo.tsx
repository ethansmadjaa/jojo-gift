import { motion, useReducedMotion } from 'framer-motion'
import type { Slide } from '../../types'
import { palettes } from '../../data/palettes'
import { EASE, SPRING } from '../../lib/motion'
import { Photo } from '../Photo'
import { PhotoCycle } from '../PhotoCycle'
import { Confetti } from '../fx/Confetti'

type SlideOf<K extends Slide['kind']> = Extract<Slide, { kind: K }>

/**
 * Partie 2 — chapitre du "livre de Jojo" : fond pastel, titre géant, polaroïd.
 * Plusieurs photos = diaporama dans le polaroïd ; aucune = grand emoji.
 */
export function ChapterSlide({ slide, index }: { slide: SlideOf<'chapter'>; index: number }) {
  const palette = palettes[slide.palette]
  const tilt = index % 2 === 0 ? -2.2 : 2.4
  return (
    <div
      className="slide slide-chapter"
      style={{ background: palette.bg, color: palette.ink }}
    >
      <div className="chapter-dots" style={{ color: palette.pop }} aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <motion.h1
        className="chapter-title"
        initial={{ opacity: 0, y: -44, rotate: tilt / 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ ...SPRING, delay: 0.15 }}
      >
        {slide.title}
      </motion.h1>
      <motion.div
        className="polaroid"
        initial={{ opacity: 0, y: 70, rotate: tilt * 2, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, rotate: tilt, scale: 1 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ ...SPRING, delay: 0.3 }}
      >
        <div className="polaroid-window">
          {slide.images.length > 0 ? (
            <PhotoCycle images={slide.images} interval={3.2} />
          ) : (
            <div className="polaroid-empty" style={{ background: palette.bg }}>
              <span className="polaroid-emoji">{slide.emoji ?? '📷'}</span>
            </div>
          )}
        </div>
      </motion.div>
      {(slide.caption || slide.note) && (
        <motion.div
          className="chapter-caption"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
        >
          {slide.caption && <p>{slide.caption}</p>}
          {slide.note && <p className="chapter-note">{slide.note}</p>}
        </motion.div>
      )}
    </div>
  )
}

/** Suspense — photo de parapente floutée, titre qui surgit. */
export function TeaseSlide({ slide }: { slide: SlideOf<'tease'> }) {
  const reduceMotion = useReducedMotion()
  const words = slide.title.split(' ')
  return (
    <div className="slide slide-tease">
      <Photo src={slide.image} blurred zoomOut />
      <div className="scrim scrim-strong" />
      <div className="tease-content">
        <h1 className="tease-title">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="tease-word"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 60, scale: reduceMotion ? 1 : 1.4 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...SPRING, delay: 0.5 + i * 0.35 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        {slide.caption && (
          <motion.p
            className="tease-caption"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + words.length * 0.35, duration: 1 }}
          >
            {slide.caption}
          </motion.p>
        )}
      </div>
    </div>
  )
}

/** LA slide — la photo de parapente en grand, confettis, carte d'embarquement. */
export function RevealSlide({ slide }: { slide: SlideOf<'reveal'> }) {
  const title = 'JOJO EN PARAPENTE'
  return (
    <div className="slide slide-reveal">
      {slide.image ? (
        <>
          <Photo src={slide.image} />
          <div className="scrim scrim-strong" />
        </>
      ) : (
        <div className="reveal-sky" aria-hidden>
          <div className="reveal-sun" />
          <div className="reveal-mountains" />
        </div>
      )}
      <Confetti />
      <div className="reveal-content">
        <motion.p
          className="reveal-kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          La réponse est…
        </motion.p>
        <h1 className="reveal-title" aria-label={`${title} 🪂`}>
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="reveal-letter"
              initial={{ opacity: 0, y: 60, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20, delay: 0.7 + i * 0.045 }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
          <motion.span
            aria-hidden
            className="reveal-letter reveal-emoji"
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 14, delay: 0.7 + title.length * 0.045 + 0.2 }}
          >
            &nbsp;🪂
          </motion.span>
        </h1>
        <motion.div
          className="boarding-pass"
          initial={{ opacity: 0, y: 90, rotateX: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 2 }}
        >
          <div className="boarding-pass-header">
            <span>Carte d’embarquement</span>
            <span>VOL JOJO-21</span>
          </div>
          <p className="boarding-pass-line">
            Parce que les plus beaux souvenirs sont ceux qu’on vit ensemble.
          </p>
          <p className="boarding-pass-line">Et celui-là… il nous attend.</p>
          <p className="boarding-pass-big">Annecy nous attend ❤️</p>
          <div className="boarding-pass-footer">
            <span>DÉPART&nbsp;: bientôt</span>
            <span>SIÈGE&nbsp;: à côté de moi</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
