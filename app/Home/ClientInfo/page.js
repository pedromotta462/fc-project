"use client";

import '../../styles/style.css'
import { AccessibleTabs2 } from '../../components/components'
import SearchData from '@/app/components/apifirebase';

const Home = () => {
  return (
    <div className='flex min-h-[82vh] w-[94%] flex-col items-left justify-start mt-16 bg-[#f1f1f1] text-black shadow-xl'>
      
      <SearchData/>
      <AccessibleTabs2 />
    </div>
  )
}

export default Home