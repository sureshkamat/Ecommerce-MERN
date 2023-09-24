import React from 'react'
import {FaMouse} from 'react-icons/fa';
import './home.css';
import { Product } from './Product';
import { Helmet } from 'react-helmet';
const product={
  name:"Mens tshirt",
  images:[{url:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1673585389_2625270.jpg?w=360&dpr=1.0"}],
  price:"3000",
  _id:"mens"
}
export const Home = () => {
  return (
    <>
    <Helmet title="Sursha Lifestyle" />
    <div className="banner">
        <p>Welcome to Sursha Lifestyle</p>
        <h1>Find Amazing Products Below</h1>
        <a href='#container'>
           <button>
            Scroll <FaMouse/>
           </button>
        </a>
    </div>
    <h2 className='homeHeading'>Featured Products</h2>
    <div className='container' id='container'>
      <Product  product={product} />
      <Product  product={product} />
      <Product  product={product} />
      <Product  product={product} />
      <Product  product={product} />
      <Product  product={product} />
      <Product  product={product} />
      <Product  product={product} />
    </div>
    </>
  )
}
