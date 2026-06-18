const branches = [
  {
    img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80',
    city: 'Bangalore',
    name: 'Kamanahalli, Bangalore',
    type: '🏛 Main Branch',
    sub: 'Sri Shakthi Vinayani Jothichalaya',
  },
  {
    img: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&q=80',
    city: 'Mumbai',
    name: 'Mumbai',
    type: '🏢 Branch Office',
    sub: 'Consultation by Appointment',
  },
]

export default function Branches() {
  return (
    <section className="bg-warm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-8 sm:mb-12 reveal-el">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-600 mb-2 sm:mb-3">
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
            Visit Us
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
          </div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-black text-stone-900">Our Branches</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-2xl mx-auto">
          {branches.map((b) => (
            <div
              key={b.city}
              className="bg-white border border-purple-500/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:border-purple-500 hover:shadow-purple hover:-translate-y-1 transition-all duration-200 reveal-el"
            >
              <div className="relative h-36 sm:h-44">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.city} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 font-cinzel text-white font-bold text-sm">{b.city}</span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-cinzel font-bold text-stone-900 text-sm sm:text-base mb-1">{b.name}</h3>
                <p className="text-purple-700 text-xs font-semibold mb-1">{b.type}</p>
                <p className="text-stone-400 text-xs mb-3">{b.sub}</p>
                <a
                  href="tel:9902762211"
                  className="inline-flex items-center gap-1 border-2 border-purple-600 text-purple-800 text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200"
                >
                  📞 9902762211
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
