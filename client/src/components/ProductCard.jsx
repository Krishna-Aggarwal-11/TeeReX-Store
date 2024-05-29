import React from 'react'
import { Link } from 'react-router-dom'
 
import Img from '../assets/tshirts/1.webp'


const ProductCard = () => {
  return (
    <Link to={"/product/1"}  className="pro">
                <img src={Img} alt=""/>
                <div className="desc">
                    <div className='desc-category' >
                      <p>Men</p>
                      <p>Color</p>
                      <p>Type</p>
                    </div>
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirts</h5>
                    <h4>$78</h4>
                </div>
    </Link>
  )
}

export default ProductCard