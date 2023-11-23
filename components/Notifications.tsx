'use client'
import React, { useState, useEffect } from "react";
import moment from 'moment';
import Link from "next/link";
import Image from "next/image";

interface NotificationsProps{
  nameUser:String;
  nameProject:String;
 }

function Notifications ({nameUser, nameProject}:NotificationsProps){
   const [accepted, setAccepted] = useState(false);
   const [declined, setDeclined] = useState(false);

   const handleAccept=() =>{
    setAccepted(true);
    setDeclined(false);
   };

   const handleDeclined = () => {
    setDeclined(true);
    setAccepted(false);
   };

   const [notificationDate, setNotificationDate] = useState(new Date());

    useEffect(()=> {
      setNotificationDate(new Date());
    },
    []);

   const formattedDate = moment(notificationDate).fromNow();

   let message;

   if(accepted){
    message = (
      <h3 className="text-[18px] font-semibold w-full">{nameUser} has joined your team for project "{nameProject}"!</h3>
    );
   }
   else if (declined){
    message = (
      <h3 className="text-[18px] font-semibold w-full">You have declined {nameUser}'s request to join project "{nameProject}".</h3>
    );
   }
   else{
    message = (
      <h3 className="text-[18px] font-semibold w-full">{nameUser} wants to join your team for project "{nameProject}"!</h3>
    );
   }

  return (
    <div className="flex justify-between items-center gap-10 pl-20 pr-20 mt-10 w-[1300px] h-20 bg-black border-2 border-[#1C1C1C] shadow-lg">
    <Image className= 'w-10 h-10'
     src="/svg/sin-foto.svg"
     alt=""
     width = {200}
     height= {100}
    />
  
   {message}
   {!accepted && !declined && (
     <div className="flex itemx-center gap-2">
     <button onClick={handleAccept} className="w-[110px] h-[35px] flex justify-center items-center text-[18px] text-center text-black font-semibold rounded-[5px] bg-white hover:bg-white/0 hover:text-white hover:border-2 hover:border-white">Accept</button>
     <button onClick={handleDeclined} className="w-[110px] h-[35px] flex justify-center items-center text-[18px] text-center text-white font-semibold hover:underline">Decline</button>
    </div>
    )}
    <h6 className="text-white/70 w-56 static">{formattedDate}</h6>
 </div>
  );
}

export default Notifications;