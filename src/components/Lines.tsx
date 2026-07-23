import { motion, type Variants } from 'framer-motion'
import { EASE, rich } from '../lib/motion'

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.7 },
  }),
}

const line: Variants = {
  hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: EASE },
  },
}

interface LinesProps {
  lines: string[]
  /** Délai entre chaque ligne (plus long = plus solennel). */
  stagger?: number
  className?: string
}

/** Texte qui apparaît ligne par ligne, avec un léger flou qui se dissipe. */
export function Lines({ lines, stagger = 0.75, className }: LinesProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      animate="show"
    >
      {lines.map((text, i) => (
        <motion.p className="line" key={i} variants={line}>
          {rich(text)}
        </motion.p>
      ))}
    </motion.div>
  )
}
