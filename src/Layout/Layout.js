import React, { Component } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom';


const Layout =()=>{
    return (
    <section>
<Header/>

<main><Outlet/>
</main>
  <Footer/>

    </section>
    )
  }
export default Layout
