"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SideNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="fixed top-0 bg-zinc-950/90 h-full w-[250px] drop-shadow-lg">
        <div className="flex py-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 text-white/70 hover:text-white active:text-white/30">
         <Image className= 'w-8 h-8'
         src="/svg/house.svg"
         alt=""
         width = {200}
         height= {100}
          />
        <button className=" text-[25px]">
         <Link href="/dashboard">Dashboard</Link>
         </button>
        </div>

        <div className="flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 text-white/70 hover:text-white active:text-white/30">
         <Image className= 'w-8 h-8'
         src="/svg/person.svg"
         alt=""
         width = {200}
         height= {100}
          />
         <button className=" text-[25px]">
         <Link href="/login">People</Link>
         </button>
         </div>

        <div className="flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 text-white/70 hover:text-white active:text-white/30">
         <Image className= 'w-8 h-8'
         src="/svg/idea.svg"
         alt=""
         width = {200}
         height= {100}
        />
        <button className=" text-[25px]">
         <Link href="/login">Projects</Link>
         </button>
        </div>

        <div className="flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 text-white/70 hover:text-white active:text-white/30">
         <Image className= 'w-8 h-8'
         src="/svg/folder.svg"
         alt=""
         width = {200}
         height= {100}
        />
        <button className=" text-[25px]">
         <Link href="/login">Your Projects</Link>
         </button>
        </div>

        <div className="flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 text-white/70 hover:text-white active:text-white/30">
         <Image className= 'w-8 h-8'
         src="/svg/team.svg"
         alt=""
         width = {200}
         height= {100}
        />
        <button className=" text-[25px]">
         <Link href="/login">Your Teams</Link>
         </button>
        </div>

        <div className="flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 text-white/70 hover:text-white active:text-white/30">
         <Image className= 'w-8 h-8'
         src="/svg/corazon.svg"
         alt=""
         width = {200}
         height= {100}
        />
        <button className=" text-[25px]">
         <Link href="/login">Liked</Link>
         </button>
        </div>
      </nav>
    );
};

export default SideNavbar;