'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const revEls = document.querySelectorAll<HTMLElement>('.reveal-el')
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = Number((e.target as HTMLElement).dataset.delay ?? 0)
            setTimeout(() => {
              e.target.classList.remove('opacity-0', 'translate-y-8')
              e.target.classList.add('opacity-100', 'translate-y-0')
            }, delay)
            revObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    revEls.forEach((el, i) => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700')
      el.dataset.delay = String((i % 4) * 100)
      revObs.observe(el)
    })

    return () => revObs.disconnect()
  }, [])

  return null
}
