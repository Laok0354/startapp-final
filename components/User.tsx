"use client";
import Image from 'next/image'
import {useState} from 'react'
import Link from 'next/link'
import Modal from "react-modal";

Modal.setAppElement("#__unfollow");


function UnFollowModal() {
    
    const [isFollowing, setIsFollowing] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [unfollow, setUnfollow] = useState(false);
    
      const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };

      const closeUnfollow = () => {
        setUnfollow(true);
        if(unfollow === true){
            setIsFollowing(!isFollowing);
        }
        setModalIsOpen(false);
    }

        const handleFollow = () => {
            if(isFollowing === false){
                setIsFollowing(!isFollowing);
            }
            if (isFollowing === true){
                openModal();
            }
        }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 999,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      width: "30%",
      height: "30%",
      overflow: "auto",
      background: "#272932",
      border: "1px solid #B5B2B2",
      padding: "0px",
    },
  };

  return (
    <div>
        <button onClick = {handleFollow} className={`flex items-center justify-center px-4 w-24 rounded-xl py-3 ${isFollowing ? "bg-gray-600" : "bg-primaryv"}`}> {isFollowing ? "Following" : "Follow"} </button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <div className='flex flex-col items-center justify-center h-full'> 
                <h3 className='text-2xl'>Are you sure you want to unfollow this user?</h3>
                <div className='flex items-center justify-center'>
                    <button onClick={closeModal} className='bg-primaryv text-white p-3 m-6 rounded-lg text-xl w-24'>Cancel</button>
                    <button onClick={closeUnfollow} className='bg-primaryv text-white p-3 m-6 rounded-lg text-xl w-28'>Unfollow</button>
                </div>
            
            </div>
        </Modal>
    </div>
  )
}

const User = (
    {
        imageDir,
        userName,
        userUrl,
        projectUrl,
        project,
    } : {
        imageDir: string
        userName: string
        userUrl: string
        projectUrl: string
        project: string
    }) => {

        
    return(
        <section className='flex flex-row items-center mb-4 mt-4 w-217 '>
            <div>
            <Link href="../../app/profile">
                <Image
                    src={imageDir}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    className='rounded-full cursor-pointer'
                    />  
                </Link>
            </div>
            <div className='flex flex-row justify-around items-center w-full'>
                <a className='hover:underline hover:text-[#BE71EB] transition-all' href={userUrl}>{userName}</a>
                <div className='flex items-center justify-center flex-col'>   
                    <h2 className='opacity-70 font-semibold text-xl'>Popular Project</h2>
                    <a className='hover:underline hover:text-[#BE71EB] transition-all' href={projectUrl}>{project}</a>
                </div>
                <UnFollowModal/>                
            </div>
        </section>
    )       
}

export default User;