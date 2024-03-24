import React from 'react'
import HeroSection from '../../components/hero/HeroSection'
import { LineElements } from '../../components/lineElements/LineElements'
import { WhatPeopleThink } from '../../components/whatPeopleThink/WhatPeopleThink'
import "./home.scss"

export default function HomePage() {
  return (
    <div className='home'>
        
        <HeroSection />
        <LineElements /> 
        <WhatPeopleThink />

        <hr className='footerHorizontalTop'/>
          
    </div>
  )
}
