import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '../lib/motion'

/** Barre de progression, très fine, en haut de l'écran. */
export function ProgressBar({ progress, hidden }: { progress: number; hidden: boolean }) {
  return (
    <div className="progress" style={{ opacity: hidden ? 0 : 1 }}>
      <motion.div
        className="progress-fill"
        animate={{ scaleX: progress }}
        transition={{ duration: 0.6, ease: EASE }}
      />
    </div>
  )
}

/** Compteur de slides, discret, en bas à droite. */
export function Counter({ index, total, hidden }: { index: number; total: number; hidden: boolean }) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    <div className="counter" style={{ opacity: hidden ? 0 : 1 }}>
      {pad(index + 1)}
      <span className="counter-sep"> / </span>
      {pad(total)}
    </div>
  )
}

/** Bouton musique : ▶ avant lancement, petit égaliseur animé ensuite. */
export function MusicButton({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      className="music-button"
      onClick={(e) => {
        e.stopPropagation()
        onToggle()
      }}
      aria-label={playing ? 'Mettre la musique en pause' : 'Lancer la musique'}
    >
      {playing ? (
        <span className="equalizer" aria-hidden>
          <span />
          <span />
          <span />
        </span>
      ) : (
        <>
          <span aria-hidden>▶</span>&nbsp; Lancer la musique
        </>
      )}
    </button>
  )
}

/** Retour en arrière, discret, en bas à gauche. */
export function BackButton({ visible, onBack }: { visible: boolean; onBack: () => void }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="back-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            e.stopPropagation()
            onBack()
          }}
          aria-label="Slide précédente"
        >
          ‹
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/** Petite invitation à cliquer, uniquement sur la première slide. */
export function Hint({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3, duration: 1.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          cliquer pour continuer
        </motion.div>
      )}
    </AnimatePresence>
  )
}
