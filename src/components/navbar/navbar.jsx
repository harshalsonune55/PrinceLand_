import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/main.png" alt="Logo" className="h-6 logop" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium relative">
          <li><Link to="/" onClick={closeMobileMenu}>HOME</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>ABOUT US</Link></li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-orange-400">PROJECTS</span>
            {showDropdown && (
              <div className="dropdown-animate absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg min-w-[160px] z-50">
                <Link to="/projects" className="block px-4 py-2 hover:bg-gray-200">Projects</Link>
                <Link to="/projectDetail" className="block px-4 py-2 hover:bg-gray-200">Project Detail</Link>
              </div>
            )}
          </li>

          <li><Link to="/contact-us" onClick={closeMobileMenu}>CONTACT US</Link></li>
        </ul>

        {/* CTA Button (hidden on small screens) */}
        <Link to="/contact-us" className="hidden md:block">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition">
            Ask a Question 💬
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden bg-white text-black px-6 py-4`}>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><Link to="/" onClick={closeMobileMenu}>HOME</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}>ABOUT US</Link></li>
            <li>
              <Link to="/projects" onClick={closeMobileMenu}>PROJECTS</Link>
            </li>
            <li><Link to="/contact-us" onClick={closeMobileMenu}>CONTACT US</Link></li>
          </ul>
          <div className="mt-4">
            <Link to="/contact-us" onClick={closeMobileMenu}>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition">
                Ask a Question 💬
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
