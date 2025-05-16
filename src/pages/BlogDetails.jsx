import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/Logo-Transperant.png';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`https://next-tog-backend.onrender.com/api/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!blog) return <div className="text-center mt-10 text-gray-600 text-lg">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with logo */}
      <div className="w-full bg-[#0b60e9] py-4">
        <Link to="/">
          <img className="w-48 mx-auto" src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Blog content */}
      <div className="max-w-4xl mx-auto px-4 py-10">
       <div className='flex flex-wrap gap-10'> <img
          src={blog.imageUrl}
          alt={blog.title}
          className=" max-h-[400px] object-cover mb-6 rounded-lg shadow"
        />
        <div>
       <h1 className="text-3xl font-bold mb-2 text-gray-800 break-words">
  {blog.title}
</h1>

<p className="text-sm text-gray-500 mb-6">
  <strong>Published:</strong> {new Date(blog.date).toLocaleDateString()}
</p></div>
</div>
<div className="space-y-4 text-lg text-gray-700 leading-relaxed">
  {blog.description.split('\n').map((para, idx) => (
    <p key={idx} className="break-words">{para.trim()}</p>
  ))}
</div>
      </div>
    </div>
  );
};

export default BlogDetails;
