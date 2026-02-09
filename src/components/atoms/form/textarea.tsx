import React from 'react';  
interface TextareaProps {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    rows?: number;
    placeholder?: string;
    value?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, onChange, className, rows = 4, placeholder, value }) => {
    return (
        <div className={`flex flex-col mb-4 ${className}`}>
            <label className="mb-2 font-semibold">{label}</label>
            <textarea
                onChange={onChange}
                className="border rounded p-2"
                rows={rows}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Textarea;