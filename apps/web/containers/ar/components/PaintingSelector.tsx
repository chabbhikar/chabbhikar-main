"use client";

import { useState } from "react";
import { Box, Grid, Image, Button, Heading } from "@chakra-ui/react";

const paintings = ["/ar/painting1.jpeg", "/ar/painting2.jpeg", "/ar/painting3.png"]; // Add more images as needed


interface PaintingSelectorProps {
  onSelect: (image: string) => void;
}

export default function PaintingSelector({ onSelect }: PaintingSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Box textAlign="center" p={5}>
      <Heading size="lg" mb={4}>
        Select a Painting
      </Heading>

      <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={4}>
        {paintings.map((img) => (
          <Box
            key={img}
            border={selected === img ? "3px solid blue" : "none"}
            borderRadius="md"
          >
            <Image
              src={img}
              alt="Painting"
              cursor="pointer"
              onClick={() => setSelected(img)}
              _hover={{ opacity: 0.8 }}
            />
          </Box>
        ))}
      </Grid>

      {selected && (
        <Button mt={4} onClick={() => onSelect(selected)}>
          Start AR View
        </Button>
      )}
    </Box>
  );
}
