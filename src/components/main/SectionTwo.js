import React, { Component } from "react";
import resim from "../../images/team-work.jpg";
class SectionTwo extends Component {
  render() {
    return (
      <section className="imagebox">
        <div className="banner-image">
          <img src={resim} alt=""/>
        </div>
        <div className="banner-contant">
          <p>What you are developing for</p>
          <h1>We provide the best solutions</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium fuga temporibus corporis atque suscipit nam doloribus
            error ipsa voluptates minima eos mollitia, maxime cum architecto.
            Illum quia aspernatur itaque, ab quas a saepe at consequuntur rerum
            officis obcaecati, voluptatum non!
          </p>
          <button className="main-button">Learn more</button>
        </div>
      </section>
    );
  }
}

export default SectionTwo;
