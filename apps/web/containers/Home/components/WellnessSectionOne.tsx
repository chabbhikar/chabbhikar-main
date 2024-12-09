import WellnessKitchenProfile from "./WellnessKitchenProfile";
import { Flex } from "@chakra-ui/react";
import { Suspense } from "react";

const wellnessFeaturesList = [
  {
    titleText: "WELLNESS KITCHENS",
    profileImage: "images/img_photo_2024_02_01_578x334.png",
  },
  {
    titleText: "WELLNESS SURFACES",
    profileImage: "images/img_photo_2024_02_14.png",
  },
  {
    titleText: "WELLNESS LIGHTING",
    profileImage: "images/img_photo_2024_02_01_1.png",
  },
];

const WellnessSectionOne = () => {
  return (
    <>
      {/* wellness section */}
      <Flex
        mt="120px"
        gap="74px"
        alignSelf="stretch"
        maxW="1150px"
        w="100%"
        mx="auto"
        flexDirection={{ md: "row", base: "column" }}
        px={{ md: 0, base: "20px" }}
      >
        <Suspense fallback={<div>Loading feed...</div>}>
          {wellnessFeaturesList.map((d, index) => (
            <WellnessKitchenProfile {...d} key={"wellnessKitchen" + index} />
          ))}
        </Suspense>
      </Flex>
    </>
  );
};

export default WellnessSectionOne;
