import Link from "next/link";

export default function Home () {
  return (
    <article id="">
      <section className="pl-24 bg-gradient-to-br from-black from-50% to-primaryv w-full h-[1232px]" id="__next">
        <nav></nav>
        <h1 className="mt-[184px] flex flex-col relative w-[838px] top-0 left-0 text-white text-[70px] tracking-[0] justify-center shrink-0 font-semibold text-7xl not-italic leading-normal [font-family:'Red_Hat_Display-SemiBold',_Helvetica]">Build your own team project</h1>
        <div>
        <p className="relative w-[829px] h-[80px] top-0 left-0 [font-family:'Red_Hat_Display-Regular',_Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal]">
          Conect ideas with people to create starups and unique entrepeneurship.
        </p>
        </div>
        <div>
          {
            <button className="relative w-[185px] h-[67px] rounded-[17px] border-0 border-none flex justify-center items-center bg-primaryv hover:bg-[#3B005E] font-semibold">
            <Link className="text-black relative h-[30px] top-0 left-0 [font-family:'Inter-Regular',_Helvetica] font-normal text-[25px] text-center tracking-[0] leading-[normal] whitespace-nowrap my-4 mx-6" href="/signup">Get Started</Link>
            </button>
          }
        </div>
      </section>
    </article>
  )
}
