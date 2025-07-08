import React from "react";
import {
  FaThermometerHalf,
  FaTint,
  FaPlug,
  FaLock,
  FaFan,
  FaAirFreshener,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaAirFreshener size={30} />,
    title: "AIR CLEANING",
    text: "Built-in air purification features and green landscaping contribute to cleaner indoor environments. Breathe healthier air and enjoy a pollution-free living experience.",
  },
  {
    icon: <FaFan size={30} />,
    title: "VENTILATION",
    text: "Our apartments are designed with cross-ventilation to ensure fresh air flows naturally through every room. This enhances indoor air quality and keeps your home cool and comfortable year-round.",
  },
  {
    icon: <FaThermometerHalf size={30} />,
    title: "HEATING",
    text: "Smartly integrated heating solutions provide warmth during colder months while optimizing energy efficiency. Comfort meets sustainability in every corner of your home.",
  },
  {
    icon: <FaTint size={30} />,
    title: "WATER SUPPLY",
    text: "Round-the-clock water availability is ensured through robust supply systems and water-saving technologies. Every drop is managed with care for both convenience and sustainability.",
  },
  {
    icon: <FaPlug size={30} />,
    title: "POWER SUPPLY",
    text: "Equipped with reliable power backup systems, our homes ensure uninterrupted electricity for all your daily needs. Enjoy peace of mind with consistent energy for lighting, appliances, and essentials.",
  },
  {
    icon: <FaLock size={30} />,
    title: "SECURITY",
    text: "Our gated communities feature 24/7 surveillance, advanced access control, and trained security personnel. Your safety and peace of mind are always our top priorities.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
          {/* Heading in Grid */}
          <div className="col-span-full md:col-span-2 lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-green-700 tracking-wide flex items-center gap-4">
                <span className="h-px w-10 bg-blue-500" />
                BENEFITS
                <span className="h-px w-10 bg-blue-500" />
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 leading-snug" style={{"fontSize":"4rem"}}>
                Apartments tailored to your highest standards
              </h2>
            </div>
          </div>

          {/* Benefit Cards */}
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-5">
              <div className="p-4">
                <div className="text-blue-500">{benefit.icon}</div>
              </div>
              <div>
                <h4 className="text-gray-800 font-semibold mb-1">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
