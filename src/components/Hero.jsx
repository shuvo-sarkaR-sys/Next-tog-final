import React from 'react'
import { useEffect, useState } from "react";
import arab from '../assets/arab-desktop.jpg'
import chinese from '../assets/chinese-desktop.jpg'
import afro from '../assets/afro-desktop.jpg'
import british from '../assets/british-desktop.jpg'
import bangladesh from '../assets/bangladeshi-desktop.jpg'
import logo from '../assets/Logo-Transperant.png'
import media from '../assets/sp1.png'
import sp from '../assets/sp2.png'
import FadeUp from './FadeUp';
import { Link } from 'react-router-dom';
const images = [
  arab,
    chinese,
afro,
british,
bangladesh
   
];
const Hero = () => {
    const [heroImage, setHeroImage] = useState("");

    useEffect(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setHeroImage(randomImage);
    }, []);
  return (
    <div className="relative   w-full h-screen overflow-hidden">
    <img
      src={heroImage}
      alt="Hero"
      className="w-full h-full object-cover animate-zoom"
    />
    <div className=' flex w-full justify-center absolute top-5 z-20'>
    <FadeUp><Link to="/"><img className='  w-48' src={logo} alt="" /></Link></FadeUp>
    </div>
    <div className='bg-black/10 h-full w-full absolute top-0 z-10'></div>
    <div className='absolute z-20 md:top-[400px] top-[250px] xl:top-[300px] w-full text-center'>
      <FadeUp> <h1 className="text-white title-text text-5xl md:text-[60px] font-bold">
  SIMPLIFY <span className="italic title-text-under font-normal">business</span>. SIMPLIFY <span className="italic title-text-under font-normal">life</span>.
</h1></FadeUp>
    </div>
    <Link to='/mediakit'><div className='absolute z-20 md:right-12 right-8 bottom-2 w-38'>
   <FadeUp><img className='animation-1' src={media} alt="" />
    <img className='relative bottom-24 w-11 left-14' src={sp} alt="" /></FadeUp> 
    </div></Link>
  </div>
  )
}

export default Hero
