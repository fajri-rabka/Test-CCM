import React from 'react';

interface InputProps {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  onBlur,
  type = 'text',
  className,
  placeholder,
  value,
  name,
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
