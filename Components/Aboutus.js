import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import readmorebtn from '../readmore.png'
import orangeblack from '../orangeblack.png'
import './Aboutus.css'
export default function Aboutus() {
  return (
    <div>
      <Container fluid className='aboutcontainer'>
        <Row>
            <Col className='aboutustext'>
                <div className='aboutText'>
            <h1>ABOUT US</h1>
            <p>Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt mollit anim est. laborum sed perspiciatis unde omnis natus error sit voluptatem accusantium dolore mque laudantium totam rem aperiam.
</p> 
<p>Dicta sunt explicabo. nemo enim ipsam voluptatem quia magni voluptassit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.</p>
            <a href="/"><img src={readmorebtn} alt="" /></a>
            </div>
            </Col>
            <Col className='orangeblackimg'>
                <div className='orangeblack'>
                <img src={orangeblack} alt="" />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
