import React from 'react'
import logo from '../assets/Logo-Transperant.png'
import '../index.css'
import ContactForm from '../components/ContactForm'
import d1 from '../assets/d1.svg'
import d2 from '../assets/d2.svg'
import d3 from '../assets/d3.svg'
import d4 from '../assets/d4.svg'
import d5 from '../assets/d5.svg'
import d6 from '../assets/d6.svg'
 import { Link } from 'react-router-dom'
const MediaKit = () => {
    const handleDownload1 = () => {
        const link = document.createElement('a');
        link.href = '/path/to/d1.svg'; // Make sure the file is in the public folder
        link.download = 'd1.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const handleDownload2 = () => {
        const link = document.createElement('a');
        link.href = '/path/to/d2.svg'; // Make sure the file is in the public folder
        link.download = 'd2.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const handleDownload3 = () => {
        const link = document.createElement('a');
        link.href = '/path/to/d3.svg'; // Make sure the file is in the public folder
        link.download = 'd3.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const handleDownload4 = () => {
        const link = document.createElement('a');
        link.href = '/path/to/d4.svg'; // Make sure the file is in the public folder
        link.download = 'd4.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const handleDownload5 = () => {
        const link = document.createElement('a');
        link.href = '/path/to/d5.svg'; // Make sure the file is in the public folder
        link.download = 'd1.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const handleDownload6 = () => {
        const link = document.createElement('a');
        link.href = '/path/to/d6.svg'; // Make sure the file is in the public folder
        link.download = 'd6.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div >

    <div className='bg-image  pt-10 h-[400px]'>
      <Link to="/"><img className='w-48  mx-auto' src={logo} alt="" /></Link>
      <br />
      <br />
      <br />
      <h2 className='text-center   text-white font-bold text-5xl'>Media <span className='title-text-under'>Kit</span></h2>
    </div>
    <h1 className='text-center text-5xl my-20'>Our Identities</h1>
    <p className='max-w-[800px] mb-16 text-gray-500 text-lg mx-auto text-center'>We love what we create. Each of our brands is a part of us. Each of those identities put together is what Dotlines is today and will be tomorrow. When you decide to play with them, we welcome you to our world, and make you our part as well.</p>

<div className='flex flex-wrap gap-20 mb-20 justify-center max-w-[850px] mx-auto'>
    <div className='relative rounded-2xl overflow-hidden'>
        <h1 className='text-4xl'>Logo 1</h1>
        <img className='w-full object-cover' src={d1} alt="" />
        <button onClick={handleDownload1} className='absolute cursor-pointer left-20 bottom-10 w-[150px]  text-xl text-black backdrop-blur-2xl py-2 rounded-2xl border-2'>Download</button>
    </div>
    <div className='relative rounded-2xl overflow-hidden'>
        <h1 className='text-4xl'>Logo 2</h1>
        <img className='w-full object-cover' src={d2} alt="" />
        <button onClick={handleDownload2} className='absolute cursor-pointer left-20 bottom-10 w-[150px]  text-xl text-black backdrop-blur-2xl py-2  rounded-2xl border-2'>Download</button>
    </div>
    <div className='relative rounded-2xl overflow-hidden'>
        <h1 className='text-4xl'>Logo 3</h1>
        <img className='w-full object-cover' src={d3} alt="" />
        <button onClick={handleDownload3} className='absolute cursor-pointer left-20 bottom-10 w-[150px]  text-xl text-black backdrop-blur-2xl py-2 rounded-2xl border-2'>Download</button>
    </div>
    <div className='relative rounded-2xl overflow-hidden'>
        <h1 className='text-4xl'>Logo 4</h1>
        <img className='w-full object-cover' src={d4} alt="" />
        <button onClick={handleDownload4} className='absolute cursor-pointer left-20 bottom-10 w-[150px]  text-xl text-black backdrop-blur-2xl py-2 rounded-2xl border-2'>Download</button>
    </div>
    <div className='relative rounded-2xl overflow-hidden'>
        <h1 className='text-4xl'>Logo 5</h1>
        <img className='w-full object-cover' src={d5} alt="" />
        <button onClick={handleDownload5} className='absolute cursor-pointer left-20 bottom-10 w-[150px]  text-xl text-black py-2 rounded-2xl backdrop-blur-2xl border-2'>Download</button>
    </div>
    <div className='relative rounded-2xl overflow-hidden'>
        <h1 className='text-4xl'>Logo 6</h1>
        <img className='w-full object-cover' src={d6} alt="" />
        <button onClick={handleDownload6} className='absolute cursor-pointer left-20 bottom-10 w-[150px]  text-xl text-black py-2 rounded-2xl border-2'>Download</button>
    </div>
</div>
    <ContactForm/>
    </div>
  )
}

export default MediaKit
