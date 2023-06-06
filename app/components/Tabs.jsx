import React from 'react'

function Tabs({titulo, pendentes, novos, atendimento, parados, venceram, venceramHoje, venceramSemana, abertos}) {
  return (
    <div className="w-full sm:w-1/2 md:w-[40%] xl:w-[30%] m-4 p-4 shadow-xl border text-black rounded-lg">
        <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                className="w-6 h-6 mr-2"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
            </svg>
            <h2 className="text-2sm font-bold mb-2">{titulo}</h2>
        </div>
        <div className="w-[100%] h-2 bg-blue-500"></div>
        <div className='flex justify-between items-center'>
            <div className='m-2 flex-col'>
                <p className='font-bold m-1'>{pendentes} Pendentes</p>
                <p className='m-1'>{novos} Novos</p>
                <p className='m-1'>{atendimento} Em atendimento</p>
                <p className='m-1'>{parados} Parados</p>
            </div>
            <div className='flex flex-col items-center justify-center font-bold p-2 h-[25%] w-[35%] border shadow-xl'>
                <p>{abertos}</p>
                <p>Abertos Hoje</p>
            </div>
        </div>
        <div className="w-[100%] h-2 bg-blue-500"></div>
            <div className='m-2'>
                <h3 className='font-bold m-1'>Venceram</h3>
                <div className='flex items-center m-1'> <div className="w-2 h-2 bg-red-500 mr-2"></div> {venceram} Venceram</div>
                <div className=' flex items-center m-1'> <div className="w-2 h-2 bg-yellow-500 mr-2"></div> {venceramHoje} Vencem hoje</div>
                <div className=' flex items-center m-1'> <div className="w-2 h-2 bg-green-500 mr-2"></div> {venceramSemana} Vencem essa semana</div>
            </div>
    </div>
  )
}

export default Tabs