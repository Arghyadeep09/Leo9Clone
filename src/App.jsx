import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

const App = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        {/* Dummy content to enable scrolling and test navbar behavior */}
        <div className="h-screen bg-gray-900 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-center">Scroll Down to See Navbar Effect</h2>
        </div>
         <div className="h-screen bg-[#111111] flex items-center justify-center">
          <h2 className="text-4xl font-bold text-center">More Content Here</h2>
        </div>
      </main>
    </div>
  );
};

export default App;