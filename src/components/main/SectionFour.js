import React, { Component } from 'react'
import codeworkingimage from '../../images/code-working-image.jpg'

class SectionFour extends Component {
  render() {
    return (
        <section className="imagebox">

        <div className="blog-contant">
            <p>March 26 2023</p>
            <h1>Blog #3</h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus minus sed nulla maiores rem
                cupiditate soluta vel facere nostrum est, quis libero voluptatibus, fugit, ipsum officia corporis
                reiciendis natus earum culpa. Minus, est odio? Inventore voluptatem quae deleniti nostrum, tempora
                vitae. Officiis fugiat esse dicta excepturi iste magni culpa vitae!</p>
            <button className="main-button">Read More</button>
        </div>

        <div className="blog-image">
            <img src={codeworkingimage} alt=""/>
        </div>
    </section>
    )
  }
}

export default SectionFour