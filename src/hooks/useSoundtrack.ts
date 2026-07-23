import { useCallback, useEffect, useRef, useState } from 'react'
import type { MusicPart } from '../types'

const TRACKS: Record<MusicPart, string> = {
  one: '/music/part-1.mp3', // partie album — douce, émotionnelle
  two: '/music/part-2.mp3', // partie livre de Jojo — joyeuse
}

const FULL_VOLUME = 0.85
const DUCKED_VOLUME = 0.1 // volume pendant les slides noires ("silence")
const FADE_MS = 1800

/**
 * Gère la bande-son : lancement au clic, boucle, fondu enchaîné
 * entre les deux parties, et "ducking" pendant les silences.
 * Si un fichier manque, tout continue de fonctionner sans musique.
 */
export function useSoundtrack(part: MusicPart, ducked: boolean) {
  const [playing, setPlaying] = useState(false)
  const players = useRef<Partial<Record<MusicPart, HTMLAudioElement>>>({})
  const fades = useRef<Partial<Record<MusicPart, number>>>({})
  const missing = useRef<Partial<Record<MusicPart, boolean>>>({})

  const getPlayer = useCallback((p: MusicPart) => {
    let audio = players.current[p]
    if (!audio) {
      audio = new Audio(TRACKS[p])
      audio.loop = true
      audio.preload = 'auto'
      audio.volume = 0
      audio.addEventListener('error', () => {
        missing.current[p] = true
      })
      players.current[p] = audio
    }
    return audio
  }, [])

  const fadeTo = useCallback((p: MusicPart, target: number) => {
    const audio = players.current[p]
    if (!audio) return
    window.clearInterval(fades.current[p])
    const step = 50
    const from = audio.volume
    const start = performance.now()
    fades.current[p] = window.setInterval(() => {
      const t = Math.min(1, (performance.now() - start) / FADE_MS)
      audio.volume = from + (target - from) * t
      if (t >= 1) {
        window.clearInterval(fades.current[p])
        if (target === 0) audio.pause()
      }
    }, step)
  }, [])

  // Applique la bonne piste + le bon volume à chaque changement d'état.
  useEffect(() => {
    if (!playing) return
    // Si la piste de la partie 2 manque, on laisse la partie 1 continuer.
    const active: MusicPart = missing.current[part] ? (part === 'two' ? 'one' : 'two') : part
    const other: MusicPart = active === 'one' ? 'two' : 'one'
    const audio = getPlayer(active)
    if (audio.paused) void audio.play().catch(() => {})
    fadeTo(active, ducked ? DUCKED_VOLUME : FULL_VOLUME)
    if (players.current[other] && !players.current[other].paused) fadeTo(other, 0)
  }, [playing, part, ducked, getPlayer, fadeTo])

  const toggle = useCallback(() => {
    setPlaying((was) => {
      if (was) {
        for (const p of ['one', 'two'] as MusicPart[]) fadeTo(p, 0)
        return false
      }
      // Le premier play() doit venir directement du geste utilisateur (Safari iOS).
      const audio = getPlayer(part)
      void audio.play().catch(() => {})
      // On précharge l'autre piste pour un fondu instantané plus tard.
      getPlayer(part === 'one' ? 'two' : 'one')
      return true
    })
  }, [part, getPlayer, fadeTo])

  return { playing, toggle }
}
