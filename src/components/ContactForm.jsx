import React, { useState } from 'react'
import Navbar from './Navbar';
function ContactForm() {

  const [text, setText] =useState(false)
    const handleSubmit = async (e) => {
      e.preventDefault();
     setText(true);

      setTimeout(() => setText(false), 3000);
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };
    
      const res = await fetch('https://next-tog-backend.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    
      const data = await res.json();
      alert(data.message);
      e.target.reset();
    
    
 
    
     
     
    };
  
    return (
      <div className='relative mt-10'>
        <h1 className='text-center text-[#098de4] text-5xl'>GET IN TOUCH</h1>
      <form className='flex flex-col p-20 mx-auto max-w-[900px] justify-center' onSubmit={handleSubmit}>
        <input className=' border-b-2 pb-2 px-5 pt-4 text-lg border-gray-300 focus:outline-none focus:border-[#0866fd] ' name="name" type="text" required placeholder="Name" />
        <input className=' border-b-2 pb-2 pt-4 px-5 text-lg border-gray-300 focus:outline-none focus:border-[#0866fd] ' name="email" type="email" required placeholder="Email" />
        <textarea className=' border-b-2  pt-3 px-5 text-lg border-gray-300 focus:outline-none focus:border-[#0866fd] ' name="message" required placeholder="Your message"></textarea>
        <button type="submit" className='cursor-pointer flex justify-end text-3xl mt-10 items-center gap-3 font-semibold'>Let's Talk <span className='bg-[#0866fd] p-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</span></button>
      </form>
      {text ? (<p className='absolute text-center px-5 rounded-2xl py-2 border bottom-[100px] left-[200px] bg-[#225bec95] text-white'>done</p>):(<p></p>)}
      <Navbar/>
      </div>
      
    );
  }
  export default ContactForm;