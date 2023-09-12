import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <footer id="footer">
        <div>
            <div className="footer-icons">
                <i className="fa-brands fa-facebook fa-2x" ></i>
                <i className="fa-brands fa-twitter fa-2x" ></i>
                <i className="fa-brands fa-youtube fa-2x" ></i>
                <i className="fa-brands fa-linkedin fa-2x"></i>
            </div>
            <div>
                <p>Copyright © 2023 - HermesSolutions</p>
            </div>
        </div>
    </footer>
    )
  }
}

export default Footer