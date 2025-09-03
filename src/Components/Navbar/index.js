"use client";
import Dropdown from "@/ui/Dropdown";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaSlack } from "react-icons/fa";
import { usePathname } from "next/navigation"; // ✅ active route mate

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // ✅ current route

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ common style helper
  const linkClass = (href) =>
    `text-gray-700 hover:text-blue-500 transition-colors ${
      pathname === href ? "text-blue-600 font-semibold border-b-2 border-blue-600" : ""
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? "bg-white shadow-lg py-1 animate-slideDown" : "bg-white py-4"
      }`}
    >
      {/* Left side - Logo + Links */}
      <div className="w-full flex items-center justify-between px-2 py-2 ">
        {/* Left Side - Logo & Name */}
        <div className="flex items-right space-x-3">
          <div className="text-4xl text-blue-500">
            <a href="/">
              <FaSlack />
            </a>
          </div>
          <div className="text-blue-500 font-bold text-4xl">
            <a href="/">LifeSure</a>
          </div>
        </div>

        {/* Right Side - Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <a href="/" className={linkClass("/")}>
            Home
          </a>
          <a href="/about" className={linkClass("/about")}>
            About
          </a>
          <a href="/services" className={linkClass("/services")}>
            Services
          </a>
          <a href="/blog" className={linkClass("/blog")}>
            Blog
          </a>
          <a href="/contact" className={linkClass("/contact")}>
            Contact
          </a>

          <a
            href="/"
            className="bg-blue-600 text-white py-2 px-6 hover:bg-blue-950 rounded-full"
          >
            Get a Quote
          </a>
          <button className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-950 text-white">
            Login
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-6">
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

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          <a href="/" className={linkClass("/")}>
            Home
          </a>
          <a href="/about" className={linkClass("/about")}>
            About
          </a>
          <a href="/services" className={linkClass("/services")}>
            Services
          </a>
          <a href="/blog" className={linkClass("/blog")}>
            Blog
          </a>
          <a href="/pages" className={linkClass("/pages")}>
            Pages
          </a>
          <a href="/contact" className={linkClass("/contact")}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
