import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { data } from "../data";
import { ColorModeButton } from "../../../components/ui/color-mode";

const Hero = () => {
  return (
    <Container
      maxW="full"
      h="100vh"
      bgImage="url('/assets/heroTwo.png')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="flex-start"
      px={{ base: 4, md: 16 }}
    >
      <Flex alignItems="start" flexDirection="column">
        <Box
          bg="white"
          p={6}
          marginBottom="10px"
          maxW={{ base: "100%", md: "100%" }}
          boxShadow="md"
          display="block"
        >
          <VStack align="start">
            <Text fontSize="4xl" fontWeight="bold" color="black">
              MAGPPIE
            </Text>
          </VStack>
        </Box>
        <Box bg="white" p={8} maxW={{ base: "100%", md: "50%" }} boxShadow="md">
          <VStack align="start">
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              color="gray.900"
              marginY="10px"
            >
              {data.heroSection.heading}
            </Text>

            <Text fontSize="xl" color="gray.700" lineHeight="30px">
              {/* Prioritizing{" "}
              <Text as="span" fontWeight="bold" color="black">
                health & sustainability
              </Text>{" "}
              with our wellness surfaces and wellness kitchens for modern living
              spaces. */}
              {data.heroSection.description}
            </Text>
          </VStack>
        </Box>
        <ColorModeButton />
      </Flex>
    </Container>
  );
};

export default Hero;
