import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUspage from './Pages/AboutUspage';
import Homepage from './Pages/Homepage';
import OurClasses from './Pages/OurClasses';
import ContactUspage from './Pages/ContactUspage';
import Newspage from './Pages/Newspage';
import Nopage from './Pages/Nopage';
import './AppHeader.css';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/about" element={<AboutUspage/>}/>
        <Route path="/classes" element={<OurClasses/>}/>
        <Route path="/contact" element={<ContactUspage/>}/>
        <Route path="/news" element={<Newspage/>}/>
        <Route path="*" element={<Nopage/>}/>
      </Routes>
      </BrowserRouter>
 
</div>
  );
}

export default App;
