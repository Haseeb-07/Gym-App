import React from 'react'
import AppHeader from '../Components/AppHeader'; 
import AppFooter from '../Components/AppFooter';
import News from '../Components/News'
export default function Newspage() {
  return (
    <div className='aboutus-page'>
        <AppHeader /> 
     <News/>
        <AppFooter/>
    </div>
  )
}