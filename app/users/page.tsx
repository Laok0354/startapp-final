"use client";

import User from "../../components/User";
import SideNavbar from "../../components/SideBar";
import NavbarPrincipal from "@/components/Navbar-SearchBar";
import { useState } from "react";

export default function Users() {
  let users = 24;
  const [isOpen, setIsOpen] = useState(false);
  const user = {
    imageDir: "/img/Default-Profile-Icon.jpg",
    userName: "John Doe",
    userUrl: "/users/johndoe",
    projectUrl: "/projects/johndoe",
    project: "Project 1",
  };

  const handleOpenNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="h-screen overflow-hidden">
      <header>
        <NavbarPrincipal />
        <SideNavbar
          page={"Users"}
          isOpen={isOpen}
          handleOpenNavbar={handleOpenNavbar}
        />
      </header>
      <section
        className={`flex items-center h-screen flex-col mt-16 transition-all duration-700 w-screen ${
          isOpen ? "ml-24" : ""
        }`}
      >
        <article
          className={`flex flex-col justify-center w-4/6 divide-y-2 divide-primaryv mt-8 mb-8 ${
            users > 8 ? "max-h-[550px] overflow-y-auto px-2" : ""
          }`}
        >
          {[...Array(users)].map((_, index) => (
            <div className="flex justify-center">
              <User
                key={index}
                imageDir={user.imageDir}
                userName={user.userName}
                userUrl={user.userUrl}
                projectUrl={user.projectUrl}
                project={user.project}
              />
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}
