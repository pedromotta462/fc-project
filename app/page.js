import Image from 'next/image';
import Link from 'next/link';
import BG from '../public/images/index';
import './styles/style.css';
import { Input, Button } from './components/components'

export default function Initial() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f1f1f1]">
      <div className='flex items-center justify-center w-[80%] bg-[#f5f5f5] rounded shadow-xl'>
        
        <Image src={BG.bgFC} alt="Imagem da ferreira costa" className='w-[50%] rounded'>
        </Image>
        <form className='flex flex-col items-center justify-center w-[50%] h-full'>
          <h1 className="text-black font-inter font-normal text-3xl leading-16">
            Bem vindo ao <br /> Sistema da{' '}
            <span className="text-red-600">Ferreira Costa</span>
          </h1>
          <h3 className='text-[#000000] text-opacity-50 mb-[10%] font-inter font-normal text-.5xl'>
            Por favor, insira seus dados.
          </h3>
          
          <Input type="text" label="Usuário" />;
          <Input type="password" label="Senha" />;

          <Button link='/Home' label='Logar' />
        </form>
      </div>
    </main>
  )
}
