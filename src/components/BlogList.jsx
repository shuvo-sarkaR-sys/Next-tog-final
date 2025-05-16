import React from 'react'
import axios from 'axios';
import dayjs from 'dayjs';
const BlogList = ({ blogs, fetchBlogs, setEditingBlog }) => {
    const handleDelete = async (id) => {
        await axios.delete(`https://next-tog-backend.onrender.com/api/blogs/${id}`);
        fetchBlogs();
      };
  return (
    <div className="flex flex-wrap mx-10 md:mx-40 my-14  gap-4">
      {blogs.map((blog) => (
        <div key={blog._id} className="relative group bg-white shadow-md rounded-2xl   overflow-hidden justify-center w-[160px]  h-[225px]">
          <img className='w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110' src={blog.imageUrl} alt="blog"  />
          <div className='absolute  text-white backdrop-blur-xs bottom-0 py-0 px-5'>
          <h2 className="text-sm font-semibold mt-2">{dayjs(blog.date).format('MMM D, YYYY')}</h2>
          <h1 className='max-h-5 text-sm max-w-[120px] overflow-hidden   bg-black/10'>{blog.title}</h1>
          <p className='max-h-7 text-xs max-w-[125px]  overflow-hidden'>{blog.description}</p>
        
          </div> 
           <div className="mt-2 left-2  space-x-5 absolute top-1">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => setEditingBlog(blog)}>Edit</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(blog._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogList
