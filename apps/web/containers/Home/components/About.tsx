import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Home from "../../../app/ar/page";
import { HOME } from "../../../constants/mocks";

const About = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "start", md: "center" }}
      justify="space-between"
      p={{ base: 4, md: 8 }}
      pt={{ base: 20, md: 20 }}
      bg="#f5f5f1"
      width="100%"
    >
      {/* Large Text Section */}
      <Box flex="1" pr={{ base: 0, md: 8 }} mb={{ base: 4, md: 0 }}>
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="light"
          lineHeight="shorter"
          color="gray.700"
        >
          {HOME.TAGS[1]?.heading}
        </Heading>
      </Box>

      {/* Paragraph Section */}
      <Box flex="2" pl={{ base: 0, md: 8 }} color="gray.600">
        <Text fontSize={{ base: "md", md: "lg" }}>
          {HOME.TAGS[1]?.description}
        </Text>
      </Box>
    </Flex>
  );
};

export default About;

