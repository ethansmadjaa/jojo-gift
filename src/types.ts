/** Noms des palettes "livre pour enfants" de la partie 2. */
export type PaletteName =
  | 'soleil'
  | 'corail'
  | 'ciel'
  | 'menthe'
  | 'lilas'
  | 'rose'
  | 'creme'
  | 'peche'

/**
 * Chaque slide est un objet typé.
 * Dans les textes, *les mots entre astérisques* sont mis en scène
 * (italique serif + rose pâle en partie 1).
 */
export type Slide =
  /** Partie 1 — photo plein écran, ambiance cinéma. */
  | { kind: 'cinema'; id: string; image: string; title?: string; lines: string[] }
  /** Partie 1 — grille de plusieurs photos. */
  | { kind: 'montage'; id: string; images: string[]; lines: string[] }
  /** Fond noir, lignes qui apparaissent une à une, mot final mis en scène. */
  | { kind: 'noir'; id: string; lines: string[]; final?: string; silence?: boolean }
  /** Partie 2 — style livre pour enfants : fond coloré, grand titre, polaroïd. */
  | {
      kind: 'chapter'
      id: string
      title: string
      caption?: string
      note?: string
      image: string
      palette: PaletteName
    }
  /** Montée de suspense : photo floutée + grand titre. */
  | { kind: 'tease'; id: string; title: string; caption?: string; image: string }
  /** La grande révélation : confettis + carte d'embarquement. */
  | { kind: 'reveal'; id: string; image?: string }
  /** Dernière slide : fond sobre, photo encadrée, texte. */
  | { kind: 'finale'; id: string; image: string; lines: string[] }
  /** Fondu au noir final. */
  | { kind: 'blackout'; id: string }

export type MusicPart = 'one' | 'two'
