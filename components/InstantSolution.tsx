import Image from 'next/image'

export default function InstantSolution() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1545552987-720aa18145ca?w=1800&q=85"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
      <div className="absolute inset-0 bg-instant-overlay" />

      {/* Zodiac SVG */}
      <div className="absolute inset-0 flex items-center justify-end pr-4 sm:pr-20 pointer-events-none z-10 opacity-[.1]">
        <svg
          width="300"
          height="300"
          className="sm:w-[460px] sm:h-[460px]"
          viewBox="0 0 460 460"
          fill="none"
        >
          <g className="animate-zodiacSpin origin-center">
            <circle cx="230" cy="230" r="220" stroke="#AE498A" strokeWidth="1" />
            <circle cx="230" cy="230" r="180" stroke="#AE498A" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="230" y1="10"  x2="230" y2="40"  stroke="#AE498A" strokeWidth="2" />
            <line x1="340" y1="43"  x2="325" y2="69"  stroke="#AE498A" strokeWidth="2" />
            <line x1="417" y1="120" x2="391" y2="135" stroke="#AE498A" strokeWidth="2" />
            <line x1="450" y1="230" x2="420" y2="230" stroke="#AE498A" strokeWidth="2" />
            <line x1="417" y1="340" x2="391" y2="325" stroke="#AE498A" strokeWidth="2" />
            <line x1="340" y1="417" x2="325" y2="391" stroke="#AE498A" strokeWidth="2" />
            <line x1="230" y1="450" x2="230" y2="420" stroke="#AE498A" strokeWidth="2" />
            <line x1="120" y1="417" x2="135" y2="391" stroke="#AE498A" strokeWidth="2" />
            <line x1="43"  y1="340" x2="69"  y2="325" stroke="#AE498A" strokeWidth="2" />
            <line x1="10"  y1="230" x2="40"  y2="230" stroke="#AE498A" strokeWidth="2" />
            <line x1="43"  y1="120" x2="69"  y2="135" stroke="#AE498A" strokeWidth="2" />
            <line x1="120" y1="43"  x2="135" y2="69"  stroke="#AE498A" strokeWidth="2" />
          </g>
          <g className="animate-zodiacSpinR origin-center">
            <circle cx="230" cy="230" r="130" stroke="#AE498A" strokeWidth="0.5" />
            <circle cx="230" cy="230" r="90"  stroke="#AE498A" strokeWidth="1" strokeDasharray="2 6" />
          </g>
        </svg>
      </div>

      <span className="absolute top-8  left-6 sm:left-10  text-xl text-purple-300 animate-sparkle1 z-10">✦</span>
      <span className="absolute top-14 right-8 sm:right-16 text-sm text-purple-400 animate-sparkle2 z-10">★</span>
      <span className="absolute bottom-10 left-1/3 text-lg text-purple-300 animate-sparkle3 z-10">✦</span>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-5">
        <div className="max-w-2xl reveal-el">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-300/80 mb-4 sm:mb-5">
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-400/50" />
            Immediate Help Available
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-400/50" />
          </div>
          <h2
            className="font-cinzelD text-white leading-tight mb-3 sm:mb-4"
            style={{ fontSize: 'clamp(1.6rem,4.5vw,3.2rem)' }}
          >
            Get <span className="bg-purple-light-grad bg-clip-text text-transparent">Instant</span><br />Cosmic Solution
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6 sm:mb-8 max-w-lg">
            Call Pandith Chandra Babu Swami right now for immediate guidance. Seven decades of Vedic wisdom available 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 items-center mb-6 sm:mb-8">
            <a
              href="tel:9902762211"
              className="inline-flex items-center gap-2 bg-purple-gradient text-white text-sm font-bold tracking-wide px-5 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-purple hover:-translate-y-0.5 hover:shadow-purple-lg transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Talk to Expert: 9902762211
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-white/8 border border-white/45 backdrop-blur-md text-white text-sm font-semibold px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-white/18 transition-all duration-200"
            >
              Book Consultation
            </a>
          </div>
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4">
            <Image src="/logo.png" alt="Logo" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-purple-sm" />
            <div>
              <div className="text-white/50 text-xs">Call directly</div>
              <a href="tel:9902762211" className="font-cinzel text-xl sm:text-2xl font-bold bg-purple-light-grad bg-clip-text text-transparent tracking-wider">
                9902762211
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
