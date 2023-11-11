import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/NavBar";

export default function Home () {
    return (
      <>
      <header>
        <Navbar page="About"/>
      </header>
      <main>
        <h1>Hello World</h1>

      </main>
      </>
    )
}