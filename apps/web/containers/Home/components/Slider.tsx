"use client";

// import { useRef, useState } from 'react';

import imageOne from "../../../assets/k1.jpeg";
import imageTwo from "../../../assets/k2.jpeg";
import imageThree from "../../../assets/k3.jpeg";
import imageFour from "../../../assets/k4.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const imagesData = [
  { id: 1, img: imageOne },
  { id: 2, img: imageTwo },
  { id: 3, img: imageThree },
  { id: 4, img: imageFour },
];

const Slider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" autoplay>
        {imagesData.map((imageData) => (
          <SwiperSlide key={imageData.id}>
            <Image alt="" src={imageData.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
