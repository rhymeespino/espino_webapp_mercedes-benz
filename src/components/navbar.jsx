"use client"

import { useState, useEffect } from "react"
import { Home, Info, Phone, Compass, Car } from "lucide-react"

export default function Navbar({ showBackHome = false, onOrderNow }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = showBackHome
    ? [
        { label: "Home", href: "/", icon: Home },
        { label: "Cars", href: "/cars", icon: Car },
      ]
    : [
        { label: "Features", href: "#features", icon: Compass },
        { label: "About", href: "#about", icon: Info },
        { label: "Contact", href: "#contact", icon: Phone },
        { label: "Explore", href: "#cta", icon: Compass },
      ]

  return (
    <>
      {/* Top Navigation (Desktop) */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-slate-950/95 backdrop-blur-md shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            MERCEDES
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium hover:text-amber-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <button
            onClick={onOrderNow}
            className="hidden md:inline px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
          >
            {showBackHome ? "Back Home" : "Order Now"}
          </button>
        </div>
      </nav>

      {/* Bottom Navigation (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-white/10 md:hidden">
        <div className="flex justify-around items-center py-3">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col items-center text-white hover:text-amber-400 transition-all duration-300"
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">{link.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
