import React from 'react';
import ReactDOM from 'react-dom/client';
import Adresse from './Adresse';
import Fullname from './Fullname';
import fullname from './Fullname';
import Amine from  './pic/Amine.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img src={Amine} ></img>

  <Fullname></Fullname>
    <Adresse></Adresse>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

