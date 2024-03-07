import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Products } from '../Product/Products'
import { Home } from '../Home/Home'
import { Loader } from './Loader/Loader'
import { ProductDetails } from '../Product/ProductDetails'
import { Search } from '../Product/Search'
import { LoginSignup } from '../User/LoginSignup'
import { Profile } from '../User/Profile'
import { useSelector } from 'react-redux'
export const AllRoutes = () => {
  const {isAuthenticated}=useSelector(state=>state.user);
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:keyword" element={<Products/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sad" element={<Loader/>} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/account" element={isAuthenticated?<Profile />:<LoginSignup />} />
    </Routes>
  )
}
