import React from 'react'

function ContactForm() {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };
  
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      alert(data.message);
    };
  
    return (
      <div>
        <h1 className='text-center text-[#612d73] text-5xl'>GET IN TOUCH</h1>
      <form className='flex flex-col p-20 mx-auto max-w-[900px] justify-center' onSubmit={handleSubmit}>
        <input className=' border-b-2 pb-2 px-5 pt-4 text-lg border-gray-300 focus:outline-none focus:border-[#612d73] ' name="name" type="text" required placeholder="Name" />
        <input className=' border-b-2 pb-2 pt-4 px-5 text-lg border-gray-300 focus:outline-none focus:border-[#612d73] ' name="email" type="email" required placeholder="Email" />
        <textarea className=' border-b-2  pt-3 px-5 text-lg border-gray-300 focus:outline-none focus:border-[#612d73] ' name="message" required placeholder="Your message"></textarea>
        <button type="submit" className='cursor-pointer flex justify-end text-3xl mt-10 items-center gap-3 font-semibold'>Let's Talk <span className='bg-[#612d73] p-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</span></button>
      </form>
      </div>
    );
  }
  export default ContactForm;