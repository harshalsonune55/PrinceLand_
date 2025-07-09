import React, { useState } from "react";
import AmenitiesSection from "./amminity2";
import "./amminity.css";

const apartmentData = [
  {
    label: "One room",
    image: "	https://daxx.lohatheme.com/wp-content/uploads/2024/02/apartment.png", // Replace with real images
    area: "64m",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua etiam dignissim diam.",
    vacant: 6,
  },
  {
    label: "Two room",
    image: "	https://daxx.lohatheme.com/wp-content/uploads/2024/02/apartment.png",
    area: "90m",
    description:
      "Comfortable and spacious two-room apartment with all essential amenities.",
    vacant: 3,
  },
  {
    label: "Three rooms",
    image: "	https://daxx.lohatheme.com/wp-content/uploads/2024/02/apartment.png",
    area: "120m",
    description:
      "Ideal for families, this three-room layout offers space and comfort.",
    vacant: 2,
  },
  {
    label: "Four rooms",
    image: "	https://daxx.lohatheme.com/wp-content/uploads/2024/02/apartment.png",
    area: "160m",
    description:
      "Luxury four-room apartment with top-tier facilities and finishes.",
    vacant: 1,
  },
];

export default function ApartmentTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const isEven = activeTab % 2 === 0;
  const { image, area, description, vacant } = apartmentData[activeTab];

  return (
    <>
    <AmenitiesSection/>
    <section className="w-full py-16 px-4 bg-white padd">
      {/* Tabs */}
      <div className="flex justify-center mb-6 border-b">
        {apartmentData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 text-lg font-medium transition-all ${
              activeTab === index
                ? "text-blue-700 border-b-2 border-blue-500"
                : "text-grey-700 hover:text-blue-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
          isEven ? "" : "md:flex-row-reverse"
        }`}
      >
        {/* Image */}
        <img
          src={image}
          alt="Apartment layout"
          className="w-full max-w-[600px] mx-auto rounded shadow-lg"
        />

        {/* Details */}
        <div className={`text-center md:text-left ${!isEven && "md:order-first"}`}>
          <p className="text-gray-500 text-lg mb-2">From</p>
          <h3 className="text-7xl font-bold text-blue-500 mb-4">{area}</h3>
          <p className="text-gray-600 text-lg mb-6 max-w-md">{description}</p>
          <button className="border px-6 py-2 text-gray-800 font-medium rounded hover:bg-orange-100">
            Show offer of apartments
          </button>
          <p className="text-sm mt-4 text-gray-700">{vacant} vacant apartments</p>
        </div>
      </div>
    </section>
    </>
  );
}
