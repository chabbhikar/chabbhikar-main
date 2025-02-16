"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Box, Button } from "@chakra-ui/react";

const ARCanvas = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const artworkRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    // Start video stream from the back camera
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }

    startCamera();
  }, []);

  const startAR = () => {
    if (!canvasRef.current || !videoRef.current) return;

    setIsVideoActive(true);

    // Initialize Three.js scene
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    rendererRef.current = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);

    // Create artwork texture
    const texture = new THREE.TextureLoader().load("/art.png");
    const artworkGeometry = new THREE.PlaneGeometry(1, 1.5);
    const artworkMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });

    artworkRef.current = new THREE.Mesh(artworkGeometry, artworkMaterial);
    artworkRef.current.position.set(0, 0, -2); // Set artwork at a fixed distance
    sceneRef.current.add(artworkRef.current);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (artworkRef.current) {
        artworkRef.current.lookAt(cameraRef.current!.position);
      }

      rendererRef.current!.render(sceneRef.current!, cameraRef.current!);
    };

    animate();
  };

  return (
    <Box width="100vw" height="100vh" bg="black" position="relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      {!isVideoActive && (
        <Button
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          colorScheme="teal"
          onClick={startAR}
        >
          Start AR
        </Button>
      )}
    </Box>
  );
};

export default ARCanvas;
