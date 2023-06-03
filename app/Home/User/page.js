import React from 'react'
import { Button, Navbar, Sidebar} from '../../components/components'

const User = () => {
  return (
    <main className="flex min-h-screen flex-col items-end justify-center bg-white">
        <Navbar link='/Home/User'/>
        <Sidebar link1='/' link2='/' link3='/' link4='/' />
        <div className='flex min-h-[82vh] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl'>
          UserPage
          <Button link='/' label='Voltar' />
        </div>
        
    </main>
  )
}

export default User