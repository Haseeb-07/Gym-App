import React from 'react';
import Card from 'react-bootstrap/Card';
import bb from '../bodybuilding.jpg'; 
import bb2 from'../bodybuilding2.jpg'
import bb1 from'../bodybuilding1.jpg'
import bb3 from'../bodybuilding3.jpg'
import bb4 from'../bodybuilding4.jpg'
import bb5 from '../bodybuilding5.jpg'
import readmore from '../ourclassesbutton.png'
import './Hoverimages.css';

const Blognews = () => {
  return (
    <div className='CustomCard'>
      <div className='Card'>
        <Card.Img variant='top' src={bb} className='Card-Img' />
        <div className='Card-Overlay'>
          <Card.Title><h3>Advanced Gym</h3></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          <a href="/">
            <img className='card-btn'src={readmore} alt="" />
          </a>
          </Card.Text>
        </div>
      </div>
      <div className='Card'>
        <Card.Img variant='top' src={bb1} className='Card-Img' />
        <div className='Card-Overlay'>
          <Card.Title><h3>Konjugate Methods</h3></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            <a href="/">
            <img className='card-btn'src={readmore} alt="" />
          </a>
          </Card.Text>
        </div>
      </div>
      <div className='Card'>
        <Card.Img variant='top' src={bb2} className='Card-Img' />
        <div className='Card-Overlay'>
          <Card.Title><h3> Kettlebell</h3></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            <a href="/">
            <img className='card-btn'src={readmore} alt="" />
          </a>
          </Card.Text>
        </div>
      </div>
      <div className='Card'>
        <Card.Img variant='top' src={bb3} className='Card-Img' />
        <div className='Card-Overlay'>
          <Card.Title><h3>Weight lifting</h3></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            <a href="/">
            <img className='card-btn'src={readmore} alt="" />
          </a>
          </Card.Text>
        </div>
      </div>
      <div className='Card'>
        <Card.Img variant='top' src={bb4} className='Card-Img' />
        <div className='Card-Overlay'>
          <Card.Title><h3>Striking</h3></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            <a href="/">
            <img className='card-btn'src={readmore} alt="" />
          </a></Card.Text>
        </div>
      </div>
      <div className='Card'>
        <Card.Img variant='top' src={bb5} className='Card-Img' />
        <div className='Card-Overlay'>
          <Card.Title><h3> Advanced Gym</h3></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            <a href='/'> <img className='card-btn'src={readmore} alt="" />
          </a>
          </Card.Text>
        
        </div>
      </div>
    </div>
  );
};

export default Blognews;
