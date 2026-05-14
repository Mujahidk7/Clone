'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Austin TX',
    avatar: 'SM',
    rating: 5,
    text: "SparkleClean transformed my home! They cleaned areas I didn't even know needed cleaning. My bathroom literally sparkles. I've booked them every two weeks since.",
    color: 'from-teal-400 to-cyan-500',
  },
  {
    name: 'James Okafor',
    role: 'Office Manager, Dallas TX',
    avatar: 'JO',
    rating: 5,
    text: "We hired SparkleClean for our office and our team was blown away. The attention to detail is incredible and the staff are so professional. Absolutely worth every penny.",
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Linda Vasquez',
    role: 'Landlord, Houston TX',
    avatar: 'LV',
    rating: 5,
    text: "Used them for a move-out clean and my tenant's deposit was returned in full. The place was immaculate. I recommend SparkleClean to all my landlord friends.",
    color: 'from-yellow-400 to-orange-400',
  },
  {
    name: 'Tom & Anna Reid',
    role: 'Family of 4, San Antonio TX',
    avatar: 'TR',
    rating: 5,
    text: "We have two dogs and two kids — our house gets messy fast. SparkleClean comes in weekly and makes everything pristine. The eco-friendly products are a huge plus for us.",
    color: 'from-green-400 to-teal-500',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-yellow-100 text-yellow-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Hundreds of happy clients across Texas trust SparkleClean with their most important spaces.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-center"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-5`}>
                {testimonials[active].avatar}
              </div>
              <Stars count={testimonials[active].rating} />
              <blockquote className="text-gray-700 text-lg md:text-xl italic mt-5 mb-6 leading-relaxed">
                &ldquo;{testimonials[active].text}&rdquo;
              </blockquote>
              <div className="font-bold text-gray-900">{testimonials[active].name}</div>
              <div className="text-sm text-gray-500">{testimonials[active].role}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === active ? 'bg-teal-500 scale-125' : 'bg-gray-300 hover:bg-teal-300'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.04 }}
              className={`text-left p-4 rounded-2xl border transition-all ${
                i === active
                  ? 'border-teal-400 bg-teal-50 shadow-md'
                  : 'border-gray-100 bg-gray-50 hover:border-teal-200'
              }`}
            >
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm mb-2`}>
                {t.avatar}
              </div>
              <div className="text-xs font-bold text-gray-800 leading-tight">{t.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{t.role}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
