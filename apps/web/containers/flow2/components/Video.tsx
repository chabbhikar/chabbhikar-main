import { AspectRatio, Container } from "@chakra-ui/react";

const Video = () => {
  return (
    <Container maxW="full" py={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
      <AspectRatio ratio={16 / 9} borderRadius="md" overflow="hidden">
        <video width="100%" height="100%" autoPlay loop muted>
          <source src="/assets/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AspectRatio>
    </Container>
  );
};

export default Video;
