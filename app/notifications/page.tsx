import Link from "next/link";
import Image from "next/image";
import NavbarPrincipal from "@/components/NavbarPrincipal";



export default function Home () {
  return (
    <>
    <header>
      <NavbarPrincipal/>
      </header>
      
      <main className="bg-[#0A090B] h-screen w-screen">
      
        <Image className= 'absolute top-3  left-24 w-14 h-14 opacity-50 hover:opacity-100 active:opacity-30'
            src="/svg/menu.svg"
            alt=""
            width = {200}
            height= {100}
          />
        
          <nav className="fixed top-20 bg-black h-full w-[250px] border-r-2 border-[#1C1C1C] drop shadow-lg">
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
        <section>

        </section>
      </main>
    </>
  )
}