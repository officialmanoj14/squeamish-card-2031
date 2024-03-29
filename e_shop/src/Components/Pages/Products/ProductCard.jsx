import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { Rating } from './Rating'
  import { FavouriteButton } from './FavouriteButton'
  import { ProductsPrice } from './ProductsPrice';
  import AlertCart from "../Cart/AlertCart";
  
  export const ProductCard = (props) => {
    const { product, rootProps } = props
    const { name, imageUrl, price, salePrice, rating } = product
    return (
      <Stack
        spacing={useBreakpointValue({
          base: '4',
          md: '5',
        })}
        {...rootProps}
      >
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={imageUrl}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({
                base: 'md',
                md: 'xl',
              })}
            />
          </AspectRatio>
          <FavouriteButton
            position="absolute"
            top="4"
            right="4"
            aria-label={`Add ${name} to your favourites`}
          />
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
              {name}
            </Text>
            <ProductsPrice price={price} salePrice={salePrice} currency="USD" />
          </Stack>
          <HStack>
            <Rating defaultValue={rating} size="sm" />
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              12 Reviews
            </Text>
          </HStack>
        </Stack>
        <Stack align="center">
          <Link to="/cart" >
          <Button colorScheme="blue" width="full">
            <AlertCart/>
          </Button>
          </Link>
          <Link
            textDecoration="underline"
            fontWeight="medium"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Quick shop
          </Link>
        </Stack>
      </Stack>
    )
  }