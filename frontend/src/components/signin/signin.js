import { 
    Card, 
    CardBody, 
    FormControl, 
    FormLabel, 
    Input, 
    Button, 
    VStack, 
    Box, 
    Heading, 
    Text,
    Checkbox,
    Link
} from "@chakra-ui/react";
import axios from 'axios';
import { api } from "../actions/api";
import { useState, useRef } from "react";
import { Link as RouterLink } from 'react-router-dom'; // For navigation

export const SignIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null); // Ref for password field

    const Signin = async () => {
        await axios.post(api + "/signin", { name, password })
        .then((res) => {
            if (res.data.message) {
                console.log(res?.data?.values);
                alert(res.data.message);
            } else {
                alert(res.data.error);
                window.location.href = "/signup";
            }
        })
        .catch((e) => console.log(e));
    };

    const handleEmailKeyPress = (e) => {
        if (e.key === "Enter") {
            passwordRef.current.focus(); // Move focus to the password field
        }
    };

    return (
        <Box 
            height="100vh" 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            bg="gray.100" // Light gray background
        >
            <Card 
                width="360px" // Adjusted width to match the design
                boxShadow="md" 
                p={8} 
                borderRadius="lg"
                bg="white"
            >
                <CardBody>
                    <VStack spacing={4} align="stretch">
                        <Heading 
                            as="h2" 
                            size="lg" 
                            textAlign="center" 
                            color="gray.800" // Dark gray color for heading
                            fontFamily="serif" // Serif font family
                        >
                            Welcome back to Soul Flex!
                        </Heading>
                        <Text 
                            fontSize="sm" 
                            textAlign="center" 
                            color="gray.500"
                        >
                            The faster you fill up, the faster you get a chance to chane your life!
                        </Text>

                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input 
                                type="email" 
                                placeholder="Enter your email" // Placeholder as in the image
                                focusBorderColor="black" // Black focus border color
                                onChange={(e) => setName(e.target.value)} 
                                onKeyPress={handleEmailKeyPress} 
                            />
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input 
                                type="password" 
                                placeholder="Enter your password" // Placeholder as in the image
                                focusBorderColor="black" 
                                onChange={(e) => setPassword(e.target.value)} 
                                ref={passwordRef} 
                            />
                        </FormControl>

                        <Box 
                            display="flex" 
                            justifyContent="space-between" 
                            width="100%"
                            fontSize="sm" 
                            color="gray.600"
                        >
                            <Checkbox colorScheme="gray">Remember me</Checkbox>
                            <Link as={RouterLink} to="/forgot-password" color="gray.600">
                                Forgot Password
                            </Link>
                        </Box>

                        <Button 
                            bg="black" 
                            color="white" 
                            size="lg" 
                            mt={4} 
                            _hover={{ bg: "gray.800" }}  // Change background color on hover if needed
                            onClick={Signin}
                        >
                            Sign In
                        </Button>

                        <Button 
                            variant="outline" 
                            colorScheme="gray" 
                            size="md" 
                            width="100%" 
                            mt={2} 
                            leftIcon={<img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />} // Google logo
                        >
                            Sign In with Google
                        </Button>

                        <Text textAlign="center" color="gray.600" fontSize="sm" mt={2}>
                            Don't have an account?{" "}
                            <Link 
                                as={RouterLink} 
                                to="/signup" 
                                color="black" 
                                fontWeight="bold"
                            >
                                Sign up
                            </Link>
                        </Text>
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    );
};