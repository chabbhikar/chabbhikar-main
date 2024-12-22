"use client";

import imageOne from "../../../assets/k1.jpeg";
import imageTwo from "../../../assets/k2.jpeg";
import imageThree from "../../../assets/k5.jpeg";
import imageFour from "../../../assets/k4.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";

const imagesData = [
  { id: 1, img: imageOne },
  { id: 2, img: imageTwo },
  { id: 3, img: imageThree },
  { id: 4, img: imageFour },
];

const Slider = () => {
  return (
    <Center py={8} bg="#f5f5f1">
      <Box w="full" maxW="5xl">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          style={{"borderRadius": "20px"}}
        >
          {imagesData.map((imageData) => (
            <SwiperSlide key={imageData.id}>
              <Center rounded="xl">
                <Box
                  w="full"
                  h="650px"
                  overflow="hidden"
                  style={{ borderRadius: "20px" }}
                  bg="#f5f5f1"
                >
                  <Image
                    alt={`Slide ${imageData.id}`}
                    src={imageData.img}
                    layout="fill"
                    objectFit="cover"
                    style={{"borderRadius": "20px"}}
                  />
                </Box>
              </Center>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Center>
  );
};

export default Slider;
