'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  'Residential Cleaning',
  'Office Cleaning',
  'Deep Cleaning',
  'Window Cleaning',
  'Upholstery & Carpet',
  'Move In / Move Out',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready for a<br />
              <span className="text-yellow-300">Sparkling Clean?</span>
            </h2>
            <p className="text-white/85 text-lg mb-10">
              Fill out the form and we&apos;ll get back to you within a few hours with a free, no-obligation quote.
            </p>

            <div className="space-y-6">
              {[
                { icon: '📞', label: 'Phone', value: '(512) 555-0192' },
                { icon: '📧', label: 'Email', value: 'hello@sparkleclean.com' },
                { icon: '📍', label: 'Service Area', value: 'Austin, Dallas, Houston, San Antonio' },
                { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 7am – 7pm' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/60 text-xs font-semibold uppercase tracking-wide">{item.label}</div>
                    <div className="text-white font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 text-center shadow-2xl"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">We&apos;ve Got Your Request!</h3>
                <p className="text-gray-500">
                  Thanks, <strong>{form.name}</strong>! We&apos;ll reach out to <strong>{form.email}</strong> within a few hours with your free quote.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                  className="mt-6 bg-teal-500 text-white font-bold px-6 py-3 rounded-full hover:bg-teal-600 transition-colors"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl space-y-5"
              >
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1">Get a Free Quote</h3>
                <p className="text-gray-500 text-sm mb-2">No commitment required. We&apos;ll tailor a plan for you.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(512) 555-0100"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition bg-white"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your space, frequency, or any special requests…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-xl text-base transition-colors shadow-md"
                >
                  Send My Free Quote Request →
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
