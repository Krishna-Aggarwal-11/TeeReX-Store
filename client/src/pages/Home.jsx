import React from "react";
import { Link } from "react-router-dom";
import BG from "../assets/banner/bg1.jpg";

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
    </div>
  );
};

export default Home;
