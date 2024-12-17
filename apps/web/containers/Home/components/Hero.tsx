import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import heroTwo from "../../../assets/heroTwo.png";
import Image from "next/image";

export default function Hero() {
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
        align="start"
        p={{ base: 4, md: 8 }}
        w={{ base: "100%", md: "40%" }}
        bg="white"
      >
        <Heading as="h1" size="lg" fontWeight="bold">
          MAGPPIE
        </Heading>
        <Heading as="h2" size="xl">
          Wellness Architecture
        </Heading>
        <Text fontSize="lg">
          Prioritizing{" "}
          <Text as="span" fontWeight="bold">
            health & sustainability
          </Text>{" "}
          with our wellness surfaces and wellness kitchens for modern living
          spaces.
        </Text>
      </VStack>
      {/* Image Section */}
      <Box w={{ base: "100%", md: "60%" }} position="relative" height="100%">
        <Image
          src={heroTwo}
          alt="Architecture"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}
