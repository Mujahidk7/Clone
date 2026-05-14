'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '10k+', label: 'Homes Cleaned' },
  { value: '5★', label: 'Average Rating' },
  { value: '100%', label: 'Satisfaction' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-400" />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
          Now Booking — Same Week Availability
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          A Cleaner Home,<br />
          <span className="text-yellow-300">A Happier Life</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          Professional, trusted, and eco-friendly cleaning services for your home and office.
          Let us handle the mess — you enjoy the sparkle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-xl transition-all hover:scale-105"
          >
            Book a Cleaning
          </a>
          <a
            href="#services"
            className="bg-white/20 hover:bg-white/30 backdrop-blur border border-white/40 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
          >
            Our Services ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/15 backdrop-blur-md border border-white/20 rounded-3xl p-6 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-yellow-300">{stat.value}</div>
              <div className="text-sm text-white/80 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 30C1200 80 960 0 720 30C480 60 240 0 0 30L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
