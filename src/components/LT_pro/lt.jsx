import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ProjectCards from "./lt2";

export default function LatestProject() {
  return (
    <>
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Heading */}
        <div>
          <h3 className="text-sm font-semibold text-green-700 tracking-wide flex items-center gap-4">
            <span className="h-px w-10 bg-blue-500" />
            DEVELOPER
            <span className="h-px w-10 bg-blue-500" />
          </h3>
          <h2 className="text-5xl font-bold text-gray-800 mt-4 leading-tight">
            Our latest <br /> completed project
          </h2>
        </div>

        {/* Right: Text and Icons */}
        <div className="text-gray-600">
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis.
          </p>
          <div className="flex items-center gap-4 text-lg font-semibold text-blue-500">
            <a href="www.princelandsgroup.com" className="hover:underline">www.princelandsgroup.com</a>
            <div className="flex gap-4 ml-4 text-gray-700">
              <a href="https://www.facebook.com/Princelandsdevelopers/" className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/princelands_developers/" className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-gray-100">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ProjectCards/>
    </>
  );
}
