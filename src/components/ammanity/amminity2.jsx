import React from "react";

export default function AmenitiesSection() {
  return (
    <section className="w-full py-20 bg-white text-center">
      {/* Top Label */}
      <div className="flex items-center justify-center mb-4 text-green-700 font-semibold tracking-wider text-sm">
        <span className="h-px w-10 bg-blue-500 mr-4" />
        APARTMENTS
        <span className="h-px w-10 bg-blue-500 ml-4" />
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight" style={{"fontSize":"4rem"}}>
        Home is where the <br /> amenities are
      </h2>

      {/* Subtext */}
      <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore.
      </p>
    </section>
  );
}
