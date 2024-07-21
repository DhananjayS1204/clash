// components/Navbar.js
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-7">
              <span className="flex items-center py-4 px-2 cursor-pointer">
                <span className="font-semibold  text-lg">Lost</span>
               
              </span>
              <span className="flex items-center py-4 px-2 cursor-pointer">
                <span className="font-semibold  text-lg">Found</span>
               
              </span>
          </div>
          <div className="flex items-center space-x-3">
          
              <span className="py-4 px-2 cursor-pointer">
                <FaUser />
              </span>
   
            <button onClick={toggleMenu} className="md:hidden outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-16 6h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <span className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 cursor-pointer">Home</span>
    
          <span className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-200 cursor-pointer">Profile</span>
      
      </div>
    </nav>
  );
};

export default Navbar;
