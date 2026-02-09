import React from 'react';

interface DateInputProps {
  label?: string;
  value?: 'dd/mm/yyyy' | 'mm/dd/yyyy';
  onChange?: (value: 'dd/mm/yyyy' | 'mm/dd/yyyy') => void;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <p className="text-sm font-semibold text-gray-700 mb-3">
          {label}
        </p>
      )}

      <div className="flex gap-4">
        <label className="flex items-center cursor-pointer group">
          <input
            type="radio"
            name="date-format"
            value="dd/mm/yyyy"
            checked={value === 'dd/mm/yyyy'}
            onChange={() => onChange?.('dd/mm/yyyy')}
            className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          <span className="ml-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-200">dd/mm/yyyy</span>
        </label>

        <label className="flex items-center cursor-pointer group">
          <input
            type="radio"
            name="date-format"
            value="mm/dd/yyyy"
            checked={value === 'mm/dd/yyyy'}
            onChange={() => onChange?.('mm/dd/yyyy')}
            className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          <span className="ml-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-200">mm/dd/yyyy</span>
        </label>
      </div>
    </div>
  );
};

export default DateInput;
