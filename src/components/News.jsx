 import React from 'react'
 import FadeUp from './FadeUp'
 import n1 from '../assets/n1.jpg'
 import n2 from '../assets/n2.jpg'
 import n3 from '../assets/n3.jpg'
 import {Link} from 'react-router-dom';
 const News = () => {
    const cards = [
        { id: 1, img: n1, dates:'October 25, 2024', titles: "lorem ipsum lorem ipsum lorem lorem"},
        {id: 2, img: n2, dates:'November 1, 2023', titles: "lorem ipsum lorem ipsum lorem lorem"},
        {id: 2, img: n3, dates:'November 1, 2023', titles: "lorem ipsum lorem ipsum lorem lorem"}
    ]
   return (
    <div>
    <FadeUp> <h1 className="text-center titile-text text-[#6a2d73] text-5xl font-bold my-6">OUR STORIES</h1></FadeUp>
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
     <br />
     <div className='mb-20 flex justify-center'>
     <Link to='/newsroom'><button className='bg-[#612d73] cursor-pointer text-white text-xl font-semibold  h-14 w-54  rounded-xl  '> Visit the newsroom</button></Link>
     </div>
   </div>
   )
 }
 
 export default News
 