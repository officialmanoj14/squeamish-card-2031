import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Text,
  Divider
} from "@chakra-ui/react";
import { HiUser } from "react-icons/hi2";
import { Link} from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const Navigate = useNavigate();
  const handleClick = () => {
    setClick(true);
    Navigate("/login")
  }
  return (
    <>
      <Box bg={useColorModeValue("#318ffb", "#0066ff")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <div style={{ marginTop: "15px", marginLeft: "30px" }}>
            <img src="e_shop.png" alt="img" width="100px" height="19px" />
          </div>
          <Input
            color="black"
            placeholder="Search by Keywords..."
            width="40%"
            textItems="center"
            bg="white"
            icon={<SearchIcon />}
          />
          <Flex alignItems={"center"}>
            <Menu>
              <Stack direction marginRight="60px">
                <Link to="/cart"><HiShoppingCart size="40px" cursor="pointer" /></Link>
              </Stack>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                onClick={handleClick}
              >
               
                <Button
                  leftIcon={<HiUser />}
                  colorScheme="white"
                  border="1px solid white"
                  variant="outline"
                  
                >
                 SignIn
                </Button>
                

                {/* <Avatar
                  bg="teal" variant="outline"
                  size={"sm"}
                  Icon={<HiUser/>}
                /> */}
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Setting</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Divider colorScheme="red" />
        <Flex
          padding="15px"
          color="white"
          fontWeight="bold"
          justifyContent="space-around"
          width="70%"
          margin="auto"
        >
          <Link to="/productspage" >
            <Text cursor="pointer">Consumer Electronics</Text>
          </Link>
          <Link to="/productspage"><Text cursor="pointer">Smart Homes and Garden</Text></Link>
          <Link to="/productspage"><Text cursor="pointer">Generator and Portable Device</Text></Link>
          <Link to="/productspage"><Text cursor="pointer">Local Warehouses</Text></Link>
        </Flex>
      </Box>

      
    </>
  );
}

