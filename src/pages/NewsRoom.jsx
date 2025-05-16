import React, { useEffect, useState } from 'react'
import FadeUp from '../components/FadeUp.jsx'
 import axios from 'axios'
 import background from '../assets/95733 (1).jpg'
 import '../index.css'
 import logo from '../assets/Logo-Transperant.png'
 import { Link } from 'react-router-dom'
 import Navbar from '../components/Navbar.jsx'
 const NewsRoom = () => {
      const [blogs, setBlogs] = useState([])

      useEffect(()=>{
        axios.get('https://next-tog-backend.onrender.com/api/blogs')
        .then(res => setBlogs(res.data))
        .then(err => console.log(err))
      }, [])

  return (
    <div >
 <div className='relative h-[50vh]'>
    <img className='absolute animate-zoom w-full h-full object-center object-cover' src={background} alt="" />
    <div className='absolute top-5 w-full'><Link to='/'><img className='z-10  w-48 mx-auto' src={logo} alt="" /></Link></div>
    <div className='absolute top-40 w-full flex justify-center text-center'> <h2 className='text-center   text-white my-auto font-bold text-5xl'>News <span className='title-text-under'>Room</span></h2></div>
   </div>
   <div className="w-full flex gap-10 flex-wrap justify-center my-20 mx-auto p-4">
        
       
        {blogs.map((blog) => (
            <FadeUp key={blog._id}>
             <div  className="relative group bg-white shadow-md rounded-2xl   overflow-hidden justify-center w-[320px]  h-[450px]">
               
              <img className='w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110' src={blog.imageUrl} alt="" />
              
              <div  className='absolute  text-white backdrop-blur-xs bottom-0 py-5 px-10'>
               <p>{blog.title}</p>
           <p className='group-hover:underline-offset-1' >{blog.description}</p></div>
            </div></FadeUp> 
          
        ))}
    
    </div>
    <Navbar/>
    </div>
  )
}

export default NewsRoom
