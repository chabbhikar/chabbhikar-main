import { Image, Box } from "@chakra-ui/react";
import React from "react";

export default function MagppiemainhomeRowscreenshot20() {
  return (
    <Box zIndex={2} bg="black.900_02" alignSelf="stretch" position="relative">
      <Image
        src="images/img_screenshot_2024_03_07.png"
        alt="Screenshot2024"
        h={{ md: "52px", base: "auto" }}
        mt="32px"
        w="100%"
        fit="cover"
      />
    </Box>
  );
}
