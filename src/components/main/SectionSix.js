import React, { Component } from 'react'
import callbackimage from '../../images/callback-image.png'

class SectionSix extends Component {
  render() {
    return (
        <section className="imagebox">
            <div className="banner-image">
                <img src={callbackimage} alt=""/>
            </div>
            <div id="callback-banner" className="banner-contant">
                <h2>Reguest Callback</h2>
                <input className="callback-input" placeholder="Enter name" type="text"/>
                <input className="callback-input" placeholder="Enter email" type="text"/>
                <input className="callback-input" placeholder="Enter phone" type="text"/>
                <button id="callback-button" className="main-button">Send</button>
            </div>
        </section>
    )
  }
}

export default SectionSix