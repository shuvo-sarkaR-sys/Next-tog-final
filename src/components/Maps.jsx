import React, { useEffect } from 'react';
import mapImg from '../assets/world-map.svg';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import FadeUp from './FadeUp';
import img1 from '../assets/95734.jpg'
import img2 from '../assets/9954.jpg'
import img3 from '../assets/3112.jpg'
import img4 from '../assets/16998.jpg'
import img5 from '../assets/15.jpg'
const Maps = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.getElementById('pulse-container');
      if (!container) return;

      container.querySelectorAll('span').forEach((el) => {
        el.classList.remove('animate-pulse1', 'animate-pulse2', 'animate-pulse3');
        void el.offsetWidth; // Force reflow to restart animation
      });

      container.querySelectorAll('span').forEach((el, index) => {
        if (index % 2 === 0) { // div
          el.classList.add(`animate-pulse${index/2 + 1}`);
        } else { // span
          el.classList.add(`animate-pulse${(index-1)/2 + 1}`);
        }
      });

    }, 18000); // 18s (6s + 6s + 6s)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
     <FadeUp><h1 className='text-5xl my-20 text-center text-[#0866fd]'>OUR PRESENCE</h1></FadeUp> 
      {/* <FadeUp> 
      <div className='relative xl:mx-40 mx-0 md:mx-10'>
        <img className='max-w-[1300px]' src={mapImg} alt="" />

         
        <div id="pulse-container">
          <div className="absolute top-40 left-30 flex items-center gap-1 xl:top-[470px] md:top-[340px] md:left-66 sm:top-[270px] sm:left-52 xl:left-[360px]  ">
            <span className='w-3 h-3 bg-[#6a2d73] rounded-full animate-pulse1'></span>
            <p>Bolivia</p>
          </div>
          <div className="absolute top-20 left-20 flex items-center gap-1 xl:top-[280px] md:top-[100px] sm:top-[160px] sm:left-36 xl:left-[300px] ">
            <span className='h-3 w-3 bg-[#6a2d73] rounded-full animate-pulse2'></span>
            <p>USA</p>
          </div>

          <div className=" absolute top-2 left-24 sm:top-14 md:top-8 sm:left-[250px] xl:top-0 flex items-center gap-1 ">
            <span  className='w-3 h-3 bg-[#6a2d73] rounded-full animate-pulse3'></span>
            <p>Spain</p>
          </div>


          <div className="absolute top-28 left-56 flex items-center gap-1 xl:top-[310px] md:top-[220px] md:left-[450px] sm:top-[170px] sm:left-[380px] xl:left-[560px] ">
            <span className='w-3 h-3 bg-[#6a2d73] rounded-full animate-pulse1'></span>
            <p>Egypt</p>
          </div>
          
          <div className=" absolute top-22 right-22 flex gap-1 items-center xl:top-[250px] md:top-[240px] md:left-[620px] sm:top-[130px] sm:left-[400px] xl:left-[800px]">
            <span className='w-3 h-3 bg-[#6a2d73] rounded-full animate-pulse2 '></span>
            <p>India</p>
          </div>
          <div className=" flex items-center gap-1 absolute top-30 right-6 xl:top-[310px] xl:left-[860px] sm:top-[170px] md:top-[250px] md:left-[670px] sm:left-[500px]">
            <span className='w-3 h-3 bg-[#6a2d73] rounded-full animate-pulse3'></span>
            <p>Bangladesh</p>
          </div>
        </div>

      </div>
      </FadeUp> */}
      <div className='xl:mx-40 mx-10 flex flex-wrap gap-8'>
        <div className=' xl:w-[36%] w-full gap-8 flex '>
          <div className='flex flex-col mt-8 gap-8'>
            <FadeUp><div className='group overflow-hidden rounded-2xl'><img className=' w-full object-cover xl:h-[210px] h-[210px] transition-transform duration-700 ease-out group-hover:scale-110' src={img1} alt="" /></div></FadeUp>
            <FadeUp><div className='group overflow-hidden rounded-2xl'><img className='  w-full object-cover xl:h-[210px] h-[210px] transition-transform duration-700 ease-out group-hover:scale-110' src={img2} alt="" /></div></FadeUp>
          </div>
          <div>
             <div className='flex flex-col gap-8'>
           <FadeUp><div className='group overflow-hidden rounded-2xl'><img className=' w-full xl:h-[210px] h-[210px] object-cover transition-transform duration-700 ease-out group-hover:scale-110' src={img3} alt="" /></div></FadeUp> 
           <FadeUp> <div className='group overflow-hidden rounded-2xl'><img className='  w-full   xl:h-[210px] h-[210px] object-cover transition-transform duration-700 ease-out group-hover:scale-110' src={img4} alt="" /></div></FadeUp>
          </div>
          </div>
        </div>
        <div className='rounded-2xl group overflow-hidden md:h-[490px] w-full xl:w-[60%]'>
          <FadeUp>
          <img className='object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110' src={img5} alt="" />
          </FadeUp>
        </div>
      </div>
      <div >
    <FadeUp>
      <div className="max-w-[1170px] md:mt-20 mt-10 mx-auto flex flex-wrap justify-center">
     
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative w-full md:w-1/3 text-center flex flex-col justify-center">
            <h2 className="text-[100px] text-[#098ce45e] font-bold font-serif">
              {inView && <CountUp start={0} end={20} duration={3} />}
            </h2>
            <p className="absolute text-center font-semibold text-[#098de4] mt-5 text-2xl w-full">
              Years of Expertise
            </p>
          </div>
        )}
      </InView>

    
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative w-full md:w-1/3 text-center flex flex-col justify-center">
            <h2 className="text-[100px] text-[#098ce45e] font-bold font-serif">
              {inView && <CountUp start={0} end={17} duration={3} />}
            </h2>
            <p className="absolute text-center font-semibold text-[#098de4] mt-5 text-2xl w-full">
              Country Footprints
            </p>
          </div>
        )}
      </InView>
 
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative w-full md:w-1/3 text-center flex flex-col justify-center">
            <h2 className="text-[100px] text-[#098ce452] font-bold font-serif">
              {inView && <CountUp start={0} end={3} duration={3} />}
            </h2>
            <p className="absolute text-center font-semibold text-[#098de4] mt-5 text-2xl w-full">
              R&D Centers
            </p>
          </div>
        )}
      </InView>

      
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative w-full md:w-1/3 text-center flex flex-col justify-center">
            <h2 className="text-[100px] text-[#098ce452] font-bold font-serif">
              {inView && <CountUp start={0} end={8} duration={3} />}
            </h2>
            <p className="absolute text-center font-semibold text-[#098de4] mt-1 text-2xl w-full">
              Million Happy Faces
            </p>
          </div>
        )}
      </InView>

      
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref} className="relative w-full md:w-1/3 text-center flex flex-col justify-center">
            <h2 className="text-[100px] text-[#098ce451] font-bold font-serif">
              {inView && <CountUp start={0} end={1800} duration={3} />}
            </h2>
            <p className="absolute text-center font-semibold text-[#098de4] mt-5 text-2xl w-full">
              Heart Counts
            </p>
          </div>
        )}
      </InView>
    </div>
    </FadeUp>
      </div>
    </div>
  );
};

export default Maps;
