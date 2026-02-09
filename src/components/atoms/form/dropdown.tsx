import React from 'react';

interface DropdownProps {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value = '',
  onChange,
  className,
  placeholder = '– Please select one –',
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className ?? ''}`}>
      {label && <label className="mb-2 font-semibold">{label}</label>}

      <select
        value={value}
        onChange={onChange}
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
