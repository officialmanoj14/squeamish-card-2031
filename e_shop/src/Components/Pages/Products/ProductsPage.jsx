import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './ProductCard'
import { ProductGrid } from './ProductGrid'
import { useState, useEffect } from 'react';
import axios from "axios";
import Footer from '../../Footer';
import Navbar from '../../Navbar';


export const ProductsPage = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://calm-red-hen-hat.cyclic.app/api/products`)
    .then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    },[]);
  })
  
  return (
    <>
      <Navbar/>
      <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
  <Footer/>
  </>
)
  
}