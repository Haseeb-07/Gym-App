import React from 'react'
import AppHeader from '../Components/AppHeader'; 
import AppFooter from '../Components/AppFooter';
import Ourclasses from '../Components/Ourclasses';
export default function OurClasses() {
  return (
    <div className='aboutus-page'>
        <AppHeader /> 
     <Ourclasses/>
        <AppFooter/>
    </div>
  )
}