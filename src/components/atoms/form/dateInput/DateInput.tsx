interface DateInputProps {
  label?: string;
  name: string; // ⬅️ WAJIB
  value: 'dd/mm/yyyy' | 'mm/dd/yyyy';
  onChange: (value: 'dd/mm/yyyy' | 'mm/dd/yyyy') => void;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  name,
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
            name={name}
            value="dd/mm/yyyy"
            checked={value === 'dd/mm/yyyy'}
            onChange={() => onChange('dd/mm/yyyy')}
          />
          <span className="ml-2">dd/mm/yyyy</span>
        </label>

        <label className="flex items-center cursor-pointer group">
          <input
            type="radio"
            name={name}
            value="mm/dd/yyyy"
            checked={value === 'mm/dd/yyyy'}
            onChange={() => onChange('mm/dd/yyyy')}
          />
          <span className="ml-2">mm/dd/yyyy</span>
        </label>
      </div>
    </div>
  );
};

export default DateInput;
