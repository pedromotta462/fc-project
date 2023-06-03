import React from 'react'
import { Input, Button, Navbar, Sidebar } from '../components/components'
import '../styles/style.css'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-end justify-center bg-white">
        
        <div className='flex min-h-[82vh] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl'>
          HomePage
          <Button link='/' label='Voltar' />          
        </div>
        
    </main>
  )
}

export default Home