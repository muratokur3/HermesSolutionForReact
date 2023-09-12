import React, { Component } from 'react'
import teamleadimage1 from '../../images/team-lead-image1.jpg'
import teamleadimage2 from '../../images/team-lead-image2.jpg'
import teamleadimage3 from '../../images/team-lead-image3.jpg'
class SectionFive extends Component {
  render() {
    return (
        <section className="gallerybox person">
        <div className="head-text" >
            <h5>Who we are</h5>
            <h2>Our Professional Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae incidunt placeat harum nisi
                necessitatibus
                eum accusamus nam nihil saepe velit?</p>
        </div>

        <div className="wrap-images">
            <div className="images team">
                <img src={teamleadimage1} alt=''/>
                <h3>Kevin Malone</h3>
                <h4>Marketing</h4>
            </div>
            <div className="images team">
                <img src={teamleadimage2} alt=''/>
                <h3>Michael Scott</h3>
                <h4>President</h4>
            </div>
            <div className="images team">
                <img src={teamleadimage3} alt=""/>
                <h3>Dvight Schirute</h3>
                <h4>CTO</h4>
            </div>

        </div>
    </section>
    )
  }
}

export default SectionFive