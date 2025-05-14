import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className=" rounded-2xl py-3 px-4 hover:bg-black/20 border border-[#098de4]   text-white fixed top-8 right-8 z-50 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#098de4]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-68 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="p-2 text-red-600"
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </button>
        <ul className="p-4 text-li   text-xl flex flex-col gap-5 mt-5">
          <Link to='/mediakit'><li className='hover:text-[#098de4]'>Media Kit</li></Link>
          <Link to='/newsroom'><li className='hover:text-[#098de4]'>News Room</li></Link>
          <Link to='/contactus'><li className='hover:text-[#098de4]'>Contact Us</li></Link>
          <li className='hover:text-[#098de4]'><a href="#services">Services</a></li>
          <Link to="/dashboard"><li className='hover:text-[#098de4]'>Dashboard</li></Link>
           
        </ul>
      </div>
    </>
  );
}

export default Navbar;
