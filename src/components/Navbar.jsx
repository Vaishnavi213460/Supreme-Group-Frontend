"use client";

import Image from 'next/image'; 

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px- md:px-16">
      <header className="flex items-center">
        <div className="md:ml-23">
          <Image src="/logo.svg" alt="Supreme brand logo" height ={35} width={180} className="h-14 w-auto"/>    
        </div>
      </header>
    </nav>
  )
}
