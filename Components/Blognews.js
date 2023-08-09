import React from 'react'
import './Blognews.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import photo1 from '../bodybuilding2.jpg'
import readmore from '../readmore.png'
export default function Blognews() {
  return (
    <>
    <div>
   <Container fluid className='blognews'>
    <Row>
        <Col className='blognewsleft'>
        <h3>BLOG NEWS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis convallis ligula. Quisque malesuada enim at neque finibus sollicitudin.</p>
        </Col>
        <Col className='blognewsright'>
        <div className='cards'>
            <Card style={{ width: '300px', margin:'20px', marginTop: '90px' }}>
      <Card.Img variant="top" src={photo1} />
      <Card.Body>
        <Card.Title>Quisque Malesuada Enim</Card.Title>
        <Card.Text>
        By John, 20 September 2019
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '300px', margin:'20px', marginTop: '90px' }}>
      <Card.Img variant="top" src={photo1} />
      <Card.Body>
        <Card.Title>Quisque Malesuada Enim</Card.Title>
        <Card.Text>
        By John, 20 September 2019
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
        </Col>
    </Row>
   </Container>
   <div className='map-responsive'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.2048065894314!2d73.03457867570265!3d33.7295197732802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbefce01e6917%3A0x3e66e0de3e2598c0!2sFaisal%20Mosque!5e0!3m2!1sen!2suk!4v1691481808413!5m2!1sen!2suk" 
    width="600" height="450" 
        allowFullScreen=""
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="react maps">
        </iframe>
        <div className='contactcontainer'></div>
        <div className='contactform' fluid>
     <h2>CONTACT</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis convallis ligula.</p>
        <p> Quisque malesuada enim at neque finibus sollicitudin.</p>
        <input type="text" fluid placeholder='Name' />
        <input type="text" fluid placeholder='Email' />
        <textarea name="message" fluid placeholder='Message' id="" cols="98" rows="5"></textarea>
      <br />
      <a href="/"><img src={readmore} alt="" /></a>
     </div>
     </div>
   </div>
    </>
  )
}
