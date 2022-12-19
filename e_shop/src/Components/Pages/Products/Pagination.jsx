import { Button, Stack } from '@chakra-ui/react';



function Pagination({ currPage, totalPages, setCurrentPage }) {

    return (
        <>
            <Stack direction='row' spacing={4} align='center' justifyContent={'center'} marginBottom='20px'>
                <Button colorScheme='teal' variant='outline' disabled={currPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                    PREVIOUS
                </Button>
                <Button disabled colorScheme='blue' variant='solid'>{currPage}</Button>
                <Button colorScheme='teal' variant='outline' disabled={currPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>
                    NEXT
                </Button>
            </Stack>

        </>
    );
}

export default Pagination;
