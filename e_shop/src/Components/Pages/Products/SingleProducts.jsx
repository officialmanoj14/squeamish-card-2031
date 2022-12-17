import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Divider,
  Wrap,
  WrapItem,
  Container,
} from '@chakra-ui/react';

const SingleProducts = () => {
  return (
    <Container maxW={'7xl'} p="12">
      
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            {/* <BlogTags tags={['Engineering', 'Product']} marginTop="3" /> */}
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Some blog title
              </Link>
            </Heading>
           
            {/* <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            /> */}
          </Box>
        </WrapItem>
      </Wrap>
      
    </Container>
  );
};

export default SingleProducts;