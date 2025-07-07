import React from "react";
import BuildingSlider from "./con2";

const stats = [
  { value: "264", label: "Apartments" },
  { value: "12–21", label: "Floors" },
  { value: "2100m²", label: "of common green areas" },
  { value: "979", label: "Underground parking spaces" },
];

export default function StatsSection() {
  return (
    <>
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Contact Us */}
        <div className="mb-10">
          <button className="text-gray-800 font-semibold flex items-center gap-2 hover:text-orange-500 transition-colors">
            Contact Us <span className="text-orange-500">→</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`relative pr-6 ${
                idx !== stats.length - 1 ? "after-line" : ""
              }`}
            >
              <h3 className="text-5xl font-bold text-orange-500">{stat.value}</h3>
              <p className="text-gray-700 mt-2 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .after-line::after {
          content: "";
          position: absolute;
          right: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background-color: #e2e8f0;
          transform: skewY(-10deg);
        }
      `}</style>

    </section>
    <BuildingSlider/>
</>
  );
}
