import React, { Component } from 'react'

class SectionOne extends Component {
  render() {
    return (
     <section id="development">
        <div id="web" className="item">
            <i className="fa-solid fa-code fa-2x" style={{color: "#ffffff",}}></i>
            <h4>Web Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adip.</p>
        </div>
        <div id="mobile" className="item">
            <i className="fa-regular fa-mobile fa-2x" style={{color: "#ffffff",}}></i>
            <h4>Mobile App</h4>
            <p>Lorem ipsum dolor sit amet consectetu adip.</p>
        </div>
        <div id="server" className="item">
            <i className="fa-regular fa-server fa-2x "  style={{color: "#ffffff",}} ></i>
            <h4>Server-Side Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adip.</p>

        </div>
    </section>
    )
  }
}

export default SectionOne