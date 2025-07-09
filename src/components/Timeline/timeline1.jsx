import React from "react";

export default function TimelineIntro() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section */}
        <div>
          {/* Section Label */}
          <div className="flex items-center mb-4">
            <div className="w-10 h-px bg-blue-500" />
            <span className="mx-3 text-green-700 font-semibold tracking-wide uppercase text-sm">Timeline</span>
            <div className="w-10 h-px bg-blue-500" />
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-5xl font-bold text-gray-800 leading-tight">
            Where innovation will inspire you
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-gray-600 text-2xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
            dignissim diam quis enim lobortis.
          </p>
        </div>

      </div>
    </section>
  );
}
