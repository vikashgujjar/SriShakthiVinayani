import Image from 'next/image'

const features = [
  { icon: '🔮', title: 'Accurate Predictions', sub: 'Vedic Jyotish expertise' },
  { icon: '✅', title: '100% Working Remedies', sub: 'Proven ancient methods' },
  { icon: '💎', title: 'Genuine Solutions', sub: 'No shortcuts, real results' },
  { icon: '🔒', title: 'Complete Privacy', sub: 'Confidential consultations' },
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">

        {/* Left Image */}
        <div className="flex justify-center relative reveal-el">
          <div className="absolute w-full h-full sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 flex items-center justify-center w-full">
            <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-purple-500/20 animate-orbitCW origin-center" />
            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-purple-500/18 animate-orbitCCW origin-center" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://omsrisaiastrologer.com/wp-content/uploads/2025/09/im.jpg"
              alt="Pandith Chandra Babu Swami"
              className="rounded-2xl sm:rounded-3xl w-full sm:w-full h-full sm:h-full object-cover drop-shadow-purple animate-floatY relative z-10"
            />
          </div>
          <div className="absolute bottom-0 left-0 sm:-left-2 bg-white border border-purple-500/30 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-purple-lg z-20">
            <div className="font-cinzel font-bold bg-purple-gradient bg-clip-text text-transparent text-base sm:text-lg leading-none">70+</div>
            <div className="text-stone-500 text-xs mt-0.5">Years of Exp</div>
          </div>
          <div className="absolute top-2 right-0 sm:-right-2 bg-white border border-purple-500/30 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-purple-lg z-20">
            <div className="font-cinzel font-bold bg-purple-gradient bg-clip-text text-transparent text-base sm:text-lg leading-none">10K+</div>
            <div className="text-stone-500 text-xs mt-0.5">Happy Clients</div>
          </div>
        </div>

        {/* Right Content */}
        <div className="reveal-el">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-600 mb-4 sm:mb-5">
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
            No. 1 Best Astrologer in Kamanahalli
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 leading-tight mb-3 sm:mb-4">
            South India&apos;s Famous<br />
            <span className="bg-purple-gradient bg-clip-text text-transparent">Pandith Chandra</span><br />
            <span className="text-stone-700 text-xl sm:text-2xl">Babu Swami</span>
          </h2>
          <p className="font-cormorant text-stone-500 text-base sm:text-lg italic leading-relaxed mb-3 sm:mb-4">
            Sri Shakthi Vinayani Jothichalaya, Kamanahalli — where ancient wisdom meets modern guidance.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed mb-5 sm:mb-6">
            With over 70 years of mastery in Vedic astrology, palmistry, numerology, and spiritual healing, Pandith Chandra Babu Swami has transformed thousands of lives. His accurate predictions and genuine solutions have made him a trusted name across Karnataka, Tamil Nadu, Andhra Pradesh and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-3 bg-white border border-purple-500/25 rounded-xl px-3 py-2.5 sm:py-3 shadow-sm hover:border-purple-500 hover:shadow-purple hover:translate-x-1 transition-all duration-200"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-base sm:text-lg shrink-0 bg-gradient-to-br from-purple-100 to-purple-300">
                  {f.icon}
                </div>
                <div>
                  <div className="text-stone-800 text-xs font-bold">{f.title}</div>
                  <div className="text-stone-400 text-xs">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="tel:9902762211"
              className="inline-flex items-center gap-2 bg-purple-gradient text-white text-sm font-bold tracking-wide px-5 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-purple hover:-translate-y-0.5 hover:shadow-purple-lg transition-all duration-200"
            >
              📞 Call: 9902762211
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-800 text-sm font-bold tracking-wide px-5 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-purple-600 hover:text-white hover:-translate-y-0.5 hover:shadow-purple transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
