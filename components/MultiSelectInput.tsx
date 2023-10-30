import React from 'react';
import Select from 'react-select';
import customStyles from './selectCustomStyles';

interface MultiSelectInputProps {
  name: string;
  options: { value: string; label: string }[];
  skillIds: number[];
  onSelectedOptionsChange: (skillIds: number[]) => void;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  name,
  options,
  skillIds,
  onSelectedOptionsChange,
}) => {
  const handleSelectChange = (selectedValues: { value: string; label: string }[]) => {
    const selectedOptionValues = selectedValues.map((option) => option.value);
    onSelectedOptionsChange(selectedOptionValues);
  };

  const selectedOptionValues = skillIds.map((option) => {
    return options.find((o) => o.value === option);
  });

  return (
    <div className="w-96 h-12">
      <Select
        isMulti
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
