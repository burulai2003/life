import React, { Component } from 'react'
import './Header.scss'
import { FaShoppingCart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaGift } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";









const Header  = () => {
    return (
      <div className='cont'>
   <div className="cont__top">     
   <div className="cont__left">
        <input type="text" placeholder='search...' />
        <span><CiSearch /></span>
        </div>
        <div className="cont__right">
        <span><FaRegUserCircle />log in</span>
           <span><FaGift /></span> 
           <span><GiShoppingBag /></span>
</div>
</div>

        <h1>Life Etc.</h1>
        <div className="cont__bottom">
            <ul><li>SHOP
                </li>
                <li>ABOUT</li>
                <li>JOURNAL</li>
                <li>CONTACT</li></ul>
        </div>



      </div>
    )
  }
  export default Header
