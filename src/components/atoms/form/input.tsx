import React from 'react';
interface InputProps {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    className?: string;
    placeholder?: string;
    value?: string;
    name?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, onChange, type = "text", className, placeholder, value, name, onBlur }) => {
    return (
        <div className={`flex flex-col mb-4 ${className}`}> 
            <label className="mb-2 font-semibold">{label}</label>
            <input
            name={name}
            onBlur={onBlur}
                type={type}
                value={value}
                onChange={onChange}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;