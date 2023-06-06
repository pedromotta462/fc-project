import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import "../styles/style.css";
import imgs from '../../public/images/index';

const Navbar = ({link}) => {
  return (
    <div className='z-10 flex items-center justify-between bg-[#f1f1f1] w-[100%] md:h-[12%] xl:h-[7%] fixed top-0 p-[.5%] shadow-lg'>
        <span></span>
        <Image src={imgs.logoFC} alt="Logo da ferreira costa" className='h-[100%] w-[12%] rounded'>
        </Image>
        <div className='navbar'>
            <Link 
                className="text-center" href={link}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    className="w-14 h-14 text-black transition duration-300 transform hover:scale-110 hover:text-[#F2BD00]"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </Link>
        </div>
    </div>
  )
}

export default Navbar


