import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const COLORS = ['#ffd65c', '#ff8a66', '#8fd0ea', '#a4dfbc', '#c9aeee', '#f9b3cd', '#ffffff']

interface Piece {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  angle: number
  spin: number
  wobble: number
}

function burst(count: number, width: number, origin: { x: number; y: number }): Piece[] {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2
    const speed = 4 + Math.random() * 9
    return {
      x: origin.x * width,
      y: origin.y * window.innerHeight,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 7,
      size: 5 + Math.random() * 7,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.25,
      wobble: Math.random() * Math.PI * 2,
    }
  })
}

/** Confettis maison sur canvas — trois salves, puis le calme revient. */
export function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let pieces: Piece[] = burst(160, window.innerWidth, { x: 0.5, y: 0.55 })
    const timers = [
      window.setTimeout(() => pieces.push(...burst(90, window.innerWidth, { x: 0.2, y: 0.7 })), 500),
      window.setTimeout(() => pieces.push(...burst(90, window.innerWidth, { x: 0.8, y: 0.7 })), 900),
    ]

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      pieces = pieces.filter((p) => p.y < window.innerHeight + 40)
      for (const p of pieces) {
        p.vy += 0.16
        p.vx *= 0.99
        p.wobble += 0.08
        p.x += p.vx + Math.sin(p.wobble) * 0.6
        p.y += p.vy
        p.angle += p.spin
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        ctx.restore()
      }
      if (pieces.length > 0) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      timers.forEach(clearTimeout)
      window.removeEventListener('resize', resize)
    }
  }, [reduceMotion])

  return <canvas ref={canvasRef} className="confetti" aria-hidden />
}
