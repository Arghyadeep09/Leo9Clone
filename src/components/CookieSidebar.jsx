// CookieSidebar.js
import React from 'react';

const CookieSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 w-80 h-full bg-white shadow-lg p-5 z-[300] transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button className="absolute top-2 right-2 text-xl font-bold cursor-pointer" onClick={onClose}>
        &times;
      </button>
      <h2 className="text-2xl font-semibold mb-4">Storage Preferences</h2>
      <p className="text-sm text-gray-700 mb-4">
        When you visit websites, they may store or retrieve data about you using cookies and similar
        technologies ("cookies"). Cookies may be necessary for the basic functionality of the website
        as well as other purposes...
      </p>
      <a href="#" className="text-blue-600 underline text-sm">Privacy Policy</a>
      <div className="flex items-center justify-between mt-4">
        <span className="font-medium">Essential</span>
        <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300 pointer-events-none">
          <div className="absolute left-0 w-6 h-6 rounded-full bg-gray-500 transform scale-90 transition-transform duration-300 ease-in-out"></div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        Required to enable basic website functionality. You may not disable essential cookies.
      </p>
      {/* Add other sections for Targeted Advertising and Personalization */}
    </div>
  );
};

export default CookieSidebar;