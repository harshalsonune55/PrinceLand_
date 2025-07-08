import React from "react";

const stats = [
  { value: "21+", label: "year Experiance" },
  { value: "125+", label: "Completed Project" },
  { value: "2500+", label: "Satisfied Customers" },
  { value: "20%", label: "NRI Client Base" },
];

export default function AchievementsSection() {
  return (
    <section className="bg-[#BBDEFB] py-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left image */}
        <div className="lg:w-1/2">
          <img
            src="About us Achievement Left Image.jpg" // Replace with your image path
            alt="Architecture Team"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="lg:w-1/2 w-full">
          <h4 className="text-green-700 text-sm font-bold mb-2">
            ── OUR ACHIEVEMENTS ── 
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            We Working <br /> for You
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow-sm flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold text-blue-600">
                  {item.value}
                </h3>
                <p className="text-gray-700 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
