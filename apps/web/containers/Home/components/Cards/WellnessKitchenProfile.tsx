import { ChakraProps } from "@chakra-ui/react";
import { Image, Heading, Flex } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  titleText?: React.ReactNode;
  wellnessImage?: string;
}

export default function WellnessKitchenProfile({
  titleText = "WELLNESS KITCHENS",
  wellnessImage = "images/img_photo_2024_02_01_578x334.png",
  ...props
}: Props) {
  return (
    <Flex
      {...props}
      gap="26px"
      w={{ md: "32%", base: "100%" }}
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        size="heading2x1"
        as="h5"
        letterSpacing="-0.40px"
        fontFamily="Montserrat"
      >
        {titleText}
      </Heading>
      <Image
        src={wellnessImage}
        alt="Wellness"
        h="578px"
        w="100%"
        fit="cover"
        borderRadius="16px"
      />
    </Flex>
  );
}
