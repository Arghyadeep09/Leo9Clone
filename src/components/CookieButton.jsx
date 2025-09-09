// CookieButton.js
import React, { useState } from 'react';
import CookieSidebar from './CookieSidebar';

const CookieButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="fixed bottom-5 left-5 text-4xl cursor-pointer z-[100] transform transition-transform duration-300 hover:scale-110"
        onClick={toggleSidebar}
      >
        🍪
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-[200]"
          onClick={toggleSidebar}
        ></div>
      )}
      <CookieSidebar isOpen={isOpen} onClose={toggleSidebar} />
    </>
  );
};

export default CookieButton;