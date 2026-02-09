import React, { useState, ReactNode } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface AccordionProps {
    title: string;
    children: ReactNode;
}
const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <button
                className="w-full text-left font-semibold p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 flex items-center justify-between"
                onClick={toggleAccordion}
            >
                <span>{title}</span>
                {FaChevronDown({ className: "transform transition-transform duration-300", style: { transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" } })}
            </button>
            <div
                className={`overflow-auto transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="py-5 px-4 bg-white border-t border-gray-200">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;