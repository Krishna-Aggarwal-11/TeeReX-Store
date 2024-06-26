import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import Products from './pages/Products';
import Cart from './pages/Cart';
import Newsletter from './components/Newsletter';
import SingleProduct from './pages/SingleProduct';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      <Newsletter/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App