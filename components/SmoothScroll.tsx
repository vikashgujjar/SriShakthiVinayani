'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      const target = href ? document.querySelector<HTMLElement>(href) : null
      if (target) {
        e.preventDefault()
        const navbar = document.getElementById('navbar')
        const navH = navbar ? navbar.offsetHeight : 0
        window.scrollTo({ top: target.offsetTop - navH - 8, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
