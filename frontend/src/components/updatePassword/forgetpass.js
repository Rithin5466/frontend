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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLock, FaEnvelope, FaMobileAlt, FaKey } from "react-icons/fa";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);

    const handleVerifyOtp = () => {
        // Replace with actual OTP verification logic
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

        // Replace with actual password reset logic
        alert("Password reset successful");
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
                <Text fontSize="3xl" fontWeight="extrabold" alignSelf="center" letterSpacing="wide">
                    Forgot Password
                </Text>
                <Text fontSize="lg" alignSelf="center" opacity="0.8">
                    Please enter your details to reset your password
                </Text>

                <form style={{ width: "100%" }}>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaEnvelope color="gray.500" />} />
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                bg="white"
                                color="black"
                                borderRadius="full"
                                _placeholder={{ color: "gray.400" }}
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
                                type="tel"
                                placeholder="Enter your mobile number"
                                bg="white"
                                color="black"
                                borderRadius="full"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="pink.400"
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>OTP</FormLabel>
                        <InputGroup>
                            <InputRightElement pointerEvents="none" children={<FaKey color="gray.500" />} />
                            <Input
                                type="text"
                                placeholder="Enter the OTP sent to your mobile"
                                bg="white"
                                color="black"
                                borderRadius="full"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="pink.400"
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>

                    <Button
                        mt={4}
                        colorScheme="pink"
                        type="button"
                        w="full"
                        borderRadius="full"
                        size="lg"
                        boxShadow="xl"
                        _hover={{ bg: "pink.600", boxShadow: "2xl" }}
                        onClick={handleVerifyOtp}
                    >
                        Verify OTP
                    </Button>

                    {otpVerified && (
                        <>
                            <FormControl mt={4}>
                                <FormLabel>New Password</FormLabel>
                                <InputGroup>
                                    <InputRightElement pointerEvents="none" children={<FaLock color="gray.500" />} />
                                    <Input
                                        type="password"
                                        placeholder="Create a new password"
                                        bg="white"
                                        color="black"
                                        borderRadius="full"
                                        _placeholder={{ color: "gray.400" }}
                                        focusBorderColor="pink.400"
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </InputGroup>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Confirm New Password</FormLabel>
                                <InputGroup>
                                    <InputRightElement pointerEvents="none" children={<FaLock color="gray.500" />} />
                                    <Input
                                        type="password"
                                        placeholder="Confirm your new password"
                                        bg="white"
                                        color="black"
                                        borderRadius="full"
                                        _placeholder={{ color: "gray.400" }}
                                        focusBorderColor="pink.400"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                                onClick={handleResetPassword}
                            >
                                Reset Password
                            </Button>
                        </>
                    )}
                </form>
            </VStack>
        </Box>
    );
};
