# SriShakthiVinayani

A Next.js conversion of the Sri Shakthi Vinayani Jothichalaya astrology website.

## Prerequisites

- Node.js 18+
- npm

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Place your image assets in the `public/` folder:
   - `public/logo.png` — main logo used in Navbar, Hero, Footer, etc.
   - `public/FooterLogo.png` — logo used specifically in the Footer

## Running

```bash
# Development server
npm run dev

# Production build
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css       # Tailwind base styles
│   ├── layout.tsx        # Root layout — fonts, metadata, global providers
│   └── page.tsx          # Main page — assembles all section components
├── components/
│   ├── FloatingButtons   # Fixed WhatsApp & Call buttons
│   ├── Ticker            # Scrolling announcement bar
│   ├── Navbar            # Sticky navigation with mobile hamburger menu
│   ├── Hero              # Full-screen hero with animated star canvas
│   ├── TrustBadges       # Trust badge strip
│   ├── About             # About the astrologer
│   ├── Stats             # Legacy stats numbers
│   ├── Services          # 12 service cards (hover reveal)
│   ├── InstantSolution   # CTA section with zodiac SVG animation
│   ├── Poojas            # Poojas bento-style grid
│   ├── PlatformRatings   # Google / Sulekha / JustDial / Indiamart ratings
│   ├── Consultation      # Booking section
│   ├── Testimonials      # 3 client testimonials
│   ├── BookCTA           # Online consultation CTA
│   ├── Branches          # Bangalore & Mumbai branch cards
│   ├── Footer            # Footer with address and quick links
│   ├── ScrollReveal      # Client component — intersection-observer reveal animations
│   └── SmoothScroll      # Client component — smooth anchor-link scrolling
├── public/               # Static assets (logo.png, FooterLogo.png)
├── tailwind.config.ts    # Custom theme: colors, fonts, gradients, keyframes
├── next.config.mjs       # Image remote patterns (Unsplash, omsrisaiastrologer.com)
└── tsconfig.json
```

## Notes

- All layout and styles are preserved exactly from the original `index.html`.
- Google Fonts (Cinzel, Cinzel Decorative, Cormorant Garamond, Inter) are loaded via `next/font/google` for optimal performance.
- Only `Navbar` and `Hero` are `'use client'` components — all other sections are server-rendered.
- External images (Unsplash, omsrisaiastrologer.com) are allowed via `next.config.mjs` `remotePatterns`.
