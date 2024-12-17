import { Box, ClientOnly, Skeleton } from "@chakra-ui/react";
import ModeToggle from "../components/mode-toggle";
import HomePage from "../containers/Home";

export default async function Page() {
  return (
    <Box textAlign="" fontSize="xl">
      <HomePage />
      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ModeToggle />
        </ClientOnly>
      </Box>
    </Box>
  );
}
