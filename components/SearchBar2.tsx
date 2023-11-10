import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function SearchBar2 () {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.querySelector("#search")! as HTMLInputElement;
        const inputValue = input.value;
        
        // fetch con el valor
}
    return (
      <div className="relative flex w-[300px] h-12 gap-4 items-center p-3 border-[1px] border-primaryv rounded-full hover:shadow-[0_0_0_1px] hover:shadow-primaryv active:shadow-primaryv/30 active:border-primaryv/30">
        <form onSubmit={handleSubmit} className="flex items-start gap-3">
            <button type="submit">
              <Image className= 'w-8 h-8 opacity-50 hover:opacity-100 active:opacity-30'
                src="/svg/search.svg"
                alt=""
                width = {200}
                height= {100}
              />
            </button>
            <input type="text" id="search" className="w-[300px] h-8 bg-transparent text-white outline-none" placeholder="Search" />
          </form>
        </div>
    );
}

export default SearchBar2;