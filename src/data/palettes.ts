import type { PaletteName } from '../types'

export interface Palette {
  /** Couleur de fond du chapitre. */
  bg: string
  /** Couleur du texte. */
  ink: string
  /** Couleur d'appoint (ombres de titre, pastilles décoratives). */
  pop: string
}

/** Palettes pastel de la partie "livre pour enfants". */
export const palettes: Record<PaletteName, Palette> = {
  soleil: { bg: '#ffd65c', ink: '#3a2a08', pop: '#ff9f45' },
  corail: { bg: '#ff8a66', ink: '#401607', pop: '#ffd0a3' },
  ciel: { bg: '#8fd0ea', ink: '#0f3446', pop: '#f6fbff' },
  menthe: { bg: '#a4dfbc', ink: '#123a24', pop: '#f2fff0' },
  lilas: { bg: '#c9aeee', ink: '#2f1d4e', pop: '#f4e9ff' },
  rose: { bg: '#f9b3cd', ink: '#4c1329', pop: '#fff0f6' },
  creme: { bg: '#fff1cf', ink: '#4a3413', pop: '#ffd65c' },
  peche: { bg: '#ffc9a9', ink: '#4a2410', pop: '#fff0e0' },
}

/** Dégradés de secours affichés tant qu'une photo n'a pas été déposée. */
export const fallbackGradients = [
  'linear-gradient(160deg, #2b2622 0%, #4d4137 45%, #7d6a56 100%)',
  'linear-gradient(160deg, #22262b 0%, #3b4450 45%, #6b7686 100%)',
  'linear-gradient(160deg, #2b2226 0%, #503b44 45%, #86636b 100%)',
  'linear-gradient(160deg, #232823 0%, #3d4a3d 45%, #6d7d68 100%)',
]
