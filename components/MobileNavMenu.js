'use client';
import React from 'react';
import { useState } from "react";


const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Skills', 'Projects', 'About', 'Contact', 'Hire me!'];

  const handleItemClick = (item) => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="block md:hidden z-[100] p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className={`
          w-6 h-0.5 bg-primary transition-all duration-300 ease-in-out
        `}></div>
        <div className={`
          w-6 h-0.5 bg-primary my-1 transition-all duration-300 ease-in-out
        `}></div>
        <div className={`
          w-6 h-0.5 bg-primary transition-all duration-300 ease-in-out
        `}></div>
      </button>
    
      <div
        className={`
          w-full fixed top-0 left-0 h-full bg-black z-50 
          transition-opacity duration-300 
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          flex flex-col items-center justify-center 
        `}
      >
        <button
          className="absolute top-6 right-[7%] text-primary text-4xl font-light z-60"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          &times; 
        </button>

        <nav className="flex flex-col space-y-10 text-center">
          {menuItems.map((item) => {
            const myEmail = "ritazhaocareer@gamil.com";

            const isHireMe = item.toLowerCase() === 'hire me!';

            const linkHref = isHireMe
              ? `mailto:${myEmail}` 
              : `#${item.toLowerCase()}`;  

            return (
              <a
                key={item}
                href={linkHref}
                onClick={() => handleItemClick(item)}
                className="text-white text-3xl font-semibold hover:text-primary transition-colors"
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavMenu;