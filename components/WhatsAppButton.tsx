
import React from 'react';
import { WHATSAPP_GROUP_LINK } from '../constants';

interface WhatsAppButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, variant = 'primary', className = '' }) => {
  const baseClasses = 'flex items-center justify-center font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 w-full sm:w-auto text-lg';

  const variantClasses = {
    primary: 'bg-green-500 hover:bg-green-600 text-white animate-bounce',
    secondary: 'bg-white hover:bg-slate-100 text-emerald-600 border-2 border-emerald-500',
  };

  return (
    <a
      href={WHATSAPP_GROUP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <i className="fab fa-whatsapp mr-3 text-2xl"></i>
      {text}
    </a>
  );
};

export default WhatsAppButton;
