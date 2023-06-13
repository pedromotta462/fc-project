import React from 'react'
import { Button, Navbar, Sidebar} from '../../components/components'
import "../../styles/style.css";
const Notices = () => {
  return (
    <div className='flex min-h-[82vh] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl'>
        <main className='cont'>
            
            <div className='topInfo'>
                <div className='imgBox'>
                    <h1 className='mainTitle'> <strong>Mural de avisos</strong></h1>
                    <div className='boxRex'>
                        <span className='lineRed'> </span>
                    </div>
                </div>
            </div>
            on building
        </main>
    
    </div>
  )
}

export default Notices