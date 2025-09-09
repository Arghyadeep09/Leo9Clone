import React from 'react';

const Logo = (props) => (
  <svg
    {...props}
    xmlns="https://leo9studio.com/img/logo-light.svg"
    viewBox="0 0 200 200"  // <-- Replace with your actual viewBox
  >
    {/* Replace this <path> with your actual SVG path */}
    <path
      d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
      fill="none"
      stroke="black"
      strokeWidth="8"
    />
  </svg>
);

export default Logo;
