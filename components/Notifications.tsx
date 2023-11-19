'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Notifications (){

  return (
    <div className="flex justify-between items-center gap-10 pl-20 pr-20 mt-10 w-[1300px] h-20 bg-black border-2 border-[#1C1C1C] shadow-lg">
    <Image className= 'w-10 h-10'
     src="/img/sin-foto.png"
     alt=""
     width = {200}
     height= {100}
    />
   <h3 className="text-[18px] font-semibold w-full">Rose Jones wants to join your team!</h3>
   
   <div className="flex itemx-center gap-2">
     <button className="w-[110px] h-[35px] flex justify-center items-center text-[18px] text-center text-black font-semibold rounded-[5px] bg-white hover:bg-white/0 hover:text-white hover:border-2 hover:border-white">
       <Link href="/signup">Accept</Link>
     </button>
     <button className="w-[110px] h-[35px] flex justify-center items-center text-[18px] text-center text-white font-semibold hover:underline">
      <Link href="/signup">Decline</Link>
     </button>
    </div>
    <h6 className="text-white/70">yesteday</h6>
 </div>
  );
}

export default Notifications;