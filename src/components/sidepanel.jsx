"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"

export default function SidePanel({ isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!isOpen) return null

  // Mobile Bottom Panel
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

        {/* Bottom Panel */}
        <div className="relative z-10 ml-auto mt-auto w-full bg-gradient-to-br from-slate-900 to-slate-800 border-t border-white/20 rounded-t-2xl p-6 animate-in slide-in-from-bottom-5 duration-300 max-h-[70vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Panel Header */}
          <h2 className="text-2xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent pr-8">
            Quick Info
          </h2>

          {/* Panel Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Our Services</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We offer comprehensive automotive solutions including sales, maintenance, and financing options tailored
                to your needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Why Choose Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Expert customer service
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Competitive pricing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Wide selection of models
                </li>
              </ul>
            </div>

            <button
              onClick={onClose}
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
            >
              Close Panel
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Desktop Side Panel
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Side Panel */}
      <div className="relative z-10 ml-auto w-full max-w-sm bg-gradient-to-br from-slate-900 to-slate-800 border-l border-white/20 p-8 shadow-2xl animate-in slide-in-from-right-5 duration-300 overflow-y-auto max-h-screen">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Panel Header */}
        <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          Quick Info
        </h2>

        {/* Panel Content */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Our Services</h3>
            <p className="text-gray-400 leading-relaxed">
              We offer comprehensive automotive solutions including sales, maintenance, and financing options tailored
              to your needs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Why Choose Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
                Expert customer service
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
                Competitive pricing
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
                Wide selection of models
              </li>
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  )
}
