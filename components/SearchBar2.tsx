import Link from "next/link";
import Image from "next/image";

function SearchBar2 () {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.querySelector("#search")! as HTMLInputElement;
        const inputValue = input.value;
        
        // fetch con el valor
}
    return (
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
    );
}

export default SearchBar2;