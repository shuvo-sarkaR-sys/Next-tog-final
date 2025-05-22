import React from 'react'
import { useEffect, useState } from "react";
import arab from '../assets/18212 (1).jpg'
import chinese from '../assets/chinese-desktop.jpg'
import afro from '../assets/afro-desktop.jpg'
import british from '../assets/1237.jpg'
import bangladesh from '../assets/bangladeshi-desktop.jpg'
import logo from '../assets/Logo-Transperant.png'
import media from '../assets/sp1.png'
import sp from '../assets/sp2.png'
import FadeUp from './FadeUp';
import { Link } from 'react-router-dom';
 
 
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const images = [

    chinese,
      arab,
afro,
bangladesh,
british,

   
];
const Hero = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('jwtToken');
      setIsLoggedIn(false);
      navigate('/');
    } else {
      navigate('/');
    }
  };

    const [heroImage, setHeroImage] = useState("");

    useEffect(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setHeroImage(randomImage);
    }, []);
  return (
    <div className="relative   w-full h-screen overflow-hidden">
          <Link to='/login'><button onClick={handleAuthClick} className='absolute cursor-pointer hover:bg-black/5 top-8 z-30 right-26 py-3 px-6 rounded-3xl text-white border'>{isLoggedIn ? 'LogOut' : 'Login'}</button></Link>
          {/* navbar start from here */}
          <Navbar/>
    <img
      src={heroImage}
      alt="Hero"
      className="w-full h-full object-cover animate-zoom"
    />
    <div className=' flex w-full justify-items-start md:justify-center absolute top-5 z-20'>
    <FadeUp><Link to="/"><img className=' w-36  md:w-48' src={logo} alt="" /></Link></FadeUp>
    </div>
     <div className='bg-black/10 h-full w-full absolute top-0 z-10'></div>
    <div className='absolute z-20 md:top-[400px] top-[250px] xl:top-[300px] w-full text-center'>
      <FadeUp> <h1 className="text-white title-text text-5xl  md:text-[60px] font-bold">
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
