const smallPoojas = [
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4327.webp', alt: 'Yantra', sub: '✦ Sacred Geometry', title: 'Yantra Puja', desc: 'Divine geometric tools for blessings' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4328.webp', alt: 'Vastu', sub: '✦ Space Harmony', title: 'Vastu Shanti', desc: 'Harmonise your home & office' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4328-1.webp', alt: 'Mantras', sub: '✦ Ancient Sound', title: 'Vedic Mantras', desc: 'Healing & protection chants' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4326.webp', alt: 'Navgraha', sub: '✦ Planetary', title: 'Navgraha Shanti', desc: 'Balance all 9 planetary forces' },
]

export default function Poojas() {
  return (
    <section id="poojas" className="bg-cream py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-10 sm:mb-14 reveal-el">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-600 mb-3 sm:mb-4">
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
            Sacred Rituals
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 mb-2 sm:mb-3">
            Powerful Poojas for Fast Results
          </h2>
          <p className="font-cormorant text-stone-500 text-base sm:text-lg italic">
            Ancient fire &amp; cosmic rituals for healing, prosperity, and protection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {/* Hero Yagna card */}
          <div
            className="group relative col-span-2 row-span-2 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-purple-xl transition-all duration-300 reveal-el"
            style={{ minHeight: '300px' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4325.webp"
              alt="Yagna"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-purple-900/75 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <span className="inline-flex items-center gap-1 bg-purple-500/25 border border-purple-400/50 text-purple-200 text-[0.6rem] font-bold tracking-widest uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3">
                🔥 Sacred Fire
              </span>
              <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">Yagna (Havan)</h3>
              <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 hidden sm:block">
                Sacred fire rituals for prosperity, peace, healing, and divine protection. Powerful planetary corrections through Vedic fire ceremonies.
              </p>
              <a
                href="tel:9902762211"
                className="inline-flex items-center gap-2 bg-purple-gradient text-white text-xs font-bold tracking-wide px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-purple hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Yagna →
              </a>
            </div>
          </div>

          {/* Small pooja cards */}
          {smallPoojas.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1.5 hover:shadow-purple-lg transition-all duration-300 reveal-el"
              style={{ minHeight: '150px' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent group-hover:from-purple-900/75 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <div className="text-purple-300 text-xs font-bold mb-0.5 sm:mb-1">{p.sub}</div>
                <h3 className="font-cinzel text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">{p.title}</h3>
                <p className="text-white/55 text-xs hidden sm:block">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
