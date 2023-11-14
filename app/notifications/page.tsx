'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarPrincipal from "@/components/NavbarPrincipal";
import SideNavbar from "@/components/SideNavbar";
import Notifications from "@/components/Notifications";


export default function Home () {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    console.log('toggleNavbar called');
    setIsOpen(!isOpen);
  };
  return (
    <>
    <header>
      <NavbarPrincipal/>
      </header>
      
      <main className="bg-[#0A090B] h-screen w-screen">
       <button onClick={toggleNavbar}>
        <Image className= 'absolute top-3 left-24 w-14 h-14 opacity-50 hover:opacity-100 active:opacity-30'
          src="/svg/menu.svg"
          alt=""
          width = {200}
          height= {100}
        />
        </button>
        <SideNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} page=""/>
        
        <section className="w-screen mt-[80px] h-60 border-b-2 border-b-[#1C1C1C] shadow-lg">
          <div className="w-screen flex gap-96">
            <h1 className=" ml-[87px] mt-12 text-transparent text-[50px] font-red bg-clip-text bg-gradient-to-r from-primaryv to-white to-90% static">Notifications</h1>
          </div>
          
          <ul className="flex flex-row list-none gap-[40px] text-[20px] items-center mt-16">
            <li className="ml-[95px] px-[5px]">All</li>
            <li className="text-white/70 hover:text-white active:text-white/30">Unread</li>
            <li className="text-white/70 hover:text-white active:text-white/30">Acepted</li>
            <li className="text-white/70 hover:text-white active:text-white/30">Declined</li>
          </ul>
        </section>
        <section className="w-full h-60 bg-[#0A090B]"> 
           <div className="px-8">
             <Notifications/>
           {/* <div className=" relative flex justify-between items-center gap-10 pl-20 pr-20 mt-10 w-[1300px] h-20 bg-black border-2 border-[#1C1C1C] shadow-lg">
              <Image className= 'w-10 h-10'
               src="/img/sin-foto.png"
               alt=""
               width = {200}
               height= {100}
              />
            
             <h3 className="text-[18px] font-semibold w-full">Helen Curry has edited file "The Memories".</h3>
             <h6 className="text-white/70">yesteday</h6>
           </div> */}
          </div>
        </section>
      </main>
    </>
  )
}