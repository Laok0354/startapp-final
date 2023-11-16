"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const UserCard = ({
  username,
  userBio
}: {
  username: string;
  userBio: string;
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
          <h4 className="font-raleway text-xs">{username}</h4>
          <h6 className="font-light font-raleway text-gray-50 text-[0.65rem]">
            {userBio}
          </h6>
        </div>
      </div>
    </section>
  );
};

const JoinedUsers = ({
  members,
  joined,
}: {
  members: number;
  joined: number;
}) => {
  const users = 8;
  return (
    <section className="px-6 py-3 rounded-xl justify-start mt-8 w-[20rem] bg-gray-700 border border-primaryv">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="font-semibold mt-2 text-[1rem]">Joined Users</h1>
          <div className="flex flex-row">
            <h3 className="flex flex-row text-xs font-semibold">
              Vacants:{" "}
              <p className="font-normal ml-1 text-white">{members - joined}</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center flex-wrap mb-2 overflow-hidden">
        <article className={`flex flex-col justify-center mt-4 ${users > 4 ? "max-h-[200px] overflow-y-auto px-2" : ""}`}>
          {[...Array(users)].map((_, index) => (
              <div className='flex justify-center'>
                  <UserCard
                      username="Username"
                      userBio="User Bio"
                    />
              </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default JoinedUsers;
