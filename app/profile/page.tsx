'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarPrincipal from "@/components/NavbarPrincipal";
import SideNavbar from "@/components/SideNavbar";

export default function Home (){
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    console.log('toggleNavbar called');
    setIsOpen(!isOpen);
    };
    return(
        <>
        <main className="">
        <body className="bg-[#0A090B] h-screen w-screen">
        <header><NavbarPrincipal/></header>
          <button onClick={toggleNavbar}>
           <Image className= 'absolute top-3 left-24 w-14 h-14 opacity-50 hover:opacity-100 active:opacity-30'
            src="/svg/menu.svg"
            alt=""
            width = {200}
            height= {100}
           />
          </button>
          <SideNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} page=""/>
          
          <section className="w-screen h-80 border-b-2 border-b-white shadow-lg bg-gradient-to-r from-primaryv from-30% to-primaryp">
           <div className=" pt-60 pl-40">
            <Image className= 'w-40 h-40'
              src="/svg/sin-foto.svg"
              alt=""
              width = {200}
              height= {100}
            />
           </div>
           <button className="absolute top-80 left-14 pl-[990px]">
            <Image className= 'w-10 h-10'
              src="/svg/edit.svg"
              alt=""
              width = {200}
              height= {100}
            />
           </button>
          </section>
            <div className="relative pt-40 h-20">
              <input className="bg-transparent border-0"></input>
              <input></input>
            </div>
        </body>
        </main>
        </>
    )
}