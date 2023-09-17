import React from "react";
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.webp";

const Services = () => {
  const carouselStyles = {
    maxWidth: "90%",
    margin: "0 auto", // Center the carousel horizontally
  };

  return (
    <div style={carouselStyles}>
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        interval={1000}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="itme1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img1} alt="itme2" />
          <p className="legend">Full Stack</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
