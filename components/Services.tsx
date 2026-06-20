const services = [
  {
    img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&q=80',
    alt: 'Marriage', badge: 'Vedic Remedy', title: 'Marriage Problem',
    desc: 'Expert astrological guidance to resolve all marriage-related challenges.',
    points: ['Delayed marriage remedies', 'Kundali matching & doshas', 'Restoring marital harmony'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-1.webp',
    alt: 'Love', badge: 'Vedic Remedy', title: 'Love Problem',
    desc: 'Resolve love and relationship conflicts with time-tested Vedic solutions.',
    points: ['Reuniting separated couples', 'Removing love obstacles', 'Strengthening bond & trust'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-2.webp',
    alt: 'Divorce', badge: 'Vedic Remedy', title: 'Divorce Problem',
    desc: 'Powerful remedies to save marriages and restore peace between couples.',
    points: ['Preventing unnecessary divorce', 'Resolving misunderstandings', 'Rebuilding mutual respect'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-3.webp',
    alt: 'Family', badge: 'Vedic Remedy', title: 'Family Problem',
    desc: 'Heal deep-rooted family conflicts and bring lasting peace to your household.',
    points: ['Parent-child relationship healing', 'Sibling & in-law conflicts', 'Restoring family unity'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-4.webp',
    alt: 'Job', badge: 'Career', title: 'Job Problem',
    desc: 'Career guidance and astrological solutions for professional challenges.',
    points: ['Job loss & career stagnation', 'Promotion & growth remedies', 'Business rivalry solutions'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4336.webp',
    alt: 'Financial', badge: 'Wealth', title: 'Financial Problem',
    desc: 'Overcome financial obstacles and attract abundance with Vedic remedies.',
    points: ['Debt & loss remedies', 'Wealth attraction rituals', 'Investment & savings guidance'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4338.webp',
    alt: 'Negative Energy', badge: 'Protection', title: 'Negative Energy',
    desc: 'Cleanse black magic, evil eye, and all forms of negative energies.',
    points: ['Black magic removal', 'Evil eye & hex cleansing', 'Protective kavach & mantras'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4340.png',
    alt: 'Kundali', badge: 'Vedic Astrology', title: 'Kundali Solution',
    desc: 'Detailed birth chart analysis with powerful planetary remedies.',
    points: ['Full Janam Kundali reading', 'Dasha & transit analysis', 'Gem & mantra prescriptions'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4341.webp',
    alt: 'Palmistry', badge: 'Ancient Art', title: 'Palmistry',
    desc: 'Reveal life lines, fate, and fortune through ancient hand reading.',
    points: ['Life, head & heart lines', 'Fate & success lines', 'Health & longevity insights'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-6.webp',
    alt: 'Numerology', badge: 'Sacred Science', title: 'Numerology',
    desc: 'Unlock your destiny through the divine science of numbers.',
    points: ['Lucky number analysis', 'Name correction guidance', 'Business & marriage compatibility'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/astrology.jpg',
    alt: 'Vedic Astrology', badge: 'Jyotish', title: 'Vedic Astrology',
    desc: 'Complete Vedic readings covering every aspect of your life journey.',
    points: ['Horoscope & planetary study', 'Muhurta & auspicious timing', 'Yearly & monthly predictions'],
  },
  {
    img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/last.webp',
    alt: 'Gemstone', badge: 'Crystal Healing', title: 'Gemstone Astrologer',
    desc: 'Harness cosmic power of gemstones to attract positive energy and fortune.',
    points: ['Planet-based gem selection', 'Certified natural gemstones', 'Wearing rituals & activation'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-10 sm:mb-14 reveal-el">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-600 mb-3 sm:mb-4">
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
            What We Offer
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 mb-2 sm:mb-3">
            Our Best Astrology Services
          </h2>
          <p className="font-cormorant text-stone-500 text-base sm:text-lg italic mb-3">Guided by centuries of Vedic wisdom</p>
          <p className="text-stone-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Whether you are navigating a crossroad in love, career, family, or finances — Pandith Chandra Babu Swami offers personalised Vedic remedies rooted in ancient Jyotish science. Every consultation is confidential, compassionate, and crafted to bring clarity and lasting peace to your life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer aspect-[3/4] hover:-translate-y-2 hover:shadow-purple-xl transition-all duration-300 reveal-el"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={svc.img}
                alt={svc.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 group-hover:from-purple-950/95 group-hover:via-purple-900/50 transition-all duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <span className="inline-block bg-purple-500/30 border border-purple-400/50 text-purple-200 text-[0.55rem] sm:text-[0.6rem] font-bold tracking-widest uppercase px-2 py-1 rounded-full mb-1.5">
                  {svc.badge}
                </span>
                <h3 className="font-cinzel text-white font-bold text-xs sm:text-sm leading-snug mb-1">{svc.title}</h3>
                <p className="text-white/70 text-[0.62rem] sm:text-xs leading-relaxed mb-2 hidden sm:block">
                  {svc.desc}
                </p>
                <ul className="space-y-0.5 mb-2 hidden sm:block">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-1 text-purple-200 text-[0.6rem] sm:text-[0.65rem] leading-snug">
                      <span className="mt-px shrink-0">✦</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:9902762211"
                  className="inline-flex items-center gap-1 text-purple-300 text-[0.65rem] sm:text-xs font-bold tracking-wide"
                >
                  Consult Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
