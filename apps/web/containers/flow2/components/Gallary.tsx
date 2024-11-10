
import { Box, Container, Flex, Grid, Text } from "@chakra-ui/react";
import Image from 'next/image'
const Gallery = () => {

  // Gallery images (you can replace with actual images)
  const images = [
    "/assets/k1.jpeg",
    "/assets/k2.jpeg",
    "/assets/k4.jpeg",
    "/assets/k5.jpeg",
    "/assets/k3.jpeg",
    "/assets/k6.jpeg",
  ];



  return (
    <Container maxW="full" py={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
      <Text textAlign="center" fontSize="4xl" fontWeight="bold" mb={6}>
        Explore Our Gallery
      </Text>

      {/* Image grid */}
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={4}
        mb={8}
      >
        {images.map((image, index) => (
  <Box key={index} boxShadow="md" borderRadius="md" overflow="hidden">
    <Image 
      src={image} 
      alt={`Gallery Image ${index + 1}`} 
      width={500} // You can set the width here as needed
      height={300} // You can set the height here as needed
      layout="responsive" // Ensures the image is responsive and scales properly
    />
  </Box>
))}
      </Grid>

      {/* Description and buttons */}
      <Text textAlign="center" color="gray.600" mb={4}>
        Check out more inspirations for your dream kitchen.
      </Text>
      <Flex justify="center" gap={8} mb={6}>
        <Text color="gray.700">Explore our experience center for an array of designs →</Text>
        <Text color="gray.700">View more kitchen designs →</Text>
      </Flex>
    </Container>
  );
};

export default Gallery;
