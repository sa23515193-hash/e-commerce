import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="font-bold text-xl mb-2">Handmade Embroidery</h2>
          <p>Luxury e-commerce platform for handmade embroidery products.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="font-semibold mb-2">Links</h3>
          <ul>
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/admin" className="hover:underline">Admin</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-6 text-gray-400">&copy; 2025 Handmade Embroidery. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

