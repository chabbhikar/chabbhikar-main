import { useMemo } from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
// import { Icon } from "@iconify/react";
import Sidebar from "../Home/components/Sidebar";
import styles from "./Quote.module.scss";
import g1 from "../../public/assets/photos/kitchen/g1.png";
import g2 from "../../public/assets/photos/kitchen/g2.png";
import g3 from "../../public/assets/photos/kitchen/g3.png";
import g4 from "../../public/assets/photos/kitchen/g4.png";
import g5 from "../../public/assets/photos/kitchen/g5.png";
import g6 from "../../public/assets/photos/kitchen/g6.png";
import g7 from "../../public/assets/photos/kitchen/g7.png";
import g8 from "../../public/assets/photos/kitchen/g8.png";
import g9 from "../../public/assets/photos/kitchen/g9.png";
import g10 from "../../public/assets/photos/kitchen/g10.png";
import g11 from "../../public/assets/photos/kitchen/g11.png";
import g12 from "../../public/assets/photos/kitchen/g12.png";
import g13 from "../../public/assets/photos/kitchen/g13.png";
import g14 from "../../public/assets/photos/kitchen/g14.png";
import review from "../../public/assets/photos/review.png";
import _ from "lodash";

const STEPPER_OPTIONS = ["Style", "Size", "Shape"];
const KITCHEN_OPTIONS = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14];
const backgroundImage = `url(${review})`;

export default function Quote() {
  const images = useMemo(() => _.chunk(KITCHEN_OPTIONS, 3), []);
  
  const renderCards = (
    <Box className="grid lg:grid-flow-col lg:grid-cols-4 md:grid-flow-col md:grid-cols-3 gap-4 my-10 text-sm lg:text-lg uppercase">
      {STEPPER_OPTIONS.map((step, i) => (
        <Box key={i} className="shadow-lg bg-gray-200 rounded-md p-4 min-h-full">
          <Box className="flex gap-2 align-middle py-1">
            <Text>Step</Text>
            <Box className="border px-2 rounded-2xl">{i + 1}</Box>
          </Box>
          <Text className="py-1">CHOOSE YOUR <span className="font-bold">KITCHEN {step}</span></Text>
        </Box>
      ))}
    </Box>
  );

  const renderFooter = (
    <Box position="absolute" top={0} right={0} className="min-h-screen invisible lg:visible md:visible">
      <Sidebar />
    </Box>
  );

  return (
    <Box className="bg-[#434343]" backgroundImage={backgroundImage} backgroundPosition="center" backgroundSize="cover" minH="100vh">
      <Box className={`${styles.container}`}>
        <VStack>
          <Heading className={styles.title}>MAGPPIE</Heading>
          <Text fontSize="2xl" color="white" fontWeight="bold">Get a Quote in 3 easy steps</Text>
          {renderCards}
        </VStack>
        {renderFooter}
      </Box>

      <Box textAlign="center" textTransform="uppercase" p={4}>
        <VStack className={styles.stepContainer}>
          <Box className="flex gap-2 align-middle justify-center">
            <Text>Step</Text>
            <Box className="border px-2 rounded-2xl">1</Box>
          </Box>
          <Text fontSize="3xl">CHOOSE YOUR <span className="font-bold">KITCHEN Style</span></Text>
        </VStack>
      </Box>
    </Box>
  );
}