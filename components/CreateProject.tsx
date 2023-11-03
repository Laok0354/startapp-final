"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import OptionsMenu from "./OptionsMenu";
import { ProjectForm } from "./Forms";
import MembersIndicator from "./MemberIndicator";

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
      <button className="bg-blue-500 text-white p-2" onClick={openModal}>
        Create Your Own Project
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <section className="divide-y-[0.01px] divide-[#B5B2B2]">
          <div className="p-2">
            <h2 className="">Select a Template</h2>
            <button className="bg-red-500 text-white p-2  " onClick={closeModal}>
              Close
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
