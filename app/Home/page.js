import React from 'react'
import { SearchBar, Tabs, Tabs2 } from '../components/components'
import '../styles/style.css'

const Home = () => {
  return (
    
        <div className='flex h-[100%] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl'>
          <SearchBar />
          <div class="flex flex-wrap items-center justify-center h-[100%] w-[100%]">
            <Tabs 
              titulo='Meus Tickets' 
              pendentes={0} 
              novos={0} 
              atendimento={0} 
              parados={0}
              venceram={0}
              venceramHoje={0}
              venceramSemana={0}
              abertos={0}
            />
            <Tabs 
              titulo='Tickets da minha equipe' 
              pendentes={103} 
              novos={0} 
              atendimento={8} 
              parados={95}
              venceram={40}
              venceramHoje={20}
              venceramSemana={20}
              abertos={0}
            />
            <Tabs 
              titulo='Tickets de todos os agentes' 
              pendentes={517} 
              novos={136} 
              atendimento={100} 
              parados={281}
              venceram={244}
              venceramHoje={57}
              venceramSemana={57}
              abertos={52}
            />
            <Tabs2 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              }
              titulo='Mural de Avisos'
              color={'orange'}
              content={
                <p className='font-bold'>
                  Nenhum aviso para ser exibido
                </p>
              }
              btn={'VER AVISOS'}
              link='/Home'
            />
            <Tabs2 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              }
              titulo='Mensagens'
              color={'yellow'}
              content={
                <p className='font-bold'>
                  Você tem 3 mensagens
                </p>
              }
              btn={'CAIXA DE ENTRADA'}
              link='/Home'
            />
            <Tabs2 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              }
              titulo='Chat'
              color={'green'}
              content={
                <p>
                  0 chats aguardando atendimento <br></br>
                  0 chats em atendimento
                </p>
              }
              btn={'VER CONVERSAS'}
              link='/Home'
            />
          </div>
        </div>
    
  )
}

export default Home