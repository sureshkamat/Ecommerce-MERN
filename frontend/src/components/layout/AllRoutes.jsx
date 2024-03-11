import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { ProductDetails } from '../Product/ProductDetails'
import { Products } from '../Product/Products'
import { Search } from '../Product/Search'
import { LoginSignup } from '../User/LoginSignup'
import { Profile } from '../User/Profile'

import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Loader } from './Loader/Loader'
import UpdateProfile from '../User/UpdateProfile'
import UpdatePassword from '../User/UpdatePassword'
import ForgotPassword from '../User/ForgotPassword'
import ResetPassword from '../User/ResetPassword'
import Cart from '../Cart/Cart'
import Shipping from '../Cart/Shipping'
import ConfirmOrder from '../Cart/ConfirmOrder'
import Payment from '../Cart/Payment'
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
        <Route path="cart" element={<Cart />} />
        <Route path="/login/shipping" element={isAuthenticated?<Shipping />:<LoginSignup />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        
        <Route path="/process/payment" element={<Payment />} />
        <Route path="/account" element={isAuthenticated?<Profile />:<LoginSignup />} />
        <Route path="/me/update" element={isAuthenticated?<UpdateProfile />:<LoginSignup />} />
        <Route path="/password/update" element={isAuthenticated?<UpdatePassword />:<LoginSignup />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="password/reset/:token" element={<ResetPassword />} />
        

    </Routes>
  )
}
