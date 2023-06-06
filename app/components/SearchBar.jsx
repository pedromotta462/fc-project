import React from 'react'
import '../styles/style.css'

const SearchBar = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 py-2 px-4 m-7">
            <div className="relative shadow-xl">
                <input type="text" placeholder="Pesquise o CPF aqui" class="py-2 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent hover:ring-2 hover:ring-red-400 hover:border-transparent border border-red-500 w-72 sm:w-96" />
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-xl py-2 px-4 font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent">
                    Pesquisar
                </button>
            </div>
        </div>
    )
}

export default SearchBar