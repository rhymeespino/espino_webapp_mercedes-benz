import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { ChevronRight, Check, AlertCircle, Loader2 } from '../../components/icons'

const carOptions = ["Mercedes-Benz A-Class", "Mercedes-Benz C-Class", "Mercedes-Benz GLE", "Mercedes-Benz S-Class"]

const colorOptions = ["Black", "Silver", "White", "Blue"]
const extraOptions = ["Extended Warranty", "Roadside Assistance", "Premium Sound"]

export default function Order() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    car: "",
    qty: 1,
    color: "Black",
    extras: [],
    payment: "card",
    accepted: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = "Full name is required"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email is required"
    if (!form.phone.match(/^\+?[0-9\s-]{7,20}$/)) e.phone = "Valid phone number is required"
    if (!form.address.trim()) e.address = "Delivery address is required"
    if (!form.car) e.car = "Please select a car model"
    if (form.qty < 1) e.qty = "Quantity must be at least 1"
    if (!form.accepted) e.accepted = "You must accept the terms and conditions"
    return e
  }

  const submit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    setErrors(e2)
    if (Object.keys(e2).length === 0) {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsLoading(false)
      setSubmitted(true)
    }
  }

  const toggleExtra = (extra) => {
    setForm((s) => ({
      ...s,
      extras: s.extras.includes(extra) ? s.extras.filter((x) => x !== extra) : [...s.extras, extra],
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Success Animation */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-8 animate-pulse">
              <Check className="w-12 h-12 text-slate-950" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Order Confirmed!
            </h2>
            <p className="text-xl text-gray-400 mb-2">
              Thank you, <span className="text-amber-300 font-bold">{form.name}</span>!
            </p>
            <p className="text-gray-500">Your order has been received and is being processed.</p>
          </div>

          {/* Order Summary Card */}
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm mb-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Vehicle</p>
                <p className="text-lg font-bold text-white">{form.car}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Quantity</p>
                <p className="text-lg font-bold text-white">x{form.qty}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Color</p>
                <p className="text-lg font-bold text-white">{form.color}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Payment Method</p>
                <p className="text-lg font-bold text-white">
                  {form.payment === "card" ? "Credit/Debit Card" : "Bank Transfer"}
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Delivery Address</p>
              <p className="text-white">{form.address}</p>
            </div>

            {form.extras.length > 0 && (
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Extras</p>
                <div className="flex flex-wrap gap-2">
                  {form.extras.map((extra) => (
                    <span
                      key={extra}
                      className="px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-sm font-medium"
                    >
                      {extra}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/cars")}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Back to Cars
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                setSubmitted(false)
                setForm({
                  name: "",
                  email: "",
                  phone: "",
                  address: "",
                  car: "",
                  qty: 1,
                  color: "Black",
                  extras: [],
                  payment: "card",
                  accepted: false,
                })
                setErrors({})
              }}
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-white/20"
            >
              Make Another Order
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-sm font-medium text-amber-300">Complete Your Order</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Place Your Order
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Configure your Mercedes-Benz and complete your purchase. Fields marked with * are required.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={submit} className="space-y-8">
          {/* Personal Information Section */}
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-500 space-y-6 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Full Name *</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:bg-white/15 ${
                    errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/20 focus:border-amber-400"
                  }`}
                />
                {errors.name && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Email *</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:bg-white/15 ${
                    errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/20 focus:border-amber-400"
                  }`}
                />
                {errors.email && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Phone Number *</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:bg-white/15 ${
                    errors.phone ? "border-red-500/50 focus:border-red-500" : "border-white/20 focus:border-amber-400"
                  }`}
                />
                {errors.phone && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Delivery Address *
                </label>
                <input
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="123 Main St, City, ZIP"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:bg-white/15 ${
                    errors.address ? "border-red-500/50 focus:border-red-500" : "border-white/20 focus:border-amber-400"
                  }`}
                />
                {errors.address && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.address}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Vehicle Configuration Section */}
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-500 space-y-6 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">Vehicle Configuration</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Car Model *</label>
                <select
                  value={form.car}
                  onChange={(e) => setForm({ ...form, car: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border transition-all duration-300 text-white focus:outline-none focus:bg-white/15 ${
                    errors.car ? "border-red-500/50 focus:border-red-500" : "border-white/20 focus:border-amber-400"
                  }`}
                >
                  <option value="" className="bg-slate-900">
                    Select a model
                  </option>
                  {carOptions.map((c) => (
                    <option key={c} value={c} className="bg-slate-900">
                      {c}
                    </option>
                  ))}
                </select>
                {errors.car && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.car}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Quantity *</label>
                <input
                  type="number"
                  min={1}
                  value={form.qty}
                  onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:bg-white/15 ${
                    errors.qty ? "border-red-500/50 focus:border-red-500" : "border-white/20 focus:border-amber-400"
                  }`}
                />
                {errors.qty && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.qty}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Color</label>
                <select
                  value={form.color}
                  onChange={(e) => setForm({ ...form, color: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 transition-all duration-300 text-white focus:outline-none focus:border-amber-400 focus:bg-white/15"
                >
                  {colorOptions.map((c) => (
                    <option key={c} value={c} className="bg-slate-900">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Extras Section */}
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-500 space-y-6 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                3
              </div>
              <h2 className="text-2xl font-bold text-white">Add-ons & Extras</h2>
            </div>

            <div className="space-y-3">
              {extraOptions.map((extra) => (
                <label
                  key={extra}
                  className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={form.extras.includes(extra)}
                    onChange={() => toggleExtra(extra)}
                    className="w-5 h-5 rounded border-white/30 bg-white/10 accent-amber-400 cursor-pointer"
                  />
                  <span className="text-white font-medium group-hover:text-amber-300 transition-colors">{extra}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment Section */}
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-500 space-y-6 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                4
              </div>
              <h2 className="text-2xl font-bold text-white">Payment Method</h2>
            </div>

            <div className="space-y-3">
              {[
                { value: "card", label: "Credit/Debit Card" },
                { value: "bank", label: "Bank Transfer" },
              ].map((method) => (
                <label
                  key={method.value}
                  className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.value}
                    checked={form.payment === method.value}
                    onChange={(e) => setForm({ ...form, payment: e.target.value })}
                    className="w-5 h-5 accent-amber-400 cursor-pointer"
                  />
                  <span className="text-white font-medium group-hover:text-amber-300 transition-colors">
                    {method.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={form.accepted}
                onChange={(e) => setForm({ ...form, accepted: e.target.checked })}
                className="w-5 h-5 rounded border-white/30 bg-white/10 accent-amber-400 cursor-pointer mt-1 flex-shrink-0"
              />
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                I agree to the terms and conditions and privacy policy
              </span>
            </label>
            {errors.accepted && (
              <div className="flex items-center gap-2 text-red-400 text-sm mt-3 ml-8">
                <AlertCircle className="w-4 h-4" />
                {errors.accepted}
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="group px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Submit Order
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate("/cars")}
              className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-white/20"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
