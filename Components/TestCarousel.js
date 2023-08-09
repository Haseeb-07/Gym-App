import React, { useState } from 'react';
import './TestCarousel.css'; // Import your internal CSS file

const TestCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="carousel-container">
      <div className="gradient-overlay left"></div>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'current' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="gradient-overlay right"></div>
      <button
        className="carousel-button prev-button"
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <button
        className="carousel-button next-button"
        onClick={handleNextClick}
        disabled={currentIndex === images.length - 4}
      >
        &gt;
      </button>
    </div>
  );
};

export default TestCarousel;
