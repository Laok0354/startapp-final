import User from '../../components/User'

export default function Users () {  
    let users = 20;
    let user = {
        imageDir: "/img/Default-Profile-Icon.jpg",
        userName: "John Doe",   
        userUrl: "/users/johndoe",
        projectUrl: "/projects/johndoe",
        project: "Project 1"
    }



    return (
        <section id='__unfollow' className='flex justify-center '>
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
    )}  