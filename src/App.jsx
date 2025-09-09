import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CookieButton from './components/CookieButton.jsx';

const App = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <CookieButton />
      </main>
    </div>
  );
};

export default App;