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
            <section className="w-screen h-80 border-b-2 border-b-white shadow-lg bg-black">
              <div className="flex flex-col justify-start pt-36 pl-40 gap-4">
               <h1 className="w-40 text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-primaryv to-white to-80%">Profile</h1>
               <div>
                 <Image className= 'w-40 h-40'
                  src="/svg/sin-foto.svg"
                  alt=""
                  width = {200}
                  height= {100}
                 />
                </div>
              </div>
            </section>
              <section className="flex flex-col justify-center items-center gap-10 pb-10 bg-gradient-to-br from-primaryp from-50% to-primaryv">
                <form className="w-[780px] flex flex-col justify-center items-center gap-10 p-10 mt-20 rounded-xl bg-black shadow-2xl">
                  <div>
                    <h3 className="text-xl pb-2 font-semibold">NAME</h3>
                    <input
                     name="name"
                     title="name"
                     className={`w-[650px] h-10 pl-2 py-6 text-xl text-white rounded-xl focus:outline-6 focus:outline-primaryv transition-color duration-200 ${
                      inputDisabled ? "bg-transparent placeholder:text-white/0" : "bg-[#1C1C1C] hover:bg-[#363636] placeholder:text-white/70"}`}
                     placeholder="Enter your name"
                     disabled = {inputDisabled}
                    />
                  </div>
                  <div>
                   <h3 className="text-xl pb-2 font-semibold">EMAIL</h3>
                   <input
                    name="email"
                    title="email"
                    className={`w-[650px] h-10 pl-2 py-6 text-xl text-white rounded-xl focus:outline-6 focus:outline-primaryv transition-color duration-200 ${
                      inputDisabled ? "bg-transparent placeholder:text-white/0" : "bg-[#1C1C1C] hover:bg-[#363636] placeholder:text-white/70"}`}
                    placeholder="Enter your email"
                    disabled = {inputDisabled}
                   />
                  </div>
                  <div>
                   <li className="text-xl pb-2 font-semibold">Skills & Knowledge</li>
                   <textarea
                     className={`w-[650px] h-40 pl-2 py-6 text-xl rounded-xl text-white focus:outline-6 focus:outline-primaryv transition-color duration-200 ${
                      inputDisabled ? "bg-transparent placeholder:text-white/0" : "bg-[#1C1C1C] hover:bg-[#363636] placeholder:text-white/70"}`}
                     placeholder="Enter your skills and knowledge"
                     name = "skills"
                     title="skills"
                     disabled = {inputDisabled}
                   />
                  </div>
                  <div>
                   <li className="text-xl pb-2 font-semibold">About</li>
                   <textarea
                     className={`w-[650px] h-40 pl-2 py-6 text-xl rounded-xl text-white focus:outline-6 focus:outline-primaryv transition-color duration-200 ${
                      inputDisabled ? "bg-transparent placeholder:text-white/0" : "bg-[#1C1C1C] hover:bg-[#363636] placeholder:text-white/70"}`}
                     placeholder="Important things about you"
                     name = "about"
                     title="about"
                     disabled = {inputDisabled}
                   />
                  </div>
                  <div>
                   <li className="text-xl pb-2 font-semibold">Projects</li>
                   <textarea
                     className={`w-[650px] h-40 pl-2 py-6 text-xl rounded-xl text-white focus:outline-6 focus:outline-primaryv transition-color duration-200 ${
                      inputDisabled ? "bg-transparent placeholder:text-white/0" : "bg-[#1C1C1C] hover:bg-[#363636] placeholder:text-white/70"}`}
                     placeholder="Enter the projects you are in"
                     name = "projects"
                     title="projects"
                     disabled = {inputDisabled}
                   />
                  </div>
                </form>
                <div>
                   <button className={`w-96 h-12 font-bold rounded-[5px] bg-white hover:text-white hover:bg-white/0 hover:border-2 shadow-xl ${
                     inputDisabled ? "text-primaryv hover:border-primaryv" : "text-primaryp hover:border-primaryp"
                     }`} 
                     onClick={toggleInput}>{inputDisabled ? 'Edit Profile' : 'Save Changes'}
                   </button>
                  </div> 
              </section>
          </section>
        </main>
        </>
        )
}