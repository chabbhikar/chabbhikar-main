import { Box, Flex, Heading, Text } from "@chakra-ui/react";

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
          for people and
          <br />
          planet
        </Heading>
      </Box>

      {/* Paragraph Section */}
      <Box flex="2" pl={{ base: 0, md: 8 }} color="gray.600">
        <Text fontSize={{ base: "md", md: "lg" }}>
          Redefining the boundaries of architectural design, our engineered
          porcelain surfaces offer a fusion of beauty, durability, and wellness.
          Ideal for a broad spectrum of applications—facades, floors, walls, and
          furniture in residential, commercial, and public spaces—these
          solutions embody the future of sustainable living environments.
          Embrace a world where every surface enhances wellness, with our
          state-of-the-art materials and wellness kitchens, where innovative
          design meets health.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;

