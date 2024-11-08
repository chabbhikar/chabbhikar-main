import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { data } from "../data";

const About = () => {
  return (
    <Container bgColor="white">
      <Flex>
        <Box>
          <Text>{data.aboutSection.heading}</Text>
        </Box>
        <Box>
          <Text>{data.aboutSection.description}</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
