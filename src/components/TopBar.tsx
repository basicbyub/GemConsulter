import React from 'react'; 
import { Phone, Mail, Youtube, Linkedin } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 px-4 z-50">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <a href="tel:+917719553827" className="flex items-center hover:text-orange-400 transition-colors group">
            <Phone size={16} className="mr-2 group-hover:animate-bounce" />
            +91 - 77 19 55 38 27
          </a>
          <a href="mailto:gemconsulters@gmail.com" className="flex items-center hover:text-orange-400 transition-colors group">
            <Mail size={16} className="mr-2 group-hover:animate-bounce" />
            gemconsulters@gmail.com

          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="mailto:gemconsulters@gmail.com" className="hover:text-orange-400 transition-colors transform hover:scale-110">
            <Mail size={18} />
          </a>
          <a href="tel:+917719553827" className="hover:text-orange-400 transition-colors transform hover:scale-110">
            <Phone size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
