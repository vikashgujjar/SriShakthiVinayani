import Image from 'next/image'

const quickLinks = [
  { href: '#about',        label: 'About Pandith Chandra Babu Swami' },
  { href: '#services',     label: 'Our Astrology Services' },
  { href: '#poojas',       label: 'Poojas & Rituals' },
  { href: '#testimonials', label: 'Client Reviews' },
  { href: '#consultation', label: 'Book Consultation' },
  { href: 'tel:9902762211',label: 'Call: 9902762211' },
]

const socials = [
  { href: '#', label: 'f',  className: '' },
  { href: '#', label: 'in', className: '' },
  { href: '#', label: 'yt', className: '' },
  { href: '#', label: 'tw', className: '' },
  { href: 'https://wa.me/919902762211', label: 'wa', className: 'border-green-500/30 hover:bg-green-500 hover:border-green-500' },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="pt-10 sm:pt-14 pb-5 border-t border-purple-500/20"
      style={{ background: 'linear-gradient(175deg,#0f0314 0%,#2a0a22 60%,#0f0314 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <Image src="/FooterLogo.png" alt="Logo" width={120} height={120} className="w-22 h-22 sm:w-22 sm:h-22 object-contain drop-shadow-purple-sm" />
          </div>
          <p className="text-white/35 text-xs leading-relaxed mb-4 sm:mb-5">
            Best Astrologer in Bangalore | Pandith Chandra Babu Swami | Certified Vedic Astrologer · 70+ Years
          </p>
          {/* <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-xs font-extrabold border border-purple-500/25 text-white/60 bg-white/4 hover:bg-purple-gradient hover:text-white hover:border-purple-500 hover:-translate-y-0.5 transition-all duration-200 ${s.className}`}
              >
                {s.label}
              </a>
            ))}
          </div> */}
        </div>

        {/* Address */}
        <div>
          <h4 className="font-cinzel font-bold text-xs sm:text-sm bg-purple-gradient bg-clip-text text-transparent mb-4 sm:mb-5 tracking-wider">
            Address
          </h4>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2 text-white/50 text-xs">
              <span className="text-purple-500 text-sm sm:text-base shrink-0">📍</span>
              <span>Sri Shakthi Vinayani Jothichalaya,<br /> Bangalore, Karnataka</span>
            </div>
            <a href="tel:9902762211" className="flex items-center gap-2 text-white/50 text-xs hover:text-purple-400 transition-colors duration-200">
              <span className="text-purple-500 text-sm sm:text-base">📞</span>9902762211
            </a>
            <a href="https://wa.me/919902762211" className="flex items-center gap-2 text-white/50 text-xs hover:text-green-400 transition-colors duration-200">
              <span className="text-green-500 text-sm sm:text-base">💬</span>WhatsApp: 9902762211
            </a>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <span className="text-purple-500 text-sm sm:text-base">⏰</span>Available 24 hours, 7 days a week
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-cinzel font-bold text-xs sm:text-sm bg-purple-gradient bg-clip-text text-transparent mb-4 sm:mb-5 tracking-wider">
            Quick Links
          </h4>
          <div className="space-y-1.5 sm:space-y-2">
            {quickLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-2 text-white/50 text-xs hover:text-purple-400 transition-colors duration-200"
              >
                <span className="text-purple-700">→</span> {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-5 pt-4 sm:pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-white/25 text-xs text-center sm:text-left">
          © 2024 Sri Shakthi Vinayani Jothichalaya. All Rights Reserved.
        </p>
        <p className="text-white/20 text-xs">Disclaimer: Results may vary.</p>
      </div>
    </footer>
  )
}
