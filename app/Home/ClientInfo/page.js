"use client";

import '../../styles/style.css'
import { AccessibleTabs2 } from '../../components/components'

const Home = () => {
  return (
    <div className='flex min-h-[82vh] w-[94%] flex-col items-left justify-start mt-16 bg-[#f1f1f1] text-black shadow-xl'>
      <div className='flex m-5 items-center' >
        <h1 className='text-gray-600 text-2xl'>
          Informações do Cliente 
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
          className="w-6 h-6 ml-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      </div>
      <div className='flex m-5'>
        <div className='flex flex-col'>

          <div className='flex m-1'>
            <p className='text-gray-600'>
              Nome:
            </p>
            <p className='font-bold ml-4'>
              Fulano de Castro
            </p>
          </div>

          <div className='flex m-1'>
            <p className='text-gray-600'>
              CPF:
            </p>
            <p className='font-bold ml-4'>
              000.000.000-00
            </p>
          </div>

          <div className='flex m-1'>
            <p className='text-gray-600'>
              Endereço:
            </p>
            <p className='font-bold ml-4'>
              Rua do príncipe, 242
            </p>
          </div>
        </div>


        <div className='flex flex-col ml-20'>
          <div className='flex m-1'>
            <p className='text-gray-600'>
              Email:
            </p>
            <p className='font-bold ml-4'>
              FulanoCastro@gmail.com
            </p>
          </div>

          <div className='flex m-1'>
            <p className='text-gray-600'>
              Telefone: 
            </p>
            <p className='font-bold ml-4'>
              (81) 98271-8732
            </p>
          </div>

          <div className='flex m-1'>
            <p className='text-gray-600'>
              Cliente desde:
            </p>
            <p className='font-bold ml-4'>
              20/02/2006
            </p>
          </div>

        </div>
      </div>


      <AccessibleTabs2 />
    </div>
  )
}

export default Home