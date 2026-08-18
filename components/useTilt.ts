'use client'

import { useRef, useCallback } from 'react'

interface TiltOptions {
  maxTilt?: number
  scale?: number
  speed?: number
}

export function useTilt(options: TiltOptions = {}) {
  const { maxTilt = 15, scale = 1.05, speed = 400 } = options
  const ref = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number>(0)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return

      cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        const rect = ref.current!.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -maxTilt
        const rotateY = ((x - centerX) / centerX) * maxTilt

        ref.current!.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
        ref.current!.style.transition = `transform ${speed}ms cubic-bezier(.03,.98,.52,.99)`
      })
    },
    [maxTilt, scale, speed]
  )

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    ref.current.style.transition = `transform ${speed}ms cubic-bezier(.03,.98,.52,.99)`
  }, [speed])

  return { ref, handleMouseMove, handleMouseLeave }
}
