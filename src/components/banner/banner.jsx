import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

export default function Banner() {
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

      {/* Decorative Glass-like Overlays */}
      {/* <div className="absolute inset-0 z-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1600 600"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 400,600 0,600" fill="white" opacity="0.15" />
          <polygon points="1600,0 1600,600 1200,600" fill="white" opacity="0.15" />
        </svg>
      </div> */}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Text */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Turning Land <br/>
          into Legacy Since 2004<br />
          </h1>
          <div className="mt-6 flex gap-4">
            <button className="border-2 border-white px-6 py-2 text-white rounded">
              Explore PrinceLand
            </button>
            <Link to="/projects">
              <button className="bg-blue-500 text-white px-6 py-2 rounded flex items-center gap-2 " style={{cursor:"pointer"}}>
                📖 See All Projects
              </button>
            </Link>
          </div>
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
