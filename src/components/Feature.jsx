import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
 import hindustan from '../assets/hindustan-times.svg'
 import enterpreneur from "../assets/entrepreneur.svg"
import { Autoplay } from "swiper/modules";
import gartner from '../assets/gartner.svg'
import google from '../assets/google.svg'
import  yahoo from '../assets/yahoo.svg'
import comms from '../assets/logo-comms-dealer.svg'
import l1 from '../assets/l1.svg'
import FadeUp from "./FadeUp";
const logos = [
  hindustan, enterpreneur, gartner, comms, yahoo, l1, hindustan, enterpreneur, gartner, comms, yahoo, l1

];

function Feature() {
  return (
    <div className="md:py-20 py-5 ">
   <FadeUp> <h1 className="text-[#098de4] titile-text mt-10 mb-10 text-center text-3xl font-bold">News Feature</h1></FadeUp>
    <div className="w-full py-10 sm:py-10 xl:py-10 px-10 sm:px-20  md:px-20 xl:px-40 bg-[#bdbec0] ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000} // smooth 1s transition
      >
        {logos.map((logo, index) => (
         
       <FadeUp> <SwiperSlide key={index}>
            <img
              src={logo}
              alt={`Logo ${index}`}
              className=" object-contain mx-auto"
            /> 
          </SwiperSlide></FadeUp>
        ))}
      </Swiper>
    </div>
    </div>
  );
}

export default Feature;
