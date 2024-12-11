"use client";

import Slider from "./components/Slider";
import RowSection from "./components/RowSection";
import WellnessSection from "./components/WellnessSection";
import WellnessSectionOne from "./components/WellnessSectionOne";

import { Box, Text, Flex, Button, Image, Circle } from "@chakra-ui/react";

import { useState, useRef, Fragment } from "react";

import AliceCarousel, { EventObject } from "react-alice-carousel";

const Home = () => {
  const [sliderState, setSliderState] = useState(0);
  const sliderRef = useRef<AliceCarousel>(null);

  return (
    <Box bg="white.a700" w="100%">
      <Flex mb="4px" flexDirection="column" alignItems="center">
        <Box alignSelf="stretch">
          <Box>
            <Flex
              zIndex={1}
              position="relative"
              flexDirection="column"
              alignItems="flex-start"
            >
              {/* screenshot row section */}
              <RowSection />

              <Button mt="-10px" ml="50px">
                MAGPPIE
              </Button>
            </Flex>
          </Box>

          <Flex
            mt="-82px"
            position="relative"
            flexDirection="column"
            alignItems="flex-start"
          >
            {/* wellness section */}

            <WellnessSection />
            <Text
              size="textmd"
              color="black.900_b2"
              mt="-30px"
              ml={{ md: "72px", base: "0px" }}
              letterSpacing="-1.60px"
              position="relative"
              w={{ md: "40%", base: "100%" }}
              lineHeight="100px"
              px={{ md: 0, base: "20px" }}
            >
              for people and planet
            </Text>
          </Flex>
          <Box mt="-374px" position="relative">
            <Flex
              pl="56px"
              pr="72px"
              bg="gray.200"
              justifyContent="flex-end"
              py="8px"
              px={{ md: 0, base: "20px" }}
            >
              <Text
                mb="258px"
                letterSpacing="-0.48px"
                w="50%"
                lineHeight="40px"
              >
                Redefining the boundaries of architectural design, our
                engineered porcelain surfaces offer a fusion of beauty,
                durability, and wellness. Ideal for a broad spectrum of
                applications-facades, floors, walls, and furniture in
                residential, commercial, and public spaces-these solutions
                embody the future of sustainable living environments. Embrace a
                world where every surface enhances wellness, with our
                state-of-the-art materials and wellness kitchens, where
                innovative design meets health.
              </Text>
            </Flex>
            <Box
              w="100%"
              mt="-164px"
              position="relative"
              display="flex"
              mx={{ md: "auto", base: "0px" }}
            >
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  "0": { items: 1 },
                  "551": { items: 1 },
                  "1051": { items: 1 },
                }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e: EventObject) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[...Array(3)].map((_, i) => (
                  <Fragment key={i}>
                    <Image
                      src="images/img_photo_2024_02_01.png"
                      alt="Slider Image"
                      h="640px"
                      fit="cover"
                      borderRadius="32px"
                    />
                  </Fragment>
                ))}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          {[...Array(3)].map((_, i) => (
            <Fragment key={i}>
              {sliderState >=
                i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
              sliderState <
                (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1) ? (
                <Circle
                  size="10px"
                  bg="blue_gray.100"
                  cursor="pointer"
                  display="inline-block"
                  mr="19.44px"
                  onClick={() => {
                    sliderRef?.current?.slideTo(
                      i * sliderRef?.current?.state?.itemsInSlide
                    );
                  }}
                />
              ) : (
                <Circle
                  size="10px"
                  bg="blue_gray.100"
                  cursor="pointer"
                  display="inline-block"
                  mr="19.44px"
                  onClick={() => {
                    sliderRef?.current?.slideTo(
                      i * sliderRef?.current?.state?.itemsInSlide
                    );
                  }}
                />
              )}
            </Fragment>
          ))}
        </Box>
        <WellnessSectionOne />
      </Flex>
      {/* ... rest of the code */}
    </Box>
  );
};

export default Home;
