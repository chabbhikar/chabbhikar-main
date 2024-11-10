"use client"; 

import { Container, Flex, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { data } from "../data";

const Hero = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % data.headlines.length);
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <Container
      maxW="full"
      h="100vh"
      bgImage="url('/assets/kitchen1.jpeg')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="flex-start"
      px={{ base: 4, md: 16 }}
    >
      <Flex alignItems="start" flexDirection="column">
          <VStack align="start">
            <Text mt="200px" fontSize="5xl" fontWeight="bold" color="white">
            {data.headlines[headlineIndex]}
          </Text>
          </VStack>
        
      </Flex>
    </Container>
  );
};

export default Hero;
