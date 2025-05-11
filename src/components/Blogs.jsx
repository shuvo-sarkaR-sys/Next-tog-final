import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FadeUp from './FadeUp';

const Blogs= () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://next-tog-backend.onrender.com/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  }, []);
    const latestBlogs = blogs.slice(0, 3)
  return (
    <div className="flex gap-10 flex-wrap">
       
      {latestBlogs.map(blog => (
        <FadeUp>
        <div key={blog._id} className="relative group bg-white shadow-md rounded-2xl   overflow-hidden justify-center w-[320px]  h-[450px]">
          <img className='w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'  src={`https://next-tog-backend.onrender.com${blog.imageUrl}`} alt=""   />
          <div className='absolute  text-white backdrop-blur-xs bottom-0 py-5 px-10'>
          <h2  >{blog.title}</h2>
          <p className='group-hover:underline-offset-1'>{blog.description}</p>
          </div>
        </div>
        </FadeUp>
      ))}
    </div>
  );
};

export default Blogs;

