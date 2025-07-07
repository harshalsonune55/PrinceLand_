import React from "react";
import {
  FaBuilding,
  FaWarehouse,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const cards = [
  {
    title: "Tower Business Center",
    text: "Volutpat diam ut venenatis tellus in metus vulputateondimentum vitae sapien pellentesque habitant morbi tristique.",
    image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer1.jpg",
    icon: <FaBuilding size={24} />,
  },
  {
    title: "Kvartal Residences",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores reprehenderit.",
    image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer2.jpg",
    icon: <FaWarehouse size={24} />,
  },
  {
    title: "Premium Park Residences",
    text: "Aliquam ultrices sagittis orci a scelerisque purus semper eget. Vitae tortor condimentum lacinia quis.",
    image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/developer3.jpg",
    icon: <FaWarehouse size={24} />,
  },
];

export default function ProjectCards() {
  return (
    <section className="bg-[#fff7ee] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md shadow-lg group"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[660px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300" />

              {/* Initial content */}
              <div className="absolute bottom-0 left-0 w-full px-6 py-8 text-white transform transition-transform duration-500 group-hover:-translate-y-20 z-20">
                <div>{card.icon}</div>
                <h3 className="text-2xl font-bold leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Hover content */}
              <div className="absolute bottom-0 left-0 w-full px-6 pb-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 z-10">
                <p className="text-sm mb-3">{card.text}</p>
                <FaArrowUpRightFromSquare />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button className="bg-gray-800 text-white text-sm px-6 py-3 rounded-md hover:bg-gray-700 transition">
            See all projects
          </button>
        </div>
      </div>
    </section>
  );
}