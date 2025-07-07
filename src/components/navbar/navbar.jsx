import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  let timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // Delay in ms before hiding
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-md shadow-md text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <img src="/main.png" alt="Logo" className="h-6 logop" />
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6 text-sm font-medium relative">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>

          {/* Projects Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-orange-400">PROJECTS</span>

            {showDropdown && (
              <div className="dropdown-animate absolute top-full left-0 mt-2 bg-black text-white rounded shadow-lg min-w-[160px] z-50">
                <Link to="/projects" className="block px-4 py-2 hover:bg-gray-800">
                  Projects
                </Link>
                <Link to="/projectDetail" className="block px-4 py-2 hover:bg-gray-800">
                  Project Detail
                </Link>
              </div>
            )}
          </li>

          <li><Link to="/contact-us">CONTACT US</Link></li>
        </ul>

        <Link to="/contact-us"><button className="bg-orange-600 text-black px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition">
          Ask a Question 💬
        </button></Link>
      </div>
    </nav>
  );
}
