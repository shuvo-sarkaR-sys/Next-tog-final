import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogForm from '../components/BlogForm'
import BlogList from '../components/BlogList';
import ServiceForm from '../components/ServiceForm';
import ServiceList from '../components/ServiceList';
 import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Dashboard = () => { 
  
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
   const fetchServices = async () => {
    const res = await axios.get('https://next-tog-backend.onrender.com/api/services');
    setServices(res.data);
  };

  const fetchBlogs = async () => {
    const res = await axios.get('https://next-tog-backend.onrender.com/api/blogs');
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
    fetchServices();
  }, []);

  return (
    <div>
       <div className='flex mb-10 justify-between mr-28 mt-10'>
      <h1 className='text-4xl ml-5'>dashboard</h1>
      <Link to='/'><h1 >Back to home</h1></Link>
      </div>
      <div className="p-4">
       <BlogForm fetchBlogs={fetchBlogs} editingBlog={editingBlog} setEditingBlog={setEditingBlog} />
      <BlogList blogs={blogs} fetchBlogs={fetchBlogs} setEditingBlog={setEditingBlog} />

    </div>
     <div className="p-4">
      <h1 className="text-2xl md:mx-40 mx-10 font-bold mb-4">Service Manager</h1>
      <ServiceForm fetchServices={fetchServices} editingService={editingService} setEditingService={setEditingService} />
      <ServiceList services={services} fetchServices={fetchServices} setEditingService={setEditingService} />
    </div>
    <Navbar />
    </div>
  )
}

export default Dashboard
