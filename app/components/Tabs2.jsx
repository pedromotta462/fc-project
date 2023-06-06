import { Content } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

function Tabs2({icon, titulo, color, content, btn, link}) {
  return (
    <div className="w-full sm:w-1/2 md:w-[40%] xl:w-[30%] m-4 p-4 shadow-xl border text-black rounded-lg">
        <div className='flex'>
            {icon}
            <h2 className="text-2sm font-bold mb-2 ml-2">{titulo}</h2>
        </div>
        <div className={`w-[100%] h-2 bg-${color}-500`}></div>
        <div className='m-5'>
            {content}
        </div>
        <Link href={link} className={`p-2 rounded-xl bg-${color}-500 border hover:text-${color}-400`}>
            {btn}
        </Link>
    </div>
  )
}

export default Tabs2