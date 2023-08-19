import React from 'react'
import AppHeader from '../Components/AppHeader'; 
import AppFooter from '../Components/AppFooter';
import Aboutus from '../Components/Aboutus';
export default function AboutUspage() {
  return (
    <div className='aboutus-page'>
        <AppHeader /> 
      <Aboutus/>
        <AppFooter/>
    </div>
  )
}
