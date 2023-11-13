import User from '../../components/User'
import SideNavbar from '../../components/SideNavbar'
import SearchBar from '@/components/SearchBar2';

export default function Users () {  
    let users = 14  ;
    let user = {
        imageDir: "/img/Default-Profile-Icon.jpg",
        userName: "John Doe",   
        userUrl: "/users/johndoe",
        projectUrl: "/projects/johndoe",
        project: "Project 1"
    }



    return (
        <main>
            <header>
                <div className='flex justify-center mt-2'>
                    <SearchBar className='bg-gray-800 w-24 hover:transition-all duration-1000'/> 
                </div>
                <SideNavbar />
            </header>
            <section id='__unfollow' className='flex justify-center h-screen items-center'>
                <article className='divide-y w-217 mt-8 mb-8'>
                    {[...Array(users)].map((_, index) => (
                        <div className='flex justify-center'>
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
    )}  