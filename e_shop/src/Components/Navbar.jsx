import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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
import { HiShoppingCart } from "react-icons/hi";
import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Navbar() {
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
                <HiShoppingCart size="40px" cursor="pointer" />
              </Stack>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
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
          <Text cursor="pointer">Consumer Electronics</Text>
          <Text cursor="pointer">Smart Homes and Garden</Text>
          <Text cursor="pointer">Generator and Portable Device</Text>
          <Text cursor="pointer">Local Warehouses</Text>
        </Flex>
      </Box>

      
    </>
  );
}

