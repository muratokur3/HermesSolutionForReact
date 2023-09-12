import React, { Component } from 'react'

export class Navigate extends Component {
  render() {
    return (
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
    )
  }
}

export default Navigate