"use client"

import LikeDislikeButton from "./LikeButton"
import OpenedProject from "./OpenedProject"
import constants from "./constants"
import { useState } from "react"
import Modal from "react-modal";

Modal.setAppElement("#__next");

const Project = (
    {
    title, 
    description,
    members,
    joined,
    stateText
    } : {
    title : string,
    description : string
    members : number,
    joined : number,
    stateText : string
}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [liked, setLiked] = useState(false);
    let stateTextColor;

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleLike = () => {
        if (!liked) {
          setLiked(true);
        } else {
          setLiked(false);
        }
      };

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
            width: "70%",
            height: "70%",
            overflow: "auto",
            background: "#0D1117",
            border: "1px solid #9F00FB",
            padding: "0px",
        },
      };
      

        if (stateText === "In Progress") {
            stateTextColor = " text-orange";
        } else if (stateText === "Finished") {
            stateTextColor = " text-green";
        } else if (stateText === "Abandoned") {
            stateTextColor = " text-red";
        } else {
            stateTextColor = " text-purple-500";
        }

    return (
    <article>
        <section className="flex align-middle justify-center">
            <div className="py-4 px-4 bg-gray-800 w-40 h-60 rounded-xl flex flex-col justify-between border-2 border-primaryv">
                <div>  
                    <h1 onClick={openModal} className="text-[1rem] font-semibold font-raleway cursor-pointer">{title}</h1>
                    <p className="text-xs text-[#8F8F8F]">{description}</p>
                </div>
                <div className="mt-2">
                    <h3 className="text-sm mb-1 font-semibold text-primaryv">Members: <span className="text-white font-normal">{members}</span></h3>
                    <h3 className="text-sm mb-1 font-semibold text-primaryv">Joined: <span className="text-white font-normal">{joined}</span></h3>
                    <h3 className={`text-sm font-bold mt-4 ${stateTextColor}`}>{stateText}</h3>
                </div>
                <div className="">
                    <div className="flex flex-row justify-end mt-3">
                        <LikeDislikeButton
                            filled={constants.likeFilledPath}
                            notFilled={constants.likeNotFilledPath}
                            liked={liked}
                            handleLike={handleLike}
                        />
                    </div>
                </div>
            </div>
        </section>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
           <OpenedProject
                title={title}
                description={description}
                members={members}
                joined={joined}
                closeModal={closeModal}
           />
        </Modal>
    </article>
    );
}

const ProjectsScroll = ({ 
    amountProjects,
    amountColumns,
    className
} : { 
    amountProjects : number 
    amountColumns : number
    className : string
}) => {
    const stateText = ["In Progress", "Finished", "Abandoned"]
    let projectNumber = 0;
    let amountMembers = 9;
    return (
        <section className="overflow-hidden w-full flex justify-center">
            <div className={amountProjects > 4 ?  `max-h-[500px] overflow-y-auto grid grid-cols-${amountColumns} gap-4 px-2 ${className}` : `grid grid-cols-${amountColumns} `}>
                {[...Array(amountProjects)].map((_, index) => (
                    <div className="col-span-1 w-fit">
                        <Project
                            key={index}
                            title={`Project ${projectNumber += 1}`}
                            description="Lorem ipsum dolor sit."
                            members={amountMembers}
                            joined={amountMembers - 1}
                            stateText={stateText[0]}
                        />
                    </div>
                ))}
            </div>
        </section>
        );
    };

export default ProjectsScroll;