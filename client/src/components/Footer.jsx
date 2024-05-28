import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer_logo'><h3>TeeReX</h3></a>
  
        <ul className="permalinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Carts </Link></li>
        </ul>
  
        <div className='footer_social'>
          <a href="#"><AiFillFacebook /></a>
          <a href="#"><AiFillInstagram /></a>
          <a href="#"><AiFillTwitterSquare /></a>
        </div>
  
        <div className="footer_copyright">
          <small>All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer