 import React from 'react'
 import FadeUp from './FadeUp'
 
 import {Link} from 'react-router-dom';
import Blogs from './Blogs';
 const News = () => {
  
   return (
    <div>
    <FadeUp> <h1 className="text-center titile-text text-[#6a2d73] text-5xl font-bold my-6">FEATURED NEWS</h1></FadeUp>
     <div className="w-full flex gap-10 flex-wrap justify-center my-20 mx-auto p-4">
        
      <Blogs/>
     
     </div>
     <br />
     <div className='mb-20 flex justify-center'>
     <Link to='/newsroom'><button className='bg-[#612d73] cursor-pointer text-white text-xl font-semibold  h-14 w-54  rounded-xl  '> Visit the newsroom</button></Link>
     </div>
   </div>
   )
 }
 
 export default News
 