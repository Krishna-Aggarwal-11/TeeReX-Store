import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import Products from './pages/Products';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App