import WellnessKitchenProfile from "./WellnessKitchenProfile";
import { Flex } from "@chakra-ui/react";
import { Suspense } from "react";

const data = [
  {
    titleText: "WELLNESS KITCHENS",
    wellnessImage: "images/img_photo_2024_02_01_578x334.png",
  },
  {
    titleText: "WELLNESS SURFACES",
    wellnessImage: "images/img_photo_2024_02_14.png",
  },
  {
    titleText: "WELLNESS LIGHTING",
    wellnessImage: "images/img_photo_2024_02_01_1.png",
  },
];

export default function MagppiemainhomeMagppiemainhome() {
  return (
    <Flex
      mt="120px"
      gap="74px"
      w={{ md: "90%", base: "100%" }}
      flexDirection={{ md: "row", base: "column" }}
      px={{ md: 0, base: "20px" }}
    >
      <Suspense fallback={<div>Loading feed...</div>}>
        {data.map((d, index) => (
          <WellnessKitchenProfile {...d} key={"magppiemainhome" + index} />
        ))}
      </Suspense>
    </Flex>
  );
}
