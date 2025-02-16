import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Side - Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            MyWebsite
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200 transition">Home</Link>
            <Link to="/write" className="hover:text-gray-200 transition">Write</Link>
            <Link to="/single" className="hover:text-gray-200 transition">Single</Link>
            <Link to="/login" className="hover:text-gray-200 transition">Login</Link>
            <Link to="/register" className="hover:text-gray-200 transition">Register</Link>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:inline">Profile</span>
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">View Profile</Link>
                <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <Link to="/" className="block text-center py-2 bg-gray-700 rounded">Home</Link>
            <Link to="/write" className="block text-center py-2 bg-gray-700 rounded">Write</Link>
            <Link to="/single" className="block text-center py-2 bg-gray-700 rounded">Single</Link>
            <Link to="/login" className="block text-center py-2 bg-gray-700 rounded">Login</Link>
            <Link to="/register" className="block text-center py-2 bg-gray-700 rounded">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
