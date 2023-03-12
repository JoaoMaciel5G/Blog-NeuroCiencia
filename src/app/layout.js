"use client";

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../styles/globals.css";
import { useRef } from "react";

export default function RootLayout({ children }) {

  const refSideBar = useRef();

  function openSideBar() {
    refSideBar.current.style.width = "250px"
  }

  function closeSideBar(){
    refSideBar.current.style.width = "0px"
  }
  return (
    <html lang="pt-br">
      <head />
      <body>
        <header className="header">
          <div className="title">
            <h2>JM Neurociências</h2>
          </div>
          <nav className="navBar">
            <Link href="/">Página principal</Link>
            <Link href="/posts">Artigos</Link>
          </nav>
          <AiOutlineMenu className="icon" onClick={openSideBar} />
        </header>
        <div className="sidenav" ref={refSideBar}>
          <AiOutlineClose className="closeSideNav" onClick={closeSideBar}/>
          <Link onClick={closeSideBar} href="/">Página principal</Link>
          <Link onClick={closeSideBar} href="/posts">Artigos</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
