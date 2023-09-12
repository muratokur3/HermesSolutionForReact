import React, { Component } from "react";
class Head extends Component {
  render() {
    return (
      <div id="header">
      <div className="navbar">
        <div className="logo">
          <i className="fa-solid fa-book-open fa-2x" style={{color: "orange",}}></i>
          <p>
            <span>Hermes</span>Solutions
          </p>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Referances</a>
          </li>
          <li>
            <a href="#">Our Picks</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

      </div>
       <div className="banner">
      
           <h3>Your reliable software solutions partner</h3>
           <p>We code what you need</p>
           <button className="main-button">Learn more</button>
      
   </div>
   </div>
    );
  }
}

export default Head;
