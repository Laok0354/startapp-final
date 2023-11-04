"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import OptionsMenu from "./OptionsMenu";
import { ProjectForm } from "./Forms";
import MembersIndicator from "./MemberIndicator";
import Image from "next/image"

Modal.setAppElement("#__next");

function CreateProjectModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [projectName, setProjectName] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
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
      width: "80%",
      height: "80%",
      overflow: "auto",
      background: "#272932",
      border: "1px solid #B5B2B2",
      padding: "0px",
    },
  };

  const handleCreateProject = () => {
    closeModal();
  };

  return (
    <div>
      <div>
        <button className="flex justify-center items-center bg-gray-700 text-white p-[3.2rem] rounded-xl mt-8" onClick={openModal}>
          <div className="flex flex-col justify-center items-center align-middle">
            <h1 className="text-xl font-semibold">Create Your Own Project</h1>
            <Image
              src="/svg/create-project.svg"
              alt="Profile Picture"
              width={75}
              height={75}
              className="rounded-lg mt-4"
            />
          </div>
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <section className="divide-y-[0.01px] divide-[#B5B2B2]">
          <div className="p-2 flex flex-row justify-between items-center">
            <h2 className="">Select a Template</h2>
            <button className="bg-red-500 text-white p-2" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </button>
          </div>
          <div>
            <ProjectForm handleCreateProject={handleCreateProject} />
          </div>
        </section>
      </Modal>
    </div>
  );
}

export default CreateProjectModal;
