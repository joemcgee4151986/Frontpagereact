import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Mainsection from'./pages/mainsection/Mainsection';
import Mainsectiontwo from'./pages/mainsectiontwo/Mainsectiontwo';
import Sidebar from "./pages/sidebar/Sidebar";
import About from "./pages/about/About";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  
    <Sidebar/>
    <App/>

    
    
    </React.StrictMode>

 
  
  
    
 
   
   
   
      
     
    
   
 
    
      
    

  

  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
