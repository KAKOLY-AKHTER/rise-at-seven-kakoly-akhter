import { useEffect, useRef, useState, useCallback } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const [visible, setVisible] = useState(false)

  const handler = useCallback((e) => {
    setVisible(e.detail.active)
  }, [])

  useEffect(() => {
    window.addEventListener('component-cursor', handler)
    return () => window.removeEventListener('component-cursor', handler)
  }, [handler])

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`cursor-follow ${visible ? 'cursor-visible' : ''}`}
      aria-hidden="true"
    >
      {/* SVG Arrow — no external font needed */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#111212"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  )
}