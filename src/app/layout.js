"use client";

import Link from 'next/link'
import {AiOutlineMenu} from "react-icons/ai"
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <header className="header">
          <div style={{padding: "30px"}}>
            <h2 className="title">JM Neurociências</h2>
          </div>
          <nav className='navBar'>
            <Link href="/posts">Postagens</Link>
            <Link href="/">Artigos</Link>
            <Link href="/post">Curiosidades</Link>
          </nav>
          <AiOutlineMenu id='icon'/>
        </header>
        {children}
      </body>
    </html>
  )
}
