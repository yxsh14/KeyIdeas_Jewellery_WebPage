import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../Utils/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 box-border shadow-md">
      <div className="flex justify-between items-center p-4 px-6">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold cursor-pointer hover:text-red-500">
            Jewellery
          </h1>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <nav className="hidden lg:flex space-x-6">
          <a href="#home" className="hover:text-red-500">
            Home
          </a>
          <a href="#products" className="hover:text-red-500">
            Products
          </a>
          <a href="#about" className="hover:text-red-500">
            About
          </a>
          <a href="#contact" className="hover:text-red-500">
            Contact
          </a>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden bg-gray-800 p-4">
          <a href="#home" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Home
          </a>
          <a href="#products" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Products
          </a>
          <a href="#about" className="block py-2 px-4 hover:bg-gray-700 rounded">
            About
          </a>
          <a href="#contact" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
