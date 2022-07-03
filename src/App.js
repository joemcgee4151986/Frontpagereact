import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Covid from './pages/covid/covid';
import Mainsectiontwo from './pages/mainsectiontwo/Mainsectiontwo';
import About from "./pages/about/About";
import Sidebar from './pages/sidebar/Sidebar';
import Home from './pages/home/Home';
export default function App() {
  
  return (
    <Router>
      <div>
        {/*commented out code is left here so I don't want to readd the code from memory in the future if I do decide to use it.*/}
        {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/Covid" element={<Covid/>} /> 
        <Route  path="/Mainsectiontwo" element={<Mainsectiontwo />} /> 
        <Route  path="/About" element={<About/>} /> 
        <Route  path="/Sidebar" element={<Sidebar />} /> 
        <Route  path="/Home" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}