import Image from 'next/image'

const platforms = [
  { name: 'Google', src: '/google.png', rating: '4.9', count: '500+' },
  { name: 'Sulekha', src: '/sulekha.png', rating: '4.8', count: '300+' },
  { name: 'JustDial', src: '/justdial.png', rating: '4.9', count: '400+' },
  { name: 'Indiamart', src: '/indiaMart.png', rating: '4.7', count: '200+' },
]

export default function PlatformRatings() {
  return (
    <section className="bg-warm py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <h2 className="font-cinzel text-xl sm:text-2xl font-black text-center text-stone-900 mb-8 sm:mb-10 reveal-el">
          Top Rated on All Platforms
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:border-purple-500 hover:shadow-purple hover:-translate-y-1 transition-all duration-200 reveal-el"
            >
              <div className="text-purple-500 text-base sm:text-lg mb-2 tracking-wider">★★★★★</div>
              <div className="h-9 sm:h-11 flex items-center justify-center">
                <Image
                  src={p.src}
                  alt={p.name}
                  width={160}
                  height={56}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="text-stone-400 text-xs mt-1">{p.rating} · {p.count} Reviews</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
