import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaRunning, FaBrain, FaHeartbeat, FaMedal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export const LandingPage = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate('/signin'); // Redirect to SignIn page
  };

  return (
    <Box
      minHeight="100vh"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      color={colorMode === 'light' ? 'black' : 'white'}
      p={8}
    >
      {/* Header Section */}
      <MotionBox
        textAlign="center"
        mb={12}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading fontSize="4xl">Elevate Your Mental Game</Heading>
        <Text fontSize="lg" mt={4}>
          Unlock the potential of your mind with our sports psychology and mental training resources.
        </Text>
      </MotionBox>

      {/* Features Section */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={8}
        justify="center"
        align="center"
        mb={16}
      >
        <MotionBox
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          textAlign="center"
        >
          <FaRunning size="40px" />
          <Text fontWeight="bold" mt={4}>Goal Setting</Text>
          <Text mt={2}>Set and achieve your sports goals with precision.</Text>
        </MotionBox>

        <MotionBox
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          textAlign="center"
        >
          <FaBrain size="40px" />
          <Text fontWeight="bold" mt={4}>Visualization</Text>
          <Text mt={2}>Visualize success to improve performance outcomes.</Text>
        </MotionBox>

        <MotionBox
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          textAlign="center"
        >
          <FaHeartbeat size="40px" />
          <Text fontWeight="bold" mt={4}>Stress Management</Text>
          <Text mt={2}>Learn techniques to manage stress effectively.</Text>
        </MotionBox>

        <MotionBox
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          textAlign="center"
        >
          <FaMedal size="40px" />
          <Text fontWeight="bold" mt={4}>Mental Resilience</Text>
          <Text mt={2}>Build resilience to stay strong under pressure.</Text>
        </MotionBox>
      </Stack>

      {/* Call to Action Section */}
      <VStack spacing={6} align="center">
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          textAlign="center"
          maxWidth="600px"
        >
          <Heading fontSize="2xl">Start Your Journey Today</Heading>
          <Text mt={4}>
            Join our community and access resources that will help you achieve peak performance and mental resilience.
          </Text>
        </MotionBox>

        <MotionButton
          bg="black"
          color="white"
          size="lg"
          whileHover={{ scale: 1.1 }}
          _hover={{ bg: 'gray.800' }}
          transition={{ duration: 0.3 }}
          onClick={handleGetStartedClick} // Attach the click handler
        >
          Get Started
        </MotionButton>
      </VStack>

      {/* Footer Section */}
      <MotionBox
        mt={12}
        textAlign="center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Text>&copy; 2024 Sports Psychology and Mental Training Platform. All rights reserved.</Text>
      </MotionBox>
    </Box>
  );
};

export default LandingPage;
