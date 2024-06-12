import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='max-w-[1218px] px-6 mx-auto'>
        <div className='py-14 grid lg:grid-cols-[minmax(360px,_1fr)_auto_auto_auto_auto] grid-rows-auto sm:grid-cols-4 grid-cols-2 gap-10 gap-x-24'>
            <div className='grid col-span-2 sm:col-span-4 place-items-center  lg:col-span-1'>
                <div className='mb-6 flex justify-center lg:justify-start'>
                    <img src="https://assets-global.website-files.com/604637da1d40366d4e19de8e/6304f48a0cc2726f9f3df4f5_Pass%20(10)-p-500.png" alt="" className='w-3/5'/>
                </div>
                <p className='text-xs md:text-sm lg:text-base mb-10 text-center lg:text-left'>
                    The exclusive membership for founders, giving you access to over $2 million of discounts and perks.
                </p>
                <div className='text-[#954aff] grid grid-cols-4 gap-3 w-fit'>
                    <div className='bg-[#f2f1ff] p-1 rounded-lg'>
                        <FacebookIcon className='lg:text-3xl text-2xl'/>
                    </div>
                    <div className='bg-[#f2f1ff] p-1 rounded-lg'>
                        <XIcon className='lg:text-3xl text-2xl'/>
                    </div>
                    <div className='bg-[#f2f1ff] p-1 rounded-lg'>
                        <InstagramIcon className='lg:text-3xl text-2xl'/>
                    </div>
                    <div className='bg-[#f2f1ff] p-1 rounded-lg'>
                        <LinkedInIcon className='lg:text-3xl text-2xl'/>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-[#954aff] font-semibold mb-6'>Popular</div>
                <ul>
                    <li className='mb-3'><a href="">Top 50</a></li>
                    <li className='mb-3'><a href="">Browse</a></li>
                    <li className='mb-3'><a href="">Featured</a></li>
                    <li className='mb-3'><a href="">Reviews</a></li>
                </ul>
            </div>
            <div>
            <div className='text-[#954aff] font-semibold mb-6'>Account</div>
                <ul>
                    <li className='mb-3'><a href="">Join us</a></li>
                    <li className='mb-3'><a href="">Login</a></li>
                    <li className='mb-3'><a href="">Pricing</a></li>
                </ul>
            </div>
            <div>
            <div className='text-[#954aff] font-semibold mb-6'>Company</div>
                <ul>
                    <li className='mb-3'><a href="">About us</a></li>
                    <li className='mb-3'><a href="">FAQ</a></li>
                    <li className='mb-3'><a href="">Partner with us</a></li>
                </ul>
            </div>
            <div>
            <div className='text-[#954aff] font-semibold mb-6'>Help/Legal</div>
                <ul>
                    <li className='mb-3'>Contact us</li>
                    <li className='mb-3'>Terms of use</li>
                    <li className='mb-3'>Privacy policy</li>
                    <li className='mb-3'>Cookies</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
