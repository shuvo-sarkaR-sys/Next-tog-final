import React from 'react'
import logo from '../assets/Logo-Transperant.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-[#098de4] pt-10'>


      <div className='flex mx-5 md:mx-20 flex-wrap border-b pb-10 border-gray-400 items-center  justify-between gap-10 xl:mx-40'>
        <div>
           <Link to="/"> <img className='w-44 ml-[-20px]' src={logo} alt="" /></Link>
            <p className='text-white font-semibold'>demo@nexttog.com</p>
            <div className='flex items-center mt-3'>
                <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" className='fill-white hover:fill-black cursor-pointer rounded-full ' y="0px" width="40" height="30" viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
</svg></a>
<a href="#"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30" className='fill-white hover:fill-black cursor-pointer'>
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
</svg></a>
            </div>
        </div>
        <div className='text-white' >
          <h3 className='text-lg font-semibold'>Office 1</h3>
           <p>Demo street, demo complex, demo</p>
           <p>Demo street, demo complex, demo</p>
            
        </div>
        <div className='text-white'>
          <h3 className='text-lg font-semibold'>Office 1</h3>
           <p>Demo street, demo complex, demo</p>
           <p>Demo street, demo complex, demo</p>
        </div>
        <div className='text-white'>
          <h3 className='text-lg font-semibold'>Office 1</h3>
           <p>Demo street, demo complex, demo</p>
           <p>Demo street, demo complex, demo</p>
        </div>
        
      </div>
<br />
        

      <div>
      <footer className="text-center text-gray-200 text-sm py-4">
  © 2025 <a href="https://yourwebsite.com" className="  hover:underline">Next Tog</a>. All rights reserved.
</footer>

        <div></div>
      </div>
    </div>
  )
}

export default Footer
