import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ServiceForm({ fetchServices, editingService, setEditingService }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (editingService) {
      setTitle(editingService.title);
      setDescription(editingService.description);
    }
  }, [editingService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    if (editingService) {
      await axios.put(`https://next-tog-backend.onrender.com/api/services/${editingService._id}`, formData);
      setEditingService(null);
    } else {
      await axios.post('https://next-tog-backend.onrender.com/api/services', formData);
    }

    setTitle('');
    setDescription('');
    setImage(null);
    fetchServices();
  };

  return (
    <div>
    <form onSubmit={handleSubmit}  className="mb-6 mx-10 md:mx-40 flex flex-col  space-y-4">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full md:w-1/3 p-2 border border-gray-400 rounded-2xl" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full md:w-1/3 h-40 p-2 border-gray-400 rounded-2xl border" required></textarea>
<div className="flex flex-col gap-2">
  <label className="font-semibold">Add Thumbnail</label>

  <div
    onClick={() => document.getElementById('thumbnailInput').click()}
    className="w-24 h-20 border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center cursor-pointer hover:border-blue-500"
  >
    {image ? (
      <img
        src={typeof image === 'string' ? image : URL.createObjectURL(image)}
        alt="Thumbnail"
        className="w-full h-full object-cover rounded-md"
      />
    ) : (
      <span className="text-gray-400 text-sm text-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
</span>
    )}
  </div>

  <input
    id="thumbnailInput"
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
    className="hidden"
  />
<span className='text-red-400 text-sm'>width: 600px height: 590px</span>
</div>
      <button className="bg-green-600 text-white w-full md:w-1/3 px-4 py-2 rounded">{editingService ? 'Update' : 'Add Service'}</button>
    </form>
    </div>
  );
}

export default ServiceForm;