import React from 'react';

interface ButtonProps {
  label: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactElement;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center hover:bg-blue-500 hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded-lg transition-all duration-200 text-sm ${
        className || 'text-blue-500'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
