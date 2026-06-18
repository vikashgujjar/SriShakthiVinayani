export default function Ticker() {
  const text =
    '✦ Sri Shakthi Vinayani Jothichalaya  •  Best Astrologer in Kamanahalli  •  Call: 9902762211  •  Pandith Chandra Babu Swami  •  70+ Years Vedic Expertise  •  Marriage  •  Love  •  Career  •  Vastu  •  Kundali  •  Negative Energy Removal  •  Available 24/7      '

  return (
    <div
      className="overflow-hidden py-2"
      style={{ background: 'linear-gradient(90deg,#3d1530,#6b2556,#3d1530)' }}
    >
      <div className="flex animate-ticker whitespace-nowrap">
        <span className="text-purple-200 text-xs font-semibold tracking-wide px-6 shrink-0">{text}</span>
        <span className="text-purple-200 text-xs font-semibold tracking-wide px-6 shrink-0" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  )
}
