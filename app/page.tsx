import Link from "next/link";
import Image from "next/image";
import NavBar1 from "../components/NavBar1";
import ScrollButton from "@/components/ScrollButton";


export default function Home () {
  return (
    <>
    <header>
      <NavBar1/>
    </header>

    <section className="pl-24 bg-gradient-to-br from-black from-50% to-primaryv w-full h-[full]">
      <h1 className="mt-[184px] mb-[27px] flex flex-col w-[838px]text-white text-[70px] justify-center font-semibold text-7xl font-red">Build your own team project</h1>
      <div>
      <p className="mb-[47px] font-red w-[829px] h-[80px] text-white text-[30px]">
        Connect ideas with people to create starups and unique entrepeneurships.
      </p>
      </div>

      <div className="flex itemx-center gap-2">
          <button className="text-black w-[170px] h-[55px] rounded-[35px] flex justify-center items-center bg-primaryv hover:bg-primaryv/70 active:bg-primaryv/30">
           <Link className="font-red text-[22px] text-center my-4 mx-6" href="/signup">Get Started</Link>
          </button>
          <ScrollButton/>
      </div>

       <Image className= 'w-[881px] h-[776px] ml-[350px]'
            src="/img/Imagen Vectorial.png"
            alt=""
            width = {200}
            height= {100}
          />
      
    </section>
    
    </>
  )
}
