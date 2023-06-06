import { Inter } from 'next/font/google'
import { Input, Button, Navbar, Sidebar } from '../components/components'
import '../styles/style.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
        <body className={inter.className}>
        <main className="h-[100%] flex flex-col items-end justify-center bg-white">
            <Navbar link='/Home/User'/>
            <Sidebar link1='/Home' link2='/Home/ClientInfo' link3='/Home/User' link4='/Home/Configuration' link5='/Home' />
            {children}
          </main>
        </body>
    </html>
  )
}
