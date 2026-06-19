'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let stars: { x: number; y: number; r: number; a: number; d: number }[] = []
    let animId: number

    function resizeCanvas() {
      canvas!.width = window.innerWidth
      canvas!.height = canvas!.parentElement!.offsetHeight
    }
    function initStars() {
      stars = []
      const n = Math.floor((canvas!.width * canvas!.height) / 5500)
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          r: Math.random() * 1.3 + 0.2,
          a: Math.random(),
          d: (Math.random() * 0.007 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
        })
      }
    }
    function drawStars() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)
      stars.forEach((s) => {
        s.a += s.d
        if (s.a <= 0 || s.a >= 1) s.d *= -1
        ctx.save()
        ctx.globalAlpha = s.a * 0.8
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
      animId = requestAnimationFrame(drawStars)
    }

    const handleResize = () => { resizeCanvas(); initStars() }
    window.addEventListener('resize', handleResize)
    resizeCanvas(); initStars(); drawStars()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://omsrisaiastrologer.com/wp-content/uploads/2025/09/banner-1.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1]" />

      {/* Particles */}
      <div className="absolute bottom-0 left-[8%]  w-1 h-1 rounded-full bg-purple-400/70 animate-rise1 z-[1]" />
      <div className="absolute bottom-0 left-[18%] w-1 h-1 rounded-full bg-purple-300/50 animate-rise2 z-[1]" />
      <div className="absolute bottom-0 left-[32%] w-0.5 h-0.5 rounded-full bg-purple-400/60 animate-rise3 z-[1]" />
      <div className="absolute bottom-0 left-[55%] w-1.5 h-1.5 rounded-full bg-purple-500/40 animate-rise4 z-[1]" />
      <div className="absolute bottom-0 left-[72%] w-1 h-1 rounded-full bg-purple-400/60 animate-rise5 z-[1]" />
      <div className="absolute bottom-0 left-[88%] w-1 h-1 rounded-full bg-purple-300/50 animate-rise6 z-[1]" />

      {/* Sparkles */}
      <span className="absolute top-20 left-6 sm:left-14 text-xl sm:text-2xl text-purple-300 animate-sparkle1 z-10">✦</span>
      <span className="absolute top-36 right-10 sm:right-24 text-sm text-purple-400 animate-sparkle2 z-10">★</span>
      <span className="absolute bottom-36 left-10 sm:left-24 text-lg sm:text-xl text-purple-300 animate-sparkle3 z-10">✦</span>
      <span className="absolute bottom-24 right-10 sm:right-20 text-base sm:text-lg text-purple-400 animate-sparkle1 z-10">✦</span>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 py-16 sm:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-purple-400/40 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-purple-300 text-xs font-semibold tracking-widest uppercase mb-5 sm:mb-6">
              <span>✦</span> Certified Vedic Astrologer
            </div>

            <h1 className="font-cinzelD leading-tight mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.7rem,5vw,3.8rem)' }}>
              <span className="text-white">South India&apos;s</span><br />
              <span className="bg-purple-light-grad bg-clip-text text-transparent">Best Astrologer</span><br />
              <span className="text-white/80 font-cinzel" style={{ fontSize: 'clamp(1rem,2.8vw,1.9rem)' }}>
                in Bangalore
              </span>
            </h1>

            <p className="font-cormorant text-white/65 mb-3 italic text-base sm:text-lg" style={{ lineHeight: 1.7 }}>
              <span className="text-purple-300 not-italic font-semibold">Pandith Chandra Babu Swami</span> — Sri Shakthi Vinayani Jothichalaya
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Seven decades of Vedic wisdom in Jyotish Shastra, Palmistry, Kundali, Vastu Shastra, Numerology, and spiritual healing. Thousands of lives transformed across South India.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {['✓ Certified', '✓ 70+ Yrs Exp', '✓ 10,000+ Cases', '✓ 24/7 Available'].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 bg-white/5 border border-purple-400/40 backdrop-blur-md text-purple-300 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12">
              <a
                href="tel:9902762211"
                className="inline-flex items-center gap-2 bg-purple-gradient text-white text-sm font-bold tracking-wide px-5 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-purple hover:-translate-y-0.5 hover:shadow-purple-lg transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call: 9902762211
              </a>
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 bg-white/8 border border-white/45 backdrop-blur-md text-white text-sm font-semibold tracking-wide px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-white/18 hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Consultation →
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[
                { value: '10K+', label: 'Clients' },
                { value: '70+', label: 'Yrs Exp' },
                { value: '11K+', label: 'Certified' },
                { value: '100%', label: 'Genuine' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/6 border border-purple-400/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:bg-purple-500/10 hover:border-purple-400/60 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="font-cinzel text-xl sm:text-2xl font-black bg-purple-light-grad bg-clip-text text-transparent leading-none">
                    {s.value}
                  </div>
                  <div className="text-white/50 text-xs mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Logo Orbit */}
          <div className="flex justify-center items-center relative mt-8 lg:mt-0" style={{ minHeight: '280px' }}>
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-purple-400/20 animate-orbitCW origin-center pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400/60" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400/60" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400/60" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-purple-400/60" />
            </div>
            <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-dashed border-purple-300/15 animate-orbitCCW origin-center pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-300/70" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-300/70" />
            </div>
            <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-purple-500/10 blur-3xl animate-pulseRing" />
            <span className="absolute top-6 right-10 sm:right-16 text-lg text-purple-300 animate-sparkle1 z-20">✦</span>
            <span className="absolute bottom-10 left-10 sm:left-14 text-sm text-purple-400 animate-sparkle2 z-20">★</span>
            <span className="absolute top-24 left-4 sm:left-8 text-xs text-purple-300 animate-sparkle3 z-20">✦</span>
            <span className="absolute bottom-20 right-4 sm:right-8 text-xs text-purple-400 animate-sparkle1 z-20">★</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="relative z-10 text-center pb-5 pt-2">
        <div className="inline-flex flex-col items-center gap-1 text-white/30">
          <span className="text-[0.6rem] tracking-widest">SCROLL TO EXPLORE</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
