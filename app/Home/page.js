import React from 'react'
import { Input, Button } from '../components/components'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div>Home page</div>
        <Button link='/' label='Voltar' />
    </main>
  )
}

export default Home