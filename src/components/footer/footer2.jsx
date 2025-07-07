import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function MainFooter() {
  return (
    <footer className="bg-[#2d3542] text-white pt-16 pb-10 px-6 border-t border-gray-600/40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left - Logo and Socials */}
        <div className="flex flex-col items-start">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <img
              src="/main.png"
              alt="Daxx Logo"
              className="h-10"
            />
            <span className="ml-2 text-lg text-gray-400">PrinceLand Developers</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Right - Text */}
        <div className="text-lg leading-relaxed text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac habitasse platea.
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © 2025 PrinceLand Developers . All Rights Reserved /
        <span className="text-orange-500 hover:underline ml-1 cursor-pointer">Privacy Policy</span>
        <span className="text-orange-500 hover:underline ml-2 cursor-pointer">Cookies</span>
      </div>
    </footer>
  );
}
