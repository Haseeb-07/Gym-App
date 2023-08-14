import React from 'react';
import getstart from '../getstart.png'
import playvid from '../playvideo.png'
import { Container, Row, Col } from 'react-bootstrap'
import booknow from '../booknow.png'
import booknow2 from '../bookbutton2.png'
import Ourclasses from '../Components/Ourclasses';
import CustomCarousel from './CustomCarousel';
import Aboutus from './Aboutus';
export default function MainBody() {
  return (
    <div>
    <div className="bodyapp">
      <div className="heading-container">
        <h1>CHALLENGE<br/>YOURSELF</h1>
      </div>
      <div className="content-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean quis convallis ligula. Quisque malesuada enim at neque finibus sollicitudin.</p>
      </div>
      <div className="image-container">
        <a href="/">
          <img src={getstart} alt="Get Started" />
        </a>
        <a href="https://youtu.be/QFaFIcGhPoM" target="_blank" rel="noopener noreferrer">
          <img src={playvid} alt="Play Video" />
        </a>
        
        
      </div>
      <br/>
      <div><CustomCarousel/></div>
      <Container fluid className="grid">
      <Row>
        <Col className="custom-col-1">
        <div className="col-container1">
              <p>MEMBERSHIP START FROM $77.6</p>
            </div>
            <div className="random-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis convallis ligula. Quisque malesuada enim at neque finibus sollicitudin.</p>
            <a href="/"><img src={booknow} alt="Book Me"/></a>
            </div>
        </Col>
        <Col className="custom-col-2">
        <div className="col-container2">
              <p>MEMBERSHIP START FROM $77.6</p>
            </div>
            <div className="random-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis convallis ligula. Quisque malesuada enim at neque finibus sollicitudin.</p>
              <a href="/"><img src={booknow2} alt="Book Me"/></a>
            </div>
        </Col>
      </Row>
      </Container>
      </div> 
    <Aboutus/>
  <Ourclasses/>
    </div>
  );
}
