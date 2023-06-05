import { Inter } from 'next/font/google'
import { Input, Button, Navbar, Sidebar } from '../components/components'
import '../styles/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ferreira Costa Integration',
  description: 'Login page for Ferreira Costa software integration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
        <body className={inter.className}>
            <Navbar link='/Home/User'/>
            <Sidebar link1='/Home' link2='/Home' link3='/Home/User' link4='/Home/Configuration' link5='/Home' />
            {children}
        </body>
    </html>
  )
}
