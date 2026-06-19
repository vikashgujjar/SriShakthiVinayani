import Image from 'next/image'

export default function BookCTA() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1800&q=85"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-cta-overlay" />

      <span className="absolute top-10 left-6 sm:left-14 text-xl sm:text-2xl text-purple-300 animate-sparkle1 z-10">✦</span>
      <span className="absolute top-16 right-8 sm:right-20 text-sm text-purple-400 animate-sparkle2 z-10">★</span>
      <span className="absolute bottom-12 right-10 sm:right-32 text-lg text-purple-300 animate-sparkle3 z-10">✦</span>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-5 text-center reveal-el">
        {/* <Image
          src="/FooterLogo.png"
          alt="Logo"
          width={160}
          height={160}
          className="w-34 h-34 sm:w-34 sm:h-34 object-contain drop-shadow-purple mx-auto mb-4 sm:mb-6"
        /> */}
        <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-300/80 mb-3 sm:mb-4 justify-center">
          <span className="inline-block w-6 sm:w-7 h-px bg-purple-400/50" />
          Begin Your Journey
          <span className="inline-block w-6 sm:w-7 h-px bg-purple-400/50" />
        </div>
        <h2 className="font-cinzelD text-white mb-2 sm:mb-3" style={{ fontSize: 'clamp(1.5rem,4vw,3rem)' }}>
          Book Your{' '}
          <span className="bg-purple-light-grad bg-clip-text text-transparent">Online Consultation</span>
        </h2>
        <p className="text-white/55 text-sm leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
          Take the first step toward clarity, peace, and prosperity. Speak directly with Pandith Chandra Babu Swami for personalised Vedic guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="tel:9902762211"
            className="inline-flex items-center justify-center gap-2 bg-purple-gradient text-white text-sm font-bold tracking-wide px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-purple hover:-translate-y-0.5 hover:shadow-purple-lg transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call: 9902762211
          </a>
          <a
            href="https://wa.me/919902762211"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L.057 23.882a.5.5 0 0 0 .614.614l6.023-1.471A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.045-1.395l-.362-.215-3.745.915.932-3.643-.236-.375A9.818 9.818 0 1 1 12 21.818z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
