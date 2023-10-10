"use client"

import React, { useState } from 'react';
import Modal from 'react-modal';
import OptionsMenu from './OptionsMenu';

Modal.setAppElement('#__next');

function CreateProjectModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [projectName, setProjectName] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 999,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      width: '80%',
      height: '80%',
      overflow: 'auto',
      background: '#272932',
      border: '1px solid #B5B2B2',
      padding: "0px"
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
          <div className='p-2'>
            <h2>Select a Template</h2>
            <button className="bg-red-500 text-white p-2" onClick={closeModal}>
              Close
            </button>
          </div>
          <section className='grid grid-cols-3 auto-rows-auto divide-x divide-[#B5B2B2]'>
            <div className='col-span-1'>
              <OptionsMenu
                options={['Template 1', 'Template 2', 'Template 3']}
                onSelectOption={setSelectedTemplate}
                handleOptionClick={handleOptionClick}
                selectedOption={selectedOption}
              />
            </div>
            <div className='p-4'>
              <div>
                <h1>{selectedOption !== "" ? `New ${selectedOption}` : ""}</h1>
              </div>
              <div className="my-4">
                <label>Nombre del proyecto:</label>
                <input
                  type="text"
                  id="projectName"
                  className="border p-2 w-full"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
            </div>
          </section>

          <button className="bg-green-500 text-white w-full p-2" onClick={handleCreateProject}>
            Crear Proyecto
          </button>
        </section>
      </Modal>
    </div>
  );
}

export default CreateProjectModal;
