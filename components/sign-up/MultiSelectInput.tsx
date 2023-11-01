import React from "react";
import Select from "react-select";
import customStyles from "./selectCustomStyles";

interface MultiSelectInputProps {
  name: string;
  options: { value: string; label: string }[];
  skillIds: number[];
  onSelectedOptionsChange: (skillIds: number[]) => void;
  isMulti: boolean;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  name,
  options,
  skillIds,
  onSelectedOptionsChange,
}) => {
  const handleSelectChange = (selectedValues: { value: number; label: string }[]) => {
    const selectedOptionValues = selectedValues.map((option) => option.value);
    onSelectedOptionsChange(selectedOptionValues);
  };

  return (
    <div className="w-96 h-12">
      <Select
        isMulti = {isMulti}
        options={options}
        name={name}
        value={selectedOptionValues}
        onChange={handleSelectChange}
        styles={customStyles}
      />
    </div>
  );
};

export default MultiSelectInput;
