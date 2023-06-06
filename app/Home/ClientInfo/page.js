"use client";

import '../../styles/style.css'
import GetUsers from "@/app/components/GetUsers";

const Home = () => {
  return (
    <div className='flex min-h-[82vh] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl'>
      ClientPage
      <GetUsers></GetUsers>
    </div>
  )
}

export default Home