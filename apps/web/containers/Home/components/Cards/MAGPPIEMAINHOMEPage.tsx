"use client";

// import { Slider } from "../../components";
import MagppiemainhomeMagppiemainhome from "./MagppiemainhomeMagppiemainhome";
import MagppiemainhomeRowscreenshot20 from "./MagppiemainhomeRowscreenshot20";
import MagppiemainhomeRowwellness from "./MagppiemainhomeRowwellness";
import { Circle, Container, Image, Box, Heading, Flex, Text, Button } from "@chakra-ui/react"; import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";

export default function MAGPPIEMAINHOMEPage() {
const [sliderState, setSliderState] = React.useState(0);
const sliderRef = React.useRef<AliceCarousel>(null);

return (
<Box bg="white.a700" w="100%">
<Flex mb="4px" flexDirection="column" alignItems="center">
<Box alignSelf="stretch">
    <Box>
<Flex zIndex={1} position="relative" flexDirection="column" alignItems="flex-start">
<MagppiemainhomeRowscreenshot20 />
<Button mt="-10px" ml="50px">
MAGPPIE </Button>
</Flex>
    </Box>
<Box>

</Flex>
<Flex mt="-82px" position="relative" flexDirection="column" alignItems="flex-start"> <MagppiemainhomeRowwellness />
<Text
mt="-30px"
ml={{ md: "72px", base: "0px"}} letterSpacing="-1.60px"
position="relative"
w={{ md: "40%", base: "100%" }}
lineHeight="100px"
px={{ md: 0, base: "20px" }}
>

for people and planet
</Text>
</Flex>
</Box>
<Flex mt="-374px" position="relative" flexDirection="column" alignItems="flex-end"> <Flex bg="gray.200" alignSelf="stretch" justifyContent="center" py="8px">
<Container
pl="56px"
pr="72px"
mb="258px"
display="flex"
justifyContent="flex-end"
px={{ md: 0, base: "20px" }}
<Heading color="black.900_99" letterSpacing="-0.48px" fontWeight={400} w="54%" lineHeight="40p Redefining the boundaries of architectural design, our engineered porcelain surfaces offer a beauty, durability, and wellness. Ideal for a broad spectrum of applications-facades, floors and furniture in residential, commercial, and public spaces-these solutions embody the futur sustainable living environments. Embrace a world where every surface enhances wellness, with state-of-the-art materials and wellness kitchens, where innovative design meets health.
</Heading>
</Container>
</Flex>
<Container mt="-164px" position="relative" px={{ md: "0px", base: "20px" }}> < w="100%" display="flex" mx="auto">
<Slider
autoplay
autoPlayInterval={2000}
responsive={{ "0": { items: 1 }, "551": { items: 1 }, "1051": { items: 1 } }} disableDotsControls
activeIndex={sliderState}
onSlideChanged={(e: EventObject) => {
}}
setSliderState(e?.item);
ref={sliderRef}
items={[...Array(3)].map(() => (
<React.Fragment key={Math.random()}>
<Image
src="images/img_photo_2024_02_01.png"
alt="Photo2024two"
h="640px"
fit="contain"
borderRadius="32px"
/>
</React.Fragment>
))}
/>

</Box>
</Container>
</Flex>
</Box>
<Container
pl="518px"
pr="56px"
mt="20px"
alignSelf="flex-end"
display="flex"
flexDirection="column"
alignItems="flex-start"
px={{ md: 0, base: "20px" }}
>
<Box>
{[...Array(3)].map((_, i) => (
<>
{sliderState >= i * (sliderRef?.current?.state?.itemsInSlide || 1) && sliderState < (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1) ? ( <Circle
size="10px"
bg="blue_gray.100_01"
cursor="pointer"
display="inline-block"
mr="19.44px"
onClick={() => {
sliderRef?.current?.slideTo(i
sliderRef?.current?.state?.itemsInSlide);
}}
/>
): (
}}
</>
))}
<Circle
size="10px"
bg="blue_gray.100_01"
cursor="pointer"
display="inline-block"
mr="19.44px"
onClick={() => {
sliderRef?.current?.slideTo(i sliderRef?.current?.state?.itemsInSlide);
}}
/>
)}
</>
))}
</Box>
</Container>
<MagppiemainhomeMagppiemainhome />
</Flex>
</Box>
)