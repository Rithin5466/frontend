import React, { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
    Grid,
    GridItem,
    IconButton,
    HStack,
    useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaPlay, FaFileAlt, FaSun, FaMoon, FaUser } from "react-icons/fa";

const MotionButton = motion(Box);
const MotionBox = motion(Box);

const activeLinkStyles = {
    color: "teal.500",
    textDecoration: "underline",
};

export const MainPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const location = useLocation(); // Get current location
    const [currentPage, setCurrentPage] = useState(location.pathname); // Track the current page

    const handleLinkClick = (path) => {
        if (path === "/") {
            // Prevent navigation and update state
            setCurrentPage(path);
        }
    };

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bg={colorMode === "light" ? "gray.100" : "gray.900"}
            p={8}
        >
            {/* Header Section */}
            <Flex
                width="100%"
                bg={colorMode === "light" ? "black" : "gray.800"}
                color="white"
                p={4}
                justifyContent="space-between"
                alignItems="center"
                boxShadow="lg"
                mb={8}
            >
                <Heading as="h1" size="lg" fontFamily="serif">
                    Soul Flex
                </Heading>
                <HStack spacing={8} alignItems="center">
                    <Link
                        onClick={() => handleLinkClick("/")}
                        fontSize="lg"
                        fontWeight="bold"
                        color={currentPage === "/" ? "teal.500" : "white"}
                        _hover={{ color: "teal.300" }}
                        _activeLink={activeLinkStyles}
                    >
                        Home
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/features"
                        fontSize="lg"
                        fontWeight="bold"
                        color={location.pathname === "/features" ? "teal.500" : "white"}
                        _hover={{ color: "teal.300" }}
                    >
                        Features
                    </Link>
                    <Link
                        as={RouterLink}
                        to="/about-us"
                        fontSize="lg"
                        fontWeight="bold"
                        color={location.pathname === "/about-us" ? "teal.500" : "white"}
                        _hover={{ color: "teal.300" }}
                    >
                        About Us
                    </Link>
                    <IconButton
                        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                        isRound
                        size="md"
                        onClick={toggleColorMode}
                        aria-label="Toggle Dark Mode"
                    />
                    <Link
                        as={RouterLink}
                        to="/profile"
                        fontSize="lg"
                        fontWeight="bold"
                        color={location.pathname === "/profile" ? "teal.500" : "white"}
                        _hover={{ color: "teal.300" }}
                        display="flex"
                        alignItems="center"
                    >
                        <IconButton
                            icon={<FaUser />}
                            isRound
                            size="md"
                            mr={2}
                            colorScheme="blackAlpha"
                            aria-label="Profile"
                        />
                        Profile
                    </Link>
                </HStack>
            </Flex>

            {/* Introduction Section */}
            <MotionBox
                width="100%"
                textAlign="center"
                my={8}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition="0.5s ease-in-out"
            >
                <Heading as="h2" size="xl" mb={4} color={colorMode === "light" ? "gray.800" : "white"} fontFamily="serif">
                    Elevate Your Mental Game
                </Heading>
                <Text fontSize="lg" color={colorMode === "light" ? "gray.600" : "gray.300"}>
                    Discover the best tools and resources to boost your mental performance in sports.
                </Text>
            </MotionBox>

            {/* Resources Section */}
            <Grid
                templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                gap={6}
                width="100%"
                my={8}
            >
                {/* Articles Section */}
                <GridItem>
                    <Box
                        bg={colorMode === "light" ? "white" : "gray.700"}
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        as={motion.div}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition="0.5s ease-in-out"
                    >
                        <Flex alignItems="center" mb={4}>
                            <IconButton
                                icon={<FaFileAlt />}
                                isRound
                                size="lg"
                                mr={4}
                                colorScheme="blackAlpha"
                            />
                            <Heading as="h3" size="md" color={colorMode === "light" ? "gray.800" : "white"}>
                                Articles
                            </Heading>
                        </Flex>
                        <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
                            In-depth articles on topics like goal setting, stress management, and more.
                        </Text>
                        <MotionButton
                            as={RouterLink}
                            to="/articles"
                            colorScheme="black"
                            mt={4}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Articles
                        </MotionButton>
                    </Box>
                </GridItem>

                {/* Videos Section */}
                <GridItem>
                    <Box
                        bg={colorMode === "light" ? "white" : "gray.700"}
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        as={motion.div}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition="0.5s ease-in-out"
                    >
                        <Flex alignItems="center" mb={4}>
                            <IconButton
                                icon={<FaPlay />}
                                isRound
                                size="lg"
                                mr={4}
                                colorScheme="blackAlpha"
                            />
                            <Heading as="h3" size="md" color={colorMode === "light" ? "gray.800" : "white"}>
                                Videos
                            </Heading>
                        </Flex>
                        <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
                            Watch expert-led videos on visualization, mindfulness, and more.
                        </Text>
                        <MotionButton
                            as={RouterLink}
                            to="/videos"
                            colorScheme="black"
                            mt={4}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Watch Videos
                        </MotionButton>
                    </Box>
                </GridItem>

                {/* Exercises Section */}
                <GridItem>
                    <Box
                        bg={colorMode === "light" ? "white" : "gray.700"}
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        as={motion.div}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition="0.5s ease-in-out"
                    >
                        <Flex alignItems="center" mb={4}>
                            <IconButton
                                icon={<FaFileAlt />}
                                isRound
                                size="lg"
                                mr={4}
                                colorScheme="blackAlpha"
                            />
                            <Heading as="h3" size="md" color={colorMode === "light" ? "gray.800" : "white"}>
                                Exercises
                            </Heading>
                        </Flex>
                        <Text color={colorMode === "light" ? "gray.600" : "gray.300"}>
                            Practice mental exercises to build resilience and enhance performance.
                        </Text>
                        <MotionButton
                            as={RouterLink}
                            to="/exercises"
                            colorScheme="black"
                            mt={4}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Practicing
                        </MotionButton>
                    </Box>
                </GridItem>
            </Grid>

            {/* Footer Section */}
            <Box textAlign="center" py={4} color={colorMode === "light" ? "gray.600" : "gray.300"} fontSize="sm">
                ©️ 2024 Soul Flex. All rights reserved.
            </Box>
        </Flex>
    );
};
