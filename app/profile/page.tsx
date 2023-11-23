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
  const [inputDisabled, setInputDisabled] = useState(true);

  const toggleInput = () => {
    setInputDisabled(!inputDisabled);
  };
    return(
        <>
        <main className="bg-[#0A090B] h-screen w-screen overflow-y-auto">
        <section className="bg-[#0A090B] h-screen w-screen">
        <header><NavbarPrincipal page="Profile"/></header>
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
          </section>
            <div className="relative pt-6 justify-center w-40 h-32 pl-[400px]">
               <div className="relative flex flex-row pb-10 w-[800px] gap-10">
                <input className="w-[560px]  bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                type="text"
                placeholder="NAME"
                disabled ={inputDisabled}
                />
                <button className={` w-44 h-10 text-black font-bold rounded-[5px] hover:bg-white/0 hover:border-2 ${
        inputDisabled ? "bg-primaryv hover:text-primaryv hover:border-primaryv" : "bg-white hover:text-white hover:border-white "
      }`} 
                  onClick={toggleInput}> {inputDisabled ? 'Edit' : 'Save'}
                </button>
              </div>
              <div className="relative flex flex-row w-[790px] gap-10 shadow-lg">
                 <input className="w-[560px] bg-transparent text-white text-[20px] placeholder:text-white/70 placeholder:text-20 border-b-2 border-b-white/70"
                   type="text"
                   placeholder="PROFESSION"
                   disabled ={inputDisabled}
                />
                </div>
            </div>
                  <div className="flex flex-row w-full pt-32 pl-60">
                    <div className="relative flex flex-row gap-40 justify-center">
                    <div>
                      <h2 className="text-white/70 pb-2">Country</h2>
                      <input className="w-[200px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                        type="text"
                        placeholder="Region, Country"
                        disabled ={inputDisabled}
                      />
                    </div>
                    <div>
                      <h2 className="text-white/70 pb-2">Age</h2>
                      <input className="w-[200px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                        type="number"
                        placeholder="Number"
                        disabled ={inputDisabled}
                      />
                    </div>
                    <div>
                      <h2 className="text-white/70 pb-2">Email</h2>
                      <input className="w-[200px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                        type="email"
                        placeholder="youremail@email.com"
                        disabled ={inputDisabled}
                      />
                    </div>
                    </div>
                    </div>
                   <div className="relative px-48 pt-40">
                     <div className="relative flex flex-row pb-10 w-[1000px] gap-4">
                      <li className="text-xl text-white/70 w-40">Skills & Knowledge</li>
                       <input className="w-[780px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                         type="text"
                         disabled ={inputDisabled}
                         
                        />
                    </div>
                    <div className="relative flex flex-row pb-10 w-[1000px] gap-4">
                      <li className="text-xl text-white/70 w-40">About</li>
                       <input className="w-[790px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                         type="text"
                         disabled ={inputDisabled}
                         
                        />
                    </div>
                    <div className="relative flex flex-row pb-10 w-[1000px] gap-4">
                      <li className="text-xl text-white/70 w-40">Proyects</li>
                       <input className="w-[780px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                         type="text"
                         disabled ={inputDisabled}
                         
                        />
                    </div>
                  </div>
        </section>
        </main>
        </>
    )
}