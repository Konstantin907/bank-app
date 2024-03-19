import React from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from './footer/Footer';
import { Copyrights } from './copyrights/Copyrights';
import Header from './header/Header';

export const WrapperUseLocation = () => {
    const location = useLocation();
    const showFooter = location.pathname !== '/register';

  return (
    <>
        {showFooter && <Footer />}
        {showFooter && <Copyrights />}
        {showFooter && <Header /> }
    </>
  )
}
