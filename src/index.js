import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicExample from './formula';
import NavScrollExample from './navbar';

import img from './aizen.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavScrollExample/>
  <div className="css">
    <BasicExample/>
    <img className="img1" src={img}/>
  </div>
  
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

