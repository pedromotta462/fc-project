"use client";

import React from "react";
import Image from 'next/image';

function Order({date, total, npedido, image, nameprod, arrive}) {
    return (
        <div className="bg-[#D9D9D9] w-[100%] p-[2px] mb-5 flex flex-col items-center justify-center border shadow-sm rounded-md">
            <div className="w-full flex items-center justify-between m-2 px-5">
                <div className="flex">
                    <div className="flex flex-col">
                        <p className="text-sm font-bold">
                            PEDIDO REALIZADO
                        </p>
                        <p className="text-sm">
                            {date}
                        </p>
                    </div>
                    <div className="flex flex-col ml-20">
                        <p className="text-sm font-bold">
                            TOTAL
                        </p>
                        <p className="text-sm">
                            R$ {total}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-sm"> PEDIDO Nº {npedido}</p>
                </div>
            </div>
            <div className="w-full h-[80%] flex items-center justify-between px-10 py-2 bg-[#f1f1f1] rounded-md ">
                <div className="flex flex-col items-left justify-start h-full">
                    <h1 className="text-[#74B740] font-bold text-lg">Em Trânsito</h1>
                    <p className="">
                        Seu pedido chega {arrive}
                    </p>
                    <div className="h-full w-full flex items-center justify-start">
                        <Image src={image} alt="Imagem do produto" className='h-[30%] w-[30%] rounded'>
                        </Image>
                        <p className="text-sm text-blue-500 w-[50%] cursor-pointer hover:text-blue-400">
                            {nameprod}
                        </p>
                    </div>
                </div>

                <div className="w-[20%] flex flex-col items-center justify-center">
                    <a className="cursor-pointer text-center bg-[#F2BD00] w-[100%] rounded-xl p-2 m-2 shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
                        Rastrear produto
                    </a>
                    <a className="cursor-pointer text-center rounded-xl w-[100%] p-2 m-2 shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                        Recibo
                    </a>
                    <a className="cursor-pointer text-center rounded-xl w-[100%] p-2 m-2 shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                        Detalhes do pedido
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Order;
