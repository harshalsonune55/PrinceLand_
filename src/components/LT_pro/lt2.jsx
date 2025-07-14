import React from "react";
import {
  FaBuilding,
  FaWarehouse,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const cards = [
  {
    title: "Silver Icon 1 & 2",
    text: "Shankarpur Area, 3 kms from Wardha Road",
    image: "/princelnd_photos/projects/silver 2.jpg",
    icon: <FaBuilding size={24} />,
  },
  {
    title: "AGI Residency",
    text: "NH 353(I) touch, 140 plot layout",
    image: "/princelnd_photos/projects/Agi 2_.jpg",
    icon: <FaWarehouse size={24} />,
  },
  {
    title: "Samruddhi 1 to 8",
    text: "4 kms from Samruddhi Junction Poin",
    image: "/princelnd_photos/projects/samruddhi 2.jpg",
    icon: <FaWarehouse size={24} />,
  },
];


function go_to_link(){
  window.location.href = '/projects';
}


export default function ProjectCards() {
  return (
    <section className="bg-[#BBDEFB] py-16 px-6">
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
          <button className="bg-gray-800 text-white text-sm px-6 py-3 rounded-md hover:bg-gray-700 transition" onClick={go_to_link}>
            See all projects
          </button>
        </div>
      </div>
    </section>
  );
}