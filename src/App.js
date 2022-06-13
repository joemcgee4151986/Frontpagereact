import React from 'react';


import './App.css';

import {
  HashRouter as Router,
  Routes,
  Route,

 
 
} from "react-router-dom";
import Mainsection from './Mainsection';
import Mainsectiontwo from './Mainsectiontwo';


export default function BasicExample() {
  return (
    
    <Router>
      <div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
        <Route path="/Mainsection" element={<Mainsection />} /> 
        <Route path="/Mainsectiontwo" element={<Mainsectiontwo />} /> 
          
         
        </Routes>
      </div>
    </Router>
  );
      }