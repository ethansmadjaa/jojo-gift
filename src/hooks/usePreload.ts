import { useEffect } from 'react'

const loaded = new Set<string>()

function preload(src: string) {
  if (loaded.has(src)) return
  loaded.add(src)
  const img = new Image()
  img.src = src
}

/**
 * Précharge en priorité les images des slides à venir,
 * puis tout le reste en tâche de fond — aucun clignotement.
 */
export function usePreload(all: string[], upcoming: string[]) {
  useEffect(() => {
    upcoming.forEach(preload)
  }, [upcoming])

  useEffect(() => {
    const timer = window.setTimeout(() => all.forEach(preload), 1500)
    return () => window.clearTimeout(timer)
  }, [all])
}
