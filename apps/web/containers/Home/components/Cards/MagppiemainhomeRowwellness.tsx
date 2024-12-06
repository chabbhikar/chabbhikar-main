import { Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function MagppiemainhomeRowwellness() {
  return (
    <Flex
      h={{ md: "746px", base: "auto" }}
      bgImage="url(/images/img_component_1.png)"
      bgSize="cover"
      bgRepeat="no-repeat"
      alignSelf="stretch"
      alignItems="flex-start"
      px={{ md: "50px", base: "20px" }}
      py={{ md: "94px", base: "20px" }}
    >
      <Flex
        mb="110px"
        bg="white.a700"
        boxShadow="xs"
        w={{ md: "26%", base: "100%" }}
        flexDirection="column"
        alignItems="flex-start"
        px="14px"
        py={{ base: "20px", sm: "26px" }}
      >
        <Text
          size="text13x1"
          color="black.900_02"
          ml={{ md: "8px", base: "0px" }}
          letterSpacing="-1.00px"
          w={{ md: "90%", base: "100%" }}
          lineHeight="55px"
        >
          Wellness Architecture
        </Text>
        <Heading
          as="h1"
          color="gray.800_01"
          mb="32px"
          letterSpacing="-0.48px"
          fontWeight={400}
          alignSelf="flex-end"
          w={{ md: "96%", base: "100%" }}
        >
          lineHeight="40px"
          <Heading as="span">
            <>
              Prioritizing <br />
            </>
          </Heading>
          <Heading as="span" fontWeight={600}>
            <>
              health & sustainability <br />
              with our wellness surfaces and wellness kitchens for modern living
              spaces.
            </>
          </Heading>
        </Heading>
      </Flex>
    </Flex>
  );
}
