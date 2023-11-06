'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar1() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`border-b-2 fixed justify-evenly h-[80px] w-full flex flex-row items-center transition duration-300 ease-in-out ${
        scrolled ? "bg-zinc-950/90 border-b-primaryv" : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex flex-row items-center">
          <Image className= 'w-[140px] h-[50px]'
            src="/img/StartApp-Logo-lg.png"
            alt=""
            width = {200}
            height= {100}
          />
        </div>

        <ul className = "flex flex-row list-none gap-[40px] text-[20px] items-center">
          <li className="ml-2 text-white/100 hover:text-white active:text-white/30">Projects</li>
          <li className="ml-2 text-white/70 hover:text-white active:text-white/30">People</li>
          <li className="ml-2 text-white/70 hover:text-white active:text-white/30">About</li>
          <Image className= 'w-11 h-11 opacity-50 hover:opacity-100 active:opacity-30'
            src="/svg/search.svg"
            alt=""
            width = {200}
            height= {100}
          />
        </ul>

        <div className="flex flex-row list-none gap-[40px] text-[20px] items-center">
        <Image className= 'w-[3px] h-[46px]'
            src="/img/palito.png"
            alt=""
            width = {200}
            height= {100}
        />
              
          <button className=" text-primaryv/70 py-[10px] px-[30px] text-[20px] rounded-[17px] justify-center items-center border border-primaryv hover:shadow-[0_0_0_1px] hover:shadow-primaryv font-red hover:text-primaryv active:text-primaryv/30 active:shadow-primaryv/30 active:border-primaryv/30">
           <Link href="/signup">Sign Up</Link>
          </button>

          <button className="text-white/70 hover:text-white active:text-white/30 border border-transparent hover:border-white active:border-white/30 py-[10px] px-[30px] text-[20px] rounded-[17px] justify-center items-center font-red">
           <Link href="/login">Log In</Link>
          </button>
        
        </div>  
      </nav>
  );
}

export default Navbar1;
