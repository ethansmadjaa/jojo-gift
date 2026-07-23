import { createElement, type ReactNode } from 'react'

/** Easing "Apple" utilisé partout pour les entrées de texte et de photos. */
export const EASE = [0.22, 1, 0.36, 1] as const

/** Ressort doux pour la partie livre pour enfants. */
export const SPRING = { type: 'spring', stiffness: 260, damping: 24 } as const

/**
 * Transforme "*21 ans* aujourd'hui" en texte avec les mots-clés
 * enveloppés dans <em class="accent"> pour la mise en scène.
 */
export function rich(text: string): ReactNode[] {
  return text
    .split(/\*([^*]+)\*/g)
    .map((part, i) =>
      i % 2 === 1 ? createElement('em', { key: i, className: 'accent' }, part) : part,
    )
}
