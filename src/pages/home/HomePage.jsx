import React from 'react'
import Header from '../../components/header/Header'
import HeroSection from '../../components/hero/HeroSection'
import { LineElements } from '../../components/lineElements/LineElements'
import { WhatPeopleThink } from '../../components/whatPeopleThink/WhatPeopleThink'
import { Footer } from '../../components/footer/Footer'
import { Copyrights } from '../../components/copyrights/Copyrights'

export default function HomePage() {
  return (
    <>
        <Header />
        <HeroSection />
        <LineElements /> 
        <WhatPeopleThink />
          <Footer />
          <Copyrights />
    </>
  )
}
