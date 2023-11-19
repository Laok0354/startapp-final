'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarPrincipal from "@/components/NavbarPrincipal";
import SideNavbar from "@/components/SideNavbar";
import Notifications from "@/components/Notifications";


export default function Home () {
  const [isOpen, setIsOpen] = useState(true);
  const [collabRequests, setCollabRequests] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);


  const toggleNavbar = () => {
    console.log('toggleNavbar called');
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch("http://localhost:3000/userInteractions/getOwnCollaborationRequests", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setCollabRequests(data);
/*         setVisibleProjects(data.slice(0, 5)); */
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAccept = (id) => {
    fetch(`http://localhost:3000/acceptCollaborationRequest/${id}`, {
      method: 'POST',
      credentials: "include",
      body: JSON.stringify({ response: 'accepted' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to accept collaboration request');
        }
/*         const updatedProjects = collabRequests.filter((project) => project.id !== id);
        setVisibleProjects(updatedProjects.slice(0, 5)); */
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDecline = (id) => {
    fetch(`http://localhost:3000/rejectCollaborationRequest/${id}`, {
      method: 'POST',
      credentials: "include",
      body: JSON.stringify({ response: 'rejected' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to reject collaboration request');
        }
/*         const updatedProjects = collabRequests.filter((project) => project.id !== id);
        setVisibleProjects(updatedProjects.slice(0, 5)); */
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <>
      <header>
        <NavbarPrincipal />
      </header>

      <main className="bg-[#0A090B] h-screen w-screen">
        <button onClick={toggleNavbar}>{/* Your Image component */}</button>
        <SideNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} page="" />

        <section className="w-full h-60 bg-[#0A090B]">
          <div className="px-8">
            {/* Rendering Notifications component with visibleProjects */}
            {collabRequests.map((collabRequest) => (
              <Notifications
                key={collabRequest.id}
                id={collabRequest.id}
                userId={collabRequest.userId}
                name={collabRequest.userId}
                message={collabRequest.message}
                onAccept={() => handleAccept(collabRequest.id)}
                onDecline={() => handleDecline(collabRequest.id)}
                isAccepted={collabRequest.isAccepted}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}