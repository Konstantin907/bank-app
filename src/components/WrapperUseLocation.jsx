import React from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from './footer/Footer';
import { Copyrights } from './copyrights/Copyrights'

export const WrapperUseLocation = () => {
    const location = useLocation();
    const showFooter = location.pathname !== '/register' && location.pathname !== "/login";

  return (
    <>
        {showFooter && <Footer />}
        {showFooter && <Copyrights />}
    </>
  )
}
