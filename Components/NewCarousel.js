import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './NewCarousel.css';
import sliderImage1 from '../bodybuilding5.jpg';
import sliderImage2 from '../bodybuilding4.jpg'; 
import sliderImage3 from '../bodybuilding2.jpg';
import sliderImage4 from '../bodybuilding4.jpg';
import nextButtonImage from '../next.png'; 
import prevButtonImage from '../previous.png'

const NewCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="new-carousel-container">
      <Slider ref={sliderRef} {...settings}>
        <div className="new-carousel-item">
          <img src={sliderImage1} alt="1" />
        </div>
        <div className="new-carousel-item">
          <img src={sliderImage2} alt="2" />
        </div>
        <div className="new-carousel-item">
          <img src={sliderImage3} alt="1" />
        </div>
        <div className="new-carousel-item">
          <img src={sliderImage4} alt="2" />
        </div>
        {/* Add more carousel items as needed */}
      </Slider>
      <div className="new-navigation-buttons">
        <img
          className="new-nav-button prev-button"
          src={prevButtonImage}
          alt="Previous"
          onClick={goToPrev}
        />
        <img
          className="new-nav-button next-button"
          src={nextButtonImage}
          alt="Next"
          onClick={goToNext}
        />
      </div>
    </div>
  );
};

export default NewCarousel;
