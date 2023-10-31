import React from "react";
import Select from "react-select";
import customStyles from "./selectCustomStyles";

interface MultiSelectInputProps {
  name: string;
  options: { value: string; label: string }[];
  selectedOptions: string | string[];
  onSelectedOptionsChange: (selectedOptions: string[]) => void; 
  isMulti: boolean;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  name,
  options,
  selectedOptions,
  onSelectedOptionsChange,
  isMulti
}) => {
  // const handleSelectChange = (
  //   selectedValues: { value: string; label: string }[]
  // ) => {
  //   const selectedOptionValues = selectedValues.map((option) => option.value);
  //   onSelectedOptionsChange(selectedOptionValues);
  // };

  const handleSelectChange = (
    selectedValues: { value: string; label: string }[] | string
  ) => {
    if (Array.isArray(selectedValues)) {
      const selectedOptionValues = selectedValues.map((option) =>
        option.value ? option.value : option
      );
      onSelectedOptionsChange(selectedOptionValues);
    } else if (typeof selectedValues === 'string') {
      // Handle the case when selectedValues is a string
      onSelectedOptionsChange([selectedValues]);
    }
  };
  

  const selectedOptionValues = selectedOptions.map((option) => {
    return options.find((o) => o.value === option);
  });

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
