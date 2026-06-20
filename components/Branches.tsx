'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'

const MAIL_TO = 'www.vgujjar1234@gmail.com' // ← replace with your business email

type FormData = { name: string; phone: string; service: string; message: string }
type Errors = Partial<Record<keyof FormData, string>>

export default function Branches() {
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => { const next = { ...prev }; delete next[name as keyof FormData]; return next })
    }
  }

  const validateForm = () => {
    const newErrors: Errors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Mobile number is required'
    if (!formData.service) newErrors.service = 'Please select a service'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      Swal.fire({ icon: 'error', title: 'Validation Error', text: 'Please fill in all required fields correctly.', confirmButtonColor: '#7c3aed' })
      return
    }

    setLoader(true)

    const payload = {
      company: 'Sri Shakthi Vinayani Jothichalaya',
      company_name: 'Sri Shakthi Vinayani Jothichalaya',
      moveType: 'Contact Page Form',
      mail_to: MAIL_TO,
      ...formData,
    }

    try {
      const response = await fetch('https://mail.futuretouch.org/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        await Swal.fire({ icon: 'success', title: 'Message Sent! 🙏', text: 'Your message has been sent successfully. We will get back to you soon.', confirmButtonColor: '#7c3aed' })
        setFormData({ name: '', phone: '', service: '', message: '' })
        setErrors({})
      } else {
        Swal.fire('Error', 'Failed to send message. Please try again.', 'error')
      }
    } catch (error) {
      console.error(error)
      Swal.fire('Error', 'Something went wrong!', 'error')
    } finally {
      setLoader(false)
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full border rounded-xl px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 transition ${
      errors[field] ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-stone-200 focus:border-purple-400 focus:ring-purple-100'
    }`

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
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="inline-flex items-center gap-1.5 bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">🏛 Main Branch</span>
                <p className="font-cinzel text-white text-xl font-bold mt-1">Bangalore</p>
              </div>
            </div>

            <div className="bg-white border border-purple-500/20 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 flex-1">
              <h3 className="font-cinzel font-bold text-stone-900 text-base">Sri Shakthi Vinayani Jothichalaya</h3>
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
                    <a href="tel:9902762211" className="text-purple-700 font-semibold hover:underline">+91 9902762211</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white border border-purple-500/20 rounded-2xl p-6 sm:p-8 shadow-sm reveal-el h-full flex flex-col">
            <h3 className="font-cinzel font-bold text-stone-900 text-lg mb-1">Send Us a Message</h3>
            <p className="text-stone-500 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">Service Interested In *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass('service') + ' bg-white'}
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
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your concern or question…"
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClass('message') + ' resize-none'}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loader}
                  className="w-full bg-purple-gradient text-white text-sm font-bold tracking-wide py-3 rounded-full shadow-purple hover:-translate-y-0.5 hover:shadow-purple-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loader ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : 'Send Message 🙏'}
                </button>
                <p className="text-center text-stone-400 text-xs mt-3">
                  Or call us directly:{' '}
                  <a href="tel:9902762211" className="text-purple-600 font-semibold hover:underline">9902762211</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
