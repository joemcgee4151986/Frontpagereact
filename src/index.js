import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import Sidebar from "./pages/sidebar/Sidebar";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar/>
    <App/> 
    </React.StrictMode>
);
reportWebVitals();
