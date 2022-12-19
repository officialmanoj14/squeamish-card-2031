import { Box, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './ProductCard'
import { ProductGrid } from './ProductGrid'
import { useState, useEffect } from 'react';
import axios from "axios";
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import { Button, Stack } from '@chakra-ui/react'
import Pagination from './Pagination';


export const ProductsPage = () => {
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(`https://calm-red-hen-hat.cyclic.app/api/products?_page=${currentPage}&_limit=7&_orderBy=${sort}`)
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      }, [sort, currentPage]);
  })

  return (
    <>
      <Navbar />
      
      <Stack spacing={4} direction='row' align='center' justifyContent="center" margin="10px">
        <Button colorScheme='teal' size='md' onClick={() => setSort("asc")} disabled={sort === "asc"} >
          Sort by Low to High
        </Button>
        <Button colorScheme='teal' size='md' onClick={() => setSort("desc")} disabled={sort === "desc"} >
          Sort by High to Low
        </Button>
      </Stack>
      <Heading noOfLines={1} size='md' fontSize='30px' >
        Number of Pages: 3
      </Heading>
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
      <Pagination totalPages={totalPage} currPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </>
  )

}