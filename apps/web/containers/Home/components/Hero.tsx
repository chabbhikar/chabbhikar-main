import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import heroTwo from "../../../assets/heroTwo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      height="100vh"
      overflow="hidden"
    >
      {/* Text Section */}
      <VStack
        // spacing={4}
        align="center"
        p={{ base: 4, md: 6 }}
        w={{ base: "100%", md: "15%" }}
        bg="white"
        pos="fixed"
        zIndex={8}
        left={100}
        borderBottomLeftRadius={4}
        borderBottomRightRadius={4}
      >
        <Heading as="h1" size="5xl" textAlign="center" fontWeight="bold">
          MAGPPIE
        </Heading>
      </VStack>
      <VStack
        // spacing={4}
        align="start"
        p={{ base: 4, md: 8 }}
        w={{ base: "100%", md: "30%" }}
        bg="white"
        pos="absolute"
        zIndex={4}
        top="32"
        left={100}
        borderRadius={4}
      >
        <Heading as="h2" size="3xl" fontWeight="bold">
          Wellness Architecture
        </Heading>
        <Text fontSize="2xl">
          Prioritizing{" "}
          <Text as="span" fontWeight="bold">
            health & sustainability
          </Text>{" "}
          with our wellness surfaces and wellness kitchens for modern living
          spaces.
        </Text>
      </VStack>
      {/* Image Section */}
      <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
        position="relative"
        height="100%"
      >
        <Image
          src={heroTwo}
          alt="Architecture"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default Hero;