import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from './header/Header';

export const WrapperHeaderShow = () => {
    const location = useLocation();
    const useHeaderOptions = location.pathname !== "/register" && location.pathname !== "/login";
  return (
    <>
        { useHeaderOptions && <Header /> }
    </>
  )
}
