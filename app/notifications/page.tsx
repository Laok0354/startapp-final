'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarPrincipal from "@/components/NavbarPrincipal";
import SideNavbar from "@/components/SideNavbar";
import Notifications from "@/components/Notifications";


export default function Home () {
  const [isOpen, setIsOpen] = useState(true);
  const [notifsResults, setNotifsResults] = useState([]);

  const [activeTab, setActiveTab] = useState('All');

  const toggleNavbar = () => {
    console.log('toggleNavbar called');
    setIsOpen(!isOpen);
  };

  useEffect(() => {
      fetch(`http://localhost:3000/userInteractions/getCollaborationRequests`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        },
        credentials: "include"
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setNotifsResults(data);
        })
        .catch((error) => {
          console.log(`Error fetching notifications: ${error}`);
        });
      }, []);

  const handleTabClick = (tab : string) => {
    setActiveTab(tab);
  }


  return (
    <>
    <header>
      <NavbarPrincipal/>
    </header>
      
      <main className="bg-[#0A090B] h-screen w-screen overflow-hidden">
       <button onClick={toggleNavbar}>
        <Image className= 'absolute top-3 left-24 w-14 h-14 opacity-50 hover:opacity-100 active:opacity-30'
          src="/svg/menu.svg"
          alt=""
          width = {200}
          height= {100}
        />
        </button>
        <SideNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} page=""/>
        
        <section className="w-screen mt-[80px] h-60 border-b-2 border-b-[#1C1C1C] shadow-lg">
          <div className="w-screen flex gap-96">
            <h1 className=" ml-[87px] mt-12 text-transparent text-[50px] font-red bg-clip-text bg-gradient-to-r from-primaryv to-white to-90% static">Notifications</h1>
          </div>
          
          <ul className="flex flex-row list-none gap-[40px] text-[20px] items-center mt-16">
            <li className="ml-[95px] px-[5px]" ><a href="#" onClick={() => handleTabClick('All')}>All</a></li>
            <li className="text-white/70 hover:text-white active:text-white/30"><a href="#" onClick={() => handleTabClick('Unread')}>Unread</a></li>
            <li className="text-white/70 hover:text-white active:text-white/30"><a href="#" onClick={() => handleTabClick('Accepted')}>Accepted</a></li>
            <li className="text-white/70 hover:text-white active:text-white/30"><a href="#" onClick={() => handleTabClick('Declined')}>Declined</a></li>
          </ul>
        </section>
        <section className="w-full h-60 bg-[#0A090B]"> 
          {activeTab === "All" && (
              <div className={notifsResults.length > 3 ? "max-h-[500px] overflow-y-auto gap-4 px-8" : ""}>
                {notifsResults.map((notifData) => (
                  <div className="col-span-1" key={notifData.id}>
                    <Notifications
                      notifId={notifData.id}
                      nameUser={notifData.user.userName}
                      nameProject={notifData.project.name}
                      notifMessage={notifData.message}
                      notifStatus={notifData.status}
                    />
                  </div>
                ))}
            </div>
            )}
            {activeTab === "Unread" && (
              <div className={notifsResults.length > 3 ? "max-h-[500px] overflow-y-auto gap-4 px-8" : ""}>
                {notifsResults.filter((notifData) => notifData.status === "pending").map((notifData) => (
                  <div className="col-span-1" key={notifData.id}>
                    <Notifications
                      notifId={notifData.id}
                      nameUser={notifData.user.userName}
                      nameProject={notifData.project.name}
                      notifMessage={notifData.message}
                      notifStatus={notifData.status}
                    />
                  </div>
                ))}
            </div>
            )}
            {activeTab === "Accepted" && (
              <div className={notifsResults.length > 3 ? "max-h-[500px] overflow-y-auto gap-4 px-8" : ""}>
              {notifsResults.filter((notifData) => notifData.status === "accepted").map((notifData) => (
                <div className="col-span-1" key={notifData.id}>
                  <Notifications
                    notifId={notifData.id}
                    nameUser={notifData.user.userName}
                    nameProject={notifData.project.name}
                    notifMessage={notifData.message}
                    notifStatus={notifData.status}
                  />
                </div>
              ))}
          </div>
            )}
            {activeTab === "Declined" && (
              <div className={notifsResults.length > 3 ? "max-h-[500px] overflow-y-auto gap-4 px-8" : ""}>
              {notifsResults.filter((notifData) => notifData.status === "rejected").map((notifData) => (
                <div className="col-span-1" key={notifData.id}>
                  <Notifications
                    notifId={notifData.id}
                    nameUser={notifData.user.userName}
                    nameProject={notifData.project.name}
                    notifMessage={notifData.message}
                    notifStatus={notifData.status}
                  />
                </div>
              ))}
          </div>
            )}
        </section>
      </main>
    </>
  )
}