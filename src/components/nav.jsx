import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-200 border-b-2 border-green-500 p-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600 tracking-tight">
          BLOGING <span className="text-gray-800 font-semibold">World</span>
        </Link>

        {/* Links - All Visible and Working */}
        <div className="hidden md:flex space-x-8 font-semibold text-gray-600 ml-130">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/about" className="hover:text-green-600 transition">About</Link>
          <Link to="/services" className="hover:text-green-600 transition">Services</Link>
          <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/create-post" className="text-green-600 font-bold hover:text-green-700 transition">
            Create Blog
          </Link>
          <Link to="/login" className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition font-medium">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;