import React from 'react'
import "./hero.scss"
import HeroLeft from '../hero-left/HeroLeft'
import HeroRight from '../hero-right/HeroRight'

export default function HeroSection() {
  return (
    <div className='hero-section'>
        <HeroLeft />
        <HeroRight /> 
    </div>
 
    
  )
}
