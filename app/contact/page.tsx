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
          <div className="pb-52 text-[20px] pr-[450px]">
        <p><div className="pb-52 text-[20px] pr-[450px]">
        <p>T</p>
      </div></p>
      </div>
         </section>
        </main>
        </>
    )
}
