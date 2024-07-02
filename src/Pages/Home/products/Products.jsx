import React, { Component } from 'react'
import './Products.scss'
import img1 from './img/3pic.jpg'
import img2 from './img/2ic.jpg'
import img3 from './img/1pic.jpg'

const Products = () => {
    return (
      <div className='cont'>
        <div className="header">
        <h3 className='cont_h3'>   FEATURED ITEMS</h3>
        </div>
    <div className="products"> 
        <div className="product">
          <img src={img1} alt="" />
          <h3>Lola Pants </h3>
          <h3>$85.00</h3>
          <button>Add to Cart</button>
          </div>
          <div className="product">
          <img src={img2} alt="" />
          <h3>Tote Bag </h3>
          <h3>$85.00</h3>
          <button>Add to Cart</button>
          </div>
          <div className="product">
          <img src={img3} alt="" />
          <h3>Anna Blouse </h3>
          <h3>$85.00</h3>
          <button>Add to Cart</button>
          </div>
          </div>
          <div className="shop">
            <button> Shop All </button>
          </div>

            </div>
    
      
    )
  }
  export default Products
