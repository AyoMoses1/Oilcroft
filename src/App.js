import React from 'react';
// import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Main/Home';
import About from './Components/Main/About';
import Services from './Components/Main/Services';
import Blog from './Components/Main/Blog';
import Contact from './Components/Main/Contact';
import ServiceDetails from './Components/Main/ServiceDetails';

function App() {

    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/servicedetails/:id" element = {<ServiceDetails/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;
