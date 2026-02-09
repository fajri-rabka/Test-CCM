import React from 'react';

interface DropdownProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition-all duration-200"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            disabled={option === '-Please Select-'}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
