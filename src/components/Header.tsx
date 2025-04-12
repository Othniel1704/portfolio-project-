tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#education" className="hover:text-gray-300">Education</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;