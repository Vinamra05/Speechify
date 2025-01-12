import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        
        <div className="flex items-center">
          <img src="/logo.svg" alt="Speechify logo" className="h-8 w-8" />
          <h1 className="ml-3 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
            Speechify
          </h1>
        </div>

        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-white hover:text-gray-900 transition border rounded-full px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-600">
            Home
          </a>
          {/* <a href="#about" className="text-white hover:text-gray-900 transition border rounded-md p-2   bg-gradient-to-r from-orange-400 to-pink-600">
            About
          </a> */}
          <a
            href="https://github.com/Vinamra05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-900 transition border rounded-full px-3 py-2 bg-gradient-to-r from-orange-400 to-pink-600"
          >
            <FaGithub className="mr-2 h-5 w-5 " />
            GitHub
          </a>
        </nav>

        
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-900 transition  ">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Vinamra05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 transition"
              >
                <FaGithub className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </li>
            {/* <li>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition">
                About
              </a>
            </li> */}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
