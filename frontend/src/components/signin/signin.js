import { Link } from "react-router-dom";
import { useState } from "react";
import { FormLabel, FormControl, Input, Button, Box, VStack, Text, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import axios from 'axios';

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Signin = async () => {
        await axios.post("http://localhost:9000/signin", { email, password })
            .then((res) => {
                if (res.data.message === 'login success') {
                    alert("Login successful");
                } else {
                    alert("User not found");
                    window.location.href = "/signup";
                }
            })
            .catch((e) => console.log(e));
    };

    return (
        <Box
            w="100%"
            maxW="400px"
            mx="auto"
            mt="100px"
            p="8"
            borderRadius="xl"
            boxShadow="2xl"
            bgGradient="linear(to-r, purple.500, pink.500)"
            color="white"
            _hover={{ transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }}
        >
            <VStack spacing={6} align="flex-start">
                <Text fontSize="3xl" fontWeight="extrabold" alignSelf="center" letterSpacing="wide">Welcome Back!</Text>
                <Text fontSize="lg" alignSelf="center" opacity="0.8">Please sign in to continue</Text>

                <form style={{ width: "100%" }}>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaEnvelope color="gray.500" />} />
                            <Input 
                                type='email' 
                                placeholder="Enter your email" 
                                bg="white" 
                                color="black" 
                                borderRadius="full"
                                _placeholder={{ color: 'gray.400' }}
                                focusBorderColor="pink.400"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaLock color="gray.500" />} />
                            <Input 
                                type='password' 
                                placeholder="Enter your password" 
                                bg="white" 
                                color="black" 
                                borderRadius="full"
                                _placeholder={{ color: 'gray.400' }}
                                focusBorderColor="pink.400"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>

                    <Button
                        mt={8}
                        colorScheme="pink"
                        type="button"
                        w="full"
                        borderRadius="full"
                        size="lg"
                        boxShadow="xl"
                        _hover={{ bg: "pink.600", boxShadow: "2xl" }}
                        onClick={Signin}
                    >
                        Sign In
                    </Button>

                    {/* Forgot Password */}
                    <Text mt={4} textAlign="center">
                        <Link to="/forgot-password" color="white" _hover={{ color: "pink.200" }}>
                            Forgot Password?
                        </Link>
                    </Text>

                    {/* Don't have an account? Sign Up */}
                    <Text mt={2} textAlign="center">
                        Don't have an account?{" "}
                        <Link to="/signup" color="white" fontWeight="bold" _hover={{ color: "pink.200" }}>
                            Sign Up
                        </Link>
                    </Text>
                </form>
            </VStack>
        </Box>
    );
};
