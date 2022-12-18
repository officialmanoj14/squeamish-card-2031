import React from 'react';
import PopularBrands from './Routes/PopularBrands';
import TrendingCategory from './Routes/TrendingCategory';
import Footer from "./Footer";
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <TrendingCategory/>
      <PopularBrands/>
      <Footer/>
    </div>
  )
}

export default LandingPage;
