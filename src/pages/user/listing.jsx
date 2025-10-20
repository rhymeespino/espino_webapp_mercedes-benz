import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, ChevronRight, Heart, Zap, Users, Shield, ChevronLeft } from "lucide-react"

const carsData = [
  {
    id: 1,
    name: "Mercedes-Benz A-Class",
    qty: 5,
    price: 35000,
    img: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/mercedes-benz-a-class-sedan-my19-1001x565-(4).jpg",
    desc: "Compact luxury hatchback",
    category: "Compact",
    year: 2024,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    qty: 3,
    price: 45000,
    img: "https://di-uploads-pod1.dealerinspire.com/mercedesbenzofcherryhill/uploads/2021/07/7-9-cclass.jpg",
    desc: "Executive sedan with performance",
    category: "Sedan",
    year: 2024,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Mercedes-Benz GLE",
    qty: 2,
    price: 65000,
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6ZDe86zJOKWiqZWkb7c1-4m1nFs54uUkj2zcBGXRyDtEPyhzE-i8zr1mU6kOYfofrhkfKODLjwNr-y81IYK60yPRaMYUP-hehL1-OyMn3yploW_J94J0vrUJzGCEuAWiTxbufLrxzdmWT/w1200/2018_mercedes-benz_gle.jpg",
    desc: "Luxury SUV with space",
    category: "SUV",
    year: 2024,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Mercedes-Benz S-Class",
    qty: 1,
    price: 110000,
    img: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2021/01/07100416/hero-1600x900.jpg",
    desc: "Flagship luxury sedan",
    category: "Luxury",
    year: 2024,
    rating: 5.0,
  },
  {
    id: 5,
    name: "Mercedes-Benz E-Class",
    qty: 4,
    price: 55000,
    img: "https://www.topgear.com/sites/default/files/cars-car/carousel/2016/08/_dsc0151.jpg",
    desc: "Premium executive sedan",
    category: "Sedan",
    year: 2024,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Mercedes-Benz GLC",
    qty: 6,
    price: 50000,
    img: "https://i0.wp.com/www.generation4x4mag.fr/wp-content/uploads/2020/11/2017-Mercedes-Benz-AMG-GLC43-SUV-Base-AMG-GLC43-4dr-All-wheel-Drive-4MATIC-Photo-2.png.jpeg?fit=2100%2C1575&ssl=1",
    desc: "Compact luxury SUV",
    category: "SUV",
    year: 2024,
    rating: 4.8,
  },
  {
    id: 7,
    name: "Mercedes-Benz AMG GT",
    qty: 2,
    price: 130000,
    img: "https://agluxurywheels.com/img/gallery/mercedes-benz-amg-gt-agl46-spec3-matte-black-liquid-bronze-2.jpg",
    desc: "High-performance sports car",
    category: "Luxury",
    year: 2024,
    rating: 5.0,
  },
  {
    id: 8,
    name: "Mercedes-Benz B-Class",
    qty: 7,
    price: 32000,
    img: "https://media.citizen.co.za/wp-content/uploads/2022/10/M1-1-1200x613.jpg",
    desc: "Versatile compact MPV",
    category: "Compact",
    year: 2024,
    rating: 4.6,
  },
]

export default function CarListing() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const [searchText, setSearchText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [wishlist, setWishlist] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const q = query.toLowerCase()
  const filtered = query
    ? carsData.filter(
        (c) =>
          (c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)) &&
          (selectedCategory === "All" || c.category === selectedCategory),
      )
    : selectedCategory === "All"
      ? carsData
      : carsData.filter((c) => c.category === selectedCategory)

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedCars = filtered.slice(startIndex, endIndex)

  const categories = ["All", "Compact", "Sedan", "SUV", "Luxury"]

  const handleSearch = () => {
    setQuery(searchText.trim())
    setCurrentPage(1)
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleOrderNow = (carId) => {
    navigate(`/order?carId=${carId}`)
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans overflow-hidden">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-slate-950/95 backdrop-blur-md shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            MERCEDES
          </div>
          <a
            href="/"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Back Home
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-sm font-medium text-amber-300">Explore Our Collection</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter bg-gradient-to-r from-white via-amber-100 to-orange-300 bg-clip-text text-transparent">
              Find Your Perfect Mercedes
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our premium collection of luxury vehicles, each engineered for excellence and designed for you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/40 transition-all duration-300 group-hover:bg-white/15">
                <Search className="w-5 h-5 text-amber-400" />
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Search by model name..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                />
                <button
                  onClick={handleSearch}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setCurrentPage(1)
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-orange-500/50"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Grid Section */}
      <section className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          {filtered.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {paginatedCars.map((car, index) => (
                  <div
                    key={car.id}
                    className="group relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                    {/* Card Content */}
                    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm overflow-hidden hover:border-white/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-orange-500/20 h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative overflow-hidden h-56 bg-gradient-to-br from-slate-800 to-slate-900">
                        <img
                          src={car.img || "/placeholder.svg"}
                          alt={car.name}
                          title={car.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          ${car.price.toLocaleString()}
                        </div>

                        <button
                          onClick={() => toggleWishlist(car.id)}
                          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                            wishlist.includes(car.id)
                              ? "bg-red-500 text-white shadow-lg shadow-red-500/50"
                              : "bg-white/20 text-white hover:bg-white/40 backdrop-blur-sm"
                          }`}
                        >
                          <Heart className="w-5 h-5" fill={wishlist.includes(car.id) ? "currentColor" : "none"} />
                        </button>

                        {/* Stock indicator */}
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {car.qty} in stock
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Category badge */}
                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 w-fit mb-3">
                          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                          <span className="text-xs font-medium text-amber-300">{car.category}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-300 transition-colors duration-300 line-clamp-2">
                          {car.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                          {car.desc}
                        </p>

                        {/* Rating and Year */}
                        <div className="flex items-center justify-between mb-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-amber-400">★</span>
                            <span className="text-gray-300">{car.rating}</span>
                          </div>
                          <span className="text-gray-500">{car.year}</span>
                        </div>

                        <button
                          onClick={() => handleOrderNow(car.id)}
                          className="w-full mt-auto px-4 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn"
                        >
                          Order Now
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mb-12">
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                      currentPage === 1
                        ? "bg-white/5 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => {
                          setCurrentPage(page)
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                        className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                          currentPage === page
                            ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-orange-500/50"
                            : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                      currentPage === totalPages
                        ? "bg-white/5 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105"
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              <div className="text-center text-gray-400 text-sm">
                Showing {startIndex + 1} to {Math.min(endIndex, filtered.length)} of {filtered.length} vehicles
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400 mb-4">No vehicles found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>



      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/50 py-12 mt-20">
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
    </div>
  )
}
