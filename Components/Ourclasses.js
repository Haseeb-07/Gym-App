import React from 'react'
import './Ourclasses.css'
import { Container, Row, Col } from 'react-bootstrap'
import ourclasses from '../ourclassesbutton.png'
export default function Ourclasses() {
  return (
    <div>
       <div className="our-classes">
        <h1>OUR CLASSES</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis convallis ligula.</p>
        <p> Quisque malesuada enim at neque finibus sollicitudin.</p>
       </div>
       <Container fluid className='pics'>
  <Row className='myRow'>
    <Col className='mycoldark'>
    
    </Col>
    <Col className='mycolblack'>
      <div className='konjugate'>
    <h2>Konjugate Methods</h2>
    <p>Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt mollit anim est. </p>
    <a href='/'><img src={ourclasses} alt="" /> </a>
    </div>
    </Col>
    <Col className='mycoldark'>
    
    </Col>
  </Row>
  <Row className='myRow'>
    <Col className='mycolblack'>
    
    </Col>
    <Col className='mycoldark'>
    
    </Col>
    <Col className='mycolblack'>
   
    </Col>
  </Row>
  
</Container>
</div>

  )
}
