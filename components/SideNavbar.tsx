"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface SideNavbarProps {
  isOpen: boolean;
  toggleNavbar: () => void;
  page : String
}
const SideNavbar: React.FC<SideNavbarProps> = ({ isOpen, toggleNavbar, page} : SideNavbarProps) => {
    return (
      <nav 
        className={`fixed top-20 bg-black h-full w-[250px] border-r-2 border-[#1C1C1C] drop shadow-lg ${isOpen ? 'block' : 'hidden'}`}>

          <div className={"flex py-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 hover:text-white active:text-white/30 " + (page == "Dashboard" ? "text-white" : "text-white/70")}>
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

          <div className={"flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 hover:text-white active:text-white/30 " + (page == "People" ? "text-white" : "text-white/70")}>
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

          <div className={"flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 hover:text-white active:text-white/30 " + (page == "Projects" ? "text-white" : "text-white/70")}>
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

          <div className={"flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 hover:text-white active:text-white/30 " + (page == "Your Projects" ? "text-white" : "text-white/70")}>
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

          <div className={"flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 hover:text-white active:text-white/30 " + (page == "Your Teams" ? "text-white" : "text-white/70")}>
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

          <div className={"flex pb-10 pl-7 gap-4 opacity-50 hover:opacity-100 active:opacity-30 hover:text-white active:text-white/30 " + (page == "Liked" ? "text-white" : "text-white/70")}>
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