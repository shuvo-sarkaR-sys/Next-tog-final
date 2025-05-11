import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogForm from '../components/BlogForm'
import BlogList from '../components/BlogList';

 import { Link } from 'react-router-dom';
const Dashboard = () => { 
  
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const fetchBlogs = async () => {
    const res = await axios.get('https://next-tog-backend.onrender.com/api/blogs');
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
       <div className='flex justify-between mr-5 mt-5'>
      <h1 className='text-4xl ml-5'>dashboard</h1>
      <Link to='/'><h1>Back to home</h1></Link>
      </div>
      <div className="p-4">
       <BlogForm fetchBlogs={fetchBlogs} editingBlog={editingBlog} setEditingBlog={setEditingBlog} />
      <BlogList blogs={blogs} fetchBlogs={fetchBlogs} setEditingBlog={setEditingBlog} />
    </div>
    </div>
  )
}

export default Dashboard
