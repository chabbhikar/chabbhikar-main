import { ChakraProps } from "@chakra-ui/react";
import { Image, Heading, Flex } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  className?: string;
  titleText?: React.ReactNode;
  profileImage?: string;
}

const WellnessKitchenProfile = ({
  titleText = "WELLNESS KITCHENS",
  profileImage = "images/img_photo_2024_02_01_578x334.png",
  ...props
}: Props) => {
  return (
    <Flex
      {...props}
      gap="26px"
      w={{ md: "32%", base: "100%" }}
      flexDirection="column"
      alignItems="center"
    >
      <Heading as="h5" letterSpacing="-0.40px">
        {titleText}
      </Heading>
      <Image
        src={profileImage}
        alt="Feature Image"
        h="578px"
        w="100%"
        fit="cover"
        borderRadius="16px"
      />
    </Flex>
  );
};

export default WellnessKitchenProfile;
