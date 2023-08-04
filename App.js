import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './Components/AppHeader'; 
import AppFooter from './Components/AppFooter';
import MainBody from './Components/MainBody';
import Contact from './Components/Contact';
import Blognews from './Components/Blognews';
import './AppHeader.css';
function App() {
  return (
    <div>
      <AppHeader /> 
      <MainBody/>
      <Contact/>
      <Blognews/>
      <AppFooter/>
      </div>
  );
}

export default App;
