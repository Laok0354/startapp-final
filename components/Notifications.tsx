'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Notifications({
  id,
  userId,
  name,
  message,
  onAccept,
  onDecline,
  isAccepted,
} : {
  id: number
  userId: number
  name: string
  message: string
  onAccept: () => void;
  onDecline: () => void;
  isAccepted: boolean;
}
) {
  return (
    <div className="flex justify-between items-center gap-10 pl-20 pr-20 mt-10 w-[1300px] h-20 bg-black border-2 border-[#1C1C1C] shadow-lg">
      <div className="col-span-1">
        <h3>{name}</h3>
        <p>{'"' + message + '"'}</p>
      </div>

      <form>
        <button
          type="button"
          className="w-[110px] h-[35px] flex justify-center items-center text-[18px] text-center text-black font-semibold rounded-[5px] bg-white hover:bg-white/0 hover:text-white hover:border-2 hover:border-white"
          onClick={onAccept}
          disabled={isAccepted}
        >
          {isAccepted ? "Accepted" : "Accept"}
        </button>
        <button
          type="button"
          className="w-[110px] h-[35px] flex justify-center items-center text-[18px] text-center text-white font-semibold hover:underline"
          onClick={onDecline}
          disabled={isAccepted}
        >
          Decline
        </button>
      </form>
      <h6>{isAccepted ? "Accepted" : "Pending"}</h6>
    </div>
  );
}

export default Notifications;