'use client'
import { useEffect, useRef } from "react";
import { Box, Button } from "@chakra-ui/react";

const CameraView = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }, // Use back camera
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject as MediaStream;
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      }
    };
  }, []);

  return (
    <Box position="relative" width="100%" height="100vh" bg="black">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Button
        position="absolute"
        bottom="20px"
        left="50%"
        transform="translateX(-50%)"
        colorScheme="teal"
        onClick={() => alert("Next: AR Wall Detection!")}
      >
        Start AR
      </Button>
    </Box>
  );
};

export default CameraView;
