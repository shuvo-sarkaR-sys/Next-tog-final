import React from 'react';
import axios from 'axios';

function ServiceList({ services, fetchServices, setEditingService }) {
  const handleDelete = async (id) => {
    await axios.delete(`https://next-tog-backend.onrender.com/api/services/${id}`);
    fetchServices();
  };

  return (
    <div className="flex flex-wrap p-5 pt-15 sm:px-5 md:px-5 xl:px-40 gap-10">
      {services.map((service) => (
        <div key={service._id} className="relative rounded-4xl  overflow-hidden md:w-1/5">
          {service.imageUrl && (
            <img src={service.imageUrl} alt="service" className=' w-full h-full  object-cover'  />
          )}
          <div  className='absolute mx-3 bottom-2'>
          <h2 className='text-white max-h-7 mr-2 overflow-hidden font-bold text-xl '>{service.title}</h2>
          <p className='text-md text-gray-300 max-h-12   overflow-hidden'>{service.description}</p>
          <div className="mt-2 ml-3 space-x-2">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => setEditingService(service)}>Edit</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(service._id)}>Delete</button>
          </div></div>
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
