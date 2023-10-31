"use client"

import React, { useState } from 'react';

interface OptionsMenuProps {
    options: string[]; 
    onSelectOption: (selectedOption: string) => void; 
    handleOptionClick: Function;
    selectedOption: string;
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({ options, onSelectOption, handleOptionClick, selectedOption }) => { 
  return (
    <div className="p-4 rounded">
      <p className="mb-2">Selecciona una opción:</p>
      <ul>
        {options.map((option) => (
        <div
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`relative cursor-pointer p-2 flex flex-row`}
        >
            {selectedOption === option && (
                <div className="bg-purple-500 w-1 rounded-lg mr-2"></div>   
            )}
            <li
                className={`w-full p-1 ${selectedOption === option ? 'bg-[#54545f] text-white rounded' : ''}`}
            >
                {option}
            </li>
        </div>
        ))}
    </ul>
    </div>
  );
};

export default OptionsMenu
