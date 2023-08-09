import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import whey from '../whey.png';
import './Carousels.css';

function Carousels() {
  return (
    <div className="carousel-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={whey}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={whey}
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={whey}
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}
export default Carousels;