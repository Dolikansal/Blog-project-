import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // LocalStorage se user ka data fetch karo
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  // Logout ka logic: data clear karo aur redirect karo
  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/signup"); 
    window.location.reload(); // Refresh zaroori hai protected routes update karne ke liye
  };

  return (
    <nav className="bg-green-200 border-b-2 border-green-500 p-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600 tracking-tight">
          BLOGING <span className="text-gray-800 font-semibold">World</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 font-semibold text-gray-600">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/about" className="hover:text-green-600 transition">About</Link>
          <Link to="/services" className="hover:text-green-600 transition">Services</Link>
          <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          
          {/* 1. Create Blog sirf logged-in user ko dikhega */}
          {user && (
            <Link to="/create-post" className="text-green-700 font-bold hover:text-green-800 transition mr-2">
              + Create Blog
            </Link>
          )}

          {/* 2. Conditional Rendering: Signup vs User Info/Logout */}
          {!user ? (
            <Link 
              to="/signup" 
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition font-medium shadow-md"
            >
              Sign Up
            </Link>
          ) : (
            <div className="flex items-center space-x-4">
              {/* User ka naam display karna */}
              <span className="text-green-800 font-bold hidden sm:inline italic">
                Hi, {user.username || "User"}!
              </span>
              
              <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition font-medium shadow-md shadow-red-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;