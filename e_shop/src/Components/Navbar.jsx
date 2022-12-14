import React from 'react';
import { Button, Stack, Input, IconButton } from '@chakra-ui/react';
// import { SearchIcon } from "@chakra-ui/icons";
import { HiUser } from "react-icons/hi2"; 
// import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <>
    <div>
        <div>
           <img src="e_shop.png" alt="Image not found" width="170px" height="50px"/>
           <h2>Shop</h2>
        </div>
        <div>
        <Input placeholder='Search by keywords' aria-label='Search database' width="40%"/>
        {/* <IconButton aria-label='Search database' icon={<SearchIcon />} marginLeft="-41px" cursor="pointer"/> */}
        </div>
        <div>
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
