import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./con.css";

const contentData = [
  {
    heading: "Experience a lifestyle where comfort, connectivity, and leisure come together effortlessly",
    text: "Princelands Developers ensures every project is strategically located near essential amenities, shopping, and recreational hubs.",
    subText: "Our layouts are thoughtfully planned to offer seamless access to schools, hospitals, and daily conveniences.",
  },
  {
    heading: "Discover a refined lifestyle where modern infrastructure meets timeless elegance",
    text: "We offer prime plots in Nagpur’s most sought-after locations, blending urban convenience with serene surroundings.",
    subText: "",
  },
  {
    heading: "We design every project with your lifestyle in mind — from open spaces to essential amenities.",
    text: "Our developments foster a sense of belonging, creating neighborhoods where you truly feel at home.",
    subText: "",
  },
];

export default function BuildingSlider() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleChange = (direction) => {
    if (animating) return;

    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => {
        if (direction === "next") {
          return prev === contentData.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? contentData.length - 1 : prev - 1;
        }
      });
      setAnimating(false);
    }, 300); // Match with CSS animation duration
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleChange("next");
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]); // re-run interval on index change to reset timing

  return (
    <section className="relative bg-[#BBDEFB] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-9">
        {/* Left: Image */}
        <div className="flex-3 w-full">
          <img
            src="https://daxx.lohatheme.com/wp-content/uploads/2024/02/features.jpg"
            alt="Building"
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Right: Text with slider */}
        <div className="flex-1 transition-wrapper">
          <div className={`transition-content ${animating ? "fade-out" : "fade-in"}`}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {contentData[index].heading}
            </h2>
            <p className="text-gray-600 mb-4 text-lg">{contentData[index].text}</p>
            <p className="text-gray-600 text-lg">{contentData[index].subText}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => handleChange("prev")}
              className="w-10 h-10 border border-blue-600 rounded-full flex items-center justify-center text-green-800 hover:bg-blue-200"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => handleChange("next")}
              className="w-10 h-10 border border-blue-500 rounded-full flex items-center justify-center text-green-700 hover:bg-blue-100"
            >
              <FaArrowRight />
            </button>
            <div className="text-lg font-semibold text-orange-600 ml-2">
              {index + 1} / {contentData.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
