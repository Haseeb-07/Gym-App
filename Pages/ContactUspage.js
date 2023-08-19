import React from 'react'
import AppHeader from '../Components/AppHeader'; 
import AppFooter from '../Components/AppFooter';
import ContactMap from '../Components/ContactMap'
export default function ContactUspage() {
  return (
    <div className='aboutus-page'>
        <AppHeader /> 
         <ContactMap/>
        <AppFooter/>
    </div>
  )
}