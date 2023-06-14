"use client";

import '../../styles/style.css'

import SearchData from '@/app/components/SearchData';

const Home = () => {
  return (
    <div className='flex min-h-[82vh] w-[94%] flex-col items-left justify-start mt-16 bg-[#f1f1f1] text-black shadow-xl'>
      
      <SearchData/>
      
    </div>
  )
}

export default Home