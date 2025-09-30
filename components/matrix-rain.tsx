"use client"

import { useEffect, useRef } from "react"

export function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const characters = "01"
    const columns = Math.floor(window.innerWidth / 20)

    // Create matrix columns
    for (let i = 0; i < 10; i++) {
      const column = document.createElement("div")
      column.className = "absolute text-blue-400/20 text-sm font-mono animate-matrix"
      column.style.left = `${Math.random() * 100}%`
      column.style.animationDelay = `${Math.random() * 10}s`
      column.style.animationDuration = `${10 + Math.random() * 10}s`

      let text = ""
      for (let j = 0; j < 20; j++) {
        text += characters[Math.floor(Math.random() * characters.length)]
      }
      column.textContent = text

      container.appendChild(column)
    }

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}
