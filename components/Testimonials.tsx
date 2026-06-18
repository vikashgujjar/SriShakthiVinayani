const testimonials = [
  {
    quote: 'Pandith Chandra Babu Swami gave me the most accurate prediction about my career. His remedies worked within weeks. I highly recommend Sri Shakthi Vinayani Jothichalaya to everyone.',
    name: 'Veena Sharma',
    location: 'Bangalore · Career',
    initial: 'V',
    gradient: 'bg-purple-gradient',
  },
  {
    quote: 'I was going through a very difficult marriage situation. Panditji\'s guidance and puja remedies helped us reconcile. Forever grateful to him and his divine knowledge.',
    name: 'Rajesh Kumar',
    location: 'Mysore · Marriage',
    initial: 'R',
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-800',
  },
  {
    quote: 'The gemstone recommendation by Swamiji transformed my business completely. His predictions are incredibly accurate and solutions are genuine. Best astrologer in Kamanahalli!',
    name: 'Sunitha Bhat',
    location: 'Hassan · Business',
    initial: 'S',
    gradient: 'bg-gradient-to-br from-green-500 to-green-800',
    colSpan: 'sm:col-span-2 md:col-span-1',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-10 sm:mb-14 reveal-el">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-600 mb-3 sm:mb-4">
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
            What Clients Say
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-black text-stone-900 mb-2 sm:mb-3">
            Voices of Transformation
          </h2>
          <p className="font-cormorant text-stone-500 text-base sm:text-lg italic">Real stories from real people whose lives changed</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`relative bg-white border border-purple-500/18 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm hover:border-purple-500/50 hover:shadow-purple hover:-translate-y-1 transition-all duration-200 overflow-hidden reveal-el ${t.colSpan ?? ''}`}
            >
              <div className="absolute top-0 left-4 font-cormorant text-7xl sm:text-8xl text-purple-500/10 leading-none pointer-events-none select-none">
                &ldquo;
              </div>
              <div className="text-purple-500 text-sm sm:text-base tracking-wider mb-3 sm:mb-4">★★★★★</div>
              <p className="font-cormorant text-stone-600 text-base sm:text-lg italic leading-relaxed mb-4 sm:mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-4 sm:mb-5" />
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm text-white ${t.gradient}`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-cinzel font-bold text-stone-800 text-xs sm:text-sm">{t.name}</div>
                  <div className="text-stone-400 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
