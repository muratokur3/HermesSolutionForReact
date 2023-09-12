import React, { Component } from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionTree from './SectionTree'


class Main extends Component {
  render() {
    return (
        <div id='main'>
         <SectionOne/>
         <SectionTwo/>
         <SectionTree/>
        </div>
    )
  }
}

export default Main