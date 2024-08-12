import React, { useState, useRef } from "react"; // Import React and hooks
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
} from "@chakra-ui/react"; // Import Chakra UI components
import axios from 'axios'; // Import Axios for API calls
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for navigation

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null);

    const Signin = async () => {
        try {
            const res = await axios.post("http://localhost:9000/signin", { email, password });
            if (res.data.message) {
                alert(res.data.message);
                console.log(res.data.values);
                // Redirect or perform actions upon successful login
                window.location.href = "/dashboard"; // Replace with your desired route
            } else {
                alert(res.data.error);
            }
        } catch (e) {
            console.error(e);
            alert("Login failed. Please try again.");
        }
    };

    const handleEmailKeyPress = (e) => {
        if (e.key === "Enter") {
            passwordRef.current.focus();
        }
    };

    return (
        <Box 
            height="100vh" 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            bg="gray.100"
        >
            <Card 
                width="360px"
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
                            color="gray.800" 
                            fontFamily="serif"
                        >
                            Welcome back to Soul Flex!
                        </Heading>
                        <Text 
                            fontSize="sm" 
                            textAlign="center" 
                            color="gray.500"
                        >
                            The faster you fill up, the faster you get a chance to change your life!
                        </Text>

                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input 
                                type="email" 
                                placeholder="Enter your email"
                                focusBorderColor="black"
                                onChange={(e) => setEmail(e.target.value)} 
                                onKeyPress={handleEmailKeyPress} 
                            />
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input 
                                type="password" 
                                placeholder="Enter your password"
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
                            _hover={{ bg: "gray.800" }}  
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
                            leftIcon={<img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />} 
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
