"use client"

import Image from 'next/image';
import {useState} from 'react';
import Link from 'next/link';

const UserCard = ({
    userName,
    userBio
} : {
    userName: string,
    userBio: string
}) => {   
    return (
        <section className="flex flex-row justify-center items-center m-2">
            <Image
                src="/img/Default-Profile-Icon.jpg"
                alt="Profile Picture"
                width={30}
                height={30}
                className="rounded-lg mr-2"
            />
            <div className="flex justify-between w-48">
                <div className="flex flex-col">
                    <h4 className="font-raleway text-xs">{userName}</h4>
                    <h6 className="font-light font-raleway text-gray-50 text-[0.65rem]">{userBio}</h6>
                </div>
            </div>
        </section>
    );
}

const SuggestedUsers = () => {
    return(      
        <section className='bg-gray-800 px-10 py-3 rounded-xl justify-start mt-2 border-2 border-primaryv'>
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-semibold mb-4 mt-2 text-[1rem]">Suggested Users For You</h1>
                <p className='text-gray-50 text-[0.6rem] mb-4 mt-2 hover:underline cursor-pointer'><Link href={"/users"}> See All</Link></p>
            </div>
            <div className="flex flex-col flex-wrap mb-2">
                <UserCard
                    userName='Username'
                    userBio='User Bio'
                />
                <UserCard
                    userName='Username'
                    userBio='User Bio'
                />
                <UserCard
                    userName='Username'
                    userBio='User Bio'
                />
            </div>
        </section>
    );
}  

export default SuggestedUsers;