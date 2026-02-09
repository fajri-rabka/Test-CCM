import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <div
            className={`
                fixed inset-0 z-50 flex items-center justify-center
                transition-all duration-300 ease-out overflow-auto
                ${isOpen
                    ? 'bg-black/50 backdrop-blur-sm opacity-100'
                    : 'pointer-events-none bg-black/0 opacity-0'}
            `}
            onClick={onClose}
        >
            <div
                className={`
                    bg-white rounded-xl shadow-2xl w-11/12 max-w-md p-6 relative
                    transform transition-all duration-300 ease-out
                    ${isOpen
                        ? 'translate-y-0 scale-100 opacity-100'
                        : 'translate-y-6 scale-95 opacity-0'}
                `}
                onClick={(e) => e.stopPropagation()}
            >

                {children}
            </div>
        </div>
    );
};

export default Modal;
