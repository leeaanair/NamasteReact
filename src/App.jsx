import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'


const heading = React.createElement("h1", {
      id : "title1"
  }, "Selamet Pagi!"); //{} is props to insert like id, className, or event handlers
  // React.createElement(type, props, children) is the syntax for creating elements

  const heading2 = React.createElement("h2", {
      id : "title2",
  }, "Selamet Siang!"); 

  const container = React.createElement("div", {
      id : "container"
  }, [heading, heading2]);            
  //this creates a separate div element with id container. 
  // the container div made above will be separate and untouched

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(container);
