import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { 
    FormLabel, 
    FormControl, 
    Input, 
    Button, 
    Box, 
    VStack, 
    Text, 
    InputGroup, 
    InputRightElement, 
    IconButton 
} from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaLock, FaMobileAlt, FaArrowLeft } from "react-icons/fa";
import axios from 'axios';

export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const response = await axios.post("http://localhost:9000/signup", { name, password, email, mobile });
        if (response.data) {
            alert("Registration successful");
            window.location.href = "/signin";
        } else {
            alert("Registration failed");
            console.log(response.data.error);
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
            <Box 
                width="360px"
                boxShadow="md"
                p={8}
                borderRadius="lg"
                bg="white"
            >
                <IconButton 
                    aria-label="Go back" 
                    icon={<FaArrowLeft />} 
                    as={RouterLink} 
                    to="/signin" 
                    mb={4} 
                    colorScheme="gray"
                />
                <VStack spacing={4} align="stretch">
                    <Text fontSize="2xl" fontWeight="bold" textAlign="center" color="gray.800">
                        Create an Account
                    </Text>

                    <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <InputGroup>
                            <InputRightElement children={<FaUser color="gray.500" />} />
                            <Input 
                                type="text" 
                                placeholder="Enter your name" 
                                focusBorderColor="black"
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <InputGroup>
                            <InputRightElement children={<FaEnvelope color="gray.500" />} />
                            <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                focusBorderColor="black"
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl id="mobile">
                        <FormLabel>Mobile Number</FormLabel>
                        <InputGroup>
                            <InputRightElement children={<FaMobileAlt color="gray.500" />} />
                            <Input 
                                type="tel" 
                                placeholder="Enter your mobile number" 
                                focusBorderColor="black"
                                onChange={(e) => setMobile(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <InputRightElement children={<FaLock color="gray.500" />} />
                            <Input 
                                type="password" 
                                placeholder="Enter your password" 
                                focusBorderColor="black"
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl id="confirm-password">
                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup>
                            <InputRightElement children={<FaLock color="gray.500" />} />
                            <Input 
                                type="password" 
                                placeholder="Confirm your password" 
                                focusBorderColor="black"
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>

                    <Button 
                        bg="black" 
                        color="white" 
                        size="lg" 
                        mt={4} 
                        _hover={{ bg: "gray.800" }}
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>

                    <Text textAlign="center" color="gray.600" fontSize="sm" mt={2}>
                        Already have an account?{" "}
                        <RouterLink to="/signin" color="black" fontWeight="bold">
                            Sign In
                        </RouterLink>
                    </Text>
                </VStack>
            </Box>
        </Box>
    );
};
