import React from 'react'
import './Contact.css'
import readmore from '../readmore.png'
// import { Container, Row, Col } from 'react-bootstrap'
export default function Contact() {
  return (
    <div className='map'>
      <br />
      <br />
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
  )
}
