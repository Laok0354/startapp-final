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
      <p className="mb-[47px] w-[829px] h-[80px] text-white text-[30px]">
        Connect ideas with people to create starups and unique entrepeneurships.
      </p>
      </div>

      <div className="flex itemx-center gap-2">
          <button className="text-black w-[170px] h-[55px] rounded-[35px] flex justify-center items-center bg-primaryv hover:bg-primaryv/70 active:bg-primaryv/30">
           <Link className="text-[22px] text-center my-4 mx-6" href="/signup">Get Started</Link>
          </button>
          <ScrollButton/>
      </div>

      <div className="py-52 text-[20px]">
        <p className="pb-10">Startapp is a website to connect people with projects and startups and vice versa. It aims to be a platform to share your experience and skills.</p>
        <p>Startapp is a website to connect people with projects and startups and vice versa. It aims to be a platform to share your experience and skills.</p>
      </div>
    </section>
    
    </>
  )
}
