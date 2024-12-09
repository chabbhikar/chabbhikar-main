"use client";

import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// Define the theme with color mode configurations
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set the initial color mode
    useSystemColorMode: false, // Disable syncing with system preference
  },
});

export function Provider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Avoid rendering until the component is mounted
  if (!isMounted) return null;

  return (
    <ChakraProvider theme={theme}>
      {/* Ensure color mode script is included */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
