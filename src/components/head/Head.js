import React, { Component } from "react";
import Navigate from '../head/Navigate'
import Banner from "./Banner";
class Head extends Component {
  render() {
    return (
      <div id="header">
      <Navigate/>
      <Banner/>
   </div>
    );
  }
}

export default Head;
