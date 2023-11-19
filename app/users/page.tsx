"use client"

import User from '../../components/User'
import SideNavbar from '../../components/SideBar'
import NavbarPrincipal from '@/components/NavbarPrincipal-SearchBarUsers';
import { useState, useEffect } from 'react';

export default function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results: []) => {
    setSearchResults(results);
  };


  useEffect(() => {
    if (!initialDataLoaded && searchResults === undefined) {
      fetch(`http://localhost:3000/user/getAllUsers`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setUsersData(data);
          setInitialDataLoaded(true);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else if (searchResults !== undefined) {
      setUsersData(searchResults);
    }
  }, [searchResults, initialDataLoaded]);

  const handleOpenNavbar = () => {
      setIsOpen(!isOpen);
    }


  return (
    <main>
          <header>
              <NavbarPrincipal onSearchResults={handleSearchResults}/>
              <SideNavbar 
                  page={"Users"}
                  isOpen={isOpen}
                  handleOpenNavbar={handleOpenNavbar}
              />
          </header>
          <section className={`flex items-center h-screen flex-col mt-16 transition-all duration-700 w-screen ${isOpen ? "ml-24" : ""}`}>
          <article className={`flex flex-col justify-center w-4/6 divide-y-2 divide-primaryv mt-8 mb-8 ${usersData.length > 8 ? "max-h-[550px] overflow-y-auto px-2" : ""}`}>
          {usersData.map((user) => (
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
