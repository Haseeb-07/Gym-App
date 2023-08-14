import React from 'react'
import './OurTrainer.css'
import { Container, Row, Col } from 'react-bootstrap'
import facebook from'../whitefacebook.png'
import twitter from '../whitetwitter.png'
import instagram from '../whiteinstagram.png'
import youtube from '../whiteyoutube.png'
import NewCarousel from './NewCarousel'
export default function OurTrainer() {
  return (
    <div>
      <div className='Ourtrainer-text'fluid >
        <h3>OUR TRAINER</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis convallis ligula.</p>
        <p> Quisque malesuada enim at neque finibus sollicitudin.</p>
      </div>
      <div className='Ourtrainer-containerdiv'>
        <Container fluid className='Ourtrainer-container'>
<Row>
    <Col className='text-trainer'>
  <div className='trainer-hp'><h5>Cleopatra Snatcher</h5>
  <h3>Fitness Instructor</h3>
  <br />
  <br />
<p>Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt mollit anim est. laborum sed perspiciatis unde omnis natus error sit voluptatem accusantium dolore mque laudantium totam rem aperiam.</p>
</div>
<div className='white-icons'>
<a href="www.facebook.com"><img src={facebook} alt="" /></a>
<a href="www.twitter.com"><img src={twitter} alt="" /></a>
<a href="www.instagram.com"><img src={instagram} alt="" /></a>
<a href="www.youtube.com"><img src={youtube} alt="" /></a>
    </div>
    </Col>
    <Col className='carousel-trainer'>
        <div className='new-carousel'>
        <NewCarousel/>
        </div>
      
    </Col>
</Row>
        </Container>
      </div>
    </div>
  )
}
