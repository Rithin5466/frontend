import {
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Input,
    Button as ChakraButton,
    VStack,
    Box,
    Heading,
    Text,
    Checkbox,
    Link,
    Image,
    Flex,
    IconButton
} from "@chakra-ui/react";
import axios from 'axios';
import { api } from "../actions/api";
import { useState, useRef } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { motion } from "framer-motion";
import { ArrowBackIcon } from "@chakra-ui/icons";

const MotionButton = motion(ChakraButton);

export const SignIn = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

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
            passwordRef.current.focus();
        }
    };

    const handleBackClick = () => {
        navigate("/landing"); 
    };

    return (
        <Flex 
            height="106vh" 
            bg="gray.300" 
            alignItems="center" 
            justifyContent="center"
        >
            <Flex 
                width="70%" 
                boxShadow="xl" 
                borderRadius="lg"
                overflow="hidden"
                bg="white"
            >
                {/* Left Side with Full Image */}
                <Box
                    width="40%" 
                    bg="black" 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                    padding={0}
                    as={motion.div}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition="0.5s ease-in-out"
                >
                    <Image 
                        src="" 
                        alt="Left side image"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </Box>

                {/* Right Side with Sign-in Form */}
                <Box
                    width="60%"
                    p={8}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    as={motion.div}
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition="0.5s ease-in-out"
                >
                    <Card boxShadow="md" borderRadius="lg" bg="white">
                        <CardBody>
                            <VStack spacing={4} align="stretch">
                                {/* Back Button */}
                                <IconButton 
                                    icon={<ArrowBackIcon />} 
                                    aria-label="Back"
                                    variant="outline" 
                                    colorScheme="gray"
                                    alignSelf="flex-start"
                                    onClick={handleBackClick} // Use handleBackClick for navigation
                                />

                                <Heading 
                                    as="h2" 
                                    size="lg" 
                                    textAlign="center" 
                                    color="gray.800"
                                    fontFamily="serif"
                                    mb={4}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition="0.5s ease-in-out"
                                >
                                    Welcome back to Soul Flex!
                                </Heading>
                                <Text 
                                    fontSize="sm" 
                                    textAlign="center" 
                                    color="gray.500"
                                    mb={4}
                                >
                                    The faster you fill up, the faster you get a chance to change your life!
                                </Text>

                                <FormControl id="email">
                                    <FormLabel>Email</FormLabel>
                                    <Input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        focusBorderColor="black" 
                                        onChange={(e) => setName(e.target.value)} 
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

                                <MotionButton 
                                    bg="black" 
                                    color="white" 
                                    size="lg" 
                                    mt={4} 
                                    _hover={{ bg: "gray.800" }} 
                                    onClick={Signin}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Sign In
                                </MotionButton>

                                <MotionButton 
                                    variant="outline" 
                                    colorScheme="gray" 
                                    size="md" 
                                    width="100%" 
                                    mt={2} 
                                    leftIcon={<img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />} 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Sign In with Google
                                </MotionButton>

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
            </Flex>
        </Flex>
    );
};
