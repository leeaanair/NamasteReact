//import React from 'react';
import { createElement } from 'react';

import ReactDOM from 'react-dom/client';
import './App.css'


const heading = createElement("h1", {
      id : "title1",
      key : "title1"
  }, "Selamet Pagi!"); //{} is props to insert like id, className, or event handlers
  // React.createElement(type, props, children) is the syntax for creating elements

  const heading2 = createElement("h2", {
      id : "title2",
      key : "title2"
  }, "Selamet Siang!"); 

  
const item1 = createElement("li", {id: "item1", key:"item1"}, "Leeaa");            
const item2 = createElement("li", {id: "item2", key:"item2"}, "Kishore");            

const navbar = createElement("ul", {
    id : "navbar1",
    key : "nav-bar"
}, [item1, item2]);     

const container = createElement("div", {
    id : "container",
    key : "container"
}, [heading, heading2, navbar]); 


  //this creates a separate div element with id container. 
  // the container div made above will be separate and untouched

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(container);