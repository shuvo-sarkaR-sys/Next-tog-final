import React from 'react'
import FadeUp from '../components/FadeUp.jsx'
 import n1 from '../assets/n1.jpg'
 import n2 from '../assets/n2.jpg'
 import n3 from '../assets/n3.jpg'
 import background from '../assets/95733 (1).jpg'
 import '../index.css'
 import logo from '../assets/Logo-Transperant.png'
 import { Link } from 'react-router-dom'
const NewsRoom = () => {
      const cards = [
          { id: 1, img: n1, dates:'October 25, 2024', titles: "lorem ipsum lorem ipsum lorem lorem"},
          {id: 2, img: n2, dates:'November 1, 2023', titles: "lorem ipsum lorem ipsum lorem lorem"},
          {id: 2, img: n3, dates:'November 1, 2023', titles: "lorem ipsum lorem ipsum lorem lorem"},
          { id: 1, img: n1, dates:'October 25, 2024', titles: "lorem ipsum lorem ipsum lorem lorem"},
          {id: 2, img: n2, dates:'November 1, 2023', titles: "lorem ipsum lorem ipsum lorem lorem"},
          {id: 2, img: n3, dates:'November 1, 2023', titles: "lorem ipsum lorem ipsum lorem lorem"}


      ]
  return (
    <div >
 <div className='relative h-[50vh]'>
    <img className='absolute animate-zoom w-full h-full object-center object-cover' src={background} alt="" />
    <div className='absolute top-5 w-full'><img className='  w-48 mx-auto' src={logo} alt="" /></div>
    <div className='absolute h-full w-full flex justify-center text-center'> <h2 className='text-center   text-white my-auto font-bold text-5xl'>News <span className='title-text-under'>Room</span></h2></div>
  </div>
   <div className="w-full flex gap-10 flex-wrap justify-center my-20 mx-auto p-4">
        
       
        {cards.map((card, index) => (
            <FadeUp>
             <div className="relative group bg-white shadow-md rounded-2xl   overflow-hidden justify-center w-[320px]  h-[450px]">
               
              <img className='w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110' src={card.img} alt="" />
              
              <div  className='absolute  text-white backdrop-blur-xs bottom-0 py-5 px-10'>
               <p>{card.dates}</p>
           <p className='group-hover:underline-offset-1' >{card.titles}</p></div>
            </div></FadeUp> 
          
        ))}
    
    </div>
    </div>
  )
}

export default NewsRoom
