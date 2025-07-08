import React from "react";
import {
  FaBuilding,
  FaPersonBooth,
  FaGlobeAmericas,
  FaMonument,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaBuilding />,
    title: "Trusted Development",
  },
  {
    icon: <FaPersonBooth />,
    title: "Legal Assurance",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Global Reach",
  },
  {
    icon: <FaMonument />,
    title: "Smart Investment",
  },
];

export default function ProjectCards() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className="group bg-white text-center p-20 shadow-sm transition rounded hover:bg-black"
          >
            <div className="mb-4 flex justify-center">
              <div className="text-blue-500 text-4xl group-hover:text-white transition">
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 group-hover:text-white transition leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
