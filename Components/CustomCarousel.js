import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomCarousel.css'; 
import sliderimage1 from '../bodybuilding4.jpg'; 
import sliderimage2 from '../bodybuilding.jpg'; 
import sliderimage3 from '../bodybuilding5.jpg'; 
import sliderimage4 from '../bodybuilding4.jpg';
import sliderimage5 from '../bodybuilding2.jpg';
import sliderimage6 from '../bodybuilding5.jpg';
import nextButtonImage from '../next.png'; 

const CustomCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
      <div className="carousel-item">
          <img src={sliderimage1} alt="1" />
        </div>
        <div className="carousel-item">
          <img src={sliderimage2} alt=" 2" />
        </div>
        <div className="carousel-item">
          <img src={sliderimage3} alt=" 2" />
        </div>
        <div className="carousel-item">
          <img src={sliderimage4} alt=" 2" />
        </div>
        <div className="carousel-item">
          <img src={sliderimage5} alt=" 2" />
        </div>
        <div className="carousel-item">
          <img src={sliderimage6} alt=" 2" />
        </div>
        <div className="carousel-item">
          <img src={sliderimage1} alt=" 2" />
        </div>
      </Slider>
      <div className="navigation-buttons">
        <img
          className="nav-button prev-button"
          src={nextButtonImage}
          alt="Previous"
          onClick={goToPrev}
        />
        <img
          className="nav-button next-button"
          src={nextButtonImage}
          alt="Next"
          onClick={goToNext}
        />
      </div>
    </div>
  );
};

export default CustomCarousel;
