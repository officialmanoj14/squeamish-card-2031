import React from 'react';
import { Button, Stack, Input } from '@chakra-ui/react';
import './Navbar.css';
// import { SearchIcon } from "@chakra-ui/icons";
import { HiUser } from "react-icons/hi2"; 
// import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <div className='navLogo'>
           <img src="e_shop.png" alt="" width="170px" height="50px"/>
           <h2>Shop</h2>
        </div>
        <div className='navSearch'>
        <Input placeholder='Search by keywords' aria-label='Search database' width="100%"/>
        {/* <IconButton aria-label='Search database' icon={<SearchIcon />} marginLeft="-41px" cursor="pointer"/> */}
        </div>
        <div className='navLogin'>
          <p>Ship to India/USD</p>
          <Stack direction='row' spacing={2}>
            <Button leftIcon={<HiUser/>} colorScheme='teal' variant='outline'>
                SignIn
            </Button>
          </Stack>
        </div>
    </div>
      
    </>
  )
}

export default Navbar;
