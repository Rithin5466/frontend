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
import { useState } from "react";
import { FaLock, FaEnvelope, FaMobileAlt, FaKey, FaArrowLeft } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);

    const handleVerifyOtp = () => {
        if (otp === "1234") {
            setOtpVerified(true);
            alert("OTP Verified! You can now enter your new password.");
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    const handleResetPassword = () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        alert("Password reset successful");
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
                        Forgot Password
                    </Text>
                    <Text fontSize="sm" textAlign="center" color="gray.500">
                        Please enter your details to reset your password
                    </Text>

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

                    <FormControl id="otp">
                        <FormLabel>OTP</FormLabel>
                        <InputGroup>
                            <InputRightElement children={<FaKey color="gray.500" />} />
                            <Input 
                                type="text" 
                                placeholder="Enter the OTP sent to your mobile" 
                                focusBorderColor="black"
                                onChange={(e) => setOtp(e.target.value)} 
                            />
                        </InputGroup>
                    </FormControl>

                    <Button 
                        bg="black" 
                        color="white" 
                        size="lg" 
                        mt={4} 
                        _hover={{ bg: "gray.800" }}
                        onClick={handleVerifyOtp}
                    >
                        Verify OTP
                    </Button>

                    {otpVerified && (
                        <>
                            <FormControl id="new-password" mt={4}>
                                <FormLabel>New Password</FormLabel>
                                <InputGroup>
                                    <InputRightElement children={<FaLock color="gray.500" />} />
                                    <Input 
                                        type="password" 
                                        placeholder="Create a new password" 
                                        focusBorderColor="black"
                                        onChange={(e) => setNewPassword(e.target.value)} 
                                    />
                                </InputGroup>
                            </FormControl>

                            <FormControl id="confirm-new-password" mt={4}>
                                <FormLabel>Confirm New Password</FormLabel>
                                <InputGroup>
                                    <InputRightElement children={<FaLock color="gray.500" />} />
                                    <Input 
                                        type="password" 
                                        placeholder="Confirm your new password" 
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
                                onClick={handleResetPassword}
                            >
                                Reset Password
                            </Button>
                        </>
                    )}
                </VStack>
            </Box>
        </Box>
    );
};
