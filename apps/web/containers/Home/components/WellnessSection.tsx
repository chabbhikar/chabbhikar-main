import { Text, Flex } from "@chakra-ui/react";

const WellnessSection = () => {
  return (
    <>
      {/* wellness section */}
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
            size="texts"
            color="black.900"
            ml={{ md: "8px", base: "0px" }}
            letterSpacing="-1.00px"
            w={{ md: "90%", base: "100%" }}
            lineHeight="55px"
          >
            Wellness Architecture{" "}
          </Text>
          <Text
            color="gray.800"
            mb="32px"
            letterSpacing="-0.48px"
            alignSelf="flex-end"
            w={{ md: "96%", base: "100%" }}
            lineHeight="40px"
          >
            <Text as="span">
              <>
                Prioritizing <br />
              </>
            </Text>
            <Text as="span" fontWeight={600}>
              <>
                health & sustainability <br />
                with our wellness surfaces and wellness kitchens for modern
                living spaces.
              </>
            </Text>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default WellnessSection;
