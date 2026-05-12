import { useEffect, useRef, useState, useCallback } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [icon, setIcon] = useState('fa-arrow-up-right')
  const posRef = useRef({ x: 0, y: 0 })

  const handler = useCallback((e) => {
    setVisible(e.detail.active)
    if (e.detail.icon) {
      setIcon(e.detail.icon)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('component-cursor', handler)
    return () => window.removeEventListener('component-cursor', handler)
  }, [handler])

  useEffect(() => {
    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
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
      <i className={`fa-solid ${icon || 'fa-arrow-up-right'}`}></i>
    </div>
  )
}
