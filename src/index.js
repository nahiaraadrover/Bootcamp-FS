//Clase 3'
/*
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // <- aquí importás App desde Clase3.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
*/

//////////////Clase 4/////////
import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './Clase4'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]



ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)