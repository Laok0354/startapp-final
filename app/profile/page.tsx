"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarPrincipal from "@/components/NavbarPrincipal";
import SideNavbar from "@/components/SideNavbar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <main className="bg-[#0A090B] h-screen w-screen overflow-y-auto overflow-x-hidden">
        <header>
          <NavbarPrincipal page="Profile" />
          <button onClick={toggleNavbar}>
            <Image
              className="absolute top-3 left-24 w-14 h-14 opacity-50 hover:opacity-100 active:opacity-30"
              src="/svg/menu.svg"
              alt=""
              width={200}
              height={100}
            />
          </button>
        </header>
        <SideNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} page="" />

        <section
          className={`bg-[#0A090B] h-screen w-screen transition-all duration-700`}
        >
          <section className="w-screen h-80 border-b-2 border-b-white shadow-lg bg-gradient-to-r from-primaryv from-30% to-primaryp ">
            <div className=" pt-60 pl-40">
              <Image
                className="w-40 h-40"
                src="/svg/sin-foto.svg"
                alt=""
                width={200}
                height={100}
              />
            </div>
          </section>
          <div className="relative pt-6 justify-center w-40 h-32 pl-[400px]">
            <div className="relative flex flex-row pb-10 w-[1000px] gap-10">
              <input
                className="w-[560px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                type="text"
                placeholder="NAME"
              />
              <button className="w-44 h-10 bg-primaryv text-black font-bold rounded-[5px] hover:bg-white/0 hover:text-primaryv hover:border-2 hover:border-primaryv">
                <Link href="#">Edit</Link>
              </button>
            </div>
            <div className="relative flex flex-row w-[1000px] gap-10 shadow-lg">
              <input
                className="w-[560px] bg-transparent text-white text-[20px] placeholder:text-white/70 placeholder:text-20 border-b-2 border-b-white/70"
                type="text"
                placeholder="PROFESSION"
              />
              <button className="w-44 h-10 bg-primaryv text-black font-bold rounded-[5px] hover:bg-white/0 hover:text-primaryv hover:border-2 hover:border-primaryv">
                <Link href="#">Edit</Link>
              </button>
            </div>
          </div>
          <div className="flex flex-row w-screen pt-32 pl-44">
            <div>
              <h2 className="text-white/70 pb-2">Country</h2>
              <input
                className="w-[200px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                type="text"
                placeholder="Region, Country"
              />
              <button className="w-[200px] h-10 mt-4 bg-primaryv text-black font-bold rounded-[5px] hover:bg-white/0 hover:text-primaryv hover:border-2 hover:border-primaryv">
                <Link href="#">Edit</Link>
              </button>
            </div>
            <div>
              <h2 className="text-white/70 pb-2">Age</h2>
              <input
                className="w-[200px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                type="number"
                placeholder="Number"
              />
              <button className="w-[200px] h-10 mt-4 bg-primaryv text-black font-bold rounded-[5px] hover:bg-white/0 hover:text-primaryv hover:border-2 hover:border-primaryv">
                <Link href="#">Edit</Link>
              </button>
            </div>
            <div>
              <h2 className="text-white/70 pb-2">Email</h2>
              <input
                className="w-[200px] bg-transparent text-white text-[20px] placeholder:text-white/70 border-b-2 border-b-white/70"
                type="email"
                placeholder="youremail@email.com"
              />
              <button className="w-[200px] h-10 mt-4 bg-primaryv text-black font-bold rounded-[5px] hover:bg-white/0 hover:text-primaryv hover:border-2 hover:border-primaryv mb-4">
                <Link href="#">Edit</Link>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
