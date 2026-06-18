const services = [
  { img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&q=80', alt: 'Marriage', badge: 'Vedic Remedy', title: 'Marriage Problem', desc: 'Expert guidance and astrological remedies for all marriage-related issues.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-1.webp', alt: 'Love', badge: 'Vedic Remedy', title: 'Love Problem', desc: 'Resolve love and relationship conflicts with time-tested Vedic solutions.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-2.webp', alt: 'Divorce', badge: 'Vedic Remedy', title: 'Divorce Problem', desc: 'Powerful remedies to save marriages and restore harmony between couples.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-3.webp', alt: 'Family', badge: 'Vedic Remedy', title: 'Family Problem', desc: 'Heal family conflicts and bring lasting peace to your household.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-4.webp', alt: 'Job', badge: 'Career', title: 'Job Problem', desc: 'Career guidance and powerful astrological solutions for job challenges.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4336.webp', alt: 'Financial', badge: 'Wealth', title: 'Financial Problem', desc: 'Overcome financial obstacles with Vedic wealth remedies.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4338.webp', alt: 'Negative Energy', badge: 'Protection', title: 'Negative Energy', desc: 'Cleanse black magic, evil eye, and negative energies.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4340.png', alt: 'Kundali', badge: 'Vedic Astrology', title: 'Kundali Solution', desc: 'Detailed birth chart analysis and powerful planetary remedies.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-4341.webp', alt: 'Palmistry', badge: 'Ancient Art', title: 'Palmistry', desc: 'Reveal life lines, fate, and fortune through hand reading.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/Rectangle-22-6.webp', alt: 'Numerology', badge: 'Sacred Science', title: 'Numerology', desc: 'Unlock your destiny through the divine science of numbers.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/astrology.jpg', alt: 'Vedic Astrology', badge: 'Jyotish', title: 'Vedic Astrology', desc: 'Complete Vedic readings covering all aspects of life.' },
  { img: 'https://omsrisaiastrologer.com/wp-content/uploads/2024/06/last.webp', alt: 'Gemstone', badge: 'Crystal Healing', title: 'Gemstone Astrologer', desc: 'Harness the cosmic power of gemstones to attract positive energy.' },
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
          <p className="font-cormorant text-stone-500 text-base sm:text-lg italic">Guided by centuries of Vedic wisdom</p>
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
              <div className="absolute inset-0 bg-card-overlay group-hover:bg-purple-card-overlay transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <span className="inline-block bg-purple-500/25 border border-purple-400/50 text-purple-200 text-[0.55rem] sm:text-[0.6rem] font-bold tracking-widest uppercase px-2 py-1 rounded-full mb-1 sm:mb-2">
                  {svc.badge}
                </span>
                <h3 className="font-cinzel text-white font-bold text-xs sm:text-sm leading-snug mb-1">{svc.title}</h3>
                <p className="text-white/0 group-hover:text-white/65 text-xs leading-relaxed transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden hidden sm:block">
                  {svc.desc}
                </p>
                <a
                  href="tel:9902762211"
                  className="inline-flex items-center gap-1 text-purple-300 text-xs font-bold tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-1 sm:mt-2"
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
