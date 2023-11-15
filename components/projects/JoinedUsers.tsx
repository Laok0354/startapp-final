"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const UserCard = () => {
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
          <h4 className="font-raleway text-xs">Username</h4>
          <h6 className="font-light font-raleway text-gray-50 text-[0.65rem]">
            User Bio
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
        <p className="text-gray-50 text-[0.6rem] mb-2 mt-2 hover:underline cursor-pointer">
          <Link href={"/users"}> See All</Link>
        </p>
      </div>
      <div className="flex flex-col flex-wrap mb-2">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </section>
  );
};

export default JoinedUsers;
