import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

import imageOne from "../../../assets/k1.jpeg";
import imageTwo from "../../../assets/k2.jpeg";
import imageThree from "../../../assets/k5.jpeg";

const Cards = () => {
  const imagesData = [
    { id: 1, title: "WELLNESS KITCHENS", src: imageOne },
    { id: 2, title: "WELLNESS SURFACES", src: imageTwo },
    { id: 3, title: "WELLNESS LIGHTING", src: imageThree },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} px={10} py={10}>
      {imagesData.map((image) => (
        <Box textAlign="center" maxW="lg" mx="auto" my={4} key={image.id}>
          <Text fontSize="xl" fontWeight="semibold" color="gray.500" pb={5}>
            {image.title}
          </Text>
          <Image
            src={image.src}
            alt=""
            style={{ borderRadius: "20px", cursor: "pointer" }}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Cards;
