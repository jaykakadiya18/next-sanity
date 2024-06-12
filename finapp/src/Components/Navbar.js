"use client"
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import Image from 'next/image'

export default function Navbar() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleMenuClick = () => {
    console.log("menu click");
    setIsNavbarOpen(!isNavbarOpen);
  };
//   const handleClick = () => {
//     console.log("handle click");
//   }
  return (
    <div className='z-50 relative'>
      <div className="bg-gradient-to-r from-[#170044] via-[#2B0E6A]  to-[#35147C] text-white px-8">
          <div className='flex justify-center items-center py-2'>
              <div className='flex sm:flex-row flex-col lg:text-[14px] text-[12px] justify-center items-center'>
              <div className='bg-violet-700 rounded-full text-white px-3 text-xs flex items-center w-fit'>
                <a className='hidden md:block'>POPULAR</a>
                <a className='md:hidden '>NEW</a>
              </div>
              <div className='sm:ml-5 text-center sm:flex'>
                <a className=' mx-1'>$5,000 in AWS credits</a> <span className='hidden lg:block'>|</span> 
                <a className='hidden lg:block mx-1'>Up to 20% off Google Workspace Plans</a> <span className='hidden lg:block'>|</span> 
                <a className='hidden lg:block mx-1'>$5,000 in Digital Ocean credit</a> <span className=' lg:hidden'>|</span>
                <a className='lg:hidden mx-1'>20% off Google Workspace Standard plan</a>
              </div>
              </div>
          </div>
      </div>

      <div className='bg-transparent grid w-full min-h-24 py-[15px] px-[5%]'>
        <div className='flex items-center justify-between max-w-[1280px] lg:mx-auto'>
          <a href="" className='flex justify-center h-auto lg:w-[18%] w-[30%] '>
            <img src="https://assets-global.website-files.com/604637da1d40366d4e19de8e/6304f48a0cc2726f9f3df4f5_Pass%20(10)-p-500.png" alt="" width={500} height={500}/>
          </a>

          <nav className=' hidden lg:w-[65%] lg:flex lg:justify-start lg:items-center'>
              <div className='flex items-center w-auto ml-1'>
                <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>Browse</a>
                <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>Featured</a>
                <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>Top 50</a>
                <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>New</a>
                <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                </a>
                <div className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>
                    More
                </div>
              </div>
          </nav>

          <div className='lg:flex lg:items-center lg:justify-end lg:gap-3 lg:w-[35%]'>
            <button className='max-[468px]:hidden font-sans py-3 px-5 '>Log in</button>
            <button className='max-[468px]:hidden bg-black lg:bg-gradient-to-r lg:from-[#954AFF] lg:via-[#A530F5] lg:to-[#B21AEB] lg:py-2 py-3 lg:px-3 px-4 text-white text-sm rounded-[4px]'>Join for free</button>
            <MenuIcon className='lg:hidden ml-2 h-10 w-10' onClick={handleMenuClick} />
            
          </div>
          <nav className={` ${isNavbarOpen ? 'block' : 'hidden'}`}>
             <div className='flex flex-col justify-center items-center top-[100%] right-0 left-0 
        absolute bg-white  translate-y-0 duration-300 ease-in delay-0 '>
              <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>Browse</a>
                <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>Featured</a>
                <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>Top 50</a>
                <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>New</a>
                <a href="" className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                </a>    
                <div className='mx-1 py-2 px-4 text-base font-medium tracking-tighter leading-6'>
                    More
                </div>

            </div>
        </nav>
        </div>
      </div>

      <div className='hidden lg:grid lg:border-t-2 lg:border-b-2 lg:border-solid lg:border-zinc-300 xl:px-[5%] px-[2%] text-sm'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center xl:py-4 py-2 '>
              <a href="" className=''>By Category</a>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
          </div>
          <a href="" className='mx-2 py-4 px-2'>Ai</a>
            <a href="" className='mx-2 py-4 px-2'>Cloud</a>
            <a href="" className='mx-2 py-4 px-2'>Communications</a>
            <a href="" className='mx-2 py-4 px-2'>Customer</a>
            <a href="" className='mx-2 py-4 px-2'>Finance</a>
            <a href="" className='mx-2 py-4 px-2'>HR</a>
            <a href="" className='mx-2 py-4 px-2'>Marketing</a>
            <a href="" className='mx-2 py-4 px-2'>Productivity</a>
            <a href="" className='mx-2 py-4 px-2'>Sales</a>
            <a href="" className='mx-2 py-4 px-2'>SEO</a>
            <a href="" className='mx-2 py-4 px-2'>Tech</a>
        </div>
      </div>

    </div>
    
   
  );
}  


