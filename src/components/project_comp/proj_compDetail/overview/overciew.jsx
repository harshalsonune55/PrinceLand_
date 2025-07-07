import React from "react";
import { FaGem, FaCar, FaTree, FaBuilding } from "react-icons/fa";

export default function ProjectOverviewO() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="relative">
          {/* Top Left Image */}
          <div className="absolute -top-12 -left-12 w-28 h-28 bg-orange-500 clip-triangle" />

          {/* Main Image with Icon Overlay */}
          <div className="relative z-10">
            <img
              src="https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer3.jpg"
              alt="Main Building"
              className="rounded shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center bg-white/50">
                <FaGem className="text-orange-500 text-3xl" />
              </div>
            </div>
          </div>

          {/* Bottom Left Triangle Accent */}
          <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-gray-200 clip-triangle rotate-180" />
        </div>

        {/* Right Content Section */}
        <div>
          <h4 className="text-orange-500 font-bold mb-2 flex items-center gap-2">
            <span className="border-t border-b border-orange-500 px-4 py-1">OVERVIEW</span>
          </h4>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Modern & premium apartments
          </h2>
          <p className="text-gray-600 mb-8">
            Odio tempor orci dapibus ultrices. Volutpat sed cras ornare arcu dui
            vivamus arcu felis. Sed elementum tempus egestas.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-md">
              <FaBuilding className="text-orange-500 text-3xl mx-auto mb-2" />
              <h3 className="text-2xl font-bold">11700</h3>
              <p className="text-sm text-gray-600 mt-1">SQUARE AREAS</p>
            </div>
            <div className="text-center p-4 border rounded-md">
              <FaBuilding className="text-orange-500 text-3xl mx-auto mb-2" />
              <h3 className="text-2xl font-bold">264</h3>
              <p className="text-sm text-gray-600 mt-1">APARTMENTS</p>
            </div>
            <div className="text-center p-4 border rounded-md">
              <FaCar className="text-orange-500 text-3xl mx-auto mb-2" />
              <h3 className="text-2xl font-bold">520</h3>
              <p className="text-sm text-gray-600 mt-1">CAR PARKINGS</p>
            </div>
            <div className="text-center p-4 border rounded-md">
              <FaTree className="text-orange-500 text-3xl mx-auto mb-2" />
              <h3 className="text-2xl font-bold">2100m²</h3>
              <p className="text-sm text-gray-600 mt-1">PARK AREAS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom clip path */}
      <style>{`
        .clip-triangle {
          clip-path: polygon(100% 0, 0 100%, 0 0);
        }
      `}</style>
    </section>
  );
}
