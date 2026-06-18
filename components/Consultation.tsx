import Image from 'next/image'

const options = [
  { icon: '📞', title: 'Phone Consultation', sub: '9902762211', subColor: 'text-purple-700 font-semibold' },
  { icon: '📍', title: 'In-Person Visit', sub: 'Kamanahalli, Bangalore', subColor: 'text-stone-400' },
  { icon: '💻', title: 'Online Video Call', sub: 'Anywhere in the world', subColor: 'text-stone-400' },
  { icon: '⏰', title: 'Available 24/7', sub: 'Call anytime', subColor: 'text-stone-400' },
]

export default function Consultation() {
  return (
    <section id="consultation" className="bg-ivory py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">

        {/* Left Image */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden reveal-el">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
            alt="Consultation"
            className="w-full h-64 sm:h-[420px] object-cover block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center gap-3 bg-cream/96 border border-purple-500/40 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-purple-lg">
            <Image src="/logo.png" alt="Logo" width={44} height={44} className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-purple-sm" />
            <div>
              <div className="font-cinzel font-bold text-xs sm:text-sm bg-purple-gradient bg-clip-text text-transparent">
                Sri Shakthi Vinayani
              </div>
              <div className="text-stone-500 text-xs">Jothichalaya · Kamanahalli</div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="reveal-el">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-600 mb-4 sm:mb-5">
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
            Book Your Session
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 leading-tight mb-3 sm:mb-4">
            Online &amp; In-Person<br />
            <span className="bg-purple-gradient bg-clip-text text-transparent">Astrology Consultation</span>
          </h2>
          <p className="font-cormorant text-stone-500 text-base sm:text-lg italic leading-relaxed mb-3 sm:mb-4">
            &ldquo;The stars incline, they do not compel — wisdom guides the willing.&rdquo;
          </p>
          <p className="text-stone-600 text-sm leading-relaxed mb-6 sm:mb-8">
            Pandith Chandra Babu Swami offers personalised Vedic consultations for love, marriage, career, health, family, and spiritual matters. Available for online video calls, phone consultations, and in-person visits at Kamanahalli, Bangalore.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {options.map((o) => (
              <div
                key={o.title}
                className="flex items-center gap-3 bg-white border border-purple-500/25 rounded-xl px-3 py-2.5 sm:py-3 shadow-sm hover:border-purple-500 hover:shadow-purple hover:translate-x-1 transition-all duration-200"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-base sm:text-lg shrink-0 bg-gradient-to-br from-purple-100 to-purple-300">
                  {o.icon}
                </div>
                <div>
                  <div className="text-stone-800 text-xs font-bold">{o.title}</div>
                  <div className={`text-xs ${o.subColor}`}>{o.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="tel:9902762211"
            className="inline-flex items-center gap-2 bg-purple-gradient text-white text-sm font-bold tracking-wide px-5 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-purple hover:-translate-y-0.5 hover:shadow-purple-lg transition-all duration-200"
          >
            📞 Book Consultation: 9902762211
          </a>
        </div>
      </div>
    </section>
  )
}
