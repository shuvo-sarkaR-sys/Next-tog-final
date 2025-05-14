import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs'
const BlogForm = ({fetchBlogs, editingBlog, setEditingBlog}) => {
    const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
 const [title, setTitle] = useState('')
  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setDescription(editingBlog.description);
          const parsedDate = editingBlog.startDate ? new Date(editingBlog.startDate) : null;
    if (parsedDate && !isNaN(parsedDate)) {
      setStartDate(parsedDate);
    } else {
      console.warn('Invalid startDate:', editingBlog.startDate);
      setStartDate(new Date()); // fallback to current date
    }

    }
  }, [editingBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('date', startDate.toISOString())
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
    setStartDate(new Date())
    setImage(null);
    fetchBlogs();
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="mb-6 mx-10 xl:mx-40 flex flex-col overflow-hidden  space-y-4">      
      <h1 className="text-2xl   ml-0 font-bold mb-4">News Manager</h1>

           <input value={title} type="text" onChange={(e)=> setTitle(e.target.value)} placeholder='Title' className='md:w-1/3 w-full rounded-2xl p-2  border border-gray-400 ' required />
       <div className='flex items-center gap-5'><label htmlFor="DatePicker">Date:</label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className="w-1/2 p-2 rounded-md border border-gray-400" required /></div>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="md:w-1/3 w-full h-32 p-2 rounded-2xl border border-gray-400" required></textarea>
      <div>
      {/* <input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}
      <div className="flex flex-col gap-2">
  <label className="font-semibold">Add Thumbnail</label>
  <div
    onClick={() => document.getElementById('imageInput').click()}
    className="w-24 h-20 border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500"
  >
    {image ? (
      <img
        src={typeof image === 'string' ? image : URL.createObjectURL(image)}
        alt="Thumbnail"
        className="w-full h-full object-cover rounded-md"
      />
    ) : (
      <span className="text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
</span>
    )}

  </div>
  <input
    id="imageInput"
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
    className="hidden"
  />
<span className='text-red-500 text-sm'>width: 670px height: 1000px</span>
</div>


      <button className="bg-blue-500 mt-5 md:w-1/3 w-full  text-white px-6 py-1  rounded">{editingBlog ? 'Update' : 'Post'}</button></div>
    </form>
    </div>
  )
}

export default BlogForm
