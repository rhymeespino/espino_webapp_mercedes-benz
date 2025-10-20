//Hooks - UseState, useRef, useContext
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/user/LandingPage'
import Listing from './pages/user/listing'
import Order from './pages/user/order'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<Listing />} />
        <Route path="/order" element={<Order />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App









