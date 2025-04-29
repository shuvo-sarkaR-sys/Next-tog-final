import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import p1 from '../assets/telenor.svg'
import p2 from '../assets/microsoft-logo.svg'
import p3 from '../assets/google.svg'
import p4 from '../assets/axiata.svg'
import p5 from '../assets/lg2.svg'
import p6 from '../assets/lg3.svg'
import p7 from '../assets/lg4.svg'
import p8 from '../assets/lg5.svg'
import FadeUp from './FadeUp';
const Partner = () => {
    const logos = [p1, p2, p3, p4, p5, p6, p7, p8,]
    return (
        <div className="py-20 ">
          <FadeUp>  <h1 className="text-[#6a2d73] titile-text mb-20 text-center text-3xl font-bold">PARTNERS</h1></FadeUp>
            <div className="w-full py-10  sm:py-20 sm:pt-24 xl:py-30 px-10 sm:px-20  md:px-20 xl:px-40 bg-[#bdbec0] ">
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
                        <SwiperSlide   key={index}>
                             
                                <img
                                    src={logo}
                                    alt={`Logo ${index}`}
                                    className=" object-contain my-auto"
                                />
                             
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Partner
