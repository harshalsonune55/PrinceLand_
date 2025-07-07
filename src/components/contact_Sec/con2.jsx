import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./con.css";

const contentData = [
  {
    heading: "Modern conveniences & entertainment, all within your reach",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac habitasse platea.",
    subText: "Elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
  },
  {
    heading: "Elegant living in the heart of the city",
    text: "Experience upscale city living with stunning views, cutting-edge amenities, and green outdoor areas that support a healthy lifestyle.",
    subText: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    heading: "A vibrant community tailored for you",
    text: "Connect with neighbors in shared green spaces and enjoy thoughtfully designed apartments for comfort and privacy.",
    subText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
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
    <section className="relative bg-[#fff7ee] py-10 overflow-hidden">
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {contentData[index].heading}
            </h2>
            <p className="text-gray-600 mb-4">{contentData[index].text}</p>
            <p className="text-gray-600">{contentData[index].subText}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => handleChange("prev")}
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-200"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => handleChange("next")}
              className="w-10 h-10 border border-orange-500 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-100"
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
