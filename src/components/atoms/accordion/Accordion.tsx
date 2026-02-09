import React, { useState, ReactNode } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface AccordionProps {
  title?: string | ReactNode;
  children?: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <button
        className="w-full text-left font-semibold p-4 bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 flex items-center justify-between"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        {typeof title === 'string' ? <span>{title}</span> : title}
        {FaChevronDown({ className: `transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}` })}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-white border-t border-gray-200">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
