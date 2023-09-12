import React, { Component } from 'react'
import SectionOne from '../main/SectionOne'
import SectionTwo from '../main/SectionTwo'
import SectionTree from '../main/SectionTree'
import SectionFour from '../main/SectionFour'
import SectionFive from '../main/SectionFive'
import SectionSix from './SectionSix'

class Main extends Component {
  render() {
    return (
        <div id='main'>
         <SectionOne/>
         <SectionTwo/>
         <SectionTree/>
         <SectionFour/>
         <SectionFive/>
         <SectionSix/>
        </div>
    )
  }
}

export default Main