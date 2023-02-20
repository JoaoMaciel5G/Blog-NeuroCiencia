"use client";

import Link from 'next/link'
import {AiOutlineMenu} from "react-icons/ai"
import { useRef } from 'react'
import './globals.css'

export default function RootLayout({ children }) {
  const dialogRef = useRef()

  function dialog(){
    dialogRef.current.showModal()
  }
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
            <AiOutlineMenu id='icon'/>
          </nav>
          <dialog ref={dialogRef}>
            <p>
              This is an open dialog window
            </p>
          </dialog>
        </header>
        {children}
      </body>
    </html>
  )
}
