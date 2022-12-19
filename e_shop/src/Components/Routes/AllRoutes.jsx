import React from 'react';
import { Routes, Route} from "react-router-dom";
import LandingPage from '../LandingPage';
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import {ProductsPage} from "../Pages/Products/ProductsPage";
import {Cart} from "../Pages/Cart/Cart";


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/productspage" element={<ProductsPage/>} />
        <Route path="/cart" element={<Cart/>} />  
    </Routes>
  )
}

export default AllRoutes;
