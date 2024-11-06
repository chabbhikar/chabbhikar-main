// import Image from "next/image";
// import { Button } from "@repo/ui/button";
// import styles from "./page.module.css";

import Hero from "../containers/Hero";

// import Carousel from "./components/carousel";

// const items = [
//   <img src="image1.jpg" alt="Slide 1" />,
//   <img src="image2.jpg" alt="Slide 2" />,
//   <img src="image3.jpg" alt="Slide 3" />,
// ];

export default function Home() {
  return (
    <>
      <h1 className="">Chabbhikar</h1>
      <h2 className="">Hello</h2>
      <Hero />
      {/* <Carousel items={items}/> */}
    </>
  );
}
