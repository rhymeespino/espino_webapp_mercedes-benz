"use client"

import { useState } from "react"
import { ChevronRight, Zap, Gem, Brain, Mail, Phone, MapPin } from "../../components/icons"
import Navbar from "../../components/navbar"
import Modal from "../../components/modal"
import SidePanel from "../../components/sidepanel"

const LandingPage = () => {
  const [_activeFeature, setActiveFeature] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)

  const handleExplore = () => {
    window.location.href = "/cars"
  }

  const handleOrder = () => {
    window.location.href = "/order"
  }

  const features = [
    {
      icon: Zap,
      title: "Electrifying Performance",
      description: "Engineered for breathtaking acceleration and unmatched efficiency across all models.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Gem,
      title: "Iconic Design & Luxury",
      description: "Timeless aesthetics, hand-stitched leather, and meticulous attention to detail in every curve.",
      color: "from-rose-400 to-red-500",
    },
    {
      icon: Brain,
      title: "Intelligent Technology",
      description: "Seamless connectivity, intuitive MBUX, and advanced driver assistance systems for your safety.",
      color: "from-blue-400 to-cyan-500",
    },
  ]

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans overflow-hidden">
      <Navbar onOrderNow={handleOrder} />

      {/* Hero Section */}
      <section className="w-full min-h-screen relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Hero Image */}
        <img
          src="https://wordlesstech.com/wp-content/uploads/2024/06/New-2025-Mercedes-Benz-S-Class-2.jpg"
          alt="Mercedes-Benz S-Class"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 text-center">
            <div className="max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-sm font-medium text-amber-300">Luxury Redefined</span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight tracking-tighter bg-gradient-to-r from-white via-amber-100 to-orange-300 bg-clip-text text-transparent animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Mercedes-Benz
              </h1>

              {/* Subheading */}
              <p
                className="text-lg sm:text-xl lg:text-2xl mb-12 font-light text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Experience unparalleled luxury, groundbreaking performance, and world-class safety in perfect harmony.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <button
                  onClick={handleExplore}
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Explore Models
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleOrder}
                  className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-white/20"
                >
                  Build & Order
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-rose-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Open Modal
                </button>
                <button
                  onClick={() => setIsSidePanelOpen(true)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Open Side Panel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-sm font-medium text-amber-300">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Defining Luxury
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              A legacy of innovation drives us to create vehicles that are far more than transportation—they are
              statements of excellence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group relative" onMouseEnter={() => setActiveFeature(index)}>
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  {/* Card Content */}
                  <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                    {/* Icon Container */}
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn More
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-full w-0 group-hover:w-full transition-all duration-500`}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span className="text-sm font-medium text-blue-300">Our Story</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  A Legacy of Excellence
                </h2>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed">
                For over a century, Mercedes-Benz has been synonymous with luxury, innovation, and uncompromising
                quality. Our commitment to excellence drives every decision we make.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                From pioneering electric vehicles to developing cutting-edge safety systems, we continue to shape the
                future of automotive engineering while honoring our heritage of craftsmanship.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="group">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    130+
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Years of Heritage</p>
                </div>
                <div className="group">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Global Markets</p>
                </div>
                <div className="group">
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    1M+
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Satisfied Owners</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img
                src="https://miro.medium.com/v2/resize:fit:1024/1*9t1q2FGQLvz_YO91eRr30Q.jpeg"
                alt="Mercedes-Benz Factory"
                className="relative rounded-2xl border border-white/20 w-full h-96 object-cover group-hover:border-white/40 transition-all duration-500 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span className="text-sm font-medium text-rose-300">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Have questions? Our dedicated team is here to help you find the perfect Mercedes-Benz for your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-rose-500/20 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 p-3 mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Phone className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Phone</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  +1 (800) MERCEDES
                </p>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-rose-500/20 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 p-3 mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Mail className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Email</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  info@mercedes-benz.com
                </p>
              </div>
            </div>

            {/* Contact Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-rose-500/20 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 p-3 mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <MapPin className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Location</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Stuttgart, Germany
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/30 transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:bg-white/15 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-rose-400 focus:bg-white/15 transition-all duration-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="w-full py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Journey Awaits.
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Ready to experience the pinnacle of automotive engineering? Explore our full catalog and begin customizing
              your dream vehicle today.
            </p>
            <button
              onClick={handleExplore}
              className="group px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              View All Models
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/50 py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Mercedes-Benz. All rights reserved.</p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-300">
                Legal Notice
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SidePanel isOpen={isSidePanelOpen} onClose={() => setIsSidePanelOpen(false)} />
    </div>
  )
}

export default LandingPage
