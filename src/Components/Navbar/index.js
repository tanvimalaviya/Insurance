"use client";
import Dropdown from "@/ui/Dropdown";
import React, { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaSearch, FaSlack } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side - Logo + Links */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-5xl text-blue-500">
            <FaSlack />
          </div>
          <div className="text-blue-500 font-bold text-4xl p-2">LifeSure</div>

          {/* Navigation Links (desktop only) */}
          <div className="hidden md:flex space-x-8 text-black p-5 rounded-md items-center">
            <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-500">Services</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-500">Blog</a>
            <Dropdown />
            <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>

            <div className="text-gray-700 cursor-pointer bg-blue-500 hover:bg-blue-950 hover:text-white py-3 px-3 rounded-full">
              <FaSearch />
            </div>

            <a
              href="/"
              className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-950 rounded-full"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* Call to Experts (desktop only) */}
          <div className="hidden md:flex items-center space-x-2 text-gray-700 p-1">
            <div className="bg-gray-200 p-4 rounded-full text-2xl hover:bg-blue-950 hover:text-white">
              <FaPhoneAlt />
            </div>
            <div className="flex flex-col">
              <span>Call to Our Experts:</span>
              <span><strong>+0123 456 7890</strong></span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          <a href="/" className="block py-2 text-gray-700 hover:text-blue-500">Home</a>
          <a href="/about" className="block py-2 text-gray-700 hover:text-blue-500">About</a>
          <a href="/services" className="block py-2 text-gray-700 hover:text-blue-500">Services</a>
          <a href="/blog" className="block py-2 text-gray-700 hover:text-blue-500">Blog</a>
          <a href="/pages" className="block py-2 text-gray-700 hover:text-blue-500">Pages</a>
          <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
