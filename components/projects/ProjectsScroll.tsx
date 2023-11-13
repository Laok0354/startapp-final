"use client"

import LikeDislikeButton from "./LikeDislikeButton"
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
    } : {
    title : string | number,
    description : string
    members : number,
    joined : number,
}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
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
            width: "50%",
            height: "50%",
            overflow: "auto",
            background: "#0D1117",
            border: "1px solid #9F00FB",
            padding: "0px",
        },
      };

    return (
    <article>
        <section className="flex align-middle justify-center">
            <div className="py-4 px-4 bg-gray-800 w-40 h-60 rounded-xl flex flex-col justify-between border-2 border-primaryv">
                <div>  
                    <h1 onClick={openModal} className="text-[1rem] font-semibold font-raleway cursor-pointer">{title}</h1>
                    <p className="text-xs text-[#8F8F8F]">{description}</p>
                </div>
                <div className="">
                    <h3 className="text-sm mb-3 font-semibold text-primaryv">Members: <span className="text-white font-normal">{members}</span></h3>
                    <h3 className="text-sm mb-1 font-semibold text-primaryv">Joined: <span className="text-white font-normal">{joined}</span></h3>
                </div>
                <div className="">
                    <div className="flex flex-row justify-end mt-3">
                        <LikeDislikeButton
                            filled={constants.likeFilledPath}
                            notFilled={constants.likeNotFilledPath}
                            filledDislike={constants.dislikeFilledPath}
                            notFilledDislike={constants.dislikeNotFilledPath}
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
           />
        </Modal>
    </article>
    );
}

const ProjectsScroll = () => {
    let amountProjects = 24;
    let projectNumber = 0;
    let amountMembers = 9;
    return (
        <section className="overflow-hidden">
            <div className={amountProjects > 4 ? "max-h-[500px] overflow-y-auto grid grid-cols-4 gap-4 px-2" : "grid grid-cols-4"}>
                {[...Array(amountProjects)].map((_, index) => (
                    <div className="col-span-1">
                        <Project
                            key={index}
                            title={`Project ${projectNumber += 1}`}
                            description="Lorem ipsum dolor sit."
                            members={amountMembers}
                            joined={amountMembers - 1}
                        />
                    </div>
                ))}
            </div>
        </section>
        );
    };

export default ProjectsScroll;