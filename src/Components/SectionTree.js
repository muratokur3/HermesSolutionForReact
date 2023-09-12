import React, { Component } from 'react'
import resim1 from '../images/gallery-images1.jpg'
import resim2 from '../images/gallery-images2.jpg'
import resim3 from '../images/gallery-images3.jpg'
import resim4 from '../images/gallery-images4.jpg'
import resim5 from '../images/gallery-images5.jpg'
import resim6 from '../images/gallery-images6.jpg'
import resim7 from '../images/gallery-images7.jpg'
import resim8 from '../images/gallery-images8.jpg'

export class SectionTree extends Component {
  render() {
    return (
        <section className="gallerybox">
        <div className="head-text">
            <h5>This is what we do</h5>
            <h2>WORK CASES</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, distinctio.</p>
        </div>

        <div className="wrap-images">
            <div className="images"><img src={resim1} alt=''/></div>
            <div className="images"><img src={resim2} alt=''/></div>
            <div className="images"><img src={resim3} alt=''/></div>
            <div className="images"><img src={resim4} alt=''/></div>
            <div className="images"><img src={resim5} alt=''/></div>
            <div className="images"><img src={resim6} alt=''/></div>
            <div className="images"><img src={resim7} alt=''/></div>
            <div className="images"><img src={resim8} alt=''/></div>
        </div>
    </section>
    )
  }
}

export default SectionTree