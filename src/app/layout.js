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
          <div className="title">
            <h2>JM Neurociências</h2>
          </div>
          <nav className="navBar">
            <Link href="/posts">Artigos</Link>
            <Link href="/curiosity">Curiosidades</Link>
          </nav>
          <AiOutlineMenu id="icon"/>
        </header>
        {children}
      </body>
    </html>
  )
}
