import React from "react";
import { FaPlay } from "react-icons/fa";
import "./videotour.css";

export default function VideoTour() {
  return (
    <section className="bg-[#fff8f1] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-6">
        {/* Left: Video Thumbnail */}
        <div className="relative group">
          <img
            src="https://daxx.lohatheme.com/wp-content/uploads/2024/02/tour-video.jpg" // replace with actual image path
            alt="Video Tour"
            className="w-full rounded-md shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-full shadow-lg cursor-pointer group-hover:scale-110 transition transform duration-300">
              <FaPlay size={24} className="text-gray-800 jo"/>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div>
          <h4 className="text-orange-500 font-bold mb-2 border-t border-b border-orange-500 inline-block px-4 py-1">
            TOUR
          </h4>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Video tour
          </h2>
          <p className="text-gray-600 text-lg">
            Cursus in hac habitasse platea dictumst quisque sagittis purus.
            Dolor sit amet consectetur adipiscing elit ut.
          </p>
        </div>
      </div>
    </section>
  );
}
