import { useToast, Button } from '@chakra-ui/react'

function AlertCart() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Successfully Added.',
            description: "Item will present in your Cart Section.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top'   
          })
        } colorScheme='blue'
        width='full'
      >
        Add to Cart
      </Button>
    )
};

export default AlertCart;