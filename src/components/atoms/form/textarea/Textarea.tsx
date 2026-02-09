import React from 'react';

interface TextareaProps {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
  value?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  onChange,
  className,
  rows = 4,
  value,
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <textarea
        onChange={onChange}
        value={value}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
