
import React from 'react';
import { WHATSAPP_GROUP_LINK } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-center items-center">
        <a 
          href={WHATSAPP_GROUP_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-300"
        >
          <i className="fab fa-whatsapp mr-2"></i>
          <span>Emagreça urgente Grupo</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
