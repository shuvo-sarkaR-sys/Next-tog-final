import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 

import FadeUp from './FadeUp'
const Content = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
         axios.get('https://next-tog-backend.onrender.com/api/services')
      .then(res => setServices(res.data))

      .catch(err => console.log(err));
    },[])
    const serviceShow = services.slice(0, 6)
  return (
    <div id='services' className='bg-[#f6f6f6] mt-10 py-14'>
     <FadeUp> <h1 className='text-[#098de4] text-4xl text-center font-bold '>Happy Customer</h1></FadeUp>
      <div className='flex flex-wrap p-5 pt-15 sm:px-5 md:px-5 xl:px-40 gap-10'>
       
       {serviceShow.map((service)=>(
        <div key={service._id} className='relative rounded-4xl  overflow-hidden md:w-[46%]'>
          <FadeUp>   
            <img className=' w-full h-full object-cover' src={service.imageUrl} alt="" />
            <div className='absolute left-10 md:bottom-4 xl:bottom-10'>
                <h1 className='text-white max-h-20 overflow-hidden font-bold text-3xl '>{service.title}</h1>
                <br />
                <h4 className='text-lg max-h-15 overflow-hidden text-white'>{service.description}</h4>
                <br />
             </div></FadeUp> 
       
        </div>))}


      </div>
    </div>
  )
}

export default Content
