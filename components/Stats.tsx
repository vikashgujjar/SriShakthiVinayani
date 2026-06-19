const stats = [
  { icon: '🏆', value: '14K+', label: 'Queries Resolved' },
  { icon: '🥇', value: '70+', label: 'Years of Mastery' },
  { icon: '⭐', value: '4.9', label: 'Average Rating' },
  { icon: '🔒', value: '100%', label: 'Privacy Assured' },
]

export default function Stats() {
  return (
    <section className="py-14 sm:py-20 bg-stats-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-10 sm:mb-12 reveal-el">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-300/70 mb-3 sm:mb-4">
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500/40" />
            Our Legacy in Numbers
            <span className="inline-block w-6 sm:w-7 h-px bg-purple-500/40" />
          </div>
          <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-white mb-2">
            Famous Jyotish in &amp; Bangalore
          </h2>
          <p className="text-white/40 text-sm">Trusted across South India for over seven decades</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/4 border border-purple-500/18 rounded-xl sm:rounded-2xl p-5 sm:p-7 text-center hover:border-purple-500/50 hover:bg-purple-500/8 hover:-translate-y-1 hover:shadow-purple-lg transition-all duration-200 reveal-el"
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{s.icon}</div>
              <div className="font-cinzel text-3xl sm:text-4xl font-black bg-purple-light-grad bg-clip-text text-transparent leading-none mb-1 sm:mb-2">
                {s.value}
              </div>
              <div className="text-white/50 text-xs tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
