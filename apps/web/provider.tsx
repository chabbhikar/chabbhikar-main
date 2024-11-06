"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Only render on the client

  return (
    <ChakraProvider value={defaultSystem}>
      <NextThemeProvider attribute="class">{children}</NextThemeProvider>
    </ChakraProvider>
  );
};

export default Provider;
