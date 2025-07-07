import React from "react";
import { Link } from "react-router-dom";

export default function ContactHeader() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('contact-bg.png')" }} // Replace with your image path
    >
      <div className="absolute top-[240px] left-[100px] text-white">
        <div className="text-sm text-orange-500 mb-2">
          <Link to="/" className="hover:underline text-white/80">Home</Link>
          <span className="mx-2 text-white/60">→</span>
          <span className="text-orange-500">Contact</span>
        </div>
        <h1 className="text-8xl font-bold text-white">Get in touch now</h1>
      </div>


    </div>
  );
}
