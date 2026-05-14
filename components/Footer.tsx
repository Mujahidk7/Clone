export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧹</span>
              <span className="font-extrabold text-xl text-teal-400">SparkleClean</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional, eco-friendly cleaning services across Texas. We take pride in every home and office we clean.
            </p>
            <div className="flex gap-4 mt-5">
              {['Facebook', 'Instagram', 'Google'].map((s) => (
                <a key={s} href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {['Residential', 'Office', 'Deep Clean', 'Windows', 'Carpet', 'Move In/Out'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>(512) 555-0192</li>
              <li>hello@sparkleclean.com</li>
              <li>Austin · Dallas · Houston</li>
              <li>Mon–Sat: 7am – 7pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SparkleClean. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
