import React from 'react'
import './Blognews.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import photo1 from '../bodybuilding2.jpg'
export default function News() {
  return (
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
    </div>
  )
}
