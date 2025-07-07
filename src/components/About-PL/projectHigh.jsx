import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaGem } from "react-icons/fa";
import "./aboutpl.css";

export default function ProjectHighlight() {
  return (
    <section className="relative bg-white py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Main Building Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://daxx.lohatheme.com/wp-content/uploads/2024/02/about-left.jpg"
            alt="Modern Building"
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            Location, Community, <br />
            Quality Living. It Starts Here!
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua sed
            faucibus turpis.
          </p>
          <Link to="/projects">
            <button className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-900 transition">
              <FaBookOpen /> See All Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Right Image - shifted upward */}
      <div className="relative z-10 max-w-4xl mx-auto -mt-10 potter">
        <div className="relative">
          <img
            src="https://daxx.lohatheme.com/wp-content/uploads/2024/02/about-right.jpg"
            alt="Building Bottom Right"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center border-4 border-white cursor-pointer group">
              <i class="fa-regular fa-gem text-white text-2xl z-10 bla"></i>
              <div className="absolute inset-0 rounded-full border border-white animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-white animate-ping delay-150"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative shape at bottom right */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[200px] bg-[#fff5e6] z-[-1] rotate-[15deg] origin-bottom-right rounded-tl-[100px] hidden md:block"><i class="fa-regular fa-gem"></i></div>
    </section>
  );
}
