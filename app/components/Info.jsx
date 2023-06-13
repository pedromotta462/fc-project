import React from 'react'

function Info({businessName, cpfCnpj, endereco, email, telefone , dataDeInscricao}) {
  return (
    <div className='flex m-5'>
                  <div  className='flex flex-col'>
                    <div className='flex m-1'>
                        <p className='text-gray-600'>
                          Nome:
                        </p>
                        <p className='font-bold ml-4'>
                          {businessName}
                        </p>
                     </div>
                     <div className='flex m-1'>
                          <p className='text-gray-600'>
                            CPF:
                          </p>
                          <p className='font-bold ml-4'>
                            {cpfCnpj}
                          </p>
                        </div>

                        <div className='flex m-1'>
                          <p className='text-gray-600'>
                            Endereço:
                          </p>
                          <p className='font-bold ml-4'>
                            {endereco}
                          </p>
                        </div>
                  </div>
                  <div className='flex flex-col ml-20'>
                  <div className='flex m-1'>
                          <p className='text-gray-600'>
                            Email:
                          </p>
                          <p className='font-bold ml-4'>
                            {email}
                          </p>
                        </div>

                        <div className='flex m-1'>
                          <p className='text-gray-600'>
                            Telefone: 
                          </p>
                          <p className='font-bold ml-4'>
                            {telefone}
                          </p>
                        </div>

                        <div className='flex m-1'>
                          <p className='text-gray-600'>
                            Cliente desde:
                          </p>
                          <p className='font-bold ml-4'>
                          {new Date(dataDeInscricao.seconds * 1000).toLocaleDateString()}
                          </p>
                        </div>
                  </div>
                </div>
  )
}

export default Info