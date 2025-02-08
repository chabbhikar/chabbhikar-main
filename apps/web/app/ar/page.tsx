'use client';
import CameraOverlay from "../../containers/ar/components/CameraOverlay";
import PaintingSelector from "../../containers/ar/components/PaintingSelector";
import { useState } from "react";


export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {selectedImage ? (
        <CameraOverlay
          selectedImage={selectedImage}
          onBack={() => setSelectedImage(null)}
        />
      ) : (
        <PaintingSelector onSelect={setSelectedImage} />
      )}
    </>
  );
}
