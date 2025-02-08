"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CameraOverlayProps {
  selectedImage: string;
  onBack: () => void;
}

export default function CameraOverlay({
  selectedImage,
  onBack,
}: CameraOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [streamReady, setStreamReady] = useState(false);
  const [paintingPosition, setPaintingPosition] = useState({ x: 50, y: 100 });
  const [paintingSize, setPaintingSize] = useState(200);

  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamReady(true);
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }
    enableCamera();
  }, []);

  return (
    <Box position="relative" width="100vw" height="100vh" overflow="hidden">
      {/* Video Feed */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Back Button */}
      <Button
        position="absolute"
        top="10px"
        left="10px"
        zIndex={2}
        onClick={onBack}
      >
        Back
      </Button>

      {/* Overlay the Selected Painting */}
      {streamReady && (
        <motion.div
          drag
          dragMomentum={false}
          style={{
            position: "absolute",
            left: paintingPosition.x,
            top: paintingPosition.y,
          }}
          onDrag={(event, info) => {
            setPaintingPosition({
              x: info.point.x,
              y: info.point.y,
            });
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            style={{ width: paintingSize, height: "auto" }}
          >
            <Image
              src={selectedImage}
              alt="Wall Painting"
              width="100%"
              height="auto"
              objectFit="contain"
            />
          </motion.div>
        </motion.div>
      )}
    </Box>
  );
}
