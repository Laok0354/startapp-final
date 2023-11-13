import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Contact () {
    return(
        <>
        <header>
        <Navbar page="Contact & Terms"/>
        </header>

        <main>
         <section className="pl-24 bg-gradient-to-br from-black from-50% to-primaryv w-full h-[full]">
          <div>
            <h2 className="text-[25px] pt-52 font-semibold font-red">Contact</h2>
          </div>

          <div className="pb-10 text-[20px] pr-[450px]">
           <p>Contact us to let us know what you like about us or if you have any issues using the website. 
We will be pleased to respond to you by email or on any of our social media channels:</p>
          </div>

        <div className="relative flex w-full justify-start">
          <div className="relative pt-10 pr-10">
          <Link href="/">
            <Image className= 'w-[70px] h-[70px]'
            src="/img/gmail.png"
            alt=""
            width = {200}
            height= {100}
          /></Link>
          </div>
          <div className="relative pt-10 pr-10">
          <Link href="/">
            <Image className= 'w-[70px] h-[70px]'
            src="/img/x.png"
            alt=""
            width = {200}
            height= {100}
          /></Link>
          </div>
          <div className="relative pt-10 pr-10">
          <Link href="/">
            <Image className= 'w-[70px] h-[70px]'
            src="/img/Ig.png"
            alt=""
            width = {200}
            height= {100}
          /></Link>
          </div>
        </div>

        <div>
            <h2 className="text-[25px] pt-52 font-semibold font-red">Terms</h2>
          </div>
        <div className="pb-10 text-[20px] pr-[450px]">
           <p>Contact us to let us know what you like about us or if you have any issues using the website. 
We will be pleased to respond to you by email or on any of our social media channels:</p>
          </div>
         </section>
         <Footer/>
        </main>
        </>
    )
}
