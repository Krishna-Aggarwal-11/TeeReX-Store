import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  
  return (
    <section id="header">
        <Link to="/">
          <p>TeeReX <span>Store</span></p>
        </Link>
        <div>
            <ul id="navbar">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/products"}>Products</NavLink></li>
                <li><NavLink to={"/cart"}><AiOutlineShoppingCart /></NavLink></li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar