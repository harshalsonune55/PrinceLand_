import React from "react";
import "./AboutBanner.css";

export default function AboutBanner() {
  return (
    <section className="about-banner relative h-[140vh] overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/About Us Main Image Banner.jpg" // Replace with your actual image path
          alt="About Background"
          className="w-full h-full object-cover centre-top"
        />
      </div>


      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-32 md:pt-48 ">
        <nav className="text-sm text-white/80 mb-4">
          Home <span className="mx-2">→</span>{" "}
          <span className="text-blue-500">About Us</span>
        </nav>
        <h1 className="text-9xl md:text-6xl font-bold mb-5 joi">About Us</h1>
        <p className="text-lg text-white/80">
          Let’s Create Something new and awesome together.
        </p>
      </div>
    </section>
  );
}
