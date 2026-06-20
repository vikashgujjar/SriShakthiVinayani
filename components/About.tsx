import Image from 'next/image'

const allItems = [
  { icon: '❤️', title: 'Heart & Home', sub: 'Resolving relationship friction, marriage delays, and restoring family harmony.' },
  { icon: '📈', title: 'Growth & Prosperity', sub: 'Navigating career transitions, clearing financial hurdles, and unlocking business growth.' },
  { icon: '🌿', title: 'Well-being', sub: 'Finding mental clarity, peace, and spiritual strength during challenging phases.' },
  { icon: '🔒', title: 'Safe & Confidential', sub: 'Your personal struggles and charts are treated with the highest confidentiality and respect.' },
  { icon: '🕉️', title: 'Time-Tested Remedies', sub: 'Practical traditional Vedic remedies designed to restore positive energy and balance.' },
  { icon: '💜', title: 'Your Wellbeing First', sub: 'Our goal is to see you leave with a lighter heart, clear mind, and renewed confidence.' },
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">

        {/* Top: Image + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center mb-10 sm:mb-14">

          {/* Left Image */}
          <div className="flex justify-center relative reveal-el">
            <div className="absolute w-full h-full sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 flex items-center justify-center w-full">
              <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-purple-500/20 animate-orbitCW origin-center" />
              <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-purple-500/18 animate-orbitCCW origin-center" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="../aboutImg.jpg"
                alt="Pandith Chandra Babu Swami"
                className="rounded-2xl sm:rounded-3xl w-full object-cover drop-shadow-purple animate-floatY relative z-10"
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

          {/* Right: Compact Text */}
          <div className="reveal-el">
            <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-600 mb-4">
              <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
              No. 1 Best Astrologer in Bangalore
              <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-stone-900  mb-4" style={{ lineHeight: '1.5' }}>
              Discover Clarity &amp; Peace<br />
              <span className="bg-purple-gradient bg-clip-text text-transparent">with Pandith Chandra</span><br />
              <span className="text-stone-700 text-xl sm:text-2xl">Babu Swami</span>
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Life often brings unexpected crossroads — a delay in marriage, a strained relationship, financial uncertainty, or a clouded career choice. Welcome to Sri Shakthi Vinayani Jothichalaya, a sanctuary of hope in Bangalore. With over 70 years of mastery and 10,000+ lives transformed, Guruji approaches every horoscope as a unique roadmap of your life, potential, and destiny.
            </p>
            <p className="font-cormorant text-stone-500 text-base sm:text-lg italic leading-relaxed mb-6">
              &ldquo;You don&apos;t have to navigate life&apos;s storms alone. Let the timeless light of Vedic wisdom illuminate your path forward.&rdquo;
            </p>
            <div className="flex flex-wrap gap-3">
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

        {/* Bottom: 6-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 reveal-el">
          {allItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 bg-white border border-purple-500/20 rounded-xl px-4 py-3.5 shadow-sm hover:border-purple-400 hover:shadow-purple hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
              <div>
                <p className="text-stone-800 text-sm font-bold mb-0.5">{item.title}</p>
                <p className="text-stone-500 text-xs leading-relaxed">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
