import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Home.css";
import Navbar from "../Navbar/Navbar";

export default function Home() 
{
  return (
    <div className="home-container">
      <Navbar/>
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000} 
        infinite
        disableButtonsControls
        disableDotsControls
      >
        <div className="carousel-item">
          <img
            src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/beaches-1655142505_b9ec45ac713c2c52cd64.webp"
            alt="Beach"
            className="carousel-img"
          />
          <div className="carousel-text">
            <h2>Beaches of Tamil Nadu</h2>
            <p>Relax by the pristine waters and golden sands.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/avalanche-hills-ooty-1656333416_e2680b8680086972e69d.webp"
            alt="Hills"
            className="carousel-img"
          />
          <div className="carousel-text">
            <h2>Hill Stations</h2>
            <p>Escape to the cool and serene hill stations.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://wallpapercave.com/wp/wp1937519.jpg"
            alt="Temple"
            className="carousel-img"
          />
          <div className="carousel-text">
            <h2>Temples of Tamil Nadu</h2>
            <p>Discover the spiritual and architectural marvels.</p>
          </div>
        </div>
      </AliceCarousel>
    </div>
  );
}