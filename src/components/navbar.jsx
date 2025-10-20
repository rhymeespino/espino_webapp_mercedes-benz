"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar({ showBackHome = false, onOrderNow }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }

    if (mobileMenuOpen) {
      document.addEventListener("keydown", onKey)
      setTimeout(() => closeButtonRef.current?.focus(), 50)
      document.body.style.overflow = "hidden"
    } else {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      setTimeout(() => menuButtonRef.current?.focus(), 50)
    }

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navLinks = showBackHome
    ? [
        { label: "Home", href: "/" },
        { label: "Cars", href: "/cars" },
      ]
    : [
        { label: "Features", href: "#features" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "Explore", href: "#cta" },
      ]

  return (
    <>
      {/* Navigation */}
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
          <div className="hidden md:flex items-center gap-4">
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

          {/* Desktop Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOrderNow}
              className="hidden md:inline px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              {showBackHome ? "Back Home" : "Order Now"}
            </button>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-sidebar"
              className="md:hidden p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        id="mobile-sidebar"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-40 transition-all duration-300 ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <aside
          className={`absolute left-0 top-0 bottom-0 w-72 bg-slate-950/95 backdrop-blur-md p-6 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              MERCEDES
            </div>
            <button
              ref={closeButtonRef}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-white/5 transition-colors duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-4 text-white">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium hover:text-amber-400 transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Button */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOrderNow?.()
                }}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
              >
                {showBackHome ? "Back Home" : "Order Now"}
              </button>
            </div>
          </nav>
        </aside>
      </div>
    </>
  )
}
