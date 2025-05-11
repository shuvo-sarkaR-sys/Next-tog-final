import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BlogForm = ({fetchBlogs, editingBlog, setEditingBlog}) => {
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setDescription(editingBlog.description);
    }
  }, [editingBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    if (editingBlog) {
      await axios.put(`https://next-tog-backend.onrender.com/api/blogs/${editingBlog._id}`, formData);
      setEditingBlog(null);
    } else {
      await axios.post('https://next-tog-backend.onrender.com/api/blogs', formData);
    }

    setTitle('');
    setDescription('');
    setImage(null);
    fetchBlogs();
  };

  return (
    <div>
      <h1 className="text-2xl xl:ml-[450px] ml-48 font-bold mb-4">News Manager</h1>
    <form onSubmit={handleSubmit} className="mb-6 mx-10 md:mx-40 flex flex-col justify-center items-center space-y-4">
             

      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Date" className="w-1/2 p-2 rounded-md border border-gray-500" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-1/2 p-2 rounded-md border border-gray-500" required></textarea>
      <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button className="bg-blue-500 text-white px-6 py-1 rounded">{editingBlog ? 'Update' : 'Post'}</button></div>
    </form></div>
  )
}

export default BlogForm
