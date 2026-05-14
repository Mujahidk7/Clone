'use client'

import { motion, type Variants, type Easing } from 'framer-motion'

const services = [
  {
    icon: '🏠',
    title: 'Residential Cleaning',
    description: 'Deep or routine cleaning for your home — every room, every corner, done right.',
    features: ['Kitchen & bathrooms', 'Bedrooms & living areas', 'Floors & surfaces'],
    color: 'from-teal-400 to-cyan-500',
  },
  {
    icon: '🏢',
    title: 'Office Cleaning',
    description: 'Keep your workspace spotless and your team productive with scheduled office cleans.',
    features: ['Desks & common areas', 'Restrooms & kitchens', 'Trash & recycling'],
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    description: 'A thorough top-to-bottom clean for move-ins, move-outs, or seasonal refreshes.',
    features: ['Inside appliances', 'Baseboards & vents', 'Cabinets & drawers'],
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: '🪟',
    title: 'Window Cleaning',
    description: 'Crystal-clear windows inside and out, letting natural light flood your space.',
    features: ['Interior & exterior', 'Screens & frames', 'Hard-to-reach windows'],
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: '🛋️',
    title: 'Upholstery & Carpet',
    description: 'Restore freshness to your carpets, rugs, and upholstered furniture.',
    features: ['Steam cleaning', 'Stain removal', 'Odor elimination'],
    color: 'from-green-400 to-teal-500',
  },
  {
    icon: '📦',
    title: 'Move In / Move Out',
    description: 'Leave your old place spotless or start fresh in your new home.',
    features: ['Full property clean', 'Appliance cleaning', 'Deposit-ready results'],
    color: 'from-rose-400 to-red-500',
  },
]

const easeOut: Easing = 'easeOut'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: easeOut },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-teal-100 text-teal-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From routine maintenance to deep scrubs, we&apos;ve got a service that fits your needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-shadow"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 shadow-md`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-teal-600 hover:text-teal-800 transition-colors group-hover:underline"
                >
                  Book Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
