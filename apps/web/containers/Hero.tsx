import Image from "next/image";
import heroOne from "../assets/heroOne.png";

const Hero = () => {
  return (
    <div className="w-full">
      <Image src={heroOne} alt="" />
    </div>
  );
};

export default Hero;
