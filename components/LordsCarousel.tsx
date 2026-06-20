'use client'

import { useState, useEffect, useCallback } from 'react'

const lords = [
  { src: 'https://images.unsplash.com/photo-1677586394845-2305cc806084?auto=format&fit=crop&w=800&q=80', label: 'Sai Baba' },
  { src: 'https://images.unsplash.com/photo-1549083449-aa6e43965934?auto=format&fit=crop&w=800&q=80', label: 'Lord Shiva' },
  { src: 'https://images.unsplash.com/photo-1761471678522-79012da5bd71?auto=format&fit=crop&w=800&q=80', label: 'Goddess Durga' },
  { src: 'https://images.unsplash.com/photo-1642069695959-3f0515d19390?auto=format&fit=crop&w=800&q=80', label: 'Sai Baba' },
  // { src: 'https://images.unsplash.com/photo-1773415169776-f94b6df22749?auto=format&fit=crop&w=800&q=80', label: 'Lord Shiva' },
  { src: 'https://images.unsplash.com/photo-1593847794002-a67998d742fc?auto=format&fit=crop&w=800&q=80', label: 'Hindu Deity' },
]

const VISIBLE = 3

export default function LordsCarousel() {
  const [current, setCurrent] = useState(0)
  const total = lords.length

  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total])
  const prev = () => setCurrent((i) => (i - 1 + total) % total)

  useEffect(() => {
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [next])

  const visible = Array.from({ length: VISIBLE }, (_, i) => lords[(current + i) % total])

  return (
    <section className="w-full py-14 bg-stats-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-2">✦ Divine Blessings ✦</p>
        <h2 className="font-cinzel text-white text-2xl sm:text-3xl font-bold">
          Sacred <span className="bg-purple-light-grad bg-clip-text text-transparent">Deities</span>
        </h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-3 gap-0">
          {visible.map((lord, i) => (
            <div key={`${lord.src}-${i}`} className="relative aspect-[3/4] overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lord.src}
                alt={lord.label}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-0 right-0 text-center text-white font-cinzel text-sm sm:text-base font-semibold tracking-wider">
                {lord.label}
              </p>
            </div>
          ))}
        </div>

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 border border-purple-400/40 text-white flex items-center justify-center hover:bg-purple-600/60 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 border border-purple-400/40 text-white flex items-center justify-center hover:bg-purple-600/60 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {lords.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-purple-400' : 'w-2 h-2 bg-purple-400/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
