import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from '@component/components/Footer';

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
