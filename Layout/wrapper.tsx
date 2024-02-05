import React from 'react'
import Header from './header'
import Footer from './footer'

interface wrapperProps {
    children: JSX.Element | JSX.Element[];
  }


const Wrapper= ({children}: wrapperProps) => {

  
  return (
    <>
    <Header/>
    <br/>

    {children}


    <br/>
    <Footer/>

    
    
    
    </>
  )
}

export default Wrapper