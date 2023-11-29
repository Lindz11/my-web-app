import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/home'
import About from './routes/about';
import ContactUs from './routes/contactus';
function App() {
  return (
      <div className="App">
        <Routes>
            <Route path = "/" element ={<Home/>}/>
            <Route path = "/about" element ={<About/>}/>
            <Route path = "/contact" element ={<ContactUs/>}/>
        </Routes>
      </div>
  );
}

export default App;
