'use client'

import { motion } from 'framer-motion'

const reasons = [
  { icon: '🌿', title: 'Eco-Friendly Products', desc: 'We use non-toxic, biodegradable cleaning products safe for kids, pets, and the planet.' },
  { icon: '🔒', title: 'Fully Insured & Vetted', desc: 'Every cleaner is background-checked, insured, and trained to professional standards.' },
  { icon: '⏱️', title: 'Reliable & On Time', desc: 'We show up when we say we will — no excuses, no surprises, every time.' },
  { icon: '💳', title: 'Transparent Pricing', desc: 'No hidden fees. Get an upfront quote before we start, and pay only what you agreed.' },
  { icon: '🔄', title: 'Flexible Scheduling', desc: 'Daily, weekly, bi-weekly, or one-time — we work around your schedule.' },
  { icon: '🏅', title: '100% Satisfaction', desc: 'Not happy? We come back and re-clean for free. No questions asked.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-teal-100 text-teal-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Why SparkleClean
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              We Don&apos;t Just Clean —<br />
              <span className="text-teal-500">We Care</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We&apos;re not just another cleaning company. We&apos;re your neighbours who take pride in
              making your space feel like home — every single visit.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-sm text-gray-500">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
