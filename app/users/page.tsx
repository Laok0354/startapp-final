"use client"

import User from '../../components/User'
import SideNavbar from '../../components/SideBar'
import NavbarPrincipal from '@/components/NavbarPrincipal-SearchBar';
import { useState } from 'react';

export default async function Users() {
  const [isOpen, setIsOpen] = useState(false);
  
  const response = await fetch(`http://localhost:3000/user/getAllUsers`, {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  const handleOpenNavbar = () => {
      setIsOpen(!isOpen);
    }


  return (
    <main>
          <header>
              <NavbarPrincipal/>
              <SideNavbar 
                  page={"Users"}
                  isOpen={isOpen}
                  handleOpenNavbar={handleOpenNavbar}
              />
          </header>
          <section className={`flex items-center h-screen flex-col mt-16 transition-all duration-700 w-screen ${isOpen ? "ml-24" : ""}`}>
          <article className={`flex flex-col justify-center w-4/6 divide-y-2 divide-primaryv mt-8 mb-8 ${data.length > 8 ? "max-h-[550px] overflow-y-auto px-2" : ""}`}>
          {data.map((user) => (
            <div className="flex justify-center" key={user.id}>
              <User
                id={user.id}
                imageDir={"/img/Default-Profile-Icon.jpg"}
                userName={user.userName}
                userUrl={`/profile/${user.id}`}
                project={user.projects.length > 0 ? user.projects[0].id : "No projects"}
                projectUrl={user.projects.length > 0 ? `project/${user.projects[0].id}` : null}
                />
                </div>
            ))}
        </article>
    </section>
</main>
)}
