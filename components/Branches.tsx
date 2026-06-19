'use client'

import { useState } from 'react'

export default function Branches() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-warm py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">

        <div className="text-center mb-10 reveal-el">
          <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[.16em] uppercase text-purple-600 mb-2">
            <span className="inline-block w-6 h-px bg-purple-500" />
            Contact Us
            <span className="inline-block w-6 h-px bg-purple-500" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-black text-stone-900">
            Get in <span className="bg-purple-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left — Image + Address */}
          <div className="reveal-el flex flex-col gap-5 h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80"
                alt="Bangalore Branch"
                className="w-full h-64 sm:h-80 object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="inline-flex items-center gap-1.5 bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  🏛 Main Branch
                </span>
                <p className="font-cinzel text-white text-xl font-bold mt-1">Bangalore</p>
              </div> */}
            </div>

            <div className="bg-white border border-purple-500/20 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 flex-1">
              <h3 className="font-cinzel font-bold text-stone-900 text-base">
                Sri Shakthi Vinayani Jothichalaya
              </h3>

              <div className="space-y-3 text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-base mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-stone-800">Address</p>
                    <p>Bangalore, Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 text-base mt-0.5">📞</span>
                  <div>
                    <p className="font-semibold text-stone-800">Phone</p>
                    <a href="tel:9902762211" className="text-purple-700 font-semibold hover:underline">
                      +91 9902762211
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-sm reveal-el h-full flex flex-col">
            <h3 className="font-cinzel font-bold text-stone-900 text-lg mb-1">Send Us a Message</h3>
            <p className="text-stone-500 text-sm mb-6">We'll get back to you within 24 hours.</p>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
                <span className="text-4xl">🙏</span>
                <p className="font-cinzel font-bold text-stone-800 text-lg">Message Sent!</p>
                <p className="text-stone-500 text-sm">We will contact you shortly.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', service: '', message: '' }) }}
                  className="mt-2 text-purple-600 text-xs font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">Service Interested In</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition bg-white"
                  >
                    <option value="">Select a service…</option>
                    <option>Jyotish Shastra (Astrology)</option>
                    <option>Kundali / Horoscope</option>
                    <option>Palmistry</option>
                    <option>Vastu Shastra</option>
                    <option>Numerology</option>
                    <option>Pooja / Ritual</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your concern or question…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-gradient text-white text-sm font-bold tracking-wide py-3 rounded-full shadow-purple hover:-translate-y-0.5 hover:shadow-purple-lg transition-all duration-200"
                >
                  Send Message 🙏
                </button>

                <p className="text-center text-stone-400 text-xs">
                  Or call us directly:{' '}
                  <a href="tel:9902762211" className="text-purple-600 font-semibold hover:underline">
                    9902762211
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
