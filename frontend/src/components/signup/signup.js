import { Link } from "react-router-dom";
import { useState } from "react";
import { FormLabel, FormControl, Input, Button, Box, VStack, Text, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaLock, FaMobileAlt } from "react-icons/fa";
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

        await axios.post("http://localhost:9000/signup", { name,password,email, mobile }) // Update URL to match backend
            .then((res) => {
                if (res.data.message === 'Success') {
                    alert("Registration successful");
                    window.location.href = "/signin";
                } else {
                    alert("Registration failed");
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
                <Text fontSize="3xl" fontWeight="extrabold" alignSelf="center" letterSpacing="wide">Create an Account</Text>

                <form style={{ width: "100%" }}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaUser color="gray.500" />} />
                            <Input 
                                type='text' 
                                placeholder="Enter your name" 
                                bg="white" 
                                color="black" 
                                borderRadius="full"
                                _placeholder={{ color: 'gray.400' }}
                                focusBorderColor="pink.400"
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4}>
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
                        <FormLabel>Mobile Number</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaMobileAlt color="gray.500" />} />
                            <Input 
                                type='tel' 
                                placeholder="Enter your mobile number" 
                                bg="white" 
                                color="black" 
                                borderRadius="full"
                                _placeholder={{ color: 'gray.400' }}
                                focusBorderColor="pink.400"
                                onChange={(e) => setMobile(e.target.value)} 
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
                                onChange={(e )=> setPassword(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaLock color="gray.500" />} />
                            <Input 
                                type='password' 
                                placeholder="Confirm your password" 
                                bg="white" 
                                color="black" 
                                borderRadius="full"
                                _placeholder={{ color: 'gray.400' }}
                                focusBorderColor="pink.400"
                                onChange={(e )=> setConfirmPassword(e.target.value)} 
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
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                </form>

                <Text alignSelf="center" mt={4}>
                    Already have an account? <Link color="pink.200" to="/signin">Sign In</Link>
                </Text>
            </VStack>
        </Box>
    );
};
