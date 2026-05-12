"use client"

import { useRef, useEffect } from "react"

export function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>(0)
  const needsDrawRef = useRef(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const SPACING = 28
    const BASE_RADIUS = 1.5
    const GLOW_RADIUS = 130

    let w = 0
    let h = 0

    function resize() {
      if (!canvas || !ctx) return
      const dpr = window.devicePixelRatio ?? 1
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
      needsDrawRef.current = true
    }

    function draw() {
      rafRef.current = requestAnimationFrame(draw)
      if (!needsDrawRef.current || !ctx) return
      needsDrawRef.current = false

      ctx.clearRect(0, 0, w, h)

      const { x: mx, y: my } = mouseRef.current
      const isDark = document.documentElement.classList.contains("dark")

      const baseR = isDark ? 255 : 0
      const baseG = isDark ? 255 : 0
      const baseB = isDark ? 255 : 0
      const baseOpacity = isDark ? 0.13 : 0.2

      // indigo-400 ≈ rgb(129,140,248)
      const glowR = 129, glowG = 140, glowB = 248
      const glowOpacity = 0.85

      for (let x = SPACING / 2; x < w; x += SPACING) {
        for (let y = SPACING / 2; y < h; y += SPACING) {
          const dist = Math.hypot(x - mx, y - my)
          const t = Math.max(0, 1 - dist / GLOW_RADIUS)
          const t2 = t * t // quadratic — sharper falloff near cursor

          const r = Math.round(baseR + (glowR - baseR) * t2)
          const g = Math.round(baseG + (glowG - baseG) * t2)
          const b = Math.round(baseB + (glowB - baseB) * t2)
          const a = baseOpacity + (glowOpacity - baseOpacity) * t2
          const radius = BASE_RADIUS + 1.5 * t2

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`
          ctx.fill()
        }
      }
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    function onMouseMove(e: MouseEvent) {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      needsDrawRef.current = true
    }

    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
      needsDrawRef.current = true
    }

    const section = canvas.closest("section")
    section?.addEventListener("mousemove", onMouseMove)
    section?.addEventListener("mouseleave", onMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      section?.removeEventListener("mousemove", onMouseMove)
      section?.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
