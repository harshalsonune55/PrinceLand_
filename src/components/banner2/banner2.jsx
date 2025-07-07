import React from "react";
import "./banner2.css";

export default function LuxuryVideoBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://daxx.lohatheme.com/wp-content/uploads/2024/02/video-bg.jpg" // Replace with your image path
        alt="Luxury Apartment"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div> */}

      {/* Center Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Play Button */}
        <div className="relative mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white bg-opacity-20 border-4 border-white flex items-center justify-center cursor-pointer group">
            <i class="fa-solid fa-play text-white text-2xl md:text-3xl z-10 ho"></i>
            <div className="absolute inset-0 rounded-full border border-white animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-white animate-ping delay-150"></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-snug">
          Discover the true <br /> definition of luxury
        </h2>
      </div>
    </section>
  );
}
