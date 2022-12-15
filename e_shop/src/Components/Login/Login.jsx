import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Grid,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

function Login() {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <Grid
            minH={'100vh'}
            align={'center'}
            justify={'center'}
        >

            <div style={{ width: "100%", height: "95px", border: "1px solid blue", backgroundColor: "#06f" }}>
                <img src="e_shop.png" alt="" style={{ width: "170px", height: "130px", marginTop: "-10px" }} />
            </div>

            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} marginTop={-35.20} >
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy our mega sale <Link color={'blue.400'}>shopping</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={4}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                            <Button
                                bg={'gray.500'}
                                color={'white'}
                                _hover={{
                                    bg: 'gray.400',
                                }} >
                                Create a new account
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Grid>

    );
}

export default Login;