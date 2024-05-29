import React from "react";
import { Link } from "react-router-dom";
import BG from "../assets/banner/bg1.jpg";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-text">
          <h4 className="banner-subtitle">Exclusive Trade-In Offer</h4>
          <h2 className="banner-title">
          Unbeatable Value Deals
          </h2>
          <p className="banner-description">
            Maximize Your Savings with Coupons & Up to 70% Off!
          </p>
          <Link to={"/products"} className="banner-buttons">
            <button className="banner-button demo-button">
              Explore More
            </button>
          </Link>
        </div>
        <div className="banner-image">
          <img src={BG} alt="TeeReX Banner" />
        </div>
      </div>

      <div className="products">
      <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="products-container">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>

       
      <div id="offer-bannner">
        <div className="offer-box">
            <h4>Summer Offer</h4>
            <h2>Upto 50% Off</h2>
            <span>On lastest collection</span>
           <Link to={"/products"}><button >Shop now</button></Link>
        </div>
        <div className="offer-box offer-box2">
            <h4>Fashionable Collection</h4>
            <h2>for upcoming season</h2>
            <span>Get some handsome offers</span>
            <Link to={"/products"}><button>Collection</button></Link>
        </div>
    </div>



      <div className="products">
      <h2>New Arrivals Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="products-container">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  );
};

export default Home;
