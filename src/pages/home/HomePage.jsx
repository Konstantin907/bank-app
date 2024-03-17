import React from 'react'
import HeroSection from '../../components/hero/HeroSection'
import { LineElements } from '../../components/lineElements/LineElements'
import { WhatPeopleThink } from '../../components/whatPeopleThink/WhatPeopleThink'
import { Footer } from '../../components/footer/Footer'
import { Copyrights } from '../../components/copyrights/Copyrights'

export default function HomePage() {
  return (
    <>
        
        <HeroSection />
        <LineElements /> 
        <WhatPeopleThink />
          <Footer />
          <Copyrights />
    </>
  )
}
