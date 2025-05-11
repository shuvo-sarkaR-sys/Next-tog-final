import React from 'react'
import axios from 'axios';
const BlogList = ({ blogs, fetchBlogs, setEditingBlog }) => {
    const handleDelete = async (id) => {
        await axios.delete(`https://next-tog-backend.onrender.com/api/blogs/${id}`);
        fetchBlogs();
      };
  return (
    <div className="flex flex-wrap  justify-center my-14  gap-4">
      {blogs.map((blog) => (
        <div key={blog._id} className="relative group bg-white shadow-md rounded-2xl   overflow-hidden justify-center w-[320px]  h-[450px]">
          <img className='w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110' src={`https://next-tog-backend.onrender.com${blog.imageUrl}`} alt="blog"  />
          <div className='absolute  text-white backdrop-blur-xs bottom-0 py-5 px-10'>
          <h2 className="text-xl font-semibold mt-2">{blog.title}</h2>
          <p>{blog.description}</p>
          <div className="mt-2 space-x-2">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => setEditingBlog(blog)}>Edit</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(blog._id)}>Delete</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogList
