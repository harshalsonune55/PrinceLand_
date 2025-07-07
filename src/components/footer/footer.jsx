import React from "react";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import MainFooter from "./footer2";

export default function FooterSection() {
  return (
    <footer className="relative bg-[#2d3542] text-white py-20 px-6 overflow-hidden">
      {/* Map Lines Background (you can replace this with an SVG background or real map) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://daxx.lohatheme.com/wp-content/uploads/2024/02/footer-top-bg.jpg')] bg-repeat z-0" />

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-3 gap-8 items-start">
        {/* Left Section */}
        <div className="md:col-span-1">
          <p className="text-sm uppercase tracking-widest text-orange-500 mb-4">
            <span className="inline-block w-10 h-[1px] bg-orange-500 mr-3 align-middle" />
            DEVELOPER
            <span className="inline-block w-10 h-[1px] bg-orange-500 ml-3 align-middle" />
          </p>
          <h2 className="text-4xl font-bold leading-tight">
            Do you want <br /> to visit us?
          </h2>
        </div>

        {/* Middle Section */}
        <div className="md:col-span-1 flex flex-col gap-3">
          <p className="text-lg">121 King Street,</p>
          <p className="text-lg">Melbourne Victoria 3000</p>
          <p className="text-lg">Australia</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-200 hover:text-white cursor-pointer">
            <FaLocationDot />
            <span>Look at the map</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-1 flex flex-col gap-4 items-start">
          <p className="text-lg">+61 3 8376 6284</p>
          <p className="text-lg">info@daxx.com</p>
          <button className="flex items-center gap-2 border border-white px-5 py-2 mt-4 text-white hover:bg-white hover:text-black transition rounded-sm">
            <FaEnvelope />
            Send a Message
          </button>
        </div>
      </div>

      {/* Slanted Edge Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#1c212b] skew-y-3 transform origin-top" />
      <MainFooter/>
    </footer>
  );
}
