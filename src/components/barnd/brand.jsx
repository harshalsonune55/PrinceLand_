import React from "react";

const brands = [
  { name: "State Bank of India", icon: "abi.png" },
  { name: "Axis Bank", icon: "axis_A.png" },
  { name: "HDFC Bank", icon: "hdfc.png" },
  { name: "ICICI Bank", icon: "axis.png" },
];

export default function BrandShowcase() {
  return (
    <div className="w-full py-30 p-9 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center flex-wrap gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 min-w-[100px] text-center"
          >
            <img src={brand.icon} alt={brand.name} className="h-12" />
            <span className="text-gray-700 font-medium text-sm">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
