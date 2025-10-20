import React from 'react'
import { ChevronRight } from './icons'

export default function Card({ icon: Icon, title, description, onClick, color = 'from-amber-400 to-orange-500', onMouseEnter, styleDelay = 0 }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className="group relative"
      style={{ animationDelay: `${styleDelay}s` }}
    >
      {/* Card background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} p-3 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
          {Icon ? <Icon className="w-full h-full text-white" /> : null}
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors duration-300">{title}</h3>

        <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">{description}</p>

        <div className="flex items-center gap-2 text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Learn More
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>

        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} rounded-full w-0 group-hover:w-full transition-all duration-500`}></div>
      </div>
    </div>
  )
}
