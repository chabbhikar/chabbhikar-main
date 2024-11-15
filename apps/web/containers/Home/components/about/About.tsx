import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { data } from "../../data";
import styles from "./about.module.scss"

const About = () => {
  return (
    <Container className={styles.aboutContainer}>
      <Flex>
        <Box width="">
          <Text>{data.aboutSection.heading}</Text>
        </Box>
        <Box width="">
          <Text>{data.aboutSection.description}</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
