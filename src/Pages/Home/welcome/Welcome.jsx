import React, { Component } from 'react'
import './Welcome.scss'
import Img from './img/www.jpg'
const Welcome =() =>{
    return (
      <div className='cont'>
       <div className="cont__top">
         <h2 className='cont__title'>women's apparel brand </h2>
         </div>
     <div className="img">    <img src={Img} alt="" /></div>
      </div>
    )
  }
  export default Welcome
