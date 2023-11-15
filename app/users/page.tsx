import User from '../../components/User'
import SideNavbar from '../../components/SideBar'
import SearchBar from '@/components/SearchBar2';

export default function Users () {  
    let users = 24;
    const user = {
        imageDir: "/img/Default-Profile-Icon.jpg",
        userName: "John Doe",   
        userUrl: "/users/johndoe",
        projectUrl: "/projects/johndoe",
        project: "Project 1"
    }

    return (
        <main className='h-screen'>
            <header>
                <SideNavbar 
                    page={"Users"}
                />
            </header>
            <section className='flex items-center h-screen flex-col ml-64 '>
                <div className='flex justify-center mt-2'>
                    <SearchBar className='bg-gray-800 w-24 hover:transition-all duration-1000'/> 
                </div>
                <article className={`flex flex-col justify-items-end w-4/6 divide-y-2 divide-primaryv mt-8 mb-8 ${users > 8 ? "max-h-[500px] overflow-y-auto px-2" : ""}`}>
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