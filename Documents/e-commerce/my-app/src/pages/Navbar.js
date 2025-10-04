import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left side - Logo / Site Name */}
        <h1 className="text-2xl font-bold text-gray-800">Home Embroidery</h1>

        {/* Right side - Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-pink-600">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-600">Contact Us</Link>
          </li>
          <li>
            <Link to="/admin-login" className="hover:text-pink-600">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
