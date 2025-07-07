import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./TeamSection.css";

const agents = [
  {
    name: "PHILIP DEMARCO",
    role: "Lead architect",
    image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/member1.jpg",
  },
  {
    name: "ANN VACCARO",
    role: "Advisor",
    image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/member2.jpg",
  },
  {
    name: "MARCUS MADSEN",
    role: "Chief Executive",
    image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/member3.jpg",
  },
  {
    name: "TIANA LEVIN",
    role: "Art Director",
    image: "https://daxx.lohatheme.com/wp-content/uploads/2024/02/member4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section bg-[#fff8ef] py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="flex justify-between items-start mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our expert agents
        </h2>
        <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition">
          Contact us →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-sm text-center p-6"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full h-64 object-cover rounded"
            />
            <p className="text-gray-500 mt-4">{agent.role}</p>
            <h3 className="text-lg font-semibold mt-1 text-gray-800">
              {agent.name}
            </h3>
            <div className="flex justify-center gap-4 mt-4 text-gray-500 text-lg">
              <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
