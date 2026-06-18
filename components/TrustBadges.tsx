const badges = [
  { icon: '✅', title: '100% Working', sub: 'Remedies' },
  { icon: '🔮', title: 'Accurate', sub: 'Prediction' },
  { icon: '💫', title: 'Genuine', sub: 'Solutions' },
  { icon: '😊', title: '70K+ Happy', sub: 'People' },
  { icon: '🚫', title: 'No Fake', sub: 'Charms' },
]

export default function TrustBadges() {
  return (
    <div
      className="border-y border-purple-500/20"
      style={{ background: 'linear-gradient(90deg,#2a0b22,#5a1e46,#2a0b22)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-4 sm:py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {badges.map((b) => (
          <div key={b.title} className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0 bg-purple-500/15">
              {b.icon}
            </div>
            <div>
              <div className="text-purple-100 text-xs font-bold">{b.title}</div>
              <div className="text-purple-300/60 text-xs">{b.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
