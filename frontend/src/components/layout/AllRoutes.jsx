import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Products } from '../pages/Products'
import { Home } from '../Home/Home'
import { Loader } from './Loader/Loader'
import { ProductDetails } from '../Product/ProductDetails'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sad" element={<Loader/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
    </Routes>
  )
}
