import React from "react";

const stats = [
  { number: 8, label: "Cities built up" },
  { number: 123, label: "Complexes erected" },
  { number: 872, label: "Workers employed" },
  { number: 1321, label: "Satisfied customers" },
];

export default function AchievementsSection() {
  return (
    <section className="bg-[#fff8ef] py-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left image */}
        <div className="lg:w-1/2">
          <img
            src="https://daxx.lohatheme.com/wp-content/uploads/2024/02/achievement-left-image.jpg" // Replace with your image path
            alt="Architecture Team"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="lg:w-1/2 w-full">
          <h4 className="text-orange-500 text-sm font-bold mb-2">
            ── OUR ACHIEVEMENTS
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
                <h3 className="text-3xl font-bold text-orange-600">
                  {item.number}
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
