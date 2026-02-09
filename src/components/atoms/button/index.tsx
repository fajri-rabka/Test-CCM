import React from 'react';

interface IconButtonProps {
  label: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactElement;
  className?: string;
  disabled?: boolean;
}

const IconButton = ({ label, icon, onClick, className, disabled } : IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center hover:bg-blue-500 hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded-lg ${className || 'text-blue-500'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default IconButton;

