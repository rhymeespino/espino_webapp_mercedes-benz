"use client"
import { X } from "lucide-react"

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Modal Header */}
        <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Welcome to Mercedes-Benz
        </h2>

        {/* Modal Body */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          Experience the pinnacle of luxury and performance. Our exclusive collection of vehicles combines cutting-edge
          technology with timeless elegance.
        </p>

        {/* Modal Features */}
        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
            <p className="text-sm text-gray-400">Premium craftsmanship and attention to detail</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
            <p className="text-sm text-gray-400">Advanced safety and driver assistance systems</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
            <p className="text-sm text-gray-400">Exceptional performance and efficiency</p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors duration-200"
          >
            Close
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
