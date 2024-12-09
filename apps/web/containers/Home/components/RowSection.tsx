import { Image, Box } from "@chakra-ui/react";

const RowSection = () => {
  return (
    <>
      <Box zIndex={2} bg="black.900" alignSelf="stretch" position="relative">
        <Image
          src="images/img_screenshot_2024_03_07.png"
          alt="Screenshot2024"
          h={{ md: "52px", base: "auto" }}
          mt="32px"
          w="100%"
          fit="cover"
        />
      </Box>
    </>
  );
};

export default RowSection;
