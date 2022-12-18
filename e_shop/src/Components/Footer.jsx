import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

import { Divider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Text color="blue" fontWeight="bold" fontSize="20px">
          Why Buy from e-Shop? <span>+</span>
        </Text>
        <Divider colorScheme="blue" />
        <Stack spacing={3} display="inline">
          <Box>
            <Input
              h="46.50px"
              fontSize="17px"
              placeholder="Enter email to get a 5% off coupon"
              size="lg"
              width="50%"
              borderRadius="0px"
              alignItems="center"
              border="1px solid blue"
            />
            <Button colorScheme="blue" width="25%" size="lg" borderRadius="0px">
              Subscribe
            </Button>
          </Box>
        </Stack>
        <Divider colorScheme="blue" />

        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Help</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Warranty</Link>
            <Link href={"#"}>FAQs</Link>
            <Link href={"#"}>Sitemap</Link>
            <Link href={"#"}>Order status</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Safety Center</Link>
            <Link href={"#"}>Community Guidelines</Link>
            <Link href={"#"}>What Geek</Link>
            <Link href={"#"}>Shipping Guide</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Payment Information</Link>
            <Link href={"#"}>Wholesales</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
            <Link href={"#"}>Declaration</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Download the App</ListHeader>

            <div style={{ display: "flex" }}>
              <div>
                <img
                  src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png"
                  alt="img"
                />
              </div>
              <div style={{ marginTop: "5px", cursor: "pointer" }}>
                <img
                  src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
                  alt="img"
                  style={{ paddingBottom: "5px" }}
                />
                <img
                  src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
                  alt="img"
                  style={{ paddingBottom: "5px" }}
                />
                <img
                  src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"
                  alt="img"
                  style={{ paddingBottom: "5px" }}
                />
              </div>
            </div>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

