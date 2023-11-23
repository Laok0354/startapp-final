"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavbarPrincipal from "@/components/NavbarPrincipal";
import SideNavbar from "@/components/SideNavbar";
import Notifications from "@/components/Notifications";

interface NProps {
  estate: String;
}
export default function Home({ estate }: NProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  const toggleNavbar = () => {
    console.log("toggleNavbar called");
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    console.log(activeTab);
  };

  const amountNotifications = 12;

  return (
    <>
      <header>
        <NavbarPrincipal page="Notifications" />
      </header>

      <main className="bg-[#0A090B] h-screen w-screen overflow-hidden">
        <button onClick={toggleNavbar}>
          <Image
            className="absolute top-3 left-24 w-14 h-14 opacity-50 hover:opacity-100 active:opacity-30"
            src="/svg/menu.svg"
            alt=""
            width={200}
            height={100}
          />
        </button>
        <SideNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} page="" />

        <section className="w-screen mt-[80px] h-60 border-b-2 border-b-[#1C1C1C] shadow-lg">
          <div className="w-screen flex gap-96">
            <h1 className=" ml-[87px] mt-12 text-transparent text-[50px] font-red bg-clip-text bg-gradient-to-r from-primaryv to-white to-90% static">
              Notifications
            </h1>
          </div>

          <ul className="flex flex-row list-none gap-[40px] text-[20px] items-center mt-16">
            <li
              className={`hover:text-white active:text-white/30 ml-[95px] px-[5px] ${
                activeTab === "All" ? " text-white " : " text-white/70"
              }`}
            >
              <a href="#" onClick={() => handleTabClick("All")}>
                All
              </a>
            </li>
            <li
              className={`hover:text-white active:text-white/30 ${
                activeTab === "Unread" ? " text-white " : " text-white/70"
              }`}
            >
              <a href="#" onClick={() => handleTabClick("Unread")}>
                Unread
              </a>
            </li>
            <li
              className={`hover:text-white active:text-white/30 ${
                activeTab === "Accepted" ? " text-white " : " text-white/70"
              }`}
            >
              <a href="#" onClick={() => handleTabClick("Accepted")}>
                Accepted
              </a>
            </li>
            <li
              className={`hover:text-white active:text-white/30 ${
                activeTab === "Declined" ? " text-white " : " text-white/70"
              }`}
            >
              <a href="#" onClick={() => handleTabClick("Declined")}>
                Declined
              </a>
            </li>
            <div
              className={`absolute mt-7 h-1 bg-primaryv rounded-xl transition-transform transform ${activeTab === 'All' ? 'w-[2.5%] translate-x-[6rem]' : activeTab === 'Unread' ? 'w-[5.5%] translate-x-[10.2rem]' : activeTab === 'Accepted' ? 'w-[7%] translate-x-[16.6rem]' : activeTab === 'Declined' ? 'w-[6.5%] translate-x-[24.3rem]' : 'w-[6%]'} ${activeTab === 'All' ? 'translate-x-0' : activeTab === 'Unread' ? 'translate-x-[95px]' : activeTab === 'Declined' ? 'translate-x-[190px]' : activeTab === 'Accepted' ? 'translate-x-[285px]' : 'translate-x-0'}`}
            />
          </ul>
        </section>
        <section className="w-full h-60 bg-[#0A090B] ml-24">
          {activeTab === "All" && (
            <div
              className={
                amountNotifications > 2
                  ? "max-h-[340px] overflow-y-auto px-8"
                  : ""
              }
            >
              {[...Array(amountNotifications)].map((_, index) => (
                <div className="col-span-1">
                  <Notifications
                    nameUser={"Jane Austen"}
                    nameProject={"StartApp"}
                  ></Notifications>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Unread" && <h3>Unread</h3>}
          {activeTab === "Accepted" && <h3>Accepted</h3>}
          {activeTab === "Declined" && <h3>Declined</h3>}
        </section>
      </main>
    </>
  );
}
