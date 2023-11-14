import Link from "next/link";
import Image from "next/image";

function Footer () {
    return(
    <footer className="bg-black h-full w-full relative flex flex-row shadow-2xl">
       <ul>
          <li className="pl-10 pt-10 pb-5 ml-2 text-white/70 hover:text-white active:text-white/30"><Link href="/contact">Contact & Terms</Link></li>
          <li className="pl-10 pb-5 ml-2 text-white/70 hover:text-white active:text-white/30"><Link href="/about">About</Link></li>
          <li className="pl-10 pb-5 ml-2 text-white/70 hover:text-white active:text-white/30"><Link href="/projects">Projects</Link></li>
          <li className="pl-10 pb-10 ml-2 text-white/70 hover:text-white active:text-white/30"><Link href="/">Home</Link></li>
       </ul>

      <div className="relative flex w-full justify-end">
        <div className="relative flex left-44">
         <Image className= 'w-[40px] h-[40px] mt-8'
            src="/img/StartAppmini.png"
            alt=""
            width = {200}
            height= {100}
          />
         <h4 className="top-2 pt-10 pl-2">Ⓡ 2023 StarApp, Inc.</h4>
        </div>
        <div className="relative pt-48 pr-10">
          <Link href="/">
            <Image className= 'w-[30px] h-[30px]'
            src="/img/gmail.png"
            alt=""
            width = {200}
            height= {100}
          /></Link>
        </div>
        <div className="relative pt-48 pr-10">
          <Link href="/">
            <Image className= 'w-[30px] h-[30px]'
            src="/img/Ig.png"
            alt=""
            width = {200}
            height= {100}
          /></Link>
        </div>
        <div className="relative pt-48 pr-14">
          <Link href="/">
            <Image className= 'w-[30px] h-[30px]'
            src="/img/x.png"
            alt=""
            width = {200}
            height= {100}
          /></Link>
        </div>
       </div>
     </footer>
    )
}

export default Footer;