import React from "react";
import { Link } from "react-router-dom";
import "./Det.css";

export default function ProDetail() {
  return (
    <section className="relative h-[1130px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg_image.png"
          alt="Banner Background"
          className="w-full h-full object-cover object-[center_top_60%]"
        />
        <div className="absolute "></div>
      </div>


      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Text */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          DAXX is a modern residential complex in your city
          </h1>
        </div>

        {/* Right Play Button */}
        <div className="relative mt-10 md:mt-0 md:ml-10">
          <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center border-4 border-white cursor-pointer relative group">
            <div className="text-black text-2xl z-10 pet">▶</div>
            <div className="absolute inset-0 rounded-full border border-white animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-white animate-ping delay-150"></div>
          </div>
        </div>
      </div>


    </section>
  );
}
