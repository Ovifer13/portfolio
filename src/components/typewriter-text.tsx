"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"

interface TypewriterTextProps {
  text: string
  speed?: number
  startDelay?: number
  className?: string
  onDone?: () => void
}

const BREAK = "<br/>"

export function TypewriterText({
  text,
  speed = 18,
  startDelay = 0,
  className,
  onDone,
}: TypewriterTextProps) {
  const segments = text.split(BREAK)
  const totalLength = segments.reduce((sum, s) => sum + s.length, 0)

  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const onDoneRef = useRef(onDone)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    onDoneRef.current = onDone
  }, [onDone])

  useEffect(() => {
    if (!isInView) return

    let interval: ReturnType<typeof setInterval>

    const timeout = setTimeout(() => {
      let i = 0
      setCharIndex(0)
      setDone(false)

      interval = setInterval(() => {
        i++
        setCharIndex(i)
        if (i >= totalLength) {
          clearInterval(interval)
          setDone(true)
          onDoneRef.current?.()
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [isInView, text, speed, startDelay, totalLength])

  const cursor = (
    <span className="inline-block w-px h-[1em] bg-foreground/70 ml-0.5 align-middle animate-pulse" />
  )

  const renderContent = () => {
    let remaining = charIndex
    return segments.map((seg, i) => {
      const chars = Math.min(remaining, seg.length)
      remaining = Math.max(0, remaining - seg.length)

      const isActive = !done && (chars < seg.length || (i === segments.length - 1 && chars === seg.length))

      if (i === 0) {
        return (
          <span key={i}>
            {seg.slice(0, chars)}
            {isActive && cursor}
          </span>
        )
      }
      if (chars === 0) return null
      return (
        <span key={i} className="block mt-4">
          {seg.slice(0, chars)}
          {isActive && cursor}
        </span>
      )
    })
  }

  return (
    <span ref={ref} className={className}>
      {renderContent()}
    </span>
  )
}
